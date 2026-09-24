import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { parseMdxAnswerSheet } from "~/lib/parse-mdx";

export const answerRouter = createTRPCRouter({
  getByQuizSet: publicProcedure
    .input(z.object({ quizSetId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.answer.findMany({
        where: { quizSetId: input.quizSetId },
        orderBy: { qNumber: "asc" },
      });
    }),

  uploadMdx: publicProcedure
    .input(
      z.object({
        quizSetId: z.string(),
        rawMdx: z.string().min(1, "MDX content cannot be empty"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const parsed = parseMdxAnswerSheet(input.rawMdx);

      if (parsed.answers.length === 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "No valid answers found in MDX. Expected format: '1. A' or '১. খ'",
        });
      }

      // Check quiz set existence
      const quizSet = await ctx.db.quizSet.findUnique({
        where: { id: input.quizSetId },
      });

      if (!quizSet) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Quiz set not found",
        });
      }

      return ctx.db.$transaction(async (tx) => {
        // If frontmatter had title and current title is untitled or empty, update it
        if (parsed.title && !quizSet.title) {
          await tx.quizSet.update({
            where: { id: input.quizSetId },
            data: { title: parsed.title },
          });
        }

        // Delete existing answers for this quiz set
        await tx.answer.deleteMany({
          where: { quizSetId: input.quizSetId },
        });

        // Bulk insert parsed answers
        await tx.answer.createMany({
          data: parsed.answers.map((item) => ({
            quizSetId: input.quizSetId,
            qNumber: item.qNumber,
            answer: item.answer,
          })),
        });

        return {
          count: parsed.answers.length,
          title: parsed.title,
          total: parsed.total,
          answers: parsed.answers,
        };
      });
    }),
});

import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { areAnswersEqual } from "~/lib/parse-mdx";

export const quizRouter = createTRPCRouter({
  submitSession: publicProcedure
    .input(
      z.object({
        quizSetId: z.string(),
        timeTakenMs: z.number().int().nonnegative(),
        attempts: z.array(
          z.object({
            qNumber: z.number().int(),
            userAnswer: z.string(),
            timeTakenMs: z.number().int().nonnegative(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const quizSet = await ctx.db.quizSet.findUnique({
        where: { id: input.quizSetId },
        include: {
          answers: {
            orderBy: { qNumber: "asc" },
          },
        },
      });

      if (!quizSet) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Quiz set not found",
        });
      }

      if (quizSet.answers.length === 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Quiz set has no answer key configured.",
        });
      }

      const answerMap = new Map<number, { id: string; answer: string }>();
      for (const ans of quizSet.answers) {
        answerMap.set(ans.qNumber, { id: ans.id, answer: ans.answer });
      }

      // Check submitted attempts
      const attemptInputMap = new Map<number, { userAnswer: string; timeTakenMs: number }>();
      for (const att of input.attempts) {
        attemptInputMap.set(att.qNumber, {
          userAnswer: att.userAnswer,
          timeTakenMs: att.timeTakenMs,
        });
      }

      let score = 0;
      const total = quizSet.answers.length;

      const attemptsToCreate: Array<{
        qNumber: number;
        userAnswer: string;
        correctAnswer: string;
        isCorrect: boolean;
        timeTakenMs: number;
        answerId: string | null;
      }> = [];

      for (const answerRecord of quizSet.answers) {
        const userAttempt = attemptInputMap.get(answerRecord.qNumber);
        const userAnswer = userAttempt ? userAttempt.userAnswer.trim() : "";
        const timeTakenMs = userAttempt ? userAttempt.timeTakenMs : 0;
        const isCorrect = areAnswersEqual(userAnswer, answerRecord.answer);

        if (isCorrect) {
          score += 1;
        }

        attemptsToCreate.push({
          qNumber: answerRecord.qNumber,
          userAnswer,
          correctAnswer: answerRecord.answer,
          isCorrect,
          timeTakenMs,
          answerId: answerRecord.id,
        });
      }

      const result = await ctx.db.$transaction(async (tx) => {
        const session = await tx.session.create({
          data: {
            quizSetId: input.quizSetId,
            score,
            total,
            timeTakenMs: input.timeTakenMs,
            attempts: {
              create: attemptsToCreate,
            },
          },
          include: {
            attempts: {
              orderBy: { qNumber: "asc" },
            },
            quizSet: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        });

        return session;
      });

      return {
        session: result,
        score,
        total,
        percentage: Math.round((score / total) * 100),
        timeTakenMs: input.timeTakenMs,
        attempts: result.attempts,
      };
    }),
});

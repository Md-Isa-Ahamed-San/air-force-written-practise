import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const quizSetRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.quizSet.findMany({
      include: {
        _count: {
          select: {
            images: true,
            answers: true,
            sessions: true,
          },
        },
        sessions: {
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
          select: {
            id: true,
            score: true,
            total: true,
            createdAt: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const quizSet = await ctx.db.quizSet.findUnique({
        where: { id: input.id },
        include: {
          images: {
            orderBy: {
              order: "asc",
            },
          },
          answers: {
            orderBy: {
              qNumber: "asc",
            },
          },
          sessions: {
            orderBy: {
              createdAt: "desc",
            },
            take: 5,
          },
          _count: {
            select: {
              images: true,
              answers: true,
              sessions: true,
            },
          },
        },
      });

      return quizSet;
    }),

  create: publicProcedure
    .input(z.object({ title: z.string().trim().min(1, "Title is required") }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.quizSet.create({
        data: {
          title: input.title,
        },
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.quizSet.delete({
        where: { id: input.id },
      });
    }),
});

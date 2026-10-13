import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  matchEnglishAnswer,
  type EnglishOptionMap,
} from "~/lib/english-utils";

export const englishQuizRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const quizzes = await ctx.db.englishQuiz.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: {
            questions: true,
            sessions: true,
          },
        },
        sessions: {
          orderBy: { createdAt: "desc" },
          take: 5,
          select: {
            id: true,
            score: true,
            total: true,
            timeTakenMs: true,
            createdAt: true,
          },
        },
      },
    });

    return quizzes.map((q) => {
      let bestPercentage = 0;
      for (const s of q.sessions) {
        if (s.total > 0) {
          const pct = Math.round((s.score / s.total) * 100);
          if (pct > bestPercentage) bestPercentage = pct;
        }
      }

      const latestSession = q.sessions[0] ?? null;

      return {
        id: q.id,
        title: q.title,
        description: q.description,
        questionCount: q._count.questions,
        sessionCount: q._count.sessions,
        createdAt: q.createdAt.toISOString(),
        bestPercentage,
        latestSession: latestSession
          ? {
              score: latestSession.score,
              total: latestSession.total,
              percentage:
                latestSession.total > 0
                  ? Math.round((latestSession.score / latestSession.total) * 100)
                  : 0,
              timeTakenMs: latestSession.timeTakenMs,
              createdAt: latestSession.createdAt.toISOString(),
            }
          : null,
      };
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const quiz = await ctx.db.englishQuiz.findUnique({
        where: { id: input.id },
        include: {
          questions: {
            orderBy: { qNumber: "asc" },
          },
          sessions: {
            orderBy: { createdAt: "desc" },
            take: 10,
          },
        },
      });

      if (!quiz) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "English quiz not found",
        });
      }

      return quiz;
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().optional(),
        questions: z
          .array(
            z.object({
              qNumber: z.number().int(),
              question: z.string().min(1),
              options: z.record(z.string()),
              correctAnswer: z.string().min(1),
              explanation: z.string().optional(),
            })
          )
          .min(1, "At least one question is required"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const created = await ctx.db.$transaction(async (tx) => {
        const quiz = await tx.englishQuiz.create({
          data: {
            title: input.title,
            description: input.description,
            questions: {
              create: input.questions.map((q) => ({
                qNumber: q.qNumber,
                question: q.question,
                options: q.options,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation,
              })),
            },
          },
          include: {
            _count: {
              select: { questions: true },
            },
          },
        });
        return quiz;
      });

      return created;
    }),

  submitSession: publicProcedure
    .input(
      z.object({
        quizId: z.string(),
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
      const quiz = await ctx.db.englishQuiz.findUnique({
        where: { id: input.quizId },
        include: {
          questions: {
            orderBy: { qNumber: "asc" },
          },
        },
      });

      if (!quiz) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "English quiz not found",
        });
      }

      if (quiz.questions.length === 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "English quiz has no questions.",
        });
      }

      const attemptInputMap = new Map<
        number,
        { userAnswer: string; timeTakenMs: number }
      >();
      for (const att of input.attempts) {
        attemptInputMap.set(att.qNumber, {
          userAnswer: att.userAnswer,
          timeTakenMs: att.timeTakenMs,
        });
      }

      let score = 0;
      const total = quiz.questions.length;

      const attemptsToCreate: Array<{
        questionId: string;
        qNumber: number;
        userAnswer: string;
        correctAnswer: string;
        isCorrect: boolean;
        timeTakenMs: number;
      }> = [];

      const enrichedResults = [];

      for (const q of quiz.questions) {
        const userAttempt = attemptInputMap.get(q.qNumber);
        const userAnswer = userAttempt ? userAttempt.userAnswer.trim() : "";
        const timeTakenMs = userAttempt ? userAttempt.timeTakenMs : 0;
        const optionsMap = (q.options ?? {}) as EnglishOptionMap;

        const isCorrect = matchEnglishAnswer(
          userAnswer,
          q.correctAnswer,
          optionsMap
        );

        if (isCorrect) {
          score += 1;
        }

        attemptsToCreate.push({
          questionId: q.id,
          qNumber: q.qNumber,
          userAnswer,
          correctAnswer: q.correctAnswer,
          isCorrect,
          timeTakenMs,
        });

        enrichedResults.push({
          questionId: q.id,
          qNumber: q.qNumber,
          question: q.question,
          options: optionsMap,
          explanation: q.explanation,
          userAnswer,
          correctAnswer: q.correctAnswer,
          isCorrect,
          timeTakenMs,
        });
      }

      const session = await ctx.db.englishSession.create({
        data: {
          quizId: input.quizId,
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
        },
      });

      return {
        session,
        score,
        total,
        percentage: Math.round((score / total) * 100),
        timeTakenMs: input.timeTakenMs,
        attempts: enrichedResults,
      };
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.englishQuiz.delete({
        where: { id: input.id },
      });
      return { success: true };
    }),
});

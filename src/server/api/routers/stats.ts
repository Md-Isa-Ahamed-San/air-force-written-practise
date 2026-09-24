import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  analyzeSessionPacing,
  calculateBenchmarkMs,
  classifyAttemptQuadrant,
} from "~/lib/pacing";

export const statsRouter = createTRPCRouter({
  getOverview: publicProcedure.query(async ({ ctx }) => {
    const sessions = await ctx.db.session.findMany({
      include: {
        quizSet: {
          select: { title: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const totalSessions = sessions.length;
    if (totalSessions === 0) {
      return {
        totalSessions: 0,
        averageScorePercent: 0,
        totalQuestionsAnswered: 0,
        bestScorePercent: 0,
        recentSessionsCount: 0,
      };
    }

    let totalScoreSum = 0;
    let totalQuestionsSum = 0;
    let bestScorePercent = 0;

    for (const s of sessions) {
      totalScoreSum += s.score;
      totalQuestionsSum += s.total;
      const pct = s.total > 0 ? (s.score / s.total) * 100 : 0;
      if (pct > bestScorePercent) {
        bestScorePercent = pct;
      }
    }

    const averageScorePercent =
      totalQuestionsSum > 0
        ? Math.round((totalScoreSum / totalQuestionsSum) * 100)
        : 0;

    return {
      totalSessions,
      averageScorePercent,
      totalQuestionsAnswered: totalQuestionsSum,
      bestScorePercent: Math.round(bestScorePercent),
      recentSessionsCount: Math.min(totalSessions, 10),
    };
  }),

  getSessionHistory: publicProcedure.query(async ({ ctx }) => {
    const sessions = await ctx.db.session.findMany({
      orderBy: { createdAt: "asc" },
      include: {
        quizSet: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    return sessions.map((s) => ({
      id: s.id,
      quizSetId: s.quizSetId,
      quizSetTitle: s.quizSet.title,
      score: s.score,
      total: s.total,
      percentage: s.total > 0 ? Math.round((s.score / s.total) * 100) : 0,
      timeTakenMs: s.timeTakenMs,
      date: s.createdAt.toISOString(),
      formattedDate: s.createdAt.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      avgSecPerQ:
        s.total > 0 ? +(s.timeTakenMs / s.total / 1000).toFixed(1) : "0",
    }));
  }),

  getRecentSessionsList: publicProcedure
    .input(z.object({ limit: z.number().int().default(10) }).optional())
    .query(async ({ ctx, input }) => {
      const limit = input?.limit ?? 10;
      const sessions = await ctx.db.session.findMany({
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          quizSet: {
            select: { id: true, title: true },
          },
          attempts: {
            select: {
              isCorrect: true,
              timeTakenMs: true,
            },
          },
        },
      });

      return sessions.map((s) => {
        const totalSec = Math.round(s.timeTakenMs / 1000);
        const avgSecPerQ =
          s.total > 0 ? +(s.timeTakenMs / s.total / 1000).toFixed(1) : "0";
        const benchmarkMs = calculateBenchmarkMs(s.attempts);

        let speedDemon = 0;
        let carelessTrap = 0;
        let timeGrind = 0;
        let timeSink = 0;

        for (const att of s.attempts) {
          const q = classifyAttemptQuadrant(
            att.isCorrect,
            att.timeTakenMs,
            benchmarkMs
          );
          if (q === "speed_demon") speedDemon++;
          else if (q === "careless_trap") carelessTrap++;
          else if (q === "time_grind") timeGrind++;
          else if (q === "time_sink") timeSink++;
        }

        return {
          id: s.id,
          quizSetId: s.quizSetId,
          quizSetTitle: s.quizSet.title,
          score: s.score,
          total: s.total,
          percentage: s.total > 0 ? Math.round((s.score / s.total) * 100) : 0,
          timeTakenMs: s.timeTakenMs,
          totalSec,
          avgSecPerQ,
          quadrants: {
            speedDemon,
            carelessTrap,
            timeGrind,
            timeSink,
          },
          createdAt: s.createdAt.toISOString(),
          formattedDate: s.createdAt.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          formattedTime: s.createdAt.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
      });
    }),

  getSessionDetail: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .query(async ({ ctx, input }) => {
      const session = await ctx.db.session.findUnique({
        where: { id: input.sessionId },
        include: {
          quizSet: {
            select: { id: true, title: true },
          },
          attempts: {
            orderBy: { qNumber: "asc" },
          },
        },
      });

      if (!session) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Session not found",
        });
      }

      const { summary, enrichedAttempts } = analyzeSessionPacing(session.attempts);

      return {
        session: {
          id: session.id,
          quizSetId: session.quizSetId,
          quizSetTitle: session.quizSet.title,
          score: session.score,
          total: session.total,
          percentage:
            session.total > 0 ? Math.round((session.score / session.total) * 100) : 0,
          timeTakenMs: session.timeTakenMs,
          createdAt: session.createdAt.toISOString(),
          formattedDate: session.createdAt.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          formattedTime: session.createdAt.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
        summary,
        attempts: session.attempts.map((att, idx) => {
          const pacing = enrichedAttempts[idx];
          return {
            id: att.id,
            qNumber: att.qNumber,
            userAnswer: att.userAnswer,
            correctAnswer: att.correctAnswer,
            isCorrect: att.isCorrect,
            timeTakenMs: att.timeTakenMs,
            timeSec: pacing ? pacing.timeSec : +(att.timeTakenMs / 1000).toFixed(1),
            quadrant: pacing ? pacing.quadrant : "speed_demon",
            relativePct: pacing ? pacing.relativePct : 50,
          };
        }),
      };
    }),

  getPacingOverview: publicProcedure.query(async ({ ctx }) => {
    const attempts = await ctx.db.attempt.findMany({
      select: {
        qNumber: true,
        isCorrect: true,
        timeTakenMs: true,
      },
    });

    const total = attempts.length;
    if (total === 0) {
      return {
        totalAttempts: 0,
        avgTimeSec: 0,
        avgTimeCorrectSec: 0,
        avgTimeWrongSec: 0,
        wastedTimeSec: 0,
        productiveTimeSec: 0,
        quadrantCounts: {
          speed_demon: 0,
          careless_trap: 0,
          time_grind: 0,
          time_sink: 0,
        },
        quadrantPercentages: {
          speed_demon: 0,
          careless_trap: 0,
          time_grind: 0,
          time_sink: 0,
        },
        timeBrackets: {
          under15s: { count: 0, correct: 0, accuracy: 0 },
          from15to30s: { count: 0, correct: 0, accuracy: 0 },
          from30to60s: { count: 0, correct: 0, accuracy: 0 },
          over60s: { count: 0, correct: 0, accuracy: 0 },
        },
      };
    }

    const { summary } = analyzeSessionPacing(attempts);

    let correctTimeMs = 0;
    let correctCount = 0;
    let wrongTimeMs = 0;
    let wrongCount = 0;

    for (const a of attempts) {
      if (a.isCorrect) {
        correctTimeMs += a.timeTakenMs;
        correctCount++;
      } else {
        wrongTimeMs += a.timeTakenMs;
        wrongCount++;
      }
    }

    return {
      totalAttempts: total,
      avgTimeSec: summary.avgTimeSec,
      avgTimeCorrectSec:
        correctCount > 0 ? +(correctTimeMs / correctCount / 1000).toFixed(1) : 0,
      avgTimeWrongSec:
        wrongCount > 0 ? +(wrongTimeMs / wrongCount / 1000).toFixed(1) : 0,
      wastedTimeSec: summary.wastedTimeSec,
      productiveTimeSec: summary.productiveTimeSec,
      quadrantCounts: summary.quadrantCounts,
      quadrantPercentages: summary.quadrantPercentages,
      timeBrackets: summary.timeBrackets,
    };
  }),

  getQuestionAccuracy: publicProcedure.query(async ({ ctx }) => {
    // Return average time & accuracy per question number
    const attempts = await ctx.db.attempt.findMany({
      select: {
        qNumber: true,
        isCorrect: true,
        timeTakenMs: true,
      },
    });

    const questionStats = new Map<
      number,
      { qNumber: number; total: number; correct: number; totalTimeMs: number }
    >();

    for (const att of attempts) {
      const existing = questionStats.get(att.qNumber) ?? {
        qNumber: att.qNumber,
        total: 0,
        correct: 0,
        totalTimeMs: 0,
      };

      existing.total += 1;
      if (att.isCorrect) existing.correct += 1;
      existing.totalTimeMs += att.timeTakenMs;

      questionStats.set(att.qNumber, existing);
    }

    return Array.from(questionStats.values())
      .sort((a, b) => a.qNumber - b.qNumber)
      .map((q) => ({
        qNumber: `Q${q.qNumber}`,
        questionNum: q.qNumber,
        accuracy: q.total > 0 ? Math.round((q.correct / q.total) * 100) : 0,
        avgTimeSec:
          q.total > 0 ? Math.round(q.totalTimeMs / q.total / 1000) : 0,
        totalAttempts: q.total,
      }));
  }),

  getWeakQuestions: publicProcedure.query(async ({ ctx }) => {
    const incorrectAttempts = await ctx.db.attempt.findMany({
      where: { isCorrect: false },
      include: {
        session: {
          include: {
            quizSet: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const weakMap = new Map<
      string,
      {
        key: string;
        quizSetId: string;
        quizSetTitle: string;
        qNumber: number;
        timesWrong: number;
        lastUserAnswer: string;
        correctAnswer: string;
      }
    >();

    for (const att of incorrectAttempts) {
      const key = `${att.session.quizSetId}-${att.qNumber}`;
      const existing = weakMap.get(key);

      if (!existing) {
        weakMap.set(key, {
          key,
          quizSetId: att.session.quizSetId,
          quizSetTitle: att.session.quizSet.title,
          qNumber: att.qNumber,
          timesWrong: 1,
          lastUserAnswer: att.userAnswer || "(empty)",
          correctAnswer: att.correctAnswer,
        });
      } else {
        existing.timesWrong += 1;
      }
    }

    // Sort by timesWrong descending
    return Array.from(weakMap.values())
      .sort((a, b) => b.timesWrong - a.timesWrong)
      .slice(0, 15);
  }),

  getMastery: publicProcedure.query(async ({ ctx }) => {
    const quizSets = await ctx.db.quizSet.findMany({
      include: {
        sessions: {
          orderBy: { createdAt: "desc" },
          select: {
            score: true,
            total: true,
          },
        },
        _count: {
          select: {
            answers: true,
            images: true,
            sessions: true,
          },
        },
      },
      orderBy: { title: "asc" },
    });

    return quizSets.map((qs) => {
      const sessions = qs.sessions;
      const totalSessions = sessions.length;

      let bestScorePercent = 0;
      let totalPercentSum = 0;

      for (const s of sessions) {
        const pct = s.total > 0 ? (s.score / s.total) * 100 : 0;
        totalPercentSum += pct;
        if (pct > bestScorePercent) {
          bestScorePercent = pct;
        }
      }

      const avgScorePercent =
        totalSessions > 0 ? Math.round(totalPercentSum / totalSessions) : 0;

      return {
        id: qs.id,
        title: qs.title,
        totalQuestions: qs._count.answers,
        totalImages: qs._count.images,
        totalSessions,
        bestScorePercent: Math.round(bestScorePercent),
        avgScorePercent,
      };
    });
  }),
});

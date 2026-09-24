import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

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
    }));
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

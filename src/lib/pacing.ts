export type PacingQuadrant =
  | "speed_demon"
  | "careless_trap"
  | "time_grind"
  | "time_sink";

export interface QuadrantMeta {
  id: PacingQuadrant;
  title: string;
  subtitle: string;
  icon: string;
  badgeClass: string;
  cardClass: string;
  borderClass: string;
  textClass: string;
  bgLightClass: string;
  description: string;
  actionableTip: string;
}

export const PACING_QUADRANTS: Record<PacingQuadrant, QuadrantMeta> = {
  speed_demon: {
    id: "speed_demon",
    title: "Speed Demon",
    subtitle: "Fast & Correct",
    icon: "⚡",
    badgeClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    cardClass: "bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-500/50",
    borderClass: "border-emerald-500/40",
    textClass: "text-emerald-400",
    bgLightClass: "bg-emerald-500/10",
    description: "Rapid recall with flawless accuracy. You have mastered these questions.",
    actionableTip: "Maintain this confidence—these banked seconds give you safety margins.",
  },
  careless_trap: {
    id: "careless_trap",
    title: "Careless Trap",
    subtitle: "Fast & Wrong",
    icon: "⚠️",
    badgeClass: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    cardClass: "bg-amber-950/20 border-amber-500/30 hover:border-amber-500/50",
    borderClass: "border-amber-500/40",
    textClass: "text-amber-400",
    bgLightClass: "bg-amber-500/10",
    description: "Answered rapidly but missed. Likely rushed, guessed, or misread tricky keywords.",
    actionableTip: "Slow down 5–10 seconds on familiar questions to double-check question stems.",
  },
  time_grind: {
    id: "time_grind",
    title: "Time Grind",
    subtitle: "Slow & Correct",
    icon: "🐢",
    badgeClass: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    cardClass: "bg-sky-950/20 border-sky-500/30 hover:border-sky-500/50",
    borderClass: "border-sky-500/40",
    textClass: "text-sky-400",
    bgLightClass: "bg-sky-500/10",
    description: "Solved correctly, but took excessive time that steals minutes from other sections.",
    actionableTip: "Target this concept for speed drilling to cut solution time in half.",
  },
  time_sink: {
    id: "time_sink",
    title: "Time Sink",
    subtitle: "Slow & Wrong",
    icon: "🚨",
    badgeClass: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    cardClass: "bg-rose-950/20 border-rose-500/30 hover:border-rose-500/50",
    borderClass: "border-rose-500/40",
    textClass: "text-rose-400",
    bgLightClass: "bg-rose-500/10",
    description: "Burned significant exam clock and still failed. The single highest score penalty.",
    actionableTip: "Flag for deep concept revision; learn when to skip and return in real tests.",
  },
};

export function calculateBenchmarkMs(attempts: Array<{ timeTakenMs: number }>): number {
  if (!attempts || attempts.length === 0) return 30000;
  const activeAttempts = attempts.filter((a) => (a.timeTakenMs || 0) > 0);
  const targetList = activeAttempts.length > 0 ? activeAttempts : attempts;
  const totalMs = targetList.reduce((acc, a) => acc + (a.timeTakenMs || 0), 0);
  const avgMs = totalMs / targetList.length;
  // If user completed super fast or super slow, clamp between 15s and 60s
  return Math.max(15000, Math.min(60000, avgMs));
}

/**
 * Classifies an individual question attempt into one of 4 Pacing Quadrants.
 */
export function classifyAttemptQuadrant(
  isCorrect: boolean,
  timeTakenMs: number,
  benchmarkMs: number
): PacingQuadrant {
  const isFast = timeTakenMs <= benchmarkMs;
  if (isFast && isCorrect) return "speed_demon";
  if (isFast && !isCorrect) return "careless_trap";
  if (!isFast && isCorrect) return "time_grind";
  return "time_sink";
}

export interface AttemptPacingInfo {
  qNumber: number;
  timeTakenMs: number;
  timeSec: number;
  isCorrect: boolean;
  quadrant: PacingQuadrant;
  relativePct: number; // 0 to 100% relative to slowest question in session
}

export interface SessionPacingSummary {
  benchmarkSec: number;
  avgTimeSec: number;
  totalTimeSec: number;
  fastestAttempt: { qNumber: number; timeSec: number } | null;
  slowestAttempt: { qNumber: number; timeSec: number } | null;
  wastedTimeSec: number; // time spent on incorrect questions
  productiveTimeSec: number; // time spent on correct questions
  quadrantCounts: Record<PacingQuadrant, number>;
  quadrantPercentages: Record<PacingQuadrant, number>;
  timeBrackets: {
    under15s: { count: number; correct: number; accuracy: number };
    from15to30s: { count: number; correct: number; accuracy: number };
    from30to60s: { count: number; correct: number; accuracy: number };
    over60s: { count: number; correct: number; accuracy: number };
  };
}

/**
 * Analyzes an array of attempts to compute high-yield pacing & accuracy metrics.
 */
export function analyzeSessionPacing(
  attempts: Array<{ qNumber: number; isCorrect: boolean; timeTakenMs: number }>
): {
  summary: SessionPacingSummary;
  enrichedAttempts: AttemptPacingInfo[];
} {
  const total = attempts.length;
  if (total === 0) {
    return {
      summary: {
        benchmarkSec: 30,
        avgTimeSec: 0,
        totalTimeSec: 0,
        fastestAttempt: null,
        slowestAttempt: null,
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
      },
      enrichedAttempts: [],
    };
  }

  const benchmarkMs = calculateBenchmarkMs(attempts);
  const benchmarkSec = +(benchmarkMs / 1000).toFixed(1);

  let totalMs = 0;
  let wastedMs = 0;
  let productiveMs = 0;

  let minTime = Infinity;
  let minQ: number | null = null;
  let maxTime = -1;
  let maxQ: number | null = null;

  const counts: Record<PacingQuadrant, number> = {
    speed_demon: 0,
    careless_trap: 0,
    time_grind: 0,
    time_sink: 0,
  };

  const brackets = {
    under15s: { count: 0, correct: 0 },
    from15to30s: { count: 0, correct: 0 },
    from30to60s: { count: 0, correct: 0 },
    over60s: { count: 0, correct: 0 },
  };

  for (const att of attempts) {
    const ms = att.timeTakenMs || 0;
    totalMs += ms;

    if (att.isCorrect) {
      productiveMs += ms;
    } else {
      wastedMs += ms;
    }

    if (ms > 0 && ms < minTime) {
      minTime = ms;
      minQ = att.qNumber;
    }
    if (ms > 0 && ms > maxTime) {
      maxTime = ms;
      maxQ = att.qNumber;
    }

    const quad = classifyAttemptQuadrant(att.isCorrect, ms, benchmarkMs);
    counts[quad]++;

    const sec = ms / 1000;
    if (sec < 15) {
      brackets.under15s.count++;
      if (att.isCorrect) brackets.under15s.correct++;
    } else if (sec < 30) {
      brackets.from15to30s.count++;
      if (att.isCorrect) brackets.from15to30s.correct++;
    } else if (sec < 60) {
      brackets.from30to60s.count++;
      if (att.isCorrect) brackets.from30to60s.correct++;
    } else {
      brackets.over60s.count++;
      if (att.isCorrect) brackets.over60s.correct++;
    }
  }

  const maxMsForScale = Math.max(maxTime, 1000);

  const enrichedAttempts: AttemptPacingInfo[] = attempts.map((att) => {
    const ms = att.timeTakenMs || 0;
    const sec = +(ms / 1000).toFixed(1);
    const quad = classifyAttemptQuadrant(att.isCorrect, ms, benchmarkMs);
    const relativePct = Math.round((ms / maxMsForScale) * 100);
    return {
      qNumber: att.qNumber,
      timeTakenMs: ms,
      timeSec: sec,
      isCorrect: att.isCorrect,
      quadrant: quad,
      relativePct: Math.max(5, Math.min(100, relativePct)),
    };
  });

  const avgTimeSec = +(totalMs / total / 1000).toFixed(1);
  const totalTimeSec = Math.round(totalMs / 1000);
  const wastedTimeSec = +(wastedMs / 1000).toFixed(1);
  const productiveTimeSec = +(productiveMs / 1000).toFixed(1);

  const calcAcc = (cor: number, cnt: number) =>
    cnt > 0 ? Math.round((cor / cnt) * 100) : 0;

  return {
    summary: {
      benchmarkSec,
      avgTimeSec,
      totalTimeSec,
      fastestAttempt:
        minQ !== null
          ? { qNumber: minQ, timeSec: +(minTime / 1000).toFixed(1) }
          : null,
      slowestAttempt:
        maxQ !== null
          ? { qNumber: maxQ, timeSec: +(maxTime / 1000).toFixed(1) }
          : null,
      wastedTimeSec: +wastedTimeSec,
      productiveTimeSec: +productiveTimeSec,
      quadrantCounts: counts,
      quadrantPercentages: {
        speed_demon: Math.round((counts.speed_demon / total) * 100),
        careless_trap: Math.round((counts.careless_trap / total) * 100),
        time_grind: Math.round((counts.time_grind / total) * 100),
        time_sink: Math.round((counts.time_sink / total) * 100),
      },
      timeBrackets: {
        under15s: {
          count: brackets.under15s.count,
          correct: brackets.under15s.correct,
          accuracy: calcAcc(brackets.under15s.correct, brackets.under15s.count),
        },
        from15to30s: {
          count: brackets.from15to30s.count,
          correct: brackets.from15to30s.correct,
          accuracy: calcAcc(brackets.from15to30s.correct, brackets.from15to30s.count),
        },
        from30to60s: {
          count: brackets.from30to60s.count,
          correct: brackets.from30to60s.correct,
          accuracy: calcAcc(brackets.from30to60s.correct, brackets.from30to60s.count),
        },
        over60s: {
          count: brackets.over60s.count,
          correct: brackets.over60s.correct,
          accuracy: calcAcc(brackets.over60s.correct, brackets.over60s.count),
        },
      },
    },
    enrichedAttempts,
  };
}

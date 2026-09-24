"use client";

import { Zap, Clock, TrendingDown, Target, Lightbulb } from "lucide-react";
import { api } from "~/trpc/react";
import { PACING_QUADRANTS } from "~/lib/pacing";

export function PacingQuadrantCard() {
  const { data: pacing, isLoading } = api.stats.getPacingOverview.useQuery();

  if (isLoading) {
    return (
      <div className="p-6 rounded-2xl border border-border/50 bg-card/60 space-y-4 animate-pulse">
        <div className="h-6 w-48 bg-muted rounded" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-24 bg-muted/30 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  const hasData = pacing && pacing.totalAttempts > 0;

  // Derive strategic coach recommendation
  const getCoachTip = () => {
    if (!pacing || pacing.totalAttempts === 0) {
      return "Complete practice exams to unlock personal pacing recommendations.";
    }

    const { careless_trap, time_sink, time_grind, speed_demon } =
      pacing.quadrantCounts;

    if (time_sink >= careless_trap && time_sink > 0) {
      return `Time Sinks represent ${pacing.quadrantPercentages.time_sink}% of your answers. If a question takes over 45s and seems difficult, mark a best guess or skip it to protect easier questions later in the paper.`;
    }
    if (careless_trap >= 3) {
      return `You have ${careless_trap} Careless Traps (${pacing.quadrantPercentages.careless_trap}%). You're answering under target pace but missing points. Take an extra 5 seconds to re-read what the question is asking.`;
    }
    if (time_grind >= speed_demon) {
      return `High accuracy on slower questions! To ensure you finish 100 questions within the 60-minute limit, practice rapid calculation drills on these chapters.`;
    }
    return `Excellent speed balance! ${pacing.quadrantPercentages.speed_demon}% of your questions are Speed Demons. Keep up this momentum!`;
  };

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm space-y-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <h3 className="text-base font-bold text-foreground flex items-center gap-2">
            <Zap className="h-4 w-4 text-sky-400" />
            <span>Time vs. Accuracy Matrix (Overall Profile)</span>
          </h3>
          <p className="text-xs text-muted-foreground">
            Historical question classification across all past practice exams
          </p>
        </div>

        {hasData && (
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-emerald-400">
              Avg Correct: {pacing.avgTimeCorrectSec}s
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-rose-400">
              Avg Wrong: {pacing.avgTimeWrongSec}s
            </span>
          </div>
        )}
      </div>

      {!hasData ? (
        <div className="py-8 text-center text-xs text-muted-foreground">
          No question attempts recorded yet.
        </div>
      ) : (
        <>
          {/* 4 Quadrants Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Speed Demon */}
            <div
              className={`p-3.5 rounded-xl border ${PACING_QUADRANTS.speed_demon.cardClass}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">⚡</span>
                <span className="font-mono font-extrabold text-lg text-emerald-400">
                  {pacing.quadrantCounts.speed_demon}
                </span>
              </div>
              <div className="font-bold text-xs text-foreground">Speed Demon</div>
              <div className="text-[11px] font-mono text-emerald-400">
                Fast & Correct ({pacing.quadrantPercentages.speed_demon}%)
              </div>
            </div>

            {/* Careless Trap */}
            <div
              className={`p-3.5 rounded-xl border ${PACING_QUADRANTS.careless_trap.cardClass}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">⚠️</span>
                <span className="font-mono font-extrabold text-lg text-amber-400">
                  {pacing.quadrantCounts.careless_trap}
                </span>
              </div>
              <div className="font-bold text-xs text-foreground">Careless Trap</div>
              <div className="text-[11px] font-mono text-amber-400">
                Fast & Wrong ({pacing.quadrantPercentages.careless_trap}%)
              </div>
            </div>

            {/* Time Grind */}
            <div
              className={`p-3.5 rounded-xl border ${PACING_QUADRANTS.time_grind.cardClass}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">🐢</span>
                <span className="font-mono font-extrabold text-lg text-sky-400">
                  {pacing.quadrantCounts.time_grind}
                </span>
              </div>
              <div className="font-bold text-xs text-foreground">Time Grind</div>
              <div className="text-[11px] font-mono text-sky-400">
                Slow & Correct ({pacing.quadrantPercentages.time_grind}%)
              </div>
            </div>

            {/* Time Sink */}
            <div
              className={`p-3.5 rounded-xl border ${PACING_QUADRANTS.time_sink.cardClass}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">🚨</span>
                <span className="font-mono font-extrabold text-lg text-rose-400">
                  {pacing.quadrantCounts.time_sink}
                </span>
              </div>
              <div className="font-bold text-xs text-foreground">Time Sink</div>
              <div className="text-[11px] font-mono text-rose-400">
                Slow & Wrong ({pacing.quadrantPercentages.time_sink}%)
              </div>
            </div>
          </div>

          {/* Coach Insight Strip */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent border border-sky-500/20 flex items-start gap-2.5">
            <Lightbulb className="h-4 w-4 text-sky-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <span className="font-bold text-sky-300 block">
                Air Force Exam Pacing Coach Insight:
              </span>
              <p className="text-muted-foreground leading-relaxed">
                {getCoachTip()}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

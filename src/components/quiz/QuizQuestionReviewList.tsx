"use client";

import { CheckCircle2, XCircle, Clock, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  PACING_QUADRANTS,
  type AttemptPacingInfo,
  type SessionPacingSummary,
} from "~/lib/pacing";
import type { QuizAttemptResult } from "./QuizResults";
import type { FilterOption } from "./QuizPacingMatrix";

interface QuizQuestionReviewListProps {
  attempts: QuizAttemptResult[];
  enrichedMap: Map<number, AttemptPacingInfo>;
  summary: SessionPacingSummary;
  filter: FilterOption;
  total: number;
  score: number;
  incorrectCount: number;
  onSelectFilter: (filter: FilterOption) => void;
}

export function QuizQuestionReviewList({
  attempts,
  enrichedMap,
  summary,
  filter,
  total,
  score,
  incorrectCount,
  onSelectFilter,
}: QuizQuestionReviewListProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Filter className="h-4 w-4 text-sky-400" />
          <span>
            Detailed Question Review ({attempts.length} of {total})
          </span>
        </h3>

        <div className="flex flex-wrap items-center gap-1.5 bg-card border border-border/40 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => onSelectFilter("all")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
              filter === "all"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All ({total})
          </button>
          <button
            type="button"
            onClick={() => onSelectFilter("wrong")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
              filter === "wrong"
                ? "bg-red-500 text-white"
                : "text-red-400 hover:text-red-300"
            }`}
          >
            Wrong ({incorrectCount})
          </button>
          <button
            type="button"
            onClick={() => onSelectFilter("correct")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
              filter === "correct"
                ? "bg-emerald-500 text-white"
                : "text-emerald-400 hover:text-emerald-300"
            }`}
          >
            Correct ({score})
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden shadow-xl">
        <div className="divide-y divide-border/30 max-h-[520px] overflow-y-auto">
          {attempts.length === 0 ? (
            <div className="p-10 text-center text-sm text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">
                No questions match this filter.
              </p>
              <p className="text-xs">
                Try switching back to "All" to view your complete breakdown.
              </p>
            </div>
          ) : (
            attempts.map((att) => {
              const pacing = enrichedMap.get(att.qNumber);
              const quadMeta = pacing ? PACING_QUADRANTS[pacing.quadrant] : null;
              const timeSec = pacing
                ? pacing.timeSec
                : +(att.timeTakenMs / 1000).toFixed(1);
              const isFastest =
                summary.fastestAttempt?.qNumber === att.qNumber;
              const isSlowest =
                summary.slowestAttempt?.qNumber === att.qNumber;

              return (
                <div
                  key={att.qNumber}
                  className={`p-4 transition-colors ${
                    att.isCorrect
                      ? "hover:bg-emerald-500/5"
                      : "bg-red-500/5 hover:bg-red-500/10"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    {/* Left: Question Number + Status + Quadrant badge */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-9 w-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 ${
                          att.isCorrect
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                            : "bg-red-500/15 text-red-400 border border-red-500/30"
                        }`}
                      >
                        {att.isCorrect ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <XCircle className="h-4 w-4" />
                        )}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono font-bold text-foreground text-sm">
                            Question #{att.qNumber}
                          </span>

                          {quadMeta && (
                            <Badge
                              variant="outline"
                              className={`text-[10px] font-mono px-2 py-0.5 ${quadMeta.badgeClass}`}
                            >
                              <span>{quadMeta.icon}</span>
                              <span className="ml-1">{quadMeta.title}</span>
                            </Badge>
                          )}

                          {isFastest && (
                            <Badge
                              variant="secondary"
                              className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                            >
                              ⚡ Fastest
                            </Badge>
                          )}

                          {isSlowest && (
                            <Badge
                              variant="secondary"
                              className="text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/40"
                            >
                              🐢 Slowest
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                          <Clock className="h-3 w-3 text-sky-400" />
                          <span className="font-bold text-foreground">
                            {timeSec}s
                          </span>
                          <span className="text-[11px] opacity-70">
                            (Benchmark: {summary.benchmarkSec}s)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Answers Comparison */}
                    <div className="flex items-center gap-4 text-sm font-mono self-end sm:self-center">
                      <div className="text-right">
                        <span className="text-[10px] text-muted-foreground block uppercase">
                          Your Answer
                        </span>
                        <span
                          className={`font-extrabold text-base ${
                            att.isCorrect ? "text-emerald-400" : "text-red-400"
                          }`}
                        >
                          {att.userAnswer || "(skipped)"}
                        </span>
                      </div>

                      {!att.isCorrect && (
                        <div className="text-right pl-3 border-l border-border/40">
                          <span className="text-[10px] text-muted-foreground block uppercase">
                            Correct Key
                          </span>
                          <span className="font-extrabold text-base text-emerald-400">
                            {att.correctAnswer}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Relative Pacing Progress Bar */}
                  {pacing && (
                    <div className="mt-3 pt-2 border-t border-border/20 flex items-center gap-3">
                      <span className="text-[10px] font-mono text-muted-foreground flex-shrink-0">
                        Pacing Load:
                      </span>
                      <div className="flex-1 h-1.5 bg-background/80 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            att.isCorrect ? "bg-emerald-500" : "bg-rose-500"
                          }`}
                          style={{ width: `${pacing.relativePct}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {pacing.relativePct}% max
                      </span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

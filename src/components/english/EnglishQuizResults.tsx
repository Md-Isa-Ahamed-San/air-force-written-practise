"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  BarChart3,
  BookA,
  Award,
  TrendingUp,
  Filter,
  Lightbulb,
  History,
  ArrowLeft,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  analyzeSessionPacing,
  PACING_QUADRANTS,
  type AttemptPacingInfo,
} from "~/lib/pacing";
import { QuizPacingMatrix, type FilterOption } from "../quiz/QuizPacingMatrix";
import type { EnglishOptionMap } from "~/lib/english-utils";

export interface EnrichedEnglishAttempt {
  questionId?: string;
  qNumber: number;
  question: string;
  options: EnglishOptionMap;
  explanation?: string | null;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  timeTakenMs: number;
}

export interface EnglishSessionResult {
  score: number;
  total: number;
  percentage: number;
  timeTakenMs: number;
  attempts: EnrichedEnglishAttempt[];
}

export function EnglishQuizResults({
  quizTitle,
  results,
  onRetry,
  onViewHistory,
  onBack,
  subtitle,
}: {
  quizTitle: string;
  results: EnglishSessionResult;
  onRetry?: () => void;
  onViewHistory?: () => void;
  onBack?: () => void;
  subtitle?: string;
}) {
  const [filter, setFilter] = useState<FilterOption>("all");

  const totalSec = Math.round(results.timeTakenMs / 1000);
  const minutes = Math.floor(totalSec / 60);
  const seconds = totalSec % 60;
  const formattedTotalTime = `${minutes}m ${seconds}s`;
  const incorrectCount = results.total - results.score;

  const { summary, enrichedAttempts } = useMemo(
    () => analyzeSessionPacing(results.attempts),
    [results.attempts]
  );

  const enrichedMap = useMemo(() => {
    const map = new Map<number, AttemptPacingInfo>();
    for (const item of enrichedAttempts) map.set(item.qNumber, item);
    return map;
  }, [enrichedAttempts]);

  const filteredAttempts = useMemo(() => {
    return results.attempts.filter((att) => {
      const pacing = enrichedMap.get(att.qNumber);
      if (filter === "wrong") return !att.isCorrect;
      if (filter === "correct") return att.isCorrect;
      if (filter === "speed_demon") return pacing?.quadrant === "speed_demon";
      if (filter === "careless_trap") return pacing?.quadrant === "careless_trap";
      if (filter === "time_grind") return pacing?.quadrant === "time_grind";
      if (filter === "time_sink") return pacing?.quadrant === "time_sink";
      return true;
    });
  }, [results.attempts, filter, enrichedMap]);

  const getStatus = (pct: number) => {
    if (pct >= 85)
      return {
        text: "OUTSTANDING / QUALIFIED",
        colorClass: "text-emerald-500",
        badgeClass: "bg-emerald-500/10 border-emerald-500/30 text-emerald-500",
        barClass: "from-emerald-400 to-emerald-600",
      };
    if (pct >= 70)
      return {
        text: "MERIT PASS",
        colorClass: "text-primary",
        badgeClass: "bg-primary/10 border-primary/30 text-primary",
        barClass: "from-primary to-blue-600",
      };
    if (pct >= 50)
      return {
        text: "SATISFACTORY",
        colorClass: "text-amber-500",
        badgeClass: "bg-amber-500/10 border-amber-500/30 text-amber-500",
        barClass: "from-amber-400 to-orange-500",
      };
    return {
      text: "REVISION RECOMMENDED",
      colorClass: "text-red-500",
      badgeClass: "bg-red-500/10 border-red-500/30 text-red-500",
      barClass: "from-red-400 to-red-600",
    };
  };

  const status = getStatus(results.percentage);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 animate-in-up">
      {/* 1. Score Summary Glass Card */}
      <div className="relative rounded-3xl border border-white/20 dark:border-white/10 glass-panel overflow-hidden shadow-2xl">
        <div className={`h-1.5 w-full bg-gradient-to-r ${status.barClass}`} />

        <div className="p-6 sm:p-8 space-y-6">
          {/* Status + Title */}
          <div className="text-center space-y-3">
            <Badge
              variant="outline"
              className={`font-bold text-xs uppercase px-4 py-1.5 border font-mono ${status.badgeClass}`}
            >
              <Award className="h-3.5 w-3.5 mr-1.5" />
              {status.text}
            </Badge>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              {quizTitle}
            </h2>
            <p className="text-xs text-muted-foreground font-mono font-semibold uppercase tracking-widest">
              {subtitle ?? "Completed English Practice Examination"}
            </p>
          </div>

          {/* Big Score Numbers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-2">
            <div className="text-center">
              <span className="text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground font-mono leading-none">
                {results.score}
                <span className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
                  /{results.total}
                </span>
              </span>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mt-2">
                Final Marks
              </p>
            </div>

            <div className="hidden sm:block h-14 w-px bg-border/50" />

            <div className="text-center">
              <span
                className={`text-5xl sm:text-7xl font-extrabold tracking-tight font-mono leading-none ${status.colorClass}`}
              >
                {results.percentage}%
              </span>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mt-2">
                Accuracy Rate
              </p>
            </div>
          </div>

          {/* 4 Metric Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                label: "Total Time",
                value: formattedTotalTime,
                icon: Clock,
                color: "text-primary",
              },
              {
                label: "Avg Speed",
                value: `${summary.avgTimeSec}s / Q`,
                icon: TrendingUp,
                color: "text-violet-400",
              },
              {
                label: "Correct",
                value: `${results.score} Qs`,
                icon: CheckCircle2,
                color: "text-emerald-400",
              },
              {
                label: "Incorrect",
                value: `${incorrectCount} Qs`,
                icon: XCircle,
                color: "text-red-400",
              },
            ].map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="p-3 rounded-2xl bg-card/40 border border-border/40 text-center space-y-1"
                >
                  <span className="text-xs text-muted-foreground font-medium">
                    {m.label}
                  </span>
                  <p
                    className={`font-mono font-bold text-sm flex items-center justify-center gap-1.5 ${m.color}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {m.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {onBack && (
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                className="gap-2 rounded-xl text-xs hover:border-primary/40 font-semibold"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Attempts</span>
              </Button>
            )}

            {onRetry && (
              <Button
                type="button"
                onClick={onRetry}
                className="gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg shadow-primary/20 font-semibold rounded-xl text-xs"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Retake Quiz</span>
              </Button>
            )}

            {onViewHistory && (
              <Button
                type="button"
                variant="outline"
                onClick={onViewHistory}
                className="gap-2 hover:border-primary/40 hover:bg-accent rounded-xl text-xs font-semibold"
              >
                <History className="h-4 w-4 text-primary" />
                <span>Past Attempts</span>
              </Button>
            )}

            <Link
              href="/dashboard"
              className={buttonVariants({
                variant: "outline",
                className:
                  "gap-2 hover:border-primary/40 hover:bg-accent rounded-xl text-xs",
              })}
            >
              <BarChart3 className="h-4 w-4 text-primary" />
              <span>Global Analytics</span>
            </Link>

            <Link
              href="/english"
              className={buttonVariants({
                variant: "ghost",
                className:
                  "gap-2 text-muted-foreground hover:text-foreground rounded-xl text-xs",
              })}
            >
              <BookA className="h-4 w-4" />
              <span>English Hub</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Pacing Matrix Quadrants (Speed Demon, Careless Trap, etc.) */}
      <QuizPacingMatrix
        summary={summary}
        filter={filter}
        onSelectFilter={setFilter}
      />

      {/* 3. Detailed Rich Question Review List */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Filter className="h-4 w-4 text-sky-400" />
            <span>
              Question Review ({filteredAttempts.length} of {results.total})
            </span>
          </h3>

          <div className="flex flex-wrap items-center gap-1.5 bg-card/60 backdrop-blur-sm border border-border/40 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All ({results.total})
            </button>
            <button
              type="button"
              onClick={() => setFilter("wrong")}
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
              onClick={() => setFilter("correct")}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                filter === "correct"
                  ? "bg-emerald-500 text-white"
                  : "text-emerald-400 hover:text-emerald-300"
              }`}
            >
              Correct ({results.score})
            </button>
          </div>
        </div>

        {/* List of reviewed questions */}
        <div className="space-y-3.5">
          {filteredAttempts.length === 0 ? (
            <div className="p-10 text-center rounded-2xl glass-card text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground text-sm">
                No questions match this filter.
              </p>
              <p className="text-xs">
                Switch back to "All" to review your complete session.
              </p>
            </div>
          ) : (
            filteredAttempts.map((att) => {
              const pacing = enrichedMap.get(att.qNumber);
              const quadMeta = pacing
                ? PACING_QUADRANTS[pacing.quadrant]
                : null;
              const timeSec = pacing
                ? pacing.timeSec
                : +(att.timeTakenMs / 1000).toFixed(1);

              const rawOpts = att.options;
              const optionsList: [string, string][] = Array.isArray(rawOpts)
                ? rawOpts.map((val, idx) => [
                    ["A", "B", "C", "D"][idx] ?? String(idx + 1),
                    String(val ?? ""),
                  ])
                : typeof rawOpts === "object" && rawOpts !== null
                ? Object.entries(rawOpts as Record<string, unknown>).map(([k, v]) => [
                    k.toUpperCase(),
                    String(v ?? ""),
                  ])
                : [];

              return (
                <div
                  key={att.qNumber}
                  className={`rounded-2xl p-5 border transition-all ${
                    att.isCorrect
                      ? "border-emerald-500/25 bg-emerald-500/[0.03] hover:bg-emerald-500/[0.06]"
                      : "border-red-500/25 bg-red-500/[0.03] hover:bg-red-500/[0.06]"
                  }`}
                >
                  {/* Top Bar: Question # + Status + Pacing info */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`h-7 w-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 ${
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

                      <span className="font-bold text-sm text-foreground">
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

                  {/* Question Prompt */}
                  <p className="text-sm sm:text-base font-semibold text-foreground mb-4 leading-relaxed whitespace-pre-line">
                    {att.question ?? "Question text unavailable"}
                  </p>

                  {/* Options List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                    {optionsList.map(([key, val]) => {
                      const isUserChoice =
                        (att.userAnswer ?? "").trim().toUpperCase() === key.toUpperCase();
                      const isCorrectKey =
                        (att.correctAnswer ?? "").trim().toUpperCase() ===
                        key.toUpperCase();

                      let cardStyle =
                        "border-border/40 bg-card/30 text-muted-foreground";
                      if (isCorrectKey) {
                        cardStyle =
                          "border-emerald-500/50 bg-emerald-500/15 text-foreground font-semibold shadow-sm";
                      } else if (isUserChoice && !att.isCorrect) {
                        cardStyle =
                          "border-red-500/50 bg-red-500/15 text-foreground font-semibold line-through";
                      }

                      return (
                        <div
                          key={key}
                          className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-2.5 ${cardStyle}`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="font-mono font-bold w-5 h-5 rounded-md bg-muted/60 flex items-center justify-center flex-shrink-0 text-[11px]">
                              {key}
                            </span>
                            <span className="truncate">{val}</span>
                          </div>

                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            {isCorrectKey && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                                Correct Key
                              </span>
                            )}
                            {isUserChoice && (
                              <span
                                className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                                  att.isCorrect
                                    ? "bg-emerald-500/20 text-emerald-400"
                                    : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                Your Choice
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Callout */}
                  {(att.explanation ?? "").trim().length > 0 && (
                    <div className="mt-3 p-3.5 rounded-xl bg-card/60 border border-primary/20 flex items-start gap-2.5 text-xs">
                      <Lightbulb className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div className="leading-relaxed text-muted-foreground whitespace-pre-line space-y-1">
                        <strong className="text-foreground">Explanation: </strong>
                        <span>{att.explanation}</span>
                      </div>
                    </div>
                  )}

                  {/* Relative Pacing Bar */}
                  {pacing && (
                    <div className="mt-3 pt-2.5 border-t border-border/20 flex items-center gap-3">
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

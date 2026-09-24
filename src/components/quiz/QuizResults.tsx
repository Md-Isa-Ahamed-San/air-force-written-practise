"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  BarChart3,
  BookOpen,
  Award,
  TrendingUp,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { analyzeSessionPacing } from "~/lib/pacing";
import { QuizPacingMatrix, type FilterOption } from "./QuizPacingMatrix";
import { QuizQuestionReviewList } from "./QuizQuestionReviewList";

export interface QuizAttemptResult {
  qNumber: number;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  timeTakenMs: number;
}

export interface QuizSessionResult {
  score: number;
  total: number;
  percentage: number;
  timeTakenMs: number;
  attempts: QuizAttemptResult[];
}

export function QuizResults({
  quizTitle,
  results,
  onRetry,
}: {
  quizTitle: string;
  results: QuizSessionResult;
  onRetry: () => void;
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
    const map = new Map<number, (typeof enrichedAttempts)[0]>();
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
      return { text: "OUTSTANDING / QUALIFIED", colorClass: "text-emerald-600 dark:text-emerald-400", badgeClass: "bg-emerald-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400", barClass: "from-emerald-400 to-emerald-600" };
    if (pct >= 70)
      return { text: "MERIT PASS", colorClass: "text-primary", badgeClass: "bg-primary/10 border-primary/25 text-primary", barClass: "from-primary to-blue-600" };
    if (pct >= 50)
      return { text: "SATISFACTORY", colorClass: "text-amber-600 dark:text-amber-400", badgeClass: "bg-amber-500/10 border-amber-500/25 text-amber-600 dark:text-amber-400", barClass: "from-amber-400 to-orange-500" };
    return { text: "REVISION RECOMMENDED", colorClass: "text-red-600 dark:text-red-400", badgeClass: "bg-red-500/10 border-red-500/25 text-red-600 dark:text-red-400", barClass: "from-red-400 to-red-600" };
  };

  const status = getStatus(results.percentage);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in-up">
      {/* Score Summary Card */}
      <div className="relative rounded-3xl border border-border/60 bg-card overflow-hidden shadow-xl">
        {/* Gradient accent top */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${status.barClass}`} />

        <div className="p-6 sm:p-8 space-y-6">
          {/* Status + title */}
          <div className="text-center space-y-3">
            <Badge
              variant="outline"
              className={`font-bold text-xs uppercase px-4 py-1.5 border font-mono ${status.badgeClass}`}
            >
              <Award className="h-3.5 w-3.5 mr-1.5" />
              {status.text}
            </Badge>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">{quizTitle}</h2>
            <p className="text-xs text-muted-foreground font-mono font-semibold uppercase tracking-widest">
              Completed Examination Attempt
            </p>
          </div>

          {/* Big Numbers */}
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
              <span className={`text-5xl sm:text-7xl font-extrabold tracking-tight font-mono leading-none ${status.colorClass}`}>
                {results.percentage}%
              </span>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mt-2">
                Accuracy Rate
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
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
                color: "text-violet-500 dark:text-violet-400",
              },
              {
                label: "Correct",
                value: `${results.score} Qs`,
                icon: CheckCircle2,
                color: "text-emerald-500 dark:text-emerald-400",
              },
              {
                label: "Incorrect",
                value: `${incorrectCount} Qs`,
                icon: XCircle,
                color: "text-red-500 dark:text-red-400",
              },
            ].map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="p-3 rounded-xl bg-muted/30 border border-border/40 text-center space-y-1"
                >
                  <span className="text-xs text-muted-foreground font-medium">{m.label}</span>
                  <p className={`font-mono font-bold text-sm flex items-center justify-center gap-1 ${m.color}`}>
                    <Icon className="h-3.5 w-3.5" />
                    {m.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              type="button"
              onClick={onRetry}
              className="gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground shadow-lg shadow-primary/20 font-semibold"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Retake Practice</span>
            </Button>

            <Link
              href="/dashboard"
              className={buttonVariants({
                variant: "outline",
                className: "gap-2 hover:border-primary/40 hover:bg-accent",
              })}
            >
              <BarChart3 className="h-4 w-4 text-primary" />
              <span>View Analytics</span>
            </Link>

            <Link
              href="/quiz"
              className={buttonVariants({
                variant: "ghost",
                className: "gap-2 text-muted-foreground hover:text-foreground",
              })}
            >
              <BookOpen className="h-4 w-4" />
              <span>All Question Sets</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Pacing Matrix */}
      <QuizPacingMatrix summary={summary} filter={filter} onSelectFilter={setFilter} />

      {/* Question Review */}
      <QuizQuestionReviewList
        attempts={filteredAttempts}
        enrichedMap={enrichedMap}
        summary={summary}
        filter={filter}
        total={results.total}
        score={results.score}
        incorrectCount={incorrectCount}
        onSelectFilter={setFilter}
      />
    </div>
  );
}
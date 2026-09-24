"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  BarChart3,
  BookOpen,
  Award,
  ChevronRight,
  Filter,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const [filter, setFilter] = useState<"all" | "wrong" | "correct">("all");

  const totalSec = Math.round(results.timeTakenMs / 1000);
  const minutes = Math.floor(totalSec / 60);
  const seconds = totalSec % 60;
  const formattedTotalTime = `${minutes}m ${seconds}s`;

  const avgSecPerQ =
    results.total > 0 ? (totalSec / results.total).toFixed(1) : "0";

  const incorrectCount = results.total - results.score;

  const filteredAttempts = results.attempts.filter((att) => {
    if (filter === "wrong") return !att.isCorrect;
    if (filter === "correct") return att.isCorrect;
    return true;
  });

  const getStatusText = (pct: number) => {
    if (pct >= 85) return { text: "OUTSTANDING / QUALIFIED", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" };
    if (pct >= 70) return { text: "MERIT PASS", color: "text-sky-400 border-sky-500/30 bg-sky-500/10" };
    if (pct >= 50) return { text: "SATISFACTORY", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" };
    return { text: "REVISION RECOMMENDED", color: "text-red-400 border-red-500/30 bg-red-500/10" };
  };

  const status = getStatusText(results.percentage);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in-50 duration-300">
      {/* Score Summary Card */}
      <div className="relative rounded-3xl border border-border/50 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-xl p-8 shadow-2xl text-center space-y-6 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500" />

        <div className="space-y-2">
          <Badge variant="outline" className={`font-mono text-xs uppercase px-3 py-1 ${status.color}`}>
            <Award className="h-3.5 w-3.5 mr-1" />
            {status.text}
          </Badge>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {quizTitle}
          </h2>
          <p className="text-xs text-muted-foreground font-mono">
            COMPLETED EXAMINATION ATTEMPT
          </p>
        </div>

        {/* Big Score Numbers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-4">
          <div className="text-center">
            <span className="text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground font-mono">
              {results.score}
              <span className="text-2xl sm:text-3xl font-medium text-muted-foreground">
                /{results.total}
              </span>
            </span>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">
              Final Score
            </p>
          </div>

          <div className="h-12 w-px bg-border/40 hidden sm:block" />

          <div className="text-center">
            <span className="text-5xl sm:text-7xl font-extrabold tracking-tight font-mono text-sky-400">
              {results.percentage}%
            </span>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">
              Accuracy Rate
            </p>
          </div>
        </div>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border/30">
          <div className="p-3 rounded-xl bg-background/60 border border-border/40 space-y-0.5">
            <span className="text-xs text-muted-foreground">Total Time</span>
            <p className="font-mono font-bold text-foreground text-sm flex items-center justify-center gap-1">
              <Clock className="h-3.5 w-3.5 text-sky-400" />
              {formattedTotalTime}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-background/60 border border-border/40 space-y-0.5">
            <span className="text-xs text-muted-foreground">Avg Speed</span>
            <p className="font-mono font-bold text-foreground text-sm">
              {avgSecPerQ}s / Q
            </p>
          </div>
          <div className="p-3 rounded-xl bg-background/60 border border-border/40 space-y-0.5">
            <span className="text-xs text-muted-foreground">Correct</span>
            <p className="font-mono font-bold text-emerald-400 text-sm flex items-center justify-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" />
              {results.score} Questions
            </p>
          </div>
          <div className="p-3 rounded-xl bg-background/60 border border-border/40 space-y-0.5">
            <span className="text-xs text-muted-foreground">Incorrect</span>
            <p className="font-mono font-bold text-red-400 text-sm flex items-center justify-center gap-1">
              <XCircle className="h-3.5 w-3.5" />
              {incorrectCount} Questions
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            type="button"
            onClick={onRetry}
            className="gap-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/20"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Retake Practice</span>
          </Button>

          <Link
            href="/dashboard"
            className={buttonVariants({
              variant: "outline",
              className: "gap-2 hover:border-sky-500/50",
            })}
          >
            <BarChart3 className="h-4 w-4 text-sky-400" />
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

      {/* Results Breakdown */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Filter className="h-4 w-4 text-sky-400" />
            <span>Question-by-Question Breakdown</span>
          </h3>

          <Tabs
            value={filter}
            onValueChange={(val) => setFilter(val as "all" | "wrong" | "correct")}
          >
            <TabsList className="bg-card border border-border/40 p-1">
              <TabsTrigger value="all" className="text-xs">
                All ({results.total})
              </TabsTrigger>
              <TabsTrigger value="wrong" className="text-xs text-red-400">
                Wrong ({incorrectCount})
              </TabsTrigger>
              <TabsTrigger value="correct" className="text-xs text-emerald-400">
                Correct ({results.score})
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden">
          <div className="divide-y divide-border/30 max-h-[480px] overflow-y-auto">
            {filteredAttempts.length === 0 ? (
              <div className="p-8 text-center text-sm text-muted-foreground">
                No questions match the current filter.
              </div>
            ) : (
              filteredAttempts.map((att) => (
                <div
                  key={att.qNumber}
                  className={`p-4 flex items-center justify-between gap-4 transition-colors ${
                    att.isCorrect
                      ? "hover:bg-emerald-500/5"
                      : "bg-red-500/5 hover:bg-red-500/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-8 w-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                        att.isCorrect
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {att.isCorrect ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <XCircle className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <span className="font-mono font-bold text-foreground text-sm">
                        Question #{att.qNumber}
                      </span>
                      <div className="text-xs text-muted-foreground flex items-center gap-2 mt-0.5">
                        <span>
                          Time: {(att.timeTakenMs / 1000).toFixed(1)}s
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm font-mono">
                    <div className="text-right">
                      <span className="text-[11px] text-muted-foreground block">
                        Your Answer
                      </span>
                      <span
                        className={`font-bold ${
                          att.isCorrect ? "text-emerald-400" : "text-red-400"
                        }`}
                      >
                        {att.userAnswer || "(skipped)"}
                      </span>
                    </div>

                    {!att.isCorrect && (
                      <div className="text-right pl-2 border-l border-border/40">
                        <span className="text-[11px] text-muted-foreground block">
                          Correct Answer
                        </span>
                        <span className="font-bold text-emerald-400">
                          {att.correctAnswer}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { BarChart3, BookOpen, Layers } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { StatsOverviewCards } from "./StatsOverviewCards";
import { ScoreOverTimeChart } from "./ScoreOverTimeChart";
import { AvgTimePerQuestionChart } from "./AvgTimePerQuestionChart";
import { WeakQuestionsTable } from "./WeakQuestionsTable";
import { MasteryByQuizSet } from "./MasteryByQuizSet";

export function DashboardPage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border/40 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-2.5">
            <BarChart3 className="h-7 w-7 text-sky-400" />
            <span>Air Force Exam Analytics</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time performance metrics, timing analysis, and chapter readiness overview.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/quiz"
            className={buttonVariants({
              className: "gap-2 bg-primary text-primary-foreground font-semibold text-xs",
            })}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Practice Quizzes</span>
          </Link>
          <Link
            href="/admin"
            className={buttonVariants({
              variant: "outline",
              className: "gap-2 text-xs hover:border-sky-500/50",
            })}
          >
            <Layers className="h-3.5 w-3.5 text-sky-400" />
            <span>Manage Sets</span>
          </Link>
        </div>
      </div>

      {/* 4 Stat Overview Cards */}
      <StatsOverviewCards />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScoreOverTimeChart />
        <AvgTimePerQuestionChart />
      </div>

      {/* Tables Grid: Weak Questions & Mastery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeakQuestionsTable />
        <MasteryByQuizSet />
      </div>
    </div>
  );
}

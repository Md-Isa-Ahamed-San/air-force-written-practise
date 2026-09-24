"use client";

import Link from "next/link";
import { BarChart3, BookOpen, Layers } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { StatsOverviewCards } from "./StatsOverviewCards";
import { PacingQuadrantCard } from "./PacingQuadrantCard";
import { ScoreOverTimeChart } from "./ScoreOverTimeChart";
import { AvgTimePerQuestionChart } from "./AvgTimePerQuestionChart";
import { SessionHistoryDrilldown } from "./SessionHistoryDrilldown";
import { WeakQuestionsTable } from "./WeakQuestionsTable";
import { MasteryByQuizSet } from "./MasteryByQuizSet";

export function DashboardPage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-in-up">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/25">
              <BarChart3 className="h-4.5 w-4.5 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Performance Dashboard
            </h1>
          </div>
          <p className="text-sm text-muted-foreground pl-0.5">
            Real-time metrics, timing analysis, and chapter readiness overview.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/quiz"
            className={buttonVariants({
              className:
                "gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 text-sm",
            })}
          >
            <BookOpen className="h-4 w-4" />
            <span>Practice Now</span>
          </Link>
          <Link
            href="/admin"
            className={buttonVariants({
              variant: "outline",
              className:
                "gap-2 text-sm hover:border-primary/40 hover:bg-accent",
            })}
          >
            <Layers className="h-4 w-4 text-muted-foreground" />
            <span>Manage Sets</span>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* 4 Stat Overview Cards */}
      <StatsOverviewCards />

      {/* Time vs Accuracy Quadrant */}
      <PacingQuadrantCard />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ScoreOverTimeChart />
        <AvgTimePerQuestionChart />
      </div>

      {/* Session History Drilldown */}
      <SessionHistoryDrilldown />

      {/* Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <WeakQuestionsTable />
        <MasteryByQuizSet />
      </div>
    </div>
  );
}
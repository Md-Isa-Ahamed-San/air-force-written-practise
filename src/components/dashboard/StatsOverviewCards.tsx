"use client";

import {
  Trophy,
  Target,
  Clock,
  Flame,
  Award,
  BookOpen,
} from "lucide-react";
import { api } from "~/trpc/react";

export function StatsOverviewCards() {
  const { data: overview, isLoading } = api.stats.getOverview.useQuery();

  if (isLoading || !overview) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-28 rounded-2xl bg-card/40 border border-border/40 p-4"
          />
        ))}
      </div>
    );
  }

  const cards = [
    {
      title: "Total Exam Sessions",
      value: overview.totalSessions,
      subtext: `${overview.recentSessionsCount} recent tests`,
      icon: BookOpen,
      iconColor: "text-sky-400",
      iconBg: "bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Average Score Rate",
      value: `${overview.averageScorePercent}%`,
      subtext: "Across all subjects",
      icon: Target,
      iconColor: "text-indigo-400",
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "Total Questions Solved",
      value: overview.totalQuestionsAnswered,
      subtext: "Written questions graded",
      icon: Trophy,
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Personal Best Score",
      value: `${overview.bestScorePercent}%`,
      subtext: "Highest exam percentage",
      icon: Award,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <div
            key={i}
            className="p-5 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm space-y-3 hover:border-sky-500/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {card.title}
              </span>
              <div
                className={`h-8 w-8 rounded-xl border flex items-center justify-center ${card.iconBg} ${card.iconColor}`}
              >
                <Icon className="h-4 w-4" />
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono">
                {card.value}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                {card.subtext}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

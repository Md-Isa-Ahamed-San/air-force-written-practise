"use client";

import {
  Trophy,
  Target,
  BookOpen,
  Award,
  TrendingUp,
} from "lucide-react";
import { api } from "~/trpc/react";

const CARD_DEFS = [
  {
    key: "totalSessions",
    title: "Total Sessions",
    subtext: (v: Record<string, unknown>) => `${v.recentSessionsCount} this week`,
    icon: BookOpen,
    gradient: "from-sky-500/20 to-blue-600/5",
    iconGradient: "from-sky-500 to-blue-600",
    iconShadow: "shadow-sky-500/25",
    valueColor: "text-sky-500 dark:text-sky-400",
    borderHover: "hover:border-sky-500/40 hover:shadow-sky-500/5",
  },
  {
    key: "averageScorePercent",
    title: "Average Score",
    format: (v: unknown) => `${v as string}%`,
    subtext: () => "Across all subjects",
    icon: Target,
    gradient: "from-violet-500/20 to-indigo-600/5",
    iconGradient: "from-violet-500 to-indigo-600",
    iconShadow: "shadow-violet-500/25",
    valueColor: "text-violet-500 dark:text-violet-400",
    borderHover: "hover:border-violet-500/40 hover:shadow-violet-500/5",
  },
  {
    key: "totalQuestionsAnswered",
    title: "Questions Solved",
    subtext: () => "Written questions graded",
    icon: Trophy,
    gradient: "from-amber-500/20 to-orange-600/5",
    iconGradient: "from-amber-500 to-orange-500",
    iconShadow: "shadow-amber-500/25",
    valueColor: "text-amber-500 dark:text-amber-400",
    borderHover: "hover:border-amber-500/40 hover:shadow-amber-500/5",
  },
  {
    key: "bestScorePercent",
    title: "Personal Best",
    format: (v: unknown) => `${v as string}%`,
    subtext: () => "Highest exam score",
    icon: Award,
    gradient: "from-emerald-500/20 to-green-600/5",
    iconGradient: "from-emerald-500 to-green-600",
    iconShadow: "shadow-emerald-500/25",
    valueColor: "text-emerald-500 dark:text-emerald-400",
    borderHover: "hover:border-emerald-500/40 hover:shadow-emerald-500/5",
  },
];

export function StatsOverviewCards() {
  const { data: overview, isLoading } = api.stats.getOverview.useQuery();

  if (isLoading || !overview) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-32 rounded-2xl bg-card border border-border/50 animate-pulse"
          />
        ))}
      </div>
    );
  }

  const data = overview as Record<string, unknown>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {CARD_DEFS.map((card, i) => {
        const Icon = card.icon;
        const rawValue = data[card.key];
        const displayValue = card.format
          ? card.format(rawValue)
          : String(rawValue);
        const subtext = card.subtext(data);

        return (
          <div
            key={i}
            className={`relative group rounded-2xl border border-border/50 bg-card overflow-hidden p-5 space-y-4 transition-all duration-200 hover:shadow-xl ${card.borderHover} cursor-default`}
          >
            {/* Background gradient blob */}
            <div
              className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${card.gradient} rounded-full blur-2xl -translate-y-6 translate-x-6 pointer-events-none`}
            />

            <div className="relative flex items-start justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                {card.title}
              </span>
              <div
                className={`h-9 w-9 rounded-xl bg-gradient-to-br ${card.iconGradient} flex items-center justify-center shadow-lg ${card.iconShadow} text-white flex-shrink-0`}
              >
                <Icon className="h-4 w-4" />
              </div>
            </div>

            <div className="relative">
              <div className={`text-3xl font-extrabold tracking-tight font-mono ${card.valueColor}`}>
                {displayValue}
              </div>
              <div className="flex items-center gap-1.5 mt-1.5">
                <TrendingUp className="h-3 w-3 text-muted-foreground/50" />
                <p className="text-xs text-muted-foreground font-medium">
                  {subtext}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
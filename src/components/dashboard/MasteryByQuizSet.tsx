"use client";

import Link from "next/link";
import { CheckCircle2, ChevronRight, Layers, Sparkles } from "lucide-react";
import { api } from "~/trpc/react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function MasteryByQuizSet() {
  const { data: masteryList, isLoading } = api.stats.getMastery.useQuery();

  if (isLoading) {
    return (
      <div className="p-6 rounded-2xl border border-border/50 bg-card/60 space-y-4 animate-pulse">
        <div className="h-6 w-44 bg-muted rounded" />
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-14 bg-muted/30 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  const hasData = masteryList && masteryList.length > 0;

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm space-y-4">
      <div className="space-y-0.5">
        <h3 className="text-base font-bold text-foreground flex items-center gap-2">
          <Layers className="h-4 w-4 text-emerald-400" />
          <span>Subject Mastery Breakdown</span>
        </h3>
        <p className="text-xs text-muted-foreground">
          Track preparation status across individual chapters and exam sets
        </p>
      </div>

      {!hasData ? (
        <div className="py-10 text-center rounded-xl border border-dashed border-border/40 bg-card/20 space-y-2">
          <Sparkles className="h-8 w-8 text-muted-foreground/40 mx-auto" />
          <p className="text-xs font-semibold text-foreground">
            No Subjects Configured
          </p>
          <p className="text-[11px] text-muted-foreground">
            Create quiz sets in Admin Studio to view chapter mastery.
          </p>
        </div>
      ) : (
        <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
          {masteryList.map((qs) => {
            const hasAttempts = qs.totalSessions > 0;
            const pct = qs.bestScorePercent;

            return (
              <Link
                key={qs.id}
                href={`/quiz/${qs.id}`}
                className="group block p-3.5 rounded-xl border border-border/40 bg-background/50 hover:bg-muted/30 hover:border-sky-500/40 transition-all space-y-2"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-0.5 min-w-0">
                    <span className="font-bold text-xs text-foreground group-hover:text-sky-400 transition-colors truncate block">
                      {qs.title}
                    </span>
                    <span className="text-[11px] text-muted-foreground font-mono">
                      {qs.totalQuestions} Questions • {qs.totalSessions} Sessions
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {hasAttempts ? (
                      <Badge
                        variant="secondary"
                        className={`font-mono text-xs ${
                          pct >= 80
                            ? "bg-emerald-500/10 text-emerald-400"
                            : pct >= 50
                            ? "bg-amber-500/10 text-amber-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        Best: {pct}%
                      </Badge>
                    ) : (
                      <span className="text-[11px] text-muted-foreground">
                        Not taken
                      </span>
                    )}
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <Progress value={pct} className="h-1.5" />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

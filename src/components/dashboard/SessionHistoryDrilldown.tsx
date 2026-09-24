"use client";

import { useState } from "react";
import {
  Clock,
  ChevronRight,
  History,
  Eye,
  Sparkles,
  Calendar,
} from "lucide-react";
import { api } from "~/trpc/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SessionDetailModal } from "./SessionDetailModal";

export function SessionHistoryDrilldown() {
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { data: sessions, isLoading } = api.stats.getRecentSessionsList.useQuery({
    limit: 10,
  });

  const handleOpenDetail = (id: string) => {
    setSelectedSessionId(id);
    setModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="p-6 rounded-2xl border border-border/50 bg-card/60 space-y-4 animate-pulse">
        <div className="h-6 w-48 bg-muted rounded" />
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-16 bg-muted/30 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  const hasData = sessions && sessions.length > 0;

  return (
    <>
      <div className="p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <History className="h-4 w-4 text-sky-400" />
              <span>Exam Sessions & Pacing Drilldown</span>
            </h3>
            <p className="text-xs text-muted-foreground">
              Review exact seconds spent per question for each previous attempt
            </p>
          </div>

          <span className="text-xs font-mono text-muted-foreground">
            {sessions?.length ?? 0} Recorded Sessions
          </span>
        </div>

        {!hasData ? (
          <div className="py-10 text-center rounded-xl border border-dashed border-border/40 bg-card/20 space-y-2">
            <Sparkles className="h-8 w-8 text-muted-foreground/40 mx-auto" />
            <p className="text-xs font-semibold text-foreground">
              No Quiz Sessions Recorded Yet
            </p>
            <p className="text-[11px] text-muted-foreground">
              Take your first practice exam to unlock per-question timing analytics.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
            {sessions.map((s) => {
              const minutes = Math.floor(s.totalSec / 60);
              const seconds = s.totalSec % 60;
              const formattedTime = `${minutes}m ${seconds}s`;

              return (
                <div
                  key={s.id}
                  className="p-3.5 rounded-xl border border-border/40 bg-background/50 hover:bg-muted/30 hover:border-sky-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  {/* Left: Title, Date, Score */}
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-foreground truncate">
                        {s.quizSetTitle}
                      </span>
                      <Badge
                        variant="secondary"
                        className={`text-[10px] font-mono ${
                          s.percentage >= 80
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                            : s.percentage >= 50
                            ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                            : "bg-red-500/15 text-red-400 border border-red-500/30"
                        }`}
                      >
                        {s.score}/{s.total} ({s.percentage}%)
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {s.formattedDate} • {s.formattedTime}
                      </span>
                      <span className="opacity-40">•</span>
                      <span className="flex items-center gap-1 text-sky-400">
                        <Clock className="h-3 w-3" />
                        {formattedTime}
                      </span>
                      <span className="opacity-40">•</span>
                      <span>{s.avgSecPerQ}s / Q</span>
                    </div>
                  </div>

                  {/* Right: Quadrant Badges + Inspect Button */}
                  <div className="flex items-center gap-3 flex-shrink-0 self-end sm:self-center">
                    {/* Quadrant Quick Counts */}
                    <div className="flex items-center gap-1.5 text-[10px] font-mono">
                      <span
                        className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400"
                        title="Speed Demon (Fast & Correct)"
                      >
                        ⚡ {s.quadrants.speedDemon}
                      </span>
                      <span
                        className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400"
                        title="Careless Trap (Fast & Wrong)"
                      >
                        ⚠️ {s.quadrants.carelessTrap}
                      </span>
                      <span
                        className="px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400"
                        title="Time Grind (Slow & Correct)"
                      >
                        🐢 {s.quadrants.timeGrind}
                      </span>
                      <span
                        className="px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400"
                        title="Time Sink (Slow & Wrong)"
                      >
                        🚨 {s.quadrants.timeSink}
                      </span>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenDetail(s.id)}
                      className="h-8 gap-1 text-xs hover:border-sky-500/50 hover:text-sky-400"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>Timing Drilldown</span>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <SessionDetailModal
        sessionId={selectedSessionId}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
}

"use client";

import { useState, useMemo } from "react";
import {
  CheckCircle2,
  XCircle,
  Clock,
  Zap,
  Hourglass,
  Flame,
  TrendingDown,
  Filter,
  Layers,
  Award,
} from "lucide-react";
import { api } from "~/trpc/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { PACING_QUADRANTS, type PacingQuadrant } from "~/lib/pacing";

interface SessionDetailModalProps {
  sessionId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type FilterOption = "all" | "wrong" | "correct" | PacingQuadrant;

export function SessionDetailModal({
  sessionId,
  open,
  onOpenChange,
}: SessionDetailModalProps) {
  const [filter, setFilter] = useState<FilterOption>("all");

  const { data, isLoading } = api.stats.getSessionDetail.useQuery(
    { sessionId: sessionId! },
    { enabled: Boolean(sessionId && open) }
  );

  const filteredAttempts = useMemo(() => {
    if (!data?.attempts) return [];
    return data.attempts.filter((att) => {
      if (filter === "wrong") return !att.isCorrect;
      if (filter === "correct") return att.isCorrect;
      if (filter === "speed_demon") return att.quadrant === "speed_demon";
      if (filter === "careless_trap") return att.quadrant === "careless_trap";
      if (filter === "time_grind") return att.quadrant === "time_grind";
      if (filter === "time_sink") return att.quadrant === "time_sink";
      return true;
    });
  }, [data?.attempts, filter]);

  if (!sessionId) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto bg-card/95 border-border/60 backdrop-blur-xl p-6">
        <DialogHeader className="border-b border-border/40 pb-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <DialogTitle className="text-xl font-bold flex items-center gap-2">
                <Clock className="h-5 w-5 text-sky-400" />
                <span>
                  {data?.session.quizSetTitle ?? "Session Detail"} • Timing Drilldown
                </span>
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground font-mono mt-1">
                Completed on {data?.session.formattedDate} at{" "}
                {data?.session.formattedTime}
              </DialogDescription>
            </div>

            {data && (
              <Badge
                variant="outline"
                className="font-mono text-xs px-3 py-1 bg-sky-500/10 text-sky-400 border-sky-500/30"
              >
                {data.session.score}/{data.session.total} ({data.session.percentage}%)
              </Badge>
            )}
          </div>
        </DialogHeader>

        {isLoading ? (
          <div className="py-12 text-center space-y-3">
            <div className="h-6 w-32 bg-muted rounded mx-auto animate-pulse" />
            <div className="h-24 bg-muted/40 rounded-xl animate-pulse" />
          </div>
        ) : !data ? (
          <div className="py-12 text-center text-sm text-muted-foreground">
            Session data could not be found.
          </div>
        ) : (
          <div className="space-y-6 pt-2">
            {/* 1. Quick Timing Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-xl bg-background/60 border border-border/40 text-center">
                <span className="text-[11px] text-muted-foreground block">
                  Avg Pace
                </span>
                <span className="text-lg font-bold font-mono text-foreground">
                  {data.summary.avgTimeSec}s / Q
                </span>
              </div>

              <div className="p-3 rounded-xl bg-background/60 border border-border/40 text-center">
                <span className="text-[11px] text-muted-foreground block">
                  Fastest Q
                </span>
                <span className="text-lg font-bold font-mono text-emerald-400">
                  {data.summary.fastestAttempt
                    ? `Q#${data.summary.fastestAttempt.qNumber} (${data.summary.fastestAttempt.timeSec}s)`
                    : "N/A"}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-background/60 border border-border/40 text-center">
                <span className="text-[11px] text-muted-foreground block">
                  Slowest Q
                </span>
                <span className="text-lg font-bold font-mono text-sky-400">
                  {data.summary.slowestAttempt
                    ? `Q#${data.summary.slowestAttempt.qNumber} (${data.summary.slowestAttempt.timeSec}s)`
                    : "N/A"}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-background/60 border border-border/40 text-center">
                <span className="text-[11px] text-muted-foreground block">
                  Wasted Time
                </span>
                <span className="text-lg font-bold font-mono text-rose-400">
                  {data.summary.wastedTimeSec}s
                </span>
              </div>
            </div>

            {/* 2. Pacing Quadrants Mini Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() =>
                  setFilter(filter === "speed_demon" ? "all" : "speed_demon")
                }
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  PACING_QUADRANTS.speed_demon.cardClass
                } ${
                  filter === "speed_demon"
                    ? "ring-2 ring-emerald-400 shadow-sm"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold text-foreground">
                  <span>⚡ Speed Demon</span>
                  <span className="font-mono text-emerald-400">
                    {data.summary.quadrantCounts.speed_demon}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground">
                  Fast & Correct
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  setFilter(filter === "careless_trap" ? "all" : "careless_trap")
                }
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  PACING_QUADRANTS.careless_trap.cardClass
                } ${
                  filter === "careless_trap"
                    ? "ring-2 ring-amber-400 shadow-sm"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold text-foreground">
                  <span>⚠️ Careless</span>
                  <span className="font-mono text-amber-400">
                    {data.summary.quadrantCounts.careless_trap}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground">
                  Fast & Wrong
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  setFilter(filter === "time_grind" ? "all" : "time_grind")
                }
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  PACING_QUADRANTS.time_grind.cardClass
                } ${
                  filter === "time_grind" ? "ring-2 ring-sky-400 shadow-sm" : ""
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold text-foreground">
                  <span>🐢 Time Grind</span>
                  <span className="font-mono text-sky-400">
                    {data.summary.quadrantCounts.time_grind}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground">
                  Slow & Correct
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  setFilter(filter === "time_sink" ? "all" : "time_sink")
                }
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  PACING_QUADRANTS.time_sink.cardClass
                } ${
                  filter === "time_sink" ? "ring-2 ring-rose-400 shadow-sm" : ""
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold text-foreground">
                  <span>🚨 Time Sink</span>
                  <span className="font-mono text-rose-400">
                    {data.summary.quadrantCounts.time_sink}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground">
                  Slow & Wrong
                </span>
              </button>
            </div>

            {/* 3. Question Timing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Questions ({filteredAttempts.length} of {data.session.total})
                </span>
                {filter !== "all" && (
                  <button
                    type="button"
                    onClick={() => setFilter("all")}
                    className="text-xs text-sky-400 hover:underline font-mono"
                  >
                    Clear Filter
                  </button>
                )}
              </div>

              <div className="rounded-xl border border-border/40 divide-y divide-border/30 max-h-72 overflow-y-auto bg-background/50">
                {filteredAttempts.map((att) => {
                  const quadMeta = PACING_QUADRANTS[att.quadrant];
                  return (
                    <div
                      key={att.id}
                      className="p-3 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-7 w-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                            att.isCorrect
                              ? "bg-emerald-500/15 text-emerald-400"
                              : "bg-red-500/15 text-red-400"
                          }`}
                        >
                          {att.isCorrect ? (
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          ) : (
                            <XCircle className="h-3.5 w-3.5" />
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-foreground">
                              Q#{att.qNumber}
                            </span>
                            <Badge
                              variant="outline"
                              className={`text-[9px] px-1.5 py-0 ${quadMeta.badgeClass}`}
                            >
                              {quadMeta.icon} {quadMeta.title}
                            </Badge>
                          </div>
                          <span className="text-[10px] font-mono text-muted-foreground">
                            {att.timeSec}s
                          </span>
                        </div>
                      </div>

                      {/* Answers */}
                      <div className="flex items-center gap-3 font-mono">
                        <div className="text-right">
                          <span className="text-[10px] text-muted-foreground block">
                            Yours
                          </span>
                          <span
                            className={`font-bold ${
                              att.isCorrect ? "text-emerald-400" : "text-red-400"
                            }`}
                          >
                            {att.userAnswer || "(empty)"}
                          </span>
                        </div>

                        {!att.isCorrect && (
                          <div className="text-right pl-2 border-l border-border/40">
                            <span className="text-[10px] text-muted-foreground block">
                              Key
                            </span>
                            <span className="font-bold text-emerald-400">
                              {att.correctAnswer}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

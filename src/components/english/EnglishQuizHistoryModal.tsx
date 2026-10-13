"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  History,
  Clock,
  Award,
  ChevronRight,
  ArrowLeft,
  Trash2,
  Play,
  RotateCcw,
  Sparkles,
  Layers,
  Calendar,
  CheckCircle2,
  XCircle,
  TrendingUp,
} from "lucide-react";
import { api } from "~/trpc/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EnglishQuizResults } from "./EnglishQuizResults";

interface EnglishQuizHistoryModalProps {
  quizId: string | null;
  quizTitle?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EnglishQuizHistoryModal({
  quizId,
  quizTitle: initialTitle,
  open,
  onOpenChange,
}: EnglishQuizHistoryModalProps) {
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [deletingSessionId, setDeletingSessionId] = useState<string | null>(null);

  const utils = api.useUtils();

  // 1. Fetch all sessions for this quiz set
  const { data: historyData, isLoading: isHistoryLoading } =
    api.englishQuiz.getSessionsByQuizId.useQuery(
      { quizId: quizId! },
      { enabled: Boolean(quizId && open) }
    );

  // 2. Fetch drilldown session detail when an attempt is clicked
  const { data: sessionDetail, isLoading: isDetailLoading } =
    api.englishQuiz.getSessionDetail.useQuery(
      { sessionId: selectedSessionId! },
      { enabled: Boolean(selectedSessionId && open) }
    );

  // 3. Delete individual session mutation
  const deleteSessionMutation = api.englishQuiz.deleteSession.useMutation({
    onSuccess: () => {
      void utils.englishQuiz.getSessionsByQuizId.invalidate({ quizId: quizId! });
      void utils.englishQuiz.getAll.invalidate();
      setDeletingSessionId(null);
      if (selectedSessionId === deletingSessionId) {
        setSelectedSessionId(null);
      }
    },
  });

  const handleDeleteSession = (sessionId: string, attemptNum: number) => {
    if (confirm(`Are you sure you want to delete Attempt #${attemptNum}?`)) {
      setDeletingSessionId(sessionId);
      deleteSessionMutation.mutate({ sessionId });
    }
  };

  const sessions = historyData?.sessions ?? [];
  const currentQuizTitle = historyData?.quizTitle ?? initialTitle ?? "English Quiz";

  // Summary statistics across all attempts
  const summary = useMemo(() => {
    if (sessions.length === 0) return null;
    let bestPct = 0;
    let totalScore = 0;
    let totalPossible = 0;
    let totalDurationMs = 0;

    for (const s of sessions) {
      if (s.percentage > bestPct) bestPct = s.percentage;
      totalScore += s.score;
      totalPossible += s.total;
      totalDurationMs += s.timeTakenMs;
    }

    const avgPct =
      totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
    const avgSec = Math.round(totalDurationMs / sessions.length / 1000);

    return {
      totalAttempts: sessions.length,
      bestPct,
      avgPct,
      avgTimeFormatted: `${Math.floor(avgSec / 60)}m ${avgSec % 60}s`,
    };
  }, [sessions]);

  const getStatusBadge = (pct: number) => {
    if (pct >= 85) {
      return {
        label: "Outstanding",
        className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      };
    }
    if (pct >= 70) {
      return {
        label: "Merit Pass",
        className: "bg-primary/15 text-primary border-primary/30",
      };
    }
    if (pct >= 50) {
      return {
        label: "Satisfactory",
        className: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      };
    }
    return {
      label: "Needs Revision",
      className: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    };
  };

  const handleModalClose = (isOpen: boolean) => {
    if (!isOpen) {
      setSelectedSessionId(null);
    }
    onOpenChange(isOpen);
  };

  if (!quizId) return null;

  return (
    <Dialog open={open} onOpenChange={handleModalClose}>
      <DialogContent className="w-[96vw] max-w-5xl sm:max-w-5xl lg:max-w-6xl max-h-[92vh] overflow-y-auto bg-card/95 border-border/60 backdrop-blur-2xl p-4 sm:p-6 md:p-8 shadow-2xl rounded-3xl">
        {/* ============================================================
            DRILLDOWN DETAIL VIEW: Inspecting a single past attempt
            ============================================================ */}
        {selectedSessionId ? (
          <div className="space-y-4">
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-border/40 gap-3">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setSelectedSessionId(null)}
                className="gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground rounded-xl"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to All Attempts ({sessions.length})</span>
              </Button>

              {sessionDetail && (
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="font-mono text-xs px-2.5 py-0.5 bg-primary/10 text-primary border-primary/25"
                  >
                    Recorded Session
                  </Badge>
                </div>
              )}
            </div>

            {isDetailLoading ? (
              <div className="py-20 text-center space-y-4">
                <div className="h-10 w-10 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mx-auto animate-pulse">
                  <Clock className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold text-muted-foreground font-mono">
                  Loading detailed session metrics & pacing matrix...
                </p>
              </div>
            ) : sessionDetail ? (
              <div className="pt-2">
                <EnglishQuizResults
                  quizTitle={sessionDetail.quizTitle}
                  results={{
                    score: sessionDetail.score,
                    total: sessionDetail.total,
                    percentage: sessionDetail.percentage,
                    timeTakenMs: sessionDetail.timeTakenMs,
                    attempts: sessionDetail.attempts,
                  }}
                  subtitle={`Past Attempt • Recorded on ${sessionDetail.formattedDate} at ${sessionDetail.formattedTime}`}
                  onBack={() => setSelectedSessionId(null)}
                />
              </div>
            ) : (
              <div className="py-12 text-center text-sm text-muted-foreground">
                Session data could not be retrieved.
              </div>
            )}
          </div>
        ) : (
          /* ============================================================
             LIST VIEW: All attempts taken for this quiz set
             ============================================================ */
          <div className="space-y-6">
            <DialogHeader className="space-y-2 text-left">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                  <History className="h-4 w-4" />
                </div>
                <Badge
                  variant="outline"
                  className="bg-primary/10 text-primary border-primary/25 text-[11px] font-mono px-2 py-0.5"
                >
                  Attempt History
                </Badge>
              </div>

              <DialogTitle className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                {currentQuizTitle}
              </DialogTitle>

              <DialogDescription className="text-xs text-muted-foreground leading-relaxed">
                Review all past examination attempts, track improvement trends,
                and inspect question-by-question explanations.
              </DialogDescription>
            </DialogHeader>

            {/* Overall Analytics Strip */}
            {summary && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-card/60 border border-border/40">
                <div className="space-y-0.5 text-center sm:text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                    Total Attempts
                  </span>
                  <p className="text-lg sm:text-xl font-bold font-mono text-foreground">
                    {summary.totalAttempts} runs
                  </p>
                </div>

                <div className="space-y-0.5 text-center sm:text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                    Best Mark
                  </span>
                  <p className="text-lg sm:text-xl font-bold font-mono text-emerald-400">
                    {summary.bestPct}%
                  </p>
                </div>

                <div className="space-y-0.5 text-center sm:text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                    Avg Accuracy
                  </span>
                  <p className="text-lg sm:text-xl font-bold font-mono text-primary">
                    {summary.avgPct}%
                  </p>
                </div>

                <div className="space-y-0.5 text-center sm:text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                    Avg Duration
                  </span>
                  <p className="text-lg sm:text-xl font-bold font-mono text-sky-400">
                    {summary.avgTimeFormatted}
                  </p>
                </div>
              </div>
            )}

            {/* List of attempts */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>All Recorded Sessions</span>
                <span>{sessions.length} total</span>
              </div>

              {isHistoryLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-20 rounded-2xl bg-muted/30 border border-border/40 animate-pulse"
                    />
                  ))}
                </div>
              ) : sessions.length === 0 ? (
                <div className="py-12 text-center rounded-2xl border border-dashed border-border/60 bg-muted/10 p-6 space-y-4">
                  <Sparkles className="h-8 w-8 text-muted-foreground/40 mx-auto" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-foreground">
                      No Attempts Recorded Yet
                    </h4>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                      Take your first practice run to start tracking accuracy,
                      pacing quadrants, and explanations.
                    </p>
                  </div>
                  <Link
                    href={`/english/${quizId}`}
                    onClick={() => onOpenChange(false)}
                    className={buttonVariants({
                      size: "sm",
                      className:
                        "gap-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl text-xs",
                    })}
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Start First Practice</span>
                  </Link>
                </div>
              ) : (
                <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                  {sessions.map((s, index) => {
                    const status = getStatusBadge(s.percentage);
                    const isLatest = index === 0;
                    const totalSec = Math.round(s.timeTakenMs / 1000);
                    const minutes = Math.floor(totalSec / 60);
                    const seconds = totalSec % 60;
                    const formattedDuration = `${minutes}m ${seconds}s`;
                    const avgSecPerQ = Math.round(totalSec / (s.total || 1));

                    return (
                      <div
                        key={s.id}
                        className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 ${
                          isLatest
                            ? "bg-card/80 border-primary/40 shadow-sm"
                            : "bg-card/40 border-border/50 hover:border-border/80"
                        }`}
                      >
                        {/* Left: Attempt Number, Date, Status */}
                        <div className="space-y-1.5 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono font-bold text-xs text-foreground">
                              Attempt #{s.attemptNumber}
                            </span>

                            {isLatest && (
                              <Badge
                                variant="outline"
                                className="bg-primary/10 text-primary border-primary/30 text-[10px] font-mono py-0 px-1.5 font-bold"
                              >
                                Latest
                              </Badge>
                            )}

                            <Badge
                              variant="outline"
                              className={`text-[10px] font-mono py-0 px-2 font-semibold ${status.className}`}
                            >
                              {status.label}
                            </Badge>
                          </div>

                          <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-mono flex-wrap">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {s.formattedDate} at {s.formattedTime}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {formattedDuration} ({avgSecPerQ}s/q)
                            </span>
                          </div>
                        </div>

                        {/* Right: Score + View Button */}
                        <div className="flex items-center justify-between sm:justify-end gap-3 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/30">
                          <div className="text-left sm:text-right">
                            <span className="text-base sm:text-lg font-bold font-mono text-foreground leading-none">
                              {s.score}
                              <span className="text-xs text-muted-foreground font-normal">
                                /{s.total}
                              </span>
                            </span>
                            <span className="text-[11px] font-mono font-semibold text-primary block leading-tight">
                              {s.percentage}% accuracy
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <Button
                              type="button"
                              size="sm"
                              onClick={() => setSelectedSessionId(s.id)}
                              className="gap-1.5 rounded-xl text-xs bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold"
                            >
                              <span>View Breakdown</span>
                              <ChevronRight className="h-3.5 w-3.5" />
                            </Button>

                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                handleDeleteSession(s.id, s.attemptNumber)
                              }
                              disabled={deletingSessionId === s.id}
                              className="h-8 w-8 rounded-xl text-muted-foreground hover:text-red-400 hover:bg-red-500/10"
                              title="Delete attempt"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer: Start Practice Button */}
            <div className="flex items-center justify-between pt-3 border-t border-border/40 text-xs">
              <Button
                type="button"
                variant="ghost"
                onClick={() => onOpenChange(false)}
                className="text-xs text-muted-foreground rounded-xl"
              >
                Close
              </Button>

              <Link
                href={`/english/${quizId}`}
                onClick={() => onOpenChange(false)}
                className={buttonVariants({
                  className:
                    "gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold rounded-xl text-xs shadow-md shadow-primary/20",
                })}
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Take Practice Again</span>
              </Link>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

"use client";

import Link from "next/link";
import {
  BookOpen,
  FileText,
  Image as ImageIcon,
  CheckCircle2,
  Play,
  Award,
  Layers,
  Sparkles,
  Clock,
} from "lucide-react";
import { api } from "~/trpc/react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { QuizSetGridSkeleton } from "@/components/skeletons/QuizSetGridSkeleton";

export function QuizSetGrid() {
  const { data: quizSets, isLoading } = api.quizSet.getAll.useQuery();

  if (isLoading) {
    return <QuizSetGridSkeleton />;
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-in-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/25">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Practice Quizzes
            </h1>
          </div>
          <p className="text-sm text-muted-foreground pl-0.5">
            Select a subject or chapter to begin your timed practice session.
          </p>
        </div>

        <Link
          href="/admin"
          className={buttonVariants({
            variant: "outline",
            size: "sm",
            className:
              "gap-2 text-sm hover:border-primary/40 hover:bg-accent flex-shrink-0",
          })}
        >
          <Layers className="h-4 w-4 text-muted-foreground" />
          <span>Manage / Upload Sets</span>
        </Link>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Empty State */}
      {!quizSets || quizSets.length === 0 ? (
        <div className="text-center py-20 px-4 rounded-3xl border-2 border-dashed border-border/60 bg-card/30 space-y-5">
          <div className="h-20 w-20 mx-auto rounded-3xl bg-gradient-to-br from-primary/15 to-blue-600/5 border border-primary/20 flex items-center justify-center">
            <BookOpen className="h-9 w-9 text-primary/60" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-xl text-foreground">No Quiz Sets Yet</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
              No question sets have been created. Head to the Admin Studio to
              upload your first chapter.
            </p>
          </div>
          <Link
            href="/admin/new"
            className={buttonVariants({
              className:
                "gap-2 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground shadow-lg shadow-primary/20",
            })}
          >
            <Sparkles className="h-4 w-4" />
            <span>Create First Quiz Set</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {quizSets.map((qs) => {
            const lastSession = qs.sessions?.[0];
            const hasLastScore = !!lastSession;
            const lastPercent =
              hasLastScore && lastSession.total > 0
                ? Math.round((lastSession.score / lastSession.total) * 100)
                : 0;

            const isReady = qs._count.answers > 0 && qs._count.images > 0;

            const scoreColor =
              lastPercent >= 80
                ? "text-emerald-500 dark:text-emerald-400"
                : lastPercent >= 50
                ? "text-amber-500 dark:text-amber-400"
                : "text-red-500 dark:text-red-400";

            const scoreBadgeClass =
              lastPercent >= 80
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25"
                : lastPercent >= 50
                ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25"
                : "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/25";

            return (
              <div
                key={qs.id}
                className="group relative rounded-2xl border border-border/60 bg-card overflow-hidden flex flex-col transition-all duration-200 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5"
              >
                {/* Top accent bar */}
                <div className="h-0.5 w-full bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="p-5 space-y-4 flex-1">
                  {/* ID + Score badges */}
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="font-mono text-[10px] text-muted-foreground/70 border-border/60 bg-muted/30"
                    >
                      {qs.id.slice(0, 6).toUpperCase()}
                    </Badge>
                    {hasLastScore && (
                      <Badge
                        variant="outline"
                        className={`font-mono text-xs font-bold border ${scoreBadgeClass}`}
                      >
                        <Award className="h-3 w-3 mr-1" />
                        {lastPercent}%
                      </Badge>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {qs.title}
                  </h3>

                  {/* Stat badges */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 border border-border/40 px-2.5 py-1 rounded-lg">
                      <ImageIcon className="h-3 w-3 text-sky-500" />
                      <span>{qs._count.images} Pages</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 border border-border/40 px-2.5 py-1 rounded-lg">
                      <FileText className="h-3 w-3 text-violet-500" />
                      <span>{qs._count.answers} Questions</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 border border-border/40 px-2.5 py-1 rounded-lg">
                      <Clock className="h-3 w-3 text-emerald-500" />
                      <span>{qs._count.sessions} Attempts</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 pb-5 pt-3 border-t border-border/40 space-y-3 bg-muted/20">
                  {hasLastScore ? (
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground font-medium">Latest Score</span>
                        <span className={`text-xs font-bold font-mono ${scoreColor}`}>
                          {lastSession.score}/{lastSession.total} · {lastPercent}%
                        </span>
                      </div>
                      <Progress value={lastPercent} className="h-1.5" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground/70 py-0.5">
                      <Sparkles className="h-3 w-3 text-primary/50" />
                      <span>Not attempted yet — start your first run!</span>
                    </div>
                  )}

                  {isReady ? (
                    <Link
                      href={`/quiz/${qs.id}`}
                      className={buttonVariants({
                        className:
                          "w-full gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground shadow-md shadow-primary/20 font-semibold",
                      })}
                    >
                      <Play className="h-4 w-4 fill-current" />
                      <span>{hasLastScore ? "Retake Practice" : "Start Exam"}</span>
                    </Link>
                  ) : (
                    <Link
                      href={`/admin/${qs.id}`}
                      className={buttonVariants({
                        variant: "outline",
                        className:
                          "w-full gap-2 border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 text-sm",
                      })}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Configure Pages & Answers</span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
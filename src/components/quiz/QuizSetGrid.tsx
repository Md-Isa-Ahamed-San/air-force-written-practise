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
} from "lucide-react";
import { api } from "~/trpc/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { QuizSetGridSkeleton } from "@/components/skeletons/QuizSetGridSkeleton";

export function QuizSetGrid() {
  const { data: quizSets, isLoading } = api.quizSet.getAll.useQuery();

  if (isLoading) {
    return <QuizSetGridSkeleton />;
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border/40 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-2.5">
            <BookOpen className="h-7 w-7 text-sky-400" />
            <span>Air Force Written Practice Quizzes</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Choose a subject or chapter to begin your timed test practice.
          </p>
        </div>

        <Link
          href="/admin"
          className={buttonVariants({
            variant: "outline",
            size: "sm",
            className: "text-xs gap-1.5 hover:border-sky-500/50",
          })}
        >
          <Layers className="h-3.5 w-3.5 text-sky-400" />
          <span>Manage / Upload Sets</span>
        </Link>
      </div>

      {/* Grid */}
      {!quizSets || quizSets.length === 0 ? (
        <div className="text-center py-16 px-4 border border-dashed border-border/60 rounded-3xl bg-card/20 space-y-4">
          <div className="h-16 w-16 mx-auto rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
            <BookOpen className="h-8 w-8" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-lg text-foreground">
              No Quiz Sets Available
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              No question sets have been created yet. Head over to the Admin Studio to create your first question set.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/admin/new"
              className={buttonVariants({
                className: "gap-2 bg-primary text-primary-foreground",
              })}
            >
              <Sparkles className="h-4 w-4" />
              <span>Create First Quiz Set</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizSets.map((qs) => {
            const lastSession = qs.sessions?.[0];
            const hasLastScore = !!lastSession;
            const lastPercent =
              hasLastScore && lastSession.total > 0
                ? Math.round((lastSession.score / lastSession.total) * 100)
                : 0;

            const isReady = qs._count.answers > 0 && qs._count.images > 0;

            return (
              <div
                key={qs.id}
                className="group relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 hover:border-sky-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="font-mono text-[10px] text-muted-foreground border-border/50"
                      >
                        SET ID: {qs.id.slice(0, 6)}
                      </Badge>
                      {hasLastScore && (
                        <Badge
                          variant="secondary"
                          className={`font-mono text-xs ${
                            lastPercent >= 80
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : lastPercent >= 50
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "bg-red-500/10 text-red-400 border border-red-500/20"
                          }`}
                        >
                          <Award className="h-3 w-3 mr-1" />
                          Last: {lastPercent}%
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-sky-400 transition-colors line-clamp-2">
                      {qs.title}
                    </h3>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="gap-1.5 text-xs py-1 px-2.5 bg-background/80">
                      <ImageIcon className="h-3.5 w-3.5 text-sky-400" />
                      <span>{qs._count.images} Pages</span>
                    </Badge>
                    <Badge variant="secondary" className="gap-1.5 text-xs py-1 px-2.5 bg-background/80">
                      <FileText className="h-3.5 w-3.5 text-indigo-400" />
                      <span>{qs._count.answers} Questions</span>
                    </Badge>
                    <Badge variant="secondary" className="gap-1.5 text-xs py-1 px-2.5 bg-background/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{qs._count.sessions} Attempts</span>
                    </Badge>
                  </div>
                </div>

                {/* Footer with Progress & Start button */}
                <div className="pt-6 border-t border-border/30 mt-6 space-y-4">
                  {hasLastScore ? (
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Latest Score</span>
                        <span className="font-mono font-bold text-foreground">
                          {lastSession.score} / {lastSession.total} ({lastPercent}%)
                        </span>
                      </div>
                      <Progress value={lastPercent} className="h-1.5" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground/80 py-1">
                      <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                      <span>Not attempted yet</span>
                    </div>
                  )}

                  {isReady ? (
                    <Link
                      href={`/quiz/${qs.id}`}
                      className={buttonVariants({
                        className:
                          "w-full gap-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/20 font-semibold",
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
                          "w-full gap-2 border-amber-500/30 text-amber-400 hover:bg-amber-500/10 text-xs",
                      })}
                    >
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

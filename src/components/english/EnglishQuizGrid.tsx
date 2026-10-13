"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookA,
  Play,
  Trophy,
  History,
  Sparkles,
  Trash2,
  Clock,
  Layers,
  HelpCircle,
  FileCheck2,
} from "lucide-react";
import { api } from "~/trpc/react";
import { EnglishUploadDialog } from "./EnglishUploadDialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SAMPLE_ENGLISH_QUIZ } from "~/lib/english-utils";
import { AiJsonTemplateSection } from "./AiJsonTemplateSection";

export function EnglishQuizGrid() {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const { data: quizzes, isLoading } = api.englishQuiz.getAll.useQuery();
  const utils = api.useUtils();

  const createMutation = api.englishQuiz.create.useMutation({
    onSuccess: () => {
      void utils.englishQuiz.getAll.invalidate();
    },
  });

  const deleteMutation = api.englishQuiz.delete.useMutation({
    onSuccess: () => {
      void utils.englishQuiz.getAll.invalidate();
      setDeletingId(null);
    },
  });

  const handleQuickSeed = () => {
    createMutation.mutate({
      title: SAMPLE_ENGLISH_QUIZ.title,
      description: SAMPLE_ENGLISH_QUIZ.description,
      questions: SAMPLE_ENGLISH_QUIZ.questions.map((q) => ({
        qNumber: q.qNumber,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
      })),
    });
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      setDeletingId(id);
      deleteMutation.mutate({ id });
    }
  };

  const totalQuestionsAll =
    quizzes?.reduce((sum, q) => sum + q.questionCount, 0) ?? 0;
  const totalSessionsAll =
    quizzes?.reduce((sum, q) => sum + q.sessionCount, 0) ?? 0;

  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-in-up">
      {/* Top Glassmorphic Hero Banner */}
      <div className="relative rounded-3xl p-6 sm:p-8 overflow-hidden glass-panel border border-white/20 dark:border-white/10 shadow-2xl">
        {/* Ambient Gradient Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 via-indigo-500/20 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500/20 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>BAF Written Exam • English Wing</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              English MCQ Practice Hub
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Master grammar, vocabulary, idioms, and prepositions. Upload custom
              JSON question sets or take model exams with instant quadrant
              pacing analytics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <EnglishUploadDialog />
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-border/40">
          <div className="p-3 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/40 space-y-1">
            <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
              Total Quiz Sets
            </span>
            <p className="text-xl sm:text-2xl font-bold font-mono text-foreground">
              {quizzes?.length ?? 0}
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/40 space-y-1">
            <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
              Question Bank
            </span>
            <p className="text-xl sm:text-2xl font-bold font-mono text-primary">
              {totalQuestionsAll} Qs
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/40 space-y-1 col-span-2 sm:col-span-1">
            <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
              Practice Runs
            </span>
            <p className="text-xl sm:text-2xl font-bold font-mono text-emerald-500">
              {totalSessionsAll} attempts
            </p>
          </div>
        </div>
      </div>

      {/* AI Prompt & JSON Format Generator Section */}
      <AiJsonTemplateSection defaultExpanded={true} />

      {/* Grid of English Quizzes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookA className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">
              Available Question Sets
            </h2>
            <Badge variant="secondary" className="font-mono text-xs">
              {quizzes?.length ?? 0}
            </Badge>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-56 rounded-3xl bg-muted/30 border border-border/50 animate-pulse"
              />
            ))}
          </div>
        ) : quizzes && quizzes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="group relative flex flex-col justify-between rounded-3xl p-6 glass-card border border-white/20 dark:border-white/10 hover:border-primary/40 shadow-xl transition-all duration-300"
              >
                {/* Top badges + Delete button */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/25 font-mono text-xs font-semibold px-2.5 py-0.5 rounded-lg"
                    >
                      <Layers className="h-3 w-3 mr-1" />
                      {quiz.questionCount} Questions
                    </Badge>

                    {quiz.bestPercentage > 0 && (
                      <Badge
                        variant="outline"
                        className="bg-emerald-500/10 text-emerald-500 border-emerald-500/30 font-mono text-xs font-bold px-2 py-0.5 rounded-lg"
                      >
                        <Trophy className="h-3 w-3 mr-1 text-emerald-500" />
                        {quiz.bestPercentage}% Best
                      </Badge>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {quiz.title}
                    </h3>
                    {quiz.description && (
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                        {quiz.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bottom Stats & Action */}
                <div className="pt-5 mt-4 border-t border-border/40 space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1.5">
                      <History className="h-3.5 w-3.5 text-primary/70" />
                      {quiz.sessionCount}{" "}
                      {quiz.sessionCount === 1 ? "attempt" : "attempts"}
                    </span>

                    {quiz.latestSession && (
                      <span className="flex items-center gap-1 text-[11px] opacity-80">
                        <Clock className="h-3 w-3" />
                        Last: {quiz.latestSession.score}/{quiz.latestSession.total}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/english/${quiz.id}`}
                      className={buttonVariants({
                        className:
                          "flex-1 gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold rounded-xl text-xs shadow-md shadow-primary/20",
                      })}
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      <span>Start Practice</span>
                    </Link>

                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(quiz.id, quiz.title)}
                      disabled={deletingId === quiz.id}
                      className="h-9 w-9 rounded-xl text-muted-foreground hover:text-red-400 hover:bg-red-500/10"
                      title="Delete quiz"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-3xl border border-dashed border-border/70 p-12 text-center space-y-5 bg-card/20 backdrop-blur-sm max-w-xl mx-auto">
            <div className="h-16 w-16 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-inner">
              <FileCheck2 className="h-8 w-8" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-foreground">
                No English Quizzes Yet
              </h3>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                Upload your questions in JSON format, or load the pre-configured
                Model Test with one click to get started immediately.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button
                type="button"
                onClick={handleQuickSeed}
                disabled={createMutation.isPending}
                className="gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold rounded-xl text-xs shadow-lg shadow-primary/20"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Load Model English Test (10 Qs)</span>
              </Button>

              <EnglishUploadDialog />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

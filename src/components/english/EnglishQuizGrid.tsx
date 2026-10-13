"use client";

import { useState, useMemo } from "react";
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
  FileCheck2,
  Search,
  X,
  FileCode2,
} from "lucide-react";
import { api } from "~/trpc/react";
import { EnglishUploadDialog } from "./EnglishUploadDialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SAMPLE_ENGLISH_QUIZ } from "~/lib/english-utils";
import { AiJsonTemplateSection } from "./AiJsonTemplateSection";
import { EnglishQuizHistoryModal } from "./EnglishQuizHistoryModal";

export function EnglishQuizGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAiHelper, setShowAiHelper] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [historyQuiz, setHistoryQuiz] = useState<{
    id: string;
    title: string;
  } | null>(null);

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

  const filteredQuizzes = useMemo(() => {
    if (!quizzes) return [];
    if (!searchQuery.trim()) return quizzes;
    const q = searchQuery.toLowerCase();
    return quizzes.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        (item.description?.toLowerCase().includes(q) ?? false)
    );
  }, [quizzes, searchQuery]);

  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-in-up">
      {/* 1. Compact Standard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/25">
              <BookA className="h-4.5 w-4.5 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                English Practice
              </h1>
              <Badge
                variant="outline"
                className="font-mono text-xs bg-primary/10 text-primary border-primary/25"
              >
                {quizzes?.length ?? 0} Sets
              </Badge>
            </div>
          </div>
          <p className="text-sm text-muted-foreground pl-0.5">
            BAF Written Exam practice sets with quadrant pacing analytics.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowAiHelper((v) => !v)}
            className="gap-2 text-xs hover:border-primary/40 rounded-xl"
          >
            <FileCode2 className="h-4 w-4 text-primary" />
            <span>{showAiHelper ? "Hide Prompt / JSON" : "AI Prompt & JSON"}</span>
          </Button>

          <EnglishUploadDialog />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* 2. Optional Collapsible AI JSON Helper */}
      {showAiHelper && (
        <div className="animate-in fade-in-50 duration-200">
          <AiJsonTemplateSection defaultExpanded={true} />
        </div>
      )}

      {/* 3. Compact Search & Summary Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sets by title or topic..."
            className="pl-9 pr-8 h-9 text-xs rounded-xl bg-card/60 border-border/50"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Compact Metadata Chips */}
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground flex-wrap">
          <span className="px-2.5 py-1 rounded-lg bg-card/60 border border-border/40 flex items-center gap-1.5">
            <Layers className="h-3 w-3 text-primary" />
            <span>{totalQuestionsAll} Qs</span>
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-card/60 border border-border/40 flex items-center gap-1.5">
            <History className="h-3 w-3 text-emerald-400" />
            <span>{totalSessionsAll} runs</span>
          </span>
        </div>
      </div>

      {/* 4. Horizontal Standard Rows Layout */}
      {isLoading ? (
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-16 rounded-2xl bg-card/40 border border-border/40 animate-pulse"
            />
          ))}
        </div>
      ) : filteredQuizzes.length > 0 ? (
        <div className="space-y-2">
          {filteredQuizzes.map((quiz, idx) => (
            <div
              key={quiz.id}
              className="group relative p-3 sm:px-4 sm:py-3 rounded-2xl border border-border/50 bg-card/50 hover:bg-card/90 hover:border-primary/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-xs"
            >
              {/* Left: Index badge + Title & Description + Question Count */}
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {idx + 1}
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Link
                      href={`/english/${quiz.id}`}
                      className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors truncate max-w-lg"
                    >
                      {quiz.title}
                    </Link>
                    <Badge
                      variant="outline"
                      className="bg-muted/50 text-muted-foreground border-border/50 font-mono text-[10px] px-1.5 py-0"
                    >
                      {quiz.questionCount} Qs
                    </Badge>
                  </div>

                  {quiz.description && (
                    <p className="text-xs text-muted-foreground truncate max-w-xl">
                      {quiz.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Middle: Performance Badges (Best score, Attempt count, Last score) */}
              <div className="flex items-center gap-2 text-xs font-mono flex-shrink-0">
                {quiz.bestPercentage > 0 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setHistoryQuiz({ id: quiz.id, title: quiz.title })
                    }
                    className="px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/25 font-bold text-[11px] flex items-center gap-1 hover:scale-105 transition-transform cursor-pointer"
                    title="Click to view attempt history"
                  >
                    <Trophy className="h-3 w-3" />
                    <span>{quiz.bestPercentage}% Best</span>
                  </button>
                ) : (
                  <span className="text-[11px] text-muted-foreground/60 hidden sm:inline-block">
                    Not taken yet
                  </span>
                )}

                {quiz.sessionCount > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      setHistoryQuiz({ id: quiz.id, title: quiz.title })
                    }
                    className="px-2 py-0.5 rounded-lg bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground text-[11px] transition-colors cursor-pointer flex items-center gap-1"
                    title="View attempt history"
                  >
                    <History className="h-3 w-3 text-primary" />
                    <span>
                      {quiz.sessionCount} {quiz.sessionCount === 1 ? "run" : "runs"}
                    </span>
                  </button>
                )}

                {quiz.latestSession && (
                  <span className="text-[11px] text-muted-foreground/80 hidden lg:inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>
                      Last: {quiz.latestSession.score}/{quiz.latestSession.total}
                    </span>
                  </span>
                )}
              </div>

              {/* Right: Actions (Start Practice, Results, Delete) */}
              <div className="flex items-center gap-2 flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-border/30">
                <Link
                  href={`/english/${quiz.id}`}
                  className={buttonVariants({
                    size: "sm",
                    className:
                      "gap-1.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold rounded-xl text-xs shadow-xs",
                  })}
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Practice</span>
                </Link>

                {quiz.sessionCount > 0 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setHistoryQuiz({ id: quiz.id, title: quiz.title })
                    }
                    className="gap-1.5 rounded-xl text-xs hover:border-primary/40 font-mono"
                    title="View past results"
                  >
                    <History className="h-3.5 w-3.5 text-primary" />
                    <span className="hidden sm:inline">Results</span> ({quiz.sessionCount})
                  </Button>
                )}

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(quiz.id, quiz.title)}
                  disabled={deletingId === quiz.id}
                  className="h-8 w-8 rounded-xl text-muted-foreground hover:text-red-400 hover:bg-red-500/10"
                  title="Delete quiz set"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : searchQuery ? (
        /* No Search Match State */
        <div className="rounded-2xl border border-dashed border-border/60 p-8 text-center space-y-3 bg-card/20">
          <p className="text-sm font-semibold text-foreground">
            No question sets match &ldquo;{searchQuery}&rdquo;
          </p>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setSearchQuery("")}
            className="text-xs"
          >
            Clear Search
          </Button>
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

      {/* Quiz Attempt History Modal */}
      <EnglishQuizHistoryModal
        quizId={historyQuiz?.id ?? null}
        quizTitle={historyQuiz?.title}
        open={Boolean(historyQuiz)}
        onOpenChange={(open) => {
          if (!open) setHistoryQuiz(null);
        }}
      />
    </div>
  );
}

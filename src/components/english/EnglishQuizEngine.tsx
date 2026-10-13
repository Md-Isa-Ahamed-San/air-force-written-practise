"use client";

import { useReducer, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Send,
  AlertCircle,
  HelpCircle,
  Sparkles,
  BookA,
  LayoutGrid,
  X,
} from "lucide-react";
import { api } from "~/trpc/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  EnglishQuizResults,
  type EnglishSessionResult,
} from "./EnglishQuizResults";
import { useCurrentTimestamp } from "~/hooks/use-timer";
import type { EnglishOptionMap } from "~/lib/english-utils";

interface EnglishQuizState {
  currentQuestion: number;
  answers: Record<number, string>;
  timers: Record<number, number>;
  flagged: Record<number, boolean>;
  questionStartTime: number;
  sessionStartTime: number;
  submitDialogOpen: boolean;
  navDrawerOpen: boolean;
  phase: "answering" | "submitted";
  results: EnglishSessionResult | null;
}

type EnglishQuizAction =
  | { type: "SET_ANSWER"; payload: { qNumber: number; answer: string } }
  | { type: "TOGGLE_FLAG"; payload: { qNumber: number } }
  | { type: "GO_TO_QUESTION"; payload: { qNumber: number } }
  | { type: "NEXT_QUESTION"; payload: { total: number } }
  | { type: "PREV_QUESTION" }
  | { type: "SET_SUBMIT_DIALOG"; payload: boolean }
  | { type: "SET_NAV_DRAWER"; payload: boolean }
  | { type: "SUBMIT_SUCCESS"; payload: EnglishSessionResult }
  | { type: "RESET_QUIZ" };

function createInitialState(): EnglishQuizState {
  const now = Date.now();
  return {
    currentQuestion: 1,
    answers: {},
    timers: {},
    flagged: {},
    questionStartTime: now,
    sessionStartTime: now,
    submitDialogOpen: false,
    navDrawerOpen: false,
    phase: "answering",
    results: null,
  };
}

function englishQuizReducer(
  state: EnglishQuizState,
  action: EnglishQuizAction
): EnglishQuizState {
  const now = Date.now();

  switch (action.type) {
    case "SET_ANSWER": {
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.qNumber]: action.payload.answer,
        },
      };
    }

    case "TOGGLE_FLAG": {
      return {
        ...state,
        flagged: {
          ...state.flagged,
          [action.payload.qNumber]: !state.flagged[action.payload.qNumber],
        },
      };
    }

    case "GO_TO_QUESTION": {
      if (action.payload.qNumber === state.currentQuestion) return state;
      const elapsed = now - state.questionStartTime;
      return {
        ...state,
        timers: {
          ...state.timers,
          [state.currentQuestion]:
            (state.timers[state.currentQuestion] ?? 0) + elapsed,
        },
        currentQuestion: action.payload.qNumber,
        questionStartTime: now,
        navDrawerOpen: false,
      };
    }

    case "NEXT_QUESTION": {
      if (state.currentQuestion >= action.payload.total) return state;
      const elapsed = now - state.questionStartTime;
      return {
        ...state,
        timers: {
          ...state.timers,
          [state.currentQuestion]:
            (state.timers[state.currentQuestion] ?? 0) + elapsed,
        },
        currentQuestion: state.currentQuestion + 1,
        questionStartTime: now,
      };
    }

    case "PREV_QUESTION": {
      if (state.currentQuestion <= 1) return state;
      const elapsed = now - state.questionStartTime;
      return {
        ...state,
        timers: {
          ...state.timers,
          [state.currentQuestion]:
            (state.timers[state.currentQuestion] ?? 0) + elapsed,
        },
        currentQuestion: state.currentQuestion - 1,
        questionStartTime: now,
      };
    }

    case "SET_SUBMIT_DIALOG": {
      return { ...state, submitDialogOpen: action.payload };
    }

    case "SET_NAV_DRAWER": {
      return { ...state, navDrawerOpen: action.payload };
    }

    case "SUBMIT_SUCCESS": {
      return {
        ...state,
        phase: "submitted",
        submitDialogOpen: false,
        results: action.payload,
      };
    }

    case "RESET_QUIZ": {
      return createInitialState();
    }

    default:
      return state;
  }
}

export function EnglishQuizEngine({ quizId }: { quizId: string }) {
  const [state, dispatch] = useReducer(englishQuizReducer, null, createInitialState);
  const currentTimestamp = useCurrentTimestamp();

  const { data: quiz, isLoading } = api.englishQuiz.getById.useQuery({
    id: quizId,
  });

  const submitMutation = api.englishQuiz.submitSession.useMutation({
    onSuccess: (data) => {
      dispatch({
        type: "SUBMIT_SUCCESS",
        payload: {
          score: data.score,
          total: data.total,
          percentage: data.percentage,
          timeTakenMs: data.timeTakenMs,
          attempts: data.attempts,
        },
      });
    },
  });

  const totalQuestions = quiz?.questions.length ?? 0;

  const currentQData = useMemo(() => {
    if (!quiz || !quiz.questions) return null;
    return (
      quiz.questions.find((q) => q.qNumber === state.currentQuestion) ??
      quiz.questions[state.currentQuestion - 1] ??
      null
    );
  }, [quiz, state.currentQuestion]);

  const answeredCount = useMemo(() => {
    return Object.keys(state.answers).filter(
      (k) => state.answers[Number(k)]?.trim()
    ).length;
  }, [state.answers]);

  const unansweredCount = Math.max(0, totalQuestions - answeredCount);
  const flaggedCount = useMemo(() => {
    return Object.values(state.flagged).filter(Boolean).length;
  }, [state.flagged]);

  // Overall timing
  const totalElapsedSec = Math.max(
    0,
    Math.floor((currentTimestamp - state.sessionStartTime) / 1000)
  );
  const totalMinutes = Math.floor(totalElapsedSec / 60);
  const totalSeconds = totalElapsedSec % 60;
  const formattedOverallTime = `${totalMinutes}:${totalSeconds.toString().padStart(2, "0")}`;

  // Current question timing
  const currentQAccumulatedMs = state.timers[state.currentQuestion] ?? 0;
  const currentQElapsedSec = Math.max(
    0,
    Math.floor(
      (currentQAccumulatedMs + (currentTimestamp - state.questionStartTime)) / 1000
    )
  );

  // Keyboard Shortcuts (1-4 -> A-D, a-d -> A-D, ArrowLeft/ArrowRight)
  useEffect(() => {
    if (state.phase !== "answering" || state.submitDialogOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.ctrlKey || e.altKey || e.metaKey) return;
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === "textarea" || tag === "input") return;

      const key = e.key;
      const map: Record<string, string> = {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D",
        a: "A",
        A: "A",
        b: "B",
        B: "B",
        c: "C",
        C: "C",
        d: "D",
        D: "D",
      };

      if (map[key]) {
        e.preventDefault();
        dispatch({
          type: "SET_ANSWER",
          payload: { qNumber: state.currentQuestion, answer: map[key]! },
        });
        return;
      }

      if (key === "ArrowLeft") {
        e.preventDefault();
        dispatch({ type: "PREV_QUESTION" });
        return;
      }

      if (key === "ArrowRight") {
        e.preventDefault();
        if (state.currentQuestion < totalQuestions) {
          dispatch({
            type: "NEXT_QUESTION",
            payload: { total: totalQuestions },
          });
        } else {
          dispatch({ type: "SET_SUBMIT_DIALOG", payload: true });
        }
        return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state.phase, state.submitDialogOpen, state.currentQuestion, totalQuestions]);

  const handleConfirmSubmit = () => {
    if (!quiz) return;

    const now = Date.now();
    const finalElapsed = now - state.questionStartTime;
    const finalTimers = {
      ...state.timers,
      [state.currentQuestion]:
        (state.timers[state.currentQuestion] ?? 0) + finalElapsed,
    };
    const totalTimeTakenMs = now - state.sessionStartTime;

    const attemptsPayload = quiz.questions.map((q) => ({
      qNumber: q.qNumber,
      userAnswer: state.answers[q.qNumber]?.trim() ?? "",
      timeTakenMs: Math.max(finalTimers[q.qNumber] ?? 0, 0),
    }));

    submitMutation.mutate({
      quizId,
      timeTakenMs: totalTimeTakenMs,
      attempts: attemptsPayload,
    });
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center p-6 bg-background">
        <div className="text-center space-y-4">
          <div className="h-12 w-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mx-auto animate-pulse">
            <BookA className="h-6 w-6" />
          </div>
          <p className="text-sm font-semibold text-muted-foreground">
            Loading English Practice Set...
          </p>
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="h-screen w-screen flex items-center justify-center p-6 bg-background">
        <div className="max-w-md mx-auto text-center space-y-4 rounded-3xl glass-card p-8">
          <AlertCircle className="h-10 w-10 text-amber-500 mx-auto" />
          <h2 className="text-lg font-bold text-foreground">Quiz Not Found</h2>
          <p className="text-xs text-muted-foreground">
            This quiz set may have been removed or does not exist.
          </p>
          <Link href="/english" className={buttonVariants({ size: "sm" })}>
            Return to English Hub
          </Link>
        </div>
      </div>
    );
  }

  if (state.phase === "submitted" && state.results) {
    return (
      <div className="min-h-screen w-full bg-background p-4 sm:p-6 md:p-8 overflow-y-auto">
        <EnglishQuizResults
          quizTitle={quiz.title}
          results={state.results}
          onRetry={() => dispatch({ type: "RESET_QUIZ" })}
        />
      </div>
    );
  }

  const currentAnswer = state.answers[state.currentQuestion] ?? "";
  const isFlagged = Boolean(state.flagged[state.currentQuestion]);
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
  const optionsMap = (currentQData?.options ?? {}) as EnglishOptionMap;
  const optionsEntries = Object.entries(optionsMap);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-background">
      {/* 1. Sleek Top Glassmorphic Exam Header */}
      <header className="h-16 px-4 sm:px-6 border-b border-white/10 dark:border-white/5 bg-card/60 backdrop-blur-xl flex items-center justify-between gap-4 z-20 flex-shrink-0">
        {/* Left: Back + Title */}
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/english"
            className="h-9 w-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
            title="Leave Exam"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-xs sm:text-sm font-bold text-foreground truncate">
                {quiz.title}
              </h1>
              <Badge
                variant="outline"
                className="hidden sm:inline-flex bg-primary/10 text-primary border-primary/25 text-[10px] font-mono px-1.5 py-0"
              >
                English Wing
              </Badge>
            </div>
            <p className="text-[11px] text-muted-foreground font-mono">
              Question {state.currentQuestion} of {totalQuestions} •{" "}
              {progressPercent}% Complete
            </p>
          </div>
        </div>

        {/* Center: Live Timers */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-muted/40 border border-border/40 text-xs font-mono">
            <Clock className="h-3.5 w-3.5 text-primary animate-pulse" />
            <span className="font-bold text-foreground">
              {formattedOverallTime}
            </span>
            <span className="hidden sm:inline text-muted-foreground text-[10px]">
              total
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-card/60 border border-border/40 text-xs font-mono text-muted-foreground">
            <span>This Q:</span>
            <span className="font-bold text-foreground">
              {currentQElapsedSec}s
            </span>
          </div>
        </div>

        {/* Right: Nav Palette + Submit Button */}
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => dispatch({ type: "SET_NAV_DRAWER", payload: true })}
            className="gap-1.5 rounded-xl border-border/60 text-xs font-mono"
            title="Open question navigator"
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Palette</span>
          </Button>

          <Button
            type="button"
            onClick={() => dispatch({ type: "SET_SUBMIT_DIALOG", payload: true })}
            className="gap-1.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold rounded-xl text-xs shadow-md shadow-primary/20"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Finish</span>
          </Button>
        </div>
      </header>

      {/* Progress Line */}
      <div className="w-full h-1 bg-muted/40 overflow-hidden flex-shrink-0">
        <div
          className="h-full bg-gradient-to-r from-primary via-indigo-500 to-blue-500 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 2. Main Question Stage */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex items-center justify-center relative">
        {/* Subtle Ambient Background Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="w-full max-w-3xl relative z-10 space-y-6">
          {/* Question Card (Glassmorphism) */}
          <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-white/20 dark:border-white/10 shadow-2xl space-y-6">
            {/* Question Header: Badge, Flag, Timer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Badge className="bg-primary text-primary-foreground font-mono text-xs font-bold px-3 py-1 rounded-xl shadow-md shadow-primary/20">
                  Question {state.currentQuestion}
                </Badge>
                <span className="text-xs font-mono text-muted-foreground">
                  of {totalQuestions}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_FLAG",
                      payload: { qNumber: state.currentQuestion },
                    })
                  }
                  className={`gap-1.5 rounded-xl text-xs transition-colors ${
                    isFlagged
                      ? "text-amber-500 bg-amber-500/10 hover:bg-amber-500/20"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Bookmark
                    className={`h-3.5 w-3.5 ${isFlagged ? "fill-amber-500" : ""}`}
                  />
                  <span>{isFlagged ? "Flagged" : "Flag"}</span>
                </Button>
              </div>
            </div>

            {/* Prompt Text */}
            <div className="py-2">
              <p className="text-base sm:text-xl font-semibold text-foreground leading-relaxed">
                {currentQData?.question ?? "Question text unavailable"}
              </p>
            </div>

            {/* Options List (Glass Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {optionsEntries.map(([key, val], idx) => {
                const isSelected = currentAnswer.toUpperCase() === key.toUpperCase();
                const shortcutNum = idx + 1;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "SET_ANSWER",
                        payload: { qNumber: state.currentQuestion, answer: key },
                      })
                    }
                    className={`group relative text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                      isSelected
                        ? "border-primary bg-primary/15 shadow-lg shadow-primary/15 text-foreground ring-2 ring-primary/30"
                        : "border-border/60 hover:border-primary/40 bg-card/40 hover:bg-card/70 text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`h-8 w-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected
                            ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                            : "bg-muted/70 group-hover:bg-primary/20 text-muted-foreground group-hover:text-primary"
                        }`}
                      >
                        {key}
                      </div>

                      <span className="text-sm font-medium leading-snug line-clamp-3">
                        {val}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[10px] font-mono text-muted-foreground/60 hidden sm:inline">
                        [{shortcutNum}]
                      </span>
                      <div
                        className={`h-4 w-4 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected
                            ? "border-primary bg-primary text-white"
                            : "border-border/60 bg-transparent"
                        }`}
                      >
                        {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Floating Navigation Controls */}
          <div className="flex items-center justify-between gap-4 px-2">
            <Button
              type="button"
              variant="outline"
              disabled={state.currentQuestion <= 1}
              onClick={() => dispatch({ type: "PREV_QUESTION" })}
              className="gap-2 rounded-2xl border-border/60 glass-button text-xs font-semibold px-4"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
              Tip: Use 1-4 or A-D keys, ← / → arrows
            </span>

            {state.currentQuestion < totalQuestions ? (
              <Button
                type="button"
                onClick={() =>
                  dispatch({
                    type: "NEXT_QUESTION",
                    payload: { total: totalQuestions },
                  })
                }
                className="gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold rounded-2xl text-xs px-5 shadow-lg shadow-primary/20"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={() =>
                  dispatch({ type: "SET_SUBMIT_DIALOG", payload: true })
                }
                className="gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-2xl text-xs px-5 shadow-lg shadow-emerald-500/20"
              >
                <span>Submit Exam</span>
                <Send className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </main>

      {/* 3. Question Jump Navigator Drawer (Glass Modal) */}
      <Dialog
        open={state.navDrawerOpen}
        onOpenChange={(open) =>
          dispatch({ type: "SET_NAV_DRAWER", payload: open })
        }
      >
        <DialogContent className="max-w-md p-6 border border-white/20 bg-background/95 backdrop-blur-2xl rounded-3xl shadow-2xl">
          <DialogHeader className="pb-3 border-b border-border/40">
            <DialogTitle className="text-base font-bold text-foreground">
              Question Navigator
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              {answeredCount} answered • {unansweredCount} remaining •{" "}
              {flaggedCount} flagged
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-2.5 max-h-[320px] overflow-y-auto p-1">
              {quiz.questions.map((q) => {
                const isAnswered = Boolean(state.answers[q.qNumber]?.trim());
                const isCurrent = state.currentQuestion === q.qNumber;
                const isQFlagged = Boolean(state.flagged[q.qNumber]);

                let btnClass = "border-border/60 bg-card/40 text-muted-foreground";
                if (isCurrent) {
                  btnClass = "border-primary bg-primary text-primary-foreground font-bold shadow-md shadow-primary/30";
                } else if (isAnswered) {
                  btnClass = "border-emerald-500/40 bg-emerald-500/15 text-emerald-500 font-semibold";
                }

                return (
                  <button
                    key={q.qNumber}
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "GO_TO_QUESTION",
                        payload: { qNumber: q.qNumber },
                      })
                    }
                    className={`relative h-11 rounded-xl border text-xs font-mono flex items-center justify-center transition-all hover:scale-105 ${btnClass}`}
                  >
                    <span>{q.qNumber}</span>
                    {isQFlagged && (
                      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border/40 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span>Flagged</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>Current</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 4. Submission Confirmation Dialog */}
      <Dialog
        open={state.submitDialogOpen}
        onOpenChange={(open) =>
          dispatch({ type: "SET_SUBMIT_DIALOG", payload: open })
        }
      >
        <DialogContent className="max-w-md p-6 border border-white/20 bg-background/95 backdrop-blur-2xl rounded-3xl shadow-2xl">
          <DialogHeader className="space-y-2">
            <div className="h-10 w-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-1">
              <Send className="h-5 w-5" />
            </div>
            <DialogTitle className="text-lg font-bold text-foreground">
              Confirm Examination Submission
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground leading-relaxed">
              Are you ready to submit your answers? You will immediately receive
              your detailed score, quadrant pacing analysis, and question review.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-3 py-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <span className="text-xs text-muted-foreground">Answered</span>
              <p className="text-xl font-bold font-mono text-emerald-500 mt-1">
                {answeredCount} / {totalQuestions}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-xs text-muted-foreground">Unanswered</span>
              <p className="text-xl font-bold font-mono text-amber-500 mt-1">
                {unansweredCount}
              </p>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0 pt-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() =>
                dispatch({ type: "SET_SUBMIT_DIALOG", payload: false })
              }
              className="rounded-xl text-xs"
            >
              Continue Test
            </Button>

            <Button
              type="button"
              onClick={handleConfirmSubmit}
              disabled={submitMutation.isPending}
              className="gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold rounded-xl text-xs shadow-md shadow-primary/20"
            >
              {submitMutation.isPending ? "Grading..." : "Submit Answers"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

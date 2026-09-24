"use client";

import { useReducer, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { AlertCircle, BookOpen, Layers } from "lucide-react";
import { api } from "~/trpc/react";
import { buttonVariants } from "@/components/ui/button";
import { QuizHeader } from "./QuizHeader";
import { QuizImageViewer } from "./QuizImageViewer";
import { AnswerInputPanel } from "./AnswerInputPanel";
import { QuestionNavigator } from "./QuestionNavigator";
import { SubmitQuizDialog } from "./SubmitQuizDialog";
import { QuizResults, type QuizSessionResult } from "./QuizResults";
import { QuizEngineSkeleton } from "@/components/skeletons/QuizEngineSkeleton";
import { useCurrentTimestamp, useElapsedSeconds } from "~/hooks/use-timer";

interface QuizEngineState {
  currentQuestion: number;
  currentImageIndex: number;
  answers: Record<number, string>;
  timers: Record<number, number>;
  questionStartTime: number;
  sessionStartTime: number;
  submitDialogOpen: boolean;
  phase: "answering" | "submitted";
  results: QuizSessionResult | null;
}

type QuizEngineAction =
  | { type: "SET_ANSWER"; payload: { qNumber: number; answer: string } }
  | { type: "GO_TO_QUESTION"; payload: { qNumber: number } }
  | { type: "NEXT_QUESTION"; payload: { total: number } }
  | { type: "PREV_QUESTION" }
  | { type: "SET_IMAGE_PAGE"; payload: { index: number } }
  | { type: "SET_SUBMIT_DIALOG"; payload: boolean }
  | { type: "SUBMIT_SUCCESS"; payload: QuizSessionResult }
  | { type: "RESET_QUIZ" };

function createInitialState(): QuizEngineState {
  const now = Date.now();
  return {
    currentQuestion: 1,
    currentImageIndex: 0,
    answers: {},
    timers: {},
    questionStartTime: now,
    sessionStartTime: now,
    submitDialogOpen: false,
    phase: "answering",
    results: null,
  };
}

function quizEngineReducer(
  state: QuizEngineState,
  action: QuizEngineAction
): QuizEngineState {
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

    case "SET_IMAGE_PAGE": {
      return {
        ...state,
        currentImageIndex: action.payload.index,
      };
    }

    case "SET_SUBMIT_DIALOG": {
      return {
        ...state,
        submitDialogOpen: action.payload,
      };
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

export function QuizEngine({ quizSetId }: { quizSetId: string }) {
  const { data: quizSet, isLoading } = api.quizSet.getById.useQuery({
    id: quizSetId,
  });

  const utils = api.useUtils();

  const [state, dispatch] = useReducer(
    quizEngineReducer,
    undefined,
    createInitialState
  );

  const submitMutation = api.quiz.submitSession.useMutation({
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
      void utils.stats.getOverview.invalidate();
      void utils.stats.getSessionHistory.invalidate();
      void utils.stats.getQuestionAccuracy.invalidate();
      void utils.stats.getWeakQuestions.invalidate();
      void utils.stats.getMastery.invalidate();
      void utils.quizSet.getAll.invalidate();
    },
  });

  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);
  const [mobileTab, setMobileTab] = useState<"image" | "omr">("image");

  // ⚠️ Must be called unconditionally at the top level — before any early returns
  const currentTimestamp = useCurrentTimestamp();
  const totalElapsedSec = useElapsedSeconds(state.sessionStartTime);

  // Calculate question metrics
  const totalQuestions = quizSet?.answers.length ?? 0;

  const answeredCount = useMemo(() => {
    return Object.keys(state.answers).filter(
      (k) => state.answers[Number(k)]?.trim()
    ).length;
  }, [state.answers]);

  const unansweredQuestions = useMemo(() => {
    if (!quizSet) return [];
    const list: number[] = [];
    for (const ans of quizSet.answers) {
      if (!state.answers[ans.qNumber]?.trim()) {
        list.push(ans.qNumber);
      }
    }
    return list;
  }, [quizSet, state.answers]);

  // Global Keyboard Shortcuts (1-4 -> A-D, A-D, ArrowLeft/ArrowRight)
  useEffect(() => {
    if (state.phase !== "answering" || state.submitDialogOpen) return;

    const handleWindowKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return;
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (activeTag === "textarea") return;

      const key = e.key;

      // 1, 2, 3, 4 (and Numpad 1-4, Bengali digits) -> A, B, C, D
      const numMap: Record<string, string> = {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D",
        "১": "A",
        "২": "B",
        "৩": "C",
        "৪": "D",
      };

      if (numMap[key]) {
        e.preventDefault();
        dispatch({
          type: "SET_ANSWER",
          payload: { qNumber: state.currentQuestion, answer: numMap[key]! },
        });
        return;
      }

      // Letter A, B, C, D and Bengali ক, খ, গ, ঘ
      const letterMap: Record<string, string> = {
        a: "A",
        A: "A",
        b: "B",
        B: "B",
        c: "C",
        C: "C",
        d: "D",
        D: "D",
        "ক": "A",
        "খ": "B",
        "গ": "C",
        "ঘ": "D",
      };

      if (letterMap[key]) {
        e.preventDefault();
        dispatch({
          type: "SET_ANSWER",
          payload: { qNumber: state.currentQuestion, answer: letterMap[key]! },
        });
        return;
      }

      // Arrow navigation
      if (key === "ArrowLeft" || key === "ArrowUp") {
        e.preventDefault();
        dispatch({ type: "PREV_QUESTION" });
        return;
      }

      if (key === "ArrowRight" || key === "ArrowDown") {
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

    window.addEventListener("keydown", handleWindowKeyDown);
    return () => window.removeEventListener("keydown", handleWindowKeyDown);
  }, [state.phase, state.submitDialogOpen, state.currentQuestion, totalQuestions]);

  const handleConfirmSubmit = () => {
    if (!quizSet) return;

    const now = Date.now();
    const finalElapsed = now - state.questionStartTime;
    const finalTimers = {
      ...state.timers,
      [state.currentQuestion]:
        (state.timers[state.currentQuestion] ?? 0) + finalElapsed,
    };
    const totalTimeTakenMs = now - state.sessionStartTime;

    const attemptsPayload = quizSet.answers.map((ans) => ({
      qNumber: ans.qNumber,
      userAnswer: state.answers[ans.qNumber]?.trim() ?? "",
      timeTakenMs: Math.max(finalTimers[ans.qNumber] ?? 0, 0),
    }));

    submitMutation.mutate({
      quizSetId,
      timeTakenMs: totalTimeTakenMs,
      attempts: attemptsPayload,
    });
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center p-6 bg-background">
        <QuizEngineSkeleton />
      </div>
    );
  }

  if (!quizSet) {
    return (
      <div className="h-screen w-screen flex items-center justify-center p-6 bg-background">
        <div className="max-w-md mx-auto text-center space-y-4">
          <h2 className="text-xl font-bold text-foreground">Quiz Set Not Found</h2>
          <p className="text-sm text-muted-foreground">
            This question set might have been removed.
          </p>
          <Link href="/quiz" className={buttonVariants()}>
            Back to Quiz Sets
          </Link>
        </div>
      </div>
    );
  }

  if (quizSet.answers.length === 0) {
    return (
      <div className="h-screen w-screen flex items-center justify-center p-6 bg-background">
        <div className="max-w-md mx-auto text-center space-y-4 rounded-3xl border border-dashed border-border/60 p-8 bg-card/20">
          <AlertCircle className="h-10 w-10 mx-auto text-amber-400" />
          <h2 className="text-xl font-bold text-foreground">
            No Answer Sheet Configured
          </h2>
          <p className="text-sm text-muted-foreground">
            This quiz set has no answers loaded yet. Please configure the MDX answer sheet in the Admin Studio before practicing.
          </p>
          <div className="pt-2">
            <Link href={`/admin/${quizSet.id}`} className={buttonVariants()}>
              Go to Admin Studio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // If already submitted, show results view in scrollable container!
  if (state.phase === "submitted" && state.results) {
    return (
      <div className="h-screen w-screen overflow-y-auto p-4 sm:p-8 bg-background">
        <QuizResults
          quizTitle={quizSet.title}
          results={state.results}
          onRetry={() => dispatch({ type: "RESET_QUIZ" })}
        />
      </div>
    );
  }

  // Active quiz answering interface - Full Viewport Distraction-Free (Live second-by-second updates)

  const currentAnswer = state.answers[state.currentQuestion] ?? "";
  const currentQAccumulatedMs = state.timers[state.currentQuestion] ?? 0;
  const currentQElapsedSec = Math.max(
    0,
    Math.floor(
      (currentQAccumulatedMs + (currentTimestamp - state.questionStartTime)) / 1000
    )
  );

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-background">
      {/* 1. Sleek Compact Top Examination Bar */}
      <QuizHeader
        title={quizSet.title}
        currentQuestion={state.currentQuestion}
        totalQuestions={totalQuestions}
        answeredCount={answeredCount}
        totalElapsedSec={totalElapsedSec}
        isPanelCollapsed={isPanelCollapsed}
        onTogglePanel={() => setIsPanelCollapsed((prev) => !prev)}
        onSubmitPrompt={() =>
          dispatch({ type: "SET_SUBMIT_DIALOG", payload: true })
        }
      />

      {/* 2. Main Full-Height Split Canvas */}
      <div className="flex-1 flex overflow-hidden min-h-0 relative">
        {/* Left / Main Section: Book Page Scans Image Viewer (Maximised to take all space) */}
        <div
          className={`flex-1 h-full min-w-0 transition-all duration-200 ${
            mobileTab === "omr" ? "hidden lg:flex" : "flex"
          }`}
        >
          <QuizImageViewer
            images={quizSet.images}
            currentImageIndex={state.currentImageIndex}
            onPageChange={(index) =>
              dispatch({ type: "SET_IMAGE_PAGE", payload: { index } })
            }
            isPanelCollapsed={isPanelCollapsed}
            onTogglePanel={() => setIsPanelCollapsed((prev) => !prev)}
          />
        </div>

        {/* Right Section: Answer Input & Question Navigator */}
        <aside
          className={`${
            isPanelCollapsed ? "hidden" : "flex"
          } ${
            mobileTab === "image" ? "hidden lg:flex" : "flex"
          } w-full lg:w-[380px] xl:w-[420px] flex-shrink-0 flex-col h-full border-l border-border/50 bg-card/50 backdrop-blur-md overflow-hidden z-10 transition-all duration-200`}
        >
          {/* Scrollable container for OMR & Navigator */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnswerInputPanel
              currentQuestion={state.currentQuestion}
              totalQuestions={totalQuestions}
              currentAnswer={currentAnswer}
              questionElapsedSec={currentQElapsedSec}
              onSetAnswer={(answer) =>
                dispatch({
                  type: "SET_ANSWER",
                  payload: { qNumber: state.currentQuestion, answer },
                })
              }
              onNextQuestion={() =>
                dispatch({
                  type: "NEXT_QUESTION",
                  payload: { total: totalQuestions },
                })
              }
              onPrevQuestion={() => dispatch({ type: "PREV_QUESTION" })}
              onSubmitPrompt={() =>
                dispatch({ type: "SET_SUBMIT_DIALOG", payload: true })
              }
            />

            <QuestionNavigator
              totalQuestions={totalQuestions}
              currentQuestion={state.currentQuestion}
              answers={state.answers}
              onSelectQuestion={(qNumber) =>
                dispatch({ type: "GO_TO_QUESTION", payload: { qNumber } })
              }
            />
          </div>
        </aside>

        {/* Floating Quick Tab to re-open panel when collapsed on desktop */}
        {isPanelCollapsed && (
          <button
            type="button"
            onClick={() => setIsPanelCollapsed(false)}
            className="hidden lg:flex absolute top-3 right-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-card/90 border border-sky-500/40 text-foreground font-mono text-xs shadow-xl shadow-black/50 hover:bg-card hover:border-sky-400 transition-all backdrop-blur-md"
            title="Open Answer & Question Navigator Panel"
          >
            <span className="text-sky-400 font-bold">Q#{state.currentQuestion}:</span>
            <span className="font-semibold">{currentAnswer || "(Not Answered)"}</span>
            <span className="h-3 w-px bg-border mx-0.5" />
            <span className="text-muted-foreground hover:text-foreground">Show Panel</span>
          </button>
        )}

        {/* Mobile Bottom Tab Switcher */}
        <div className="lg:hidden fixed bottom-3 inset-x-4 z-30 flex items-center justify-center">
          <div className="bg-card/95 border border-border/60 backdrop-blur-lg rounded-2xl p-1 shadow-2xl flex items-center gap-1">
            <button
              type="button"
              onClick={() => setMobileTab("image")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                mobileTab === "image"
                  ? "bg-sky-500 text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              📖 Question Page
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("omr")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                mobileTab === "omr"
                  ? "bg-sky-500 text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              📝 Answer Sheet (#{state.currentQuestion})
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <SubmitQuizDialog
        open={state.submitDialogOpen}
        onOpenChange={(open) =>
          dispatch({ type: "SET_SUBMIT_DIALOG", payload: open })
        }
        totalQuestions={totalQuestions}
        answeredCount={answeredCount}
        unansweredQuestions={unansweredQuestions}
        isSubmitting={submitMutation.isPending}
        onConfirmSubmit={handleConfirmSubmit}
      />
    </div>
  );
}

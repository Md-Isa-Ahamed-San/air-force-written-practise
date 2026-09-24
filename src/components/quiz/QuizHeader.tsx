"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Send,
  PanelRightClose,
  PanelRightOpen,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface QuizHeaderProps {
  title: string;
  currentQuestion: number;
  totalQuestions: number;
  answeredCount: number;
  totalElapsedSec: number;
  isPanelCollapsed?: boolean;
  onTogglePanel?: () => void;
  onSubmitPrompt: () => void;
}

export function QuizHeader({
  title,
  currentQuestion,
  totalQuestions,
  answeredCount,
  totalElapsedSec,
  isPanelCollapsed = false,
  onTogglePanel,
  onSubmitPrompt,
}: QuizHeaderProps) {
  const progressPercent =
    totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  const minutes = Math.floor(totalElapsedSec / 60);
  const seconds = totalElapsedSec % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <header className="h-14 sm:h-16 px-3 sm:px-5 border-b border-border/50 bg-card/95 backdrop-blur-xl flex items-center justify-between gap-2 sm:gap-4 flex-shrink-0 z-20 shadow-sm">
      {/* Left: Back + Title */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <Link
          href="/quiz"
          className="h-8 sm:h-9 px-2 sm:px-3 rounded-xl border border-border/60 bg-background hover:bg-accent text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-xs font-semibold transition-all flex-shrink-0"
          title="Exit Exam"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Exit</span>
        </Link>

        <div className="flex items-center gap-2 min-w-0">
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/25 text-primary text-[10px] font-bold font-mono flex-shrink-0">
            <Shield className="h-3 w-3" />
            <span>EXAM</span>
          </div>
          <h1 className="text-xs sm:text-sm font-bold text-foreground truncate max-w-[120px] sm:max-w-xs md:max-w-sm lg:max-w-md">
            {title}
          </h1>
        </div>
      </div>

      {/* Center: Progress */}
      <div className="hidden md:flex items-center gap-3 flex-shrink-0">
        <div className="text-right">
          <span className="font-mono text-xs font-extrabold text-foreground">
            Q{currentQuestion}
          </span>
          <span className="text-[11px] text-muted-foreground ml-1 font-medium">
            / {totalQuestions}
          </span>
        </div>
        <div className="w-24 lg:w-40 space-y-1">
          <Progress value={progressPercent} className="h-1.5" />
          <p className="text-[10px] font-mono text-muted-foreground text-center">
            {answeredCount}/{totalQuestions} ({progressPercent}%)
          </p>
        </div>
      </div>

      {/* Right: Timer + Controls */}
      <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
        {/* Timer */}
        <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-background border border-border/60 font-mono text-xs font-bold text-foreground shadow-sm">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <Clock className="h-3.5 w-3.5 text-primary" />
          <span>{formattedTime}</span>
        </div>

        {/* Toggle Panel */}
        {onTogglePanel && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onTogglePanel}
            className="hidden lg:flex items-center gap-1.5 text-xs h-9 bg-background hover:bg-accent rounded-xl"
            title={isPanelCollapsed ? "Show Answer Panel" : "Maximize Image"}
          >
            {isPanelCollapsed ? (
              <>
                <PanelRightOpen className="h-3.5 w-3.5 text-primary" />
                <span>Show Panel</span>
              </>
            ) : (
              <>
                <PanelRightClose className="h-3.5 w-3.5" />
                <span>Max Image</span>
              </>
            )}
          </Button>
        )}

        {/* Submit */}
        <Button
          type="button"
          onClick={onSubmitPrompt}
          className="gap-1.5 h-8 sm:h-9 px-3 sm:px-4 bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-500/20 font-bold text-xs sm:text-sm rounded-xl"
        >
          <Send className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span>Submit</span>
        </Button>
      </div>
    </header>
  );
}
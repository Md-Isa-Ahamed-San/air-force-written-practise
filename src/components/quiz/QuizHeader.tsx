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
import { Badge } from "@/components/ui/badge";

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
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return (
    <header className="h-14 sm:h-16 px-3 sm:px-6 border-b border-border/50 bg-card/90 backdrop-blur-md flex items-center justify-between gap-2 sm:gap-4 flex-shrink-0 z-20">
      {/* Left Section: Back / Exit & Title */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <Link
          href="/quiz"
          className="h-8 sm:h-9 px-2 sm:px-2.5 rounded-lg border border-border/60 bg-background/80 hover:bg-muted text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-xs font-medium transition-colors flex-shrink-0"
          title="Exit Exam (Return to Quiz Sets)"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Exit</span>
        </Link>

        <div className="flex items-center gap-2 min-w-0">
          <Badge
            variant="outline"
            className="hidden md:flex text-[10px] font-mono px-2 py-0.5 border-sky-500/40 text-sky-400 bg-sky-500/10 gap-1 flex-shrink-0"
          >
            <Shield className="h-3 w-3" />
            <span>EXAM MODE</span>
          </Badge>
          <h1 className="text-xs sm:text-sm font-bold text-foreground truncate max-w-[130px] sm:max-w-xs md:max-w-sm lg:max-w-md">
            {title}
          </h1>
        </div>
      </div>

      {/* Center Section: Progress info */}
      <div className="hidden md:flex items-center gap-3 flex-shrink-0">
        <div className="text-right">
          <span className="font-mono text-xs font-bold text-foreground">
            Q#{currentQuestion}
          </span>
          <span className="text-[11px] text-muted-foreground ml-1">
            of {totalQuestions}
          </span>
        </div>
        <div className="w-24 lg:w-40 space-y-1">
          <Progress value={progressPercent} className="h-1.5" />
          <p className="text-[10px] font-mono text-muted-foreground text-center">
            {answeredCount}/{totalQuestions} ({progressPercent}%)
          </p>
        </div>
      </div>

      {/* Right Section: Timer, Toggle Panel & Submit */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        {/* Total Elapsed Timer */}
        <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-background/90 border border-border/60 font-mono text-xs text-foreground shadow-sm">
          <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
          <Clock className="h-3.5 w-3.5 text-sky-400" />
          <span className="font-bold">{formattedTime}</span>
        </div>

        {/* Desktop Toggle Answer Sheet / Fullscreen Image Panel */}
        {onTogglePanel && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onTogglePanel}
            className="hidden lg:flex items-center gap-1.5 text-xs h-9 bg-background/80 hover:bg-muted"
            title={isPanelCollapsed ? "Show Answering Panel" : "Maximize Question Image"}
          >
            {isPanelCollapsed ? (
              <>
                <PanelRightOpen className="h-3.5 w-3.5 text-sky-400" />
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

        {/* Submit Exam Button */}
        <Button
          type="button"
          onClick={onSubmitPrompt}
          className="gap-1.5 h-8 sm:h-9 px-3 sm:px-4 bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-500/20 font-bold text-xs sm:text-sm"
        >
          <Send className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span>Submit</span>
        </Button>
      </div>
    </header>
  );
}

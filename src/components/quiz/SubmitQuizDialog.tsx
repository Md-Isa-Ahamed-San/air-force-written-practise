"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SubmitQuizDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  totalQuestions: number;
  answeredCount: number;
  unansweredQuestions: number[];
  isSubmitting: boolean;
  onConfirmSubmit: () => void;
}

export function SubmitQuizDialog({
  open,
  onOpenChange,
  totalQuestions,
  answeredCount,
  unansweredQuestions,
  isSubmitting,
  onConfirmSubmit,
}: SubmitQuizDialogProps) {
  const hasUnanswered = unansweredQuestions.length > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border/50">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Send className="h-5 w-5 text-sky-400" />
            <span>Submit Exam Answers?</span>
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Review your answers before grading. Once submitted, your scores will be permanently recorded in your performance analytics.
          </DialogDescription>
        </DialogHeader>

        <div className="py-3 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-background/80 border border-border/40 text-center">
              <span className="text-xs text-muted-foreground block">
                Answered
              </span>
              <span className="text-2xl font-bold font-mono text-emerald-400">
                {answeredCount}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-background/80 border border-border/40 text-center">
              <span className="text-xs text-muted-foreground block">
                Unanswered
              </span>
              <span className="text-2xl font-bold font-mono text-amber-400">
                {unansweredQuestions.length}
              </span>
            </div>
          </div>

          {hasUnanswered ? (
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                <span>You have unanswered questions:</span>
              </div>
              <p className="text-muted-foreground font-mono">
                {unansweredQuestions.slice(0, 15).map((q) => `#${q}`).join(", ")}
                {unansweredQuestions.length > 15 ? "..." : ""}
              </p>
              <p className="text-[11px] text-muted-foreground">
                Unanswered questions will be scored as 0 marks.
              </p>
            </div>
          ) : (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
              <span>Great job! All {totalQuestions} questions have been answered.</span>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isSubmitting}
          >
            Review Questions
          </Button>
          <Button
            type="button"
            onClick={onConfirmSubmit}
            disabled={isSubmitting}
            className="gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Submitting & Grading...</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="h-4 w-4" />
                <span>Yes, Submit & Grade</span>
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

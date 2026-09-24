"use client";

import { Check } from "lucide-react";

interface QuestionNavigatorProps {
  totalQuestions: number;
  currentQuestion: number;
  answers: Record<number, string>;
  onSelectQuestion: (qNumber: number) => void;
}

export function QuestionNavigator({
  totalQuestions,
  currentQuestion,
  answers,
  onSelectQuestion,
}: QuestionNavigatorProps) {
  const answeredCount = Object.keys(answers).filter(
    (k) => answers[Number(k)]?.trim()
  ).length;

  return (
    <div className="space-y-3 p-4 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Question Navigator
        </h4>
        <span className="text-xs font-mono text-muted-foreground">
          <span className="text-emerald-400 font-bold">{answeredCount}</span> /{" "}
          {totalQuestions} Answered
        </span>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-5 gap-1.5 max-h-56 overflow-y-auto pr-1">
        {Array.from({ length: totalQuestions }).map((_, i) => {
          const qNum = i + 1;
          const isCurrent = qNum === currentQuestion;
          const hasAnswer = Boolean(answers[qNum]?.trim());

          let btnClass = "border border-border/50 bg-background/60 text-muted-foreground hover:border-sky-500/50 hover:text-foreground";

          if (isCurrent) {
            btnClass = "border-sky-400 bg-sky-500 text-white font-bold shadow-md shadow-sky-500/30 scale-105 z-10";
          } else if (hasAnswer) {
            btnClass = "border-emerald-500/40 bg-emerald-500/15 text-emerald-400 font-medium";
          }

          return (
            <button
              key={qNum}
              type="button"
              onClick={() => onSelectQuestion(qNum)}
              className={`h-9 rounded-lg font-mono text-xs flex items-center justify-center relative transition-all duration-150 ${btnClass}`}
            >
              <span>{qNum}</span>
              {hasAnswer && !isCurrent && (
                <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between pt-2 border-t border-border/30 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-sky-500" />
          <span>Current</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-emerald-500/30 border border-emerald-500/50" />
          <span>Answered</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-background border border-border" />
          <span>Remaining</span>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  RotateCcw,
  Check,
} from "lucide-react";
import { normalizeAnswer } from "~/lib/parse-mdx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface AnswerInputPanelProps {
  currentQuestion: number;
  totalQuestions: number;
  currentAnswer: string;
  questionElapsedSec: number;
  onSetAnswer: (answer: string) => void;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  onSubmitPrompt: () => void;
}

const OPTIONS = [
  { eng: "A", bng: "ক" },
  { eng: "B", bng: "খ" },
  { eng: "C", bng: "গ" },
  { eng: "D", bng: "ঘ" },
];

export function AnswerInputPanel({
  currentQuestion,
  totalQuestions,
  currentAnswer,
  questionElapsedSec,
  onSetAnswer,
  onNextQuestion,
  onPrevQuestion,
  onSubmitPrompt,
}: AnswerInputPanelProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const normalizedCurrent = normalizeAnswer(currentAnswer);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (currentQuestion < totalQuestions) {
        onNextQuestion();
      } else {
        onSubmitPrompt();
      }
    }
  };

  const handleSelectOption = (opt: string) => {
    onSetAnswer(opt);
  };

  return (
    <div className="p-5 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm space-y-5">
      {/* Header with Q# and Per-Question Timer */}
      <div className="flex items-center justify-between border-b border-border/40 pb-3">
        <div>
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            Answering Question
          </span>
          <h3 className="text-2xl font-extrabold text-foreground font-mono">
            #{currentQuestion}{" "}
            <span className="text-xs font-normal text-muted-foreground">
              of {totalQuestions}
            </span>
          </h3>
        </div>

        {/* Question Timer */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background/80 border border-border/50 font-mono text-xs text-sky-400">
          <Clock className="h-3.5 w-3.5" />
          <span>{questionElapsedSec}s</span>
        </div>
      </div>

      {/* Quick Select Buttons (A/B/C/D & ক/খ/গ/ঘ) */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Select Option
        </label>
        <div className="grid grid-cols-4 gap-2">
          {OPTIONS.map((opt) => {
            const isSelected =
              normalizedCurrent === opt.eng || currentAnswer === opt.bng;

            return (
              <button
                key={opt.eng}
                type="button"
                onClick={() => handleSelectOption(opt.eng)}
                className={`h-14 rounded-xl font-bold flex flex-col items-center justify-center transition-all duration-150 relative ${
                  isSelected
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25 ring-2 ring-sky-400 scale-[1.02]"
                    : "bg-background/80 border border-border/60 text-foreground hover:border-sky-500/50 hover:bg-muted/40"
                }`}
              >
                <span className="text-base font-mono">{opt.eng}</span>
                <span className="text-[11px] opacity-70 font-sans font-normal">
                  ({opt.bng})
                </span>
                {isSelected && (
                  <Check className="h-3 w-3 absolute top-1 right-1 text-white" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Manual Input Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="manual-ans"
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
          >
            Direct Input / Keyboard
          </label>
          {currentAnswer && (
            <button
              type="button"
              onClick={() => onSetAnswer("")}
              className="text-[11px] text-muted-foreground hover:text-destructive flex items-center gap-1"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Clear</span>
            </button>
          )}
        </div>

        <Input
          ref={inputRef}
          id="manual-ans"
          placeholder="Type A, B, C, D or ক, খ, গ, ঘ (press Enter)"
          value={currentAnswer}
          onChange={(e) => onSetAnswer(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-11 bg-background/80 font-mono text-center text-lg font-bold uppercase tracking-widest"
          maxLength={10}
        />
      </div>

      {/* Prev / Next Navigation Buttons */}
      <div className="flex items-center gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={onPrevQuestion}
          disabled={currentQuestion <= 1}
          className="flex-1 gap-1.5 h-10"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>

        {currentQuestion < totalQuestions ? (
          <Button
            type="button"
            onClick={onNextQuestion}
            className="flex-1 gap-1.5 h-10 bg-sky-600 hover:bg-sky-500 text-white shadow-md shadow-sky-500/20"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={onSubmitPrompt}
            className="flex-1 gap-1.5 h-10 bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-500/20 font-bold"
          >
            <span>Finish & Review</span>
          </Button>
        )}
      </div>
    </div>
  );
}

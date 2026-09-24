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
  { num: "1", eng: "A", bng: "ক" },
  { num: "2", eng: "B", bng: "খ" },
  { num: "3", eng: "C", bng: "গ" },
  { num: "4", eng: "D", bng: "ঘ" },
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
      if (currentQuestion < totalQuestions) onNextQuestion();
      else onSubmitPrompt();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      onPrevQuestion();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (currentQuestion < totalQuestions) onNextQuestion();
      else onSubmitPrompt();
    } else if (["1", "2", "3", "4"].includes(e.key)) {
      e.preventDefault();
      const map: Record<string, string> = { "1": "A", "2": "B", "3": "C", "4": "D" };
      onSetAnswer(map[e.key] ?? "");
    }
  };

  const handleSelectOption = (opt: string) => {
    if (normalizedCurrent === opt) onSetAnswer("");
    else onSetAnswer(opt);
  };

  const handleInputChange = (val: string) => {
    const trimmed = val.trim();
    if (["1", "2", "3", "4"].includes(trimmed)) {
      const map: Record<string, string> = { "1": "A", "2": "B", "3": "C", "4": "D" };
      onSetAnswer(map[trimmed] ?? "");
    } else {
      onSetAnswer(val);
    }
  };

  return (
    <div className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm flex flex-col">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border/40 bg-muted/20 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
            Answering
          </p>
          <h3 className="text-2xl font-extrabold text-foreground font-mono leading-none mt-0.5">
            Q{currentQuestion}
            <span className="text-xs font-medium text-muted-foreground ml-1.5">
              of {totalQuestions}
            </span>
          </h3>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background border border-border/60 font-mono text-xs font-bold text-primary">
          <Clock className="h-3.5 w-3.5" />
          <span>{questionElapsedSec}s</span>
        </div>
      </div>

      <div className="p-5 space-y-5 flex-1">
        {/* Option Buttons */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Select Answer
            </label>
            <span className="text-[10px] text-muted-foreground/60 font-mono bg-muted/50 px-2 py-0.5 rounded-md">
              Keys: 1-4 / A-D
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {OPTIONS.map((opt) => {
              const isSelected =
                normalizedCurrent === opt.eng ||
                currentAnswer === opt.bng ||
                currentAnswer === opt.num;

              return (
                <button
                  key={opt.eng}
                  type="button"
                  onClick={() => handleSelectOption(opt.eng)}
                  className={`h-16 rounded-xl font-bold flex flex-col items-center justify-between py-2 transition-all duration-150 relative cursor-pointer select-none ${
                    isSelected
                      ? "bg-gradient-to-b from-primary to-blue-600 text-white shadow-lg shadow-primary/30 scale-[1.04] ring-2 ring-primary/40"
                      : "bg-background border border-border/60 text-foreground hover:border-primary/40 hover:bg-accent/50 active:scale-95"
                  }`}
                  title={`Option ${opt.eng} / ${opt.bng} (Press ${opt.num} or ${opt.eng})`}
                >
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    [{opt.num}]
                  </span>
                  <span className="text-lg font-mono font-extrabold leading-none">
                    {opt.eng}
                  </span>
                  <span
                    className={`text-[11px] font-sans font-normal leading-none ${
                      isSelected ? "text-white/70" : "text-muted-foreground/50"
                    }`}
                  >
                    {opt.bng}
                  </span>
                  {isSelected && (
                    <Check className="h-3.5 w-3.5 absolute top-1.5 right-1.5 text-white" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Manual Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="manual-ans"
              className="text-xs font-bold text-muted-foreground uppercase tracking-widest"
            >
              Direct Input
            </label>
            {currentAnswer && (
              <button
                type="button"
                onClick={() => onSetAnswer("")}
                className="text-[11px] text-muted-foreground hover:text-destructive flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Clear</span>
              </button>
            )}
          </div>
          <Input
            ref={inputRef}
            id="manual-ans"
            placeholder="Type 1–4, A–D, or ক–ঘ"
            value={currentAnswer}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-11 bg-background font-mono text-center text-lg font-bold uppercase tracking-widest rounded-xl border-border/60 focus:border-primary/50"
            maxLength={10}
          />
        </div>
      </div>

      {/* Nav Buttons */}
      <div className="px-5 pb-5 flex items-center gap-2.5">
        <Button
          type="button"
          variant="outline"
          onClick={onPrevQuestion}
          disabled={currentQuestion <= 1}
          className="flex-1 gap-1.5 h-10 rounded-xl font-semibold"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Prev</span>
        </Button>

        {currentQuestion < totalQuestions ? (
          <Button
            type="button"
            onClick={onNextQuestion}
            className="flex-1 gap-1.5 h-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 rounded-xl font-semibold"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={onSubmitPrompt}
            className="flex-1 gap-1.5 h-10 bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-500/20 rounded-xl font-bold"
          >
            <span>Finish & Review</span>
          </Button>
        )}
      </div>
    </div>
  );
}
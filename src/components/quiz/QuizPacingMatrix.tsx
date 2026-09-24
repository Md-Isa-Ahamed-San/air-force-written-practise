"use client";

import { Flame, Hourglass, TrendingDown, Clock, Zap } from "lucide-react";
import {
  PACING_QUADRANTS,
  type PacingQuadrant,
  type SessionPacingSummary,
} from "~/lib/pacing";

export type FilterOption = "all" | "wrong" | "correct" | PacingQuadrant;

interface QuizPacingMatrixProps {
  summary: SessionPacingSummary;
  filter: FilterOption;
  onSelectFilter: (filter: FilterOption) => void;
}

export function QuizPacingMatrix({
  summary,
  filter,
  onSelectFilter,
}: QuizPacingMatrixProps) {
  return (
    <div className="space-y-6">
      {/* 1. Advanced Pacing Highlights Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Fastest Q</span>
            <Flame className="h-3.5 w-3.5 text-emerald-400" />
          </div>
          <p className="font-mono font-bold text-emerald-400 text-base">
            {summary.fastestAttempt
              ? `Q#${summary.fastestAttempt.qNumber} • ${summary.fastestAttempt.timeSec}s`
              : "N/A"}
          </p>
          <span className="text-[10px] text-muted-foreground block">
            Quickest response
          </span>
        </div>

        <div className="p-3.5 rounded-2xl border border-sky-500/30 bg-sky-500/5 backdrop-blur-sm space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Slowest Q</span>
            <Hourglass className="h-3.5 w-3.5 text-sky-400" />
          </div>
          <p className="font-mono font-bold text-sky-400 text-base">
            {summary.slowestAttempt
              ? `Q#${summary.slowestAttempt.qNumber} • ${summary.slowestAttempt.timeSec}s`
              : "N/A"}
          </p>
          <span className="text-[10px] text-muted-foreground block">
            Highest contemplation
          </span>
        </div>

        <div className="p-3.5 rounded-2xl border border-rose-500/30 bg-rose-500/5 backdrop-blur-sm space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Wasted Time</span>
            <TrendingDown className="h-3.5 w-3.5 text-rose-400" />
          </div>
          <p className="font-mono font-bold text-rose-400 text-base">
            {summary.wastedTimeSec}s
          </p>
          <span className="text-[10px] text-muted-foreground block">
            Burned on incorrect answers
          </span>
        </div>

        <div className="p-3.5 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 backdrop-blur-sm space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Benchmark Pace</span>
            <Clock className="h-3.5 w-3.5 text-indigo-400" />
          </div>
          <p className="font-mono font-bold text-indigo-300 text-base">
            {summary.benchmarkSec}s / Q
          </p>
          <span className="text-[10px] text-muted-foreground block">
            Pacing threshold
          </span>
        </div>
      </div>

      {/* 2. Time vs Accuracy Matrix (4 Pacing Quadrants) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <Zap className="h-4 w-4 text-sky-400" />
              <span>Time vs. Accuracy Quadrants</span>
            </h3>
            <p className="text-xs text-muted-foreground">
              Click any quadrant below to filter question review
            </p>
          </div>
          {filter !== "all" && (
            <button
              type="button"
              onClick={() => onSelectFilter("all")}
              className="text-xs text-sky-400 hover:underline font-mono"
            >
              Reset Filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Speed Demon */}
          <button
            type="button"
            onClick={() =>
              onSelectFilter(filter === "speed_demon" ? "all" : "speed_demon")
            }
            className={`p-4 rounded-2xl border text-left transition-all relative ${
              PACING_QUADRANTS.speed_demon.cardClass
            } ${
              filter === "speed_demon"
                ? "ring-2 ring-emerald-400 shadow-lg shadow-emerald-500/20 scale-[1.02]"
                : "opacity-95"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-lg">⚡</span>
              <span className="font-mono font-extrabold text-xl text-emerald-400">
                {summary.quadrantCounts.speed_demon}
              </span>
            </div>
            <div className="font-bold text-sm text-foreground">Speed Demon</div>
            <div className="text-[11px] text-emerald-400 font-mono">
              Fast & Correct ({summary.quadrantPercentages.speed_demon}%)
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed">
              Mastered concepts answered quickly with full marks.
            </p>
          </button>

          {/* Careless Trap */}
          <button
            type="button"
            onClick={() =>
              onSelectFilter(filter === "careless_trap" ? "all" : "careless_trap")
            }
            className={`p-4 rounded-2xl border text-left transition-all relative ${
              PACING_QUADRANTS.careless_trap.cardClass
            } ${
              filter === "careless_trap"
                ? "ring-2 ring-amber-400 shadow-lg shadow-amber-500/20 scale-[1.02]"
                : "opacity-95"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-lg">⚠️</span>
              <span className="font-mono font-extrabold text-xl text-amber-400">
                {summary.quadrantCounts.careless_trap}
              </span>
            </div>
            <div className="font-bold text-sm text-foreground">Careless Trap</div>
            <div className="text-[11px] text-amber-400 font-mono">
              Fast & Wrong ({summary.quadrantPercentages.careless_trap}%)
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed">
              Rushed or guessed. Slowing down slightly avoids easy point loss.
            </p>
          </button>

          {/* Time Grind */}
          <button
            type="button"
            onClick={() =>
              onSelectFilter(filter === "time_grind" ? "all" : "time_grind")
            }
            className={`p-4 rounded-2xl border text-left transition-all relative ${
              PACING_QUADRANTS.time_grind.cardClass
            } ${
              filter === "time_grind"
                ? "ring-2 ring-sky-400 shadow-lg shadow-sky-500/20 scale-[1.02]"
                : "opacity-95"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-lg">🐢</span>
              <span className="font-mono font-extrabold text-xl text-sky-400">
                {summary.quadrantCounts.time_grind}
              </span>
            </div>
            <div className="font-bold text-sm text-foreground">Time Grind</div>
            <div className="text-[11px] text-sky-400 font-mono">
              Slow & Correct ({summary.quadrantPercentages.time_grind}%)
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed">
              Earned points, but took too long. Practice speed drills here.
            </p>
          </button>

          {/* Time Sink */}
          <button
            type="button"
            onClick={() =>
              onSelectFilter(filter === "time_sink" ? "all" : "time_sink")
            }
            className={`p-4 rounded-2xl border text-left transition-all relative ${
              PACING_QUADRANTS.time_sink.cardClass
            } ${
              filter === "time_sink"
                ? "ring-2 ring-rose-400 shadow-lg shadow-rose-500/20 scale-[1.02]"
                : "opacity-95"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-lg">🚨</span>
              <span className="font-mono font-extrabold text-xl text-rose-400">
                {summary.quadrantCounts.time_sink}
              </span>
            </div>
            <div className="font-bold text-sm text-foreground">Time Sink</div>
            <div className="text-[11px] text-rose-400 font-mono">
              Slow & Wrong ({summary.quadrantPercentages.time_sink}%)
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed">
              Critical score leak. Lost significant exam time with 0 marks.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

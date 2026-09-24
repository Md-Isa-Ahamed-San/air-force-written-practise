"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Clock, BarChart3 } from "lucide-react";
import { api } from "~/trpc/react";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      qNumber: string;
      avgTimeSec: number;
      accuracy: number;
      totalAttempts: number;
    };
  }>;
}

function CustomBarTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0]?.payload;
    if (!data) return null;
    return (
      <div className="rounded-xl border border-border/60 bg-popover/90 backdrop-blur-md p-3 shadow-xl space-y-1 text-xs">
        <span className="font-bold text-foreground block">
          Question #{data.qNumber}
        </span>
        <div className="flex items-center gap-2 text-muted-foreground font-mono">
          <span>Avg Duration: {data.avgTimeSec} seconds</span>
        </div>
        <div className="flex items-center gap-2 pt-1 border-t border-border/40 font-mono text-emerald-400">
          <span>Accuracy: {data.accuracy}%</span>
          <span className="text-muted-foreground text-[10px]">
            ({data.totalAttempts} attempts)
          </span>
        </div>
      </div>
    );
  }
  return null;
}

export function AvgTimePerQuestionChart() {
  const { data: qStats, isLoading } = api.stats.getQuestionAccuracy.useQuery();

  if (isLoading) {
    return (
      <div className="p-6 rounded-2xl border border-border/50 bg-card/60 space-y-4 animate-pulse">
        <div className="h-6 w-48 bg-muted rounded" />
        <div className="h-[280px] bg-muted/30 rounded-xl" />
      </div>
    );
  }

  const hasData = qStats && qStats.length > 0;

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm space-y-4 flex flex-col justify-between">
      <div className="space-y-0.5">
        <h3 className="text-base font-bold text-foreground flex items-center gap-2">
          <Clock className="h-4 w-4 text-indigo-400" />
          <span>Average Time per Question Number</span>
        </h3>
        <p className="text-xs text-muted-foreground">
          Identify pacing bottlenecks across consecutive test questions
        </p>
      </div>

      <div className="h-[280px] w-full pt-2">
        {!hasData ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-2 text-muted-foreground">
            <BarChart3 className="h-8 w-8 text-muted-foreground/40" />
            <p className="text-xs">No question timing metrics available yet.</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={qStats.slice(0, 20)}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="oklch(1 0 0 / 8%)"
                vertical={false}
              />
              <XAxis
                dataKey="qNumber"
                stroke="oklch(0.556 0 0)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="oklch(0.556 0 0)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                unit="s"
              />
              <Tooltip content={<CustomBarTooltip />} />
              <Bar
                dataKey="avgTimeSec"
                fill="#818cf8"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

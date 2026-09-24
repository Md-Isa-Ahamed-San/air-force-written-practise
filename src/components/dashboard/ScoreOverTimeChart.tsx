"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { TrendingUp, BarChart2 } from "lucide-react";
import { api } from "~/trpc/react";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      quizSetTitle: string;
      formattedDate: string;
      percentage: number;
      score: number;
      total: number;
    };
  }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0]?.payload;
    if (!data) return null;
    return (
      <div className="rounded-xl border border-border/60 bg-popover/90 backdrop-blur-md p-3 shadow-xl space-y-1 text-xs">
        <span className="font-bold text-foreground block">
          {data.quizSetTitle}
        </span>
        <div className="flex items-center gap-2 text-muted-foreground font-mono">
          <span>Date: {data.formattedDate}</span>
        </div>
        <div className="flex items-center gap-2 pt-1 border-t border-border/40 font-mono">
          <span className="text-sky-400 font-bold text-sm">
            {data.percentage}%
          </span>
          <span className="text-muted-foreground">
            ({data.score} / {data.total} marks)
          </span>
        </div>
      </div>
    );
  }
  return null;
}

export function ScoreOverTimeChart() {
  const { data: history, isLoading } = api.stats.getSessionHistory.useQuery();

  if (isLoading) {
    return (
      <div className="p-6 rounded-2xl border border-border/50 bg-card/60 space-y-4 animate-pulse">
        <div className="h-6 w-48 bg-muted rounded" />
        <div className="h-[280px] bg-muted/30 rounded-xl" />
      </div>
    );
  }

  const hasData = history && history.length > 0;

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm space-y-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h3 className="text-base font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-sky-400" />
            <span>Score Trend Over Time</span>
          </h3>
          <p className="text-xs text-muted-foreground">
            Historical accuracy trajectory across consecutive exam attempts
          </p>
        </div>
      </div>

      <div className="h-[280px] w-full pt-2">
        {!hasData ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-2 text-muted-foreground">
            <BarChart2 className="h-8 w-8 text-muted-foreground/40" />
            <p className="text-xs">No exam session history recorded yet.</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={history}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="oklch(1 0 0 / 8%)"
                vertical={false}
              />
              <XAxis
                dataKey="formattedDate"
                stroke="oklch(0.556 0 0)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                domain={[0, 100]}
                stroke="oklch(0.556 0 0)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                unit="%"
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="percentage"
                stroke="#38bdf8"
                strokeWidth={3}
                dot={{ fill: "#38bdf8", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: "#60a5fa" }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

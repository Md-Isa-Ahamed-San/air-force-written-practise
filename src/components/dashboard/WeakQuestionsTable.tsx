"use client";

import Link from "next/link";
import { AlertTriangle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { api } from "~/trpc/react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function WeakQuestionsTable() {
  const { data: weakQuestions, isLoading } = api.stats.getWeakQuestions.useQuery();

  if (isLoading) {
    return (
      <div className="p-6 rounded-2xl border border-border/50 bg-card/60 space-y-4 animate-pulse">
        <div className="h-6 w-44 bg-muted rounded" />
        <div className="h-40 bg-muted/30 rounded-xl" />
      </div>
    );
  }

  const hasData = weakQuestions && weakQuestions.length > 0;

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm space-y-4">
      <div className="space-y-0.5">
        <h3 className="text-base font-bold text-foreground flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-400" />
          <span>Priority Focus: Frequently Missed Questions</span>
        </h3>
        <p className="text-xs text-muted-foreground">
          Questions with repeated errors across multiple practice runs
        </p>
      </div>

      {!hasData ? (
        <div className="py-10 text-center rounded-xl border border-dashed border-border/40 bg-card/20 space-y-2">
          <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto" />
          <p className="text-xs font-semibold text-foreground">
            Zero Repeat Weak Spots
          </p>
          <p className="text-[11px] text-muted-foreground">
            You don&apos;t have any questions with repeated failures yet.
          </p>
        </div>
      ) : (
        <div className="rounded-xl border border-border/40 overflow-hidden">
          <div className="max-h-64 overflow-y-auto">
            <Table>
              <TableHeader className="bg-muted/40 sticky top-0 z-10 backdrop-blur-md">
                <TableRow>
                  <TableHead className="text-xs">Subject / Set</TableHead>
                  <TableHead className="text-xs font-mono">Q#</TableHead>
                  <TableHead className="text-xs">Times Wrong</TableHead>
                  <TableHead className="text-xs">Expected Answer</TableHead>
                  <TableHead className="text-xs text-right">Practice</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {weakQuestions.map((q) => (
                  <TableRow key={q.key} className="hover:bg-muted/30">
                    <TableCell className="font-semibold text-xs text-foreground max-w-[140px] truncate">
                      {q.quizSetTitle}
                    </TableCell>
                    <TableCell className="font-mono font-bold text-xs text-sky-400">
                      #{q.qNumber}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="font-mono text-[11px] bg-red-500/10 text-red-400 border border-red-500/20"
                      >
                        {q.timesWrong}× Missed
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono font-bold text-xs text-emerald-400">
                      {q.correctAnswer}
                    </TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={`/quiz/${q.quizSetId}`}
                        className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 font-medium"
                      >
                        <span>Retry</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}

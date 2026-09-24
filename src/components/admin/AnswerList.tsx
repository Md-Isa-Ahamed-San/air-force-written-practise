"use client";

import { CheckCircle2, ListOrdered, FileSpreadsheet } from "lucide-react";
import { api } from "~/trpc/react";
import {
  normalizeAnswer,
  ENGLISH_TO_BENGALI_OPTION,
  BENGALI_TO_ENGLISH_OPTION,
} from "~/lib/parse-mdx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function AnswerList({ quizSetId }: { quizSetId: string }) {
  const { data: answers, isLoading } = api.answer.getByQuizSet.useQuery({
    quizSetId,
  });

  if (isLoading) {
    return (
      <div className="space-y-2 p-6 rounded-2xl border border-border/40 bg-card/20 animate-pulse">
        <div className="h-6 w-36 bg-muted rounded" />
        <div className="h-24 w-full bg-muted/40 rounded-xl" />
      </div>
    );
  }

  if (!answers || answers.length === 0) {
    return (
      <div className="p-8 text-center rounded-2xl border border-dashed border-border/50 bg-card/10 space-y-2">
        <FileSpreadsheet className="h-8 w-8 mx-auto text-muted-foreground/60" />
        <p className="text-sm font-medium text-foreground">No Answers Configured</p>
        <p className="text-xs text-muted-foreground">
          Upload or paste an MDX answer sheet above to populate the answer key.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-bold text-foreground flex items-center gap-2">
          <ListOrdered className="h-4 w-4 text-sky-400" />
          <span>Configured Answer Key ({answers.length} Questions)</span>
        </h4>
        <Badge variant="outline" className="text-xs font-mono border-emerald-500/30 text-emerald-400">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          Active Key
        </Badge>
      </div>

      <div className="rounded-xl border border-border/50 bg-card/60 overflow-hidden">
        <div className="max-h-72 overflow-y-auto">
          <Table>
            <TableHeader className="bg-muted/40 sticky top-0 z-10 backdrop-blur-md">
              <TableRow>
                <TableHead className="w-24 font-mono text-xs">Question #</TableHead>
                <TableHead className="font-mono text-xs">Raw Stored Answer</TableHead>
                <TableHead className="font-mono text-xs">English Canonical</TableHead>
                <TableHead className="font-mono text-xs">Bengali Canonical</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {answers.map((ans) => {
                const norm = normalizeAnswer(ans.answer);
                const bengaliEquiv =
                  ENGLISH_TO_BENGALI_OPTION[norm] ??
                  (BENGALI_TO_ENGLISH_OPTION[ans.answer] ? ans.answer : "-");

                return (
                  <TableRow key={ans.id} className="hover:bg-muted/30">
                    <TableCell className="font-mono font-bold text-sky-400">
                      Q{ans.qNumber}
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      <Badge variant="secondary" className="font-mono">
                        {ans.answer}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      Option {norm}
                    </TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      বিকল্প {bengaliEquiv}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

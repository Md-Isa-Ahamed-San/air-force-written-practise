"use client";

import { useState, useRef } from "react";
import {
  FileCode,
  Upload,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Sparkles,
} from "lucide-react";
import { api } from "~/trpc/react";
import { parseMdxAnswerSheet, type ParsedMdxResult } from "~/lib/parse-mdx";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MdxUploadSectionProps {
  quizSetId: string;
  currentAnswerCount: number;
}

const SAMPLE_MDX = `---
title: "Physics Ch-3: Motion & Force"
total: 30
---

1. A
2. C
3. খ
4. গ
5. B
6. D
7. ক
8. A
9. B
10. গ`;

export function MdxUploadSection({
  quizSetId,
  currentAnswerCount,
}: MdxUploadSectionProps) {
  const [rawText, setRawText] = useState("");
  const [preview, setPreview] = useState<ParsedMdxResult | null>(null);
  const [parseError, setParseError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const utils = api.useUtils();

  const uploadMutation = api.answer.uploadMdx.useMutation({
    onSuccess: (data) => {
      setSuccessMessage(
        `Successfully saved ${data.count} answers to the question bank!`
      );
      setParseError(null);
      void utils.answer.getByQuizSet.invalidate({ quizSetId });
      void utils.quizSet.getById.invalidate({ id: quizSetId });
      void utils.quizSet.getAll.invalidate();
    },
    onError: (err) => {
      setParseError(err.message);
    },
  });

  const handleTextChange = (text: string) => {
    setRawText(text);
    setSuccessMessage(null);
    if (!text.trim()) {
      setPreview(null);
      setParseError(null);
      return;
    }

    try {
      const result = parseMdxAnswerSheet(text);
      if (result.answers.length === 0) {
        setParseError("Could not detect any numbered answers (e.g. '1. A' or '১. খ').");
        setPreview(null);
      } else {
        setParseError(null);
        setPreview(result);
      }
    } catch (e: unknown) {
      setParseError(e instanceof Error ? e.message : "Error parsing MDX content");
      setPreview(null);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        handleTextChange(content);
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleApplySample = () => {
    handleTextChange(SAMPLE_MDX);
  };

  const handleSave = () => {
    if (!rawText.trim()) return;
    uploadMutation.mutate({
      quizSetId,
      rawMdx: rawText,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <FileCode className="h-5 w-5 text-indigo-400" />
            <span>MDX Answer Sheet</span>
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Upload or paste an MDX answer key. Supports A/B/C/D and Bengali ক/খ/গ/ঘ options.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".mdx,.md,.txt"
            className="hidden"
            onChange={handleFileSelect}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleApplySample}
            className="gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Sample MDX</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            className="gap-1.5 text-xs hover:border-indigo-500/50"
          >
            <Upload className="h-3.5 w-3.5" />
            <span>Upload .mdx File</span>
          </Button>
        </div>
      </div>

      {/* Editor & Preview Area */}
      <div className="space-y-4">
        <div className="relative rounded-2xl border border-border/50 bg-card/60 overflow-hidden focus-within:border-indigo-500/50 transition-colors">
          <div className="px-4 py-2 bg-muted/40 border-b border-border/40 flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>answer_sheet.mdx</span>
            <span>{rawText.length > 0 ? `${rawText.split("\n").length} lines` : "empty"}</span>
          </div>

          <textarea
            value={rawText}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder="Paste your MDX answer sheet here...
Example:
---
title: Physics Ch-3
total: 30
---
1. A
2. C
3. খ
4. গ"
            rows={8}
            className="w-full bg-transparent p-4 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 resize-y focus:outline-none"
          />
        </div>

        {/* Status Messages */}
        {parseError && (
          <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-xs text-destructive flex items-center gap-2">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <span>{parseError}</span>
          </div>
        )}

        {successMessage && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Live Parsed Preview */}
        {preview && (
          <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-foreground">
                  Parsed Output:
                </span>
                <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300">
                  {preview.answers.length} Questions Detected
                </Badge>
                {preview.title && (
                  <Badge variant="outline" className="text-xs font-normal">
                    Title: {preview.title}
                  </Badge>
                )}
              </div>

              <Button
                type="button"
                size="sm"
                onClick={handleSave}
                disabled={uploadMutation.isPending}
                className="gap-2 bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/20"
              >
                {uploadMutation.isPending ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    <span>Saving to DB...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Confirm & Save Answers</span>
                  </>
                )}
              </Button>
            </div>

            {/* Quick tokens preview */}
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pt-1">
              {preview.answers.map((item) => (
                <div
                  key={item.qNumber}
                  className="px-2 py-0.5 rounded-md bg-background/80 border border-border/50 font-mono text-xs flex items-center gap-1.5"
                >
                  <span className="text-muted-foreground font-semibold">Q{item.qNumber}:</span>
                  <span className="text-sky-400 font-bold">{item.answer}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

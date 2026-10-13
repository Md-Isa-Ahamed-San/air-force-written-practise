"use client";

import { useState, useRef } from "react";
import {
  FileCode,
  Upload,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  BookA,
  Plus,
  Bot,
  Copy,
  Check,
  Wand2,
} from "lucide-react";
import { api } from "~/trpc/react";
import {
  parseAndValidateEnglishJson,
  parseAndValidateEnglishBatchJson,
  SAMPLE_ENGLISH_QUIZ,
  type ValidatedEnglishQuizPayload,
} from "~/lib/english-utils";
import {
  generateAiPrompt,
  TEN_SET_AI_PROMPT,
  SAMPLE_JSON_STRUCTURE,
} from "./AiJsonTemplateSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function EnglishUploadDialog({
  onQuizCreated,
}: {
  onQuizCreated?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"paste" | "upload" | "ai_prompt">("paste");
  const [rawText, setRawText] = useState("");
  const [customTitle, setCustomTitle] = useState("");
  const [customDescription, setCustomDescription] = useState("");
  const [preview, setPreview] = useState<ValidatedEnglishQuizPayload | null>(null);
  const [previewSets, setPreviewSets] = useState<ValidatedEnglishQuizPayload[]>([]);
  const [parseError, setParseError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [aiTopic, setAiTopic] = useState("Appropriate Prepositions & Idioms");
  const [aiCount, setAiCount] = useState(10);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedTenPack, setCopiedTenPack] = useState(false);
  const [copiedSchema, setCopiedSchema] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const utils = api.useUtils();

  const createMutation = api.englishQuiz.create.useMutation({
    onSuccess: () => {
      void utils.englishQuiz.getAll.invalidate();
      setOpen(false);
      resetState();
      onQuizCreated?.();
    },
    onError: (err) => {
      setParseError(err.message);
    },
  });

  const createBatchMutation = api.englishQuiz.createBatch.useMutation({
    onSuccess: () => {
      void utils.englishQuiz.getAll.invalidate();
      setOpen(false);
      resetState();
      onQuizCreated?.();
    },
    onError: (err) => {
      setParseError(err.message);
    },
  });

  const resetState = () => {
    setRawText("");
    setCustomTitle("");
    setCustomDescription("");
    setPreview(null);
    setPreviewSets([]);
    setParseError(null);
    setFileName(null);
  };

  const handleProcessJson = (text: string) => {
    setRawText(text);
    if (!text.trim()) {
      setPreview(null);
      setPreviewSets([]);
      setParseError(null);
      return;
    }

    try {
      const validatedBatch = parseAndValidateEnglishBatchJson(text);
      setPreviewSets(validatedBatch);
      setPreview(validatedBatch[0] ?? null);
      setParseError(null);
      if (validatedBatch.length === 1 && validatedBatch[0]) {
        if (!customTitle) {
          setCustomTitle(validatedBatch[0].title);
        }
        if (!customDescription && validatedBatch[0].description) {
          setCustomDescription(validatedBatch[0].description);
        }
      }
    } catch (err: unknown) {
      setPreview(null);
      setPreviewSets([]);
      const msg = err instanceof Error ? err.message : "Failed to parse JSON.";
      setParseError(msg);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      handleProcessJson(content);
    };
    reader.readAsText(file);
  };

  const handleLoadSample = () => {
    const formatted = JSON.stringify(SAMPLE_ENGLISH_QUIZ, null, 2);
    setRawText(formatted);
    setCustomTitle(SAMPLE_ENGLISH_QUIZ.title);
    setCustomDescription(SAMPLE_ENGLISH_QUIZ.description ?? "");
    setPreview(SAMPLE_ENGLISH_QUIZ);
    setPreviewSets([SAMPLE_ENGLISH_QUIZ]);
    setParseError(null);
    setFileName("sample_airforce_english.json");
  };

  const handleSubmit = () => {
    if (previewSets.length > 1) {
      createBatchMutation.mutate({
        quizzes: previewSets.map((s) => ({
          title: s.title,
          description: s.description,
          questions: s.questions.map((q) => ({
            qNumber: q.qNumber,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
          })),
        })),
      });
      return;
    }

    if (!preview || preview.questions.length === 0) return;

    createMutation.mutate({
      title: customTitle.trim() || preview.title,
      description: customDescription.trim() || preview.description,
      questions: preview.questions.map((q) => ({
        qNumber: q.qNumber,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
      })),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="gap-2 bg-gradient-to-r from-primary via-indigo-600 to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold shadow-lg shadow-primary/25 rounded-xl border border-white/20">
            <Plus className="h-4 w-4" />
            <span>Upload / Create Quiz</span>
          </Button>
        }
      />

      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 border border-white/20 bg-background/95 backdrop-blur-2xl shadow-2xl rounded-3xl">
        <DialogHeader className="p-6 pb-4 border-b border-border/40 bg-card/40 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-md shadow-primary/20">
                <BookA className="h-5 w-5" />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold text-foreground">
                  Create English Practice Quiz
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  Upload a JSON file or paste questions with options & answer key.
                </DialogDescription>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleLoadSample}
              className="gap-1.5 text-xs rounded-xl border-primary/30 text-primary hover:bg-primary/10"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Load Sample</span>
            </Button>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-5">
          {/* Title and Description Inputs */}
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                Quiz Title
              </label>
              <Input
                placeholder="e.g. Air Force English - Model Practice 01"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                className="rounded-xl border-border/60 bg-card/50 backdrop-blur-sm text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                Description (Optional)
              </label>
              <Input
                placeholder="e.g. Vocabulary, Prepositions & Sentence Completion"
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
                className="rounded-xl border-border/60 bg-card/50 backdrop-blur-sm text-sm"
              />
            </div>
          </div>

          {/* Mode Switch Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-muted/40 border border-border/40">
            <button
              type="button"
              onClick={() => setActiveTab("paste")}
              className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === "paste"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Paste JSON
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("upload")}
              className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === "upload"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Upload .json File
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ai_prompt")}
              className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === "ai_prompt"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Bot className="h-3.5 w-3.5" />
              <span>AI Prompt & Schema</span>
            </button>
          </div>

          {activeTab === "ai_prompt" ? (
            <div className="space-y-4">
              {/* 10-Set Exam Pack Feature Card */}
              <div className="rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-blue-500/10 p-4 space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] uppercase font-bold tracking-wider">
                        Recommended
                      </Badge>
                      <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-primary" />
                        <span>10-Set Exam Master Pack (100 Questions)</span>
                      </h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      Green Defence Academy syllabus: 10 topics with Bangla translations for every question & broad, in-depth explanations.
                    </p>
                  </div>

                  <Button
                    type="button"
                    size="sm"
                    onClick={async () => {
                      await navigator.clipboard.writeText(TEN_SET_AI_PROMPT);
                      setCopiedTenPack(true);
                      setTimeout(() => setCopiedTenPack(false), 2000);
                    }}
                    className="gap-1.5 text-xs rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold shadow-md shadow-emerald-600/20 shrink-0 h-8"
                  >
                    {copiedTenPack ? (
                      <>
                        <Check className="h-3 w-3 text-white" />
                        <span>Copied 10-Set Prompt!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy 10-Set Prompt (100 Qs)</span>
                      </>
                    )}
                  </Button>
                </div>

                <div className="text-[11px] text-muted-foreground bg-background/60 p-2.5 rounded-xl border border-border/40 space-y-1">
                  <p className="font-semibold text-foreground">How to import all 10 sets:</p>
                  <ol className="list-decimal list-inside space-y-0.5 text-[11px] text-muted-foreground">
                    <li>Click <strong>Copy 10-Set Prompt (100 Qs)</strong> above.</li>
                    <li>Paste into ChatGPT, Claude, or Gemini.</li>
                    <li>Copy the resulting JSON array output and switch to <strong>&ldquo;Paste JSON&rdquo;</strong> tab.</li>
                    <li>Click <strong>Save & Create All 10 Quizzes</strong> — all 10 sets are created instantly!</li>
                  </ol>
                </div>
              </div>

              {/* Custom Single Topic Generator */}
              <div className="rounded-2xl border border-border/60 bg-card/40 p-4 space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      <Wand2 className="h-3.5 w-3.5 text-primary" />
                      <span>Single Topic Generator</span>
                    </h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Generate a single customized set for a specific grammar rule.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      size="sm"
                      onClick={async () => {
                        const text = generateAiPrompt(aiTopic, aiCount);
                        await navigator.clipboard.writeText(text);
                        setCopiedPrompt(true);
                        setTimeout(() => setCopiedPrompt(false), 2000);
                      }}
                      className="gap-1.5 text-xs rounded-xl bg-primary text-primary-foreground h-8"
                    >
                      {copiedPrompt ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-300" />
                          <span>Prompt Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy Custom Prompt</span>
                        </>
                      )}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={async () => {
                        await navigator.clipboard.writeText(SAMPLE_JSON_STRUCTURE);
                        setCopiedSchema(true);
                        setTimeout(() => setCopiedSchema(false), 2000);
                      }}
                      className="gap-1.5 text-xs rounded-xl h-8"
                    >
                      {copiedSchema ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-500" />
                          <span>JSON Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy Sample JSON</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-[11px] font-semibold text-muted-foreground">
                      Exam Topic
                    </label>
                    <Input
                      value={aiTopic}
                      onChange={(e) => setAiTopic(e.target.value)}
                      placeholder="e.g. Appropriate Prepositions, Synonyms"
                      className="rounded-xl border-border/60 bg-background/60 text-xs h-8"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-muted-foreground">
                      Questions Count
                    </label>
                    <Input
                      type="number"
                      min={1}
                      max={50}
                      value={aiCount}
                      onChange={(e) => setAiCount(Number(e.target.value) || 10)}
                      className="rounded-xl border-border/60 bg-background/60 text-xs h-8 font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === "upload" ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="group cursor-pointer rounded-2xl border-2 border-dashed border-border/70 hover:border-primary/50 bg-card/30 hover:bg-card/50 transition-all p-8 text-center space-y-3"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,application/json"
                className="hidden"
                onChange={handleFileUpload}
              />
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                <Upload className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {fileName ? fileName : "Click to select a JSON file"}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Supports single quiz JSON or 10-set batch JSON array
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <FileCode className="h-3.5 w-3.5 text-primary" />
                  <span>JSON Payload</span>
                </label>
                <span className="text-[11px] font-mono text-muted-foreground">
                  Single object or Array of 10 sets
                </span>
              </div>
              <textarea
                rows={9}
                value={rawText}
                onChange={(e) => handleProcessJson(e.target.value)}
                placeholder={`[\n  {\n    "title": "Set 01 (Adjective + Preposition)",\n    "questions": [...]\n  },\n  ...\n]`}
                className="w-full rounded-2xl border border-border/60 bg-muted/20 p-3 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-y"
              />
            </div>
          )}

          {/* Validation Feedback */}
          {parseError && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 flex items-start gap-2.5 text-xs text-red-500">
              <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <div className="leading-relaxed">{parseError}</div>
            </div>
          )}

          {preview && !parseError && (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Ready to Create</span>
                </div>
                <Badge
                  variant="outline"
                  className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 font-mono text-[11px]"
                >
                  {previewSets.length > 1
                    ? `${previewSets.length} Sets (${previewSets.reduce((acc, s) => acc + s.questions.length, 0)} Total Qs)`
                    : `${preview.questions.length} Questions Detected`}
                </Badge>
              </div>

              {previewSets.length > 1 ? (
                <div className="pt-2 border-t border-emerald-500/20 text-xs space-y-1.5 max-h-36 overflow-y-auto">
                  <div className="font-semibold text-foreground text-[11px]">
                    Detected {previewSets.length} Quiz Sets:
                  </div>
                  {previewSets.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-[11px] bg-background/60 px-2.5 py-1 rounded-lg border border-border/40"
                    >
                      <span className="font-medium text-foreground truncate max-w-[75%]">
                        {idx + 1}. {s.title}
                      </span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        {s.questions.length} Qs
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                /* Quick Preview of First Question */
                preview.questions[0] && (
                  <div className="pt-2 border-t border-emerald-500/20 text-xs space-y-1">
                    <p className="font-medium text-foreground line-clamp-1">
                      Q1: {preview.questions[0].question}
                    </p>
                    <p className="text-muted-foreground text-[11px] font-mono">
                      Correct Answer:{" "}
                      <span className="font-bold text-emerald-500">
                        [{preview.questions[0].correctAnswer}]{" "}
                        {preview.questions[0].options[preview.questions[0].correctAnswer]}
                      </span>
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="p-4 px-6 border-t border-border/40 bg-card/40 flex items-center justify-end gap-3">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setOpen(false)}
            className="rounded-xl text-xs"
          >
            Cancel
          </Button>

          <Button
            type="button"
            onClick={handleSubmit}
            disabled={
              (!preview && previewSets.length === 0) ||
              Boolean(parseError) ||
              createMutation.isPending ||
              createBatchMutation.isPending
            }
            className="gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold rounded-xl text-xs shadow-lg shadow-primary/20"
          >
            {createMutation.isPending || createBatchMutation.isPending ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>
                  {previewSets.length > 1
                    ? `Saving ${previewSets.length} Quizzes...`
                    : "Saving Quiz..."}
                </span>
              </>
            ) : (
              <>
                <BookA className="h-3.5 w-3.5" />
                <span>
                  {previewSets.length > 1
                    ? `Save & Create All ${previewSets.length} Quizzes`
                    : "Save & Create Quiz"}
                </span>
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

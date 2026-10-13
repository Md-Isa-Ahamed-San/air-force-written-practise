"use client";

import { useState } from "react";
import {
  Sparkles,
  Copy,
  Check,
  Bot,
  FileCode2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Layers,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export const SAMPLE_JSON_STRUCTURE = `{
  "title": "Air Force English - Model Practice Set",
  "description": "Prepositions, Synonyms, Antonyms & Idioms",
  "questions": [
    {
      "qNumber": 1,
      "question": "Choose the correct preposition: 'He is proficient ___ English.'",
      "options": {
        "A": "in",
        "B": "at",
        "C": "with",
        "D": "for"
      },
      "answer": "A",
      "explanation": "'Proficient in' is the standard preposition when referring to a language."
    },
    {
      "qNumber": 2,
      "question": "What is the synonym of 'Benevolent'?",
      "options": {
        "A": "Hostile",
        "B": "Kind and generous",
        "C": "Arrogant",
        "D": "Selfish"
      },
      "answer": "B",
      "explanation": "Benevolent means well-meaning and charitable; kind."
    },
    {
      "qNumber": 3,
      "question": "Select the antonym of 'CANDID':",
      "options": {
        "A": "Frank",
        "B": "Blunt",
        "C": "Deceitful",
        "D": "Sincere"
      },
      "answer": "C",
      "explanation": "Candid means truthful and frank; deceitful is the direct antonym."
    }
  ]
}`;

export function generateAiPrompt(topic: string, questionCount: number = 10): string {
  const chosenTopic = topic.trim() || "Air Force English Grammar, Prepositions & Vocabulary";

  return `You are an expert exam question generator for the Air Force Written Examination (English Wing).

Please create ${questionCount} high-quality, standard-level multiple choice questions (MCQs) for the following topic:
Topic: "${chosenTopic}"

CRITICAL INSTRUCTION: Output ONLY a single valid raw JSON object conforming strictly to the schema below. Do not wrap in markdown quotes if possible, and do not add conversational preamble.

{
  "title": "${chosenTopic} - Practice Set",
  "description": "Comprehensive MCQ practice with explanations",
  "questions": [
    {
      "qNumber": 1,
      "question": "Question stem here...",
      "options": {
        "A": "Option text 1",
        "B": "Option text 2",
        "C": "Option text 3",
        "D": "Option text 4"
      },
      "answer": "A",
      "explanation": "Concise grammatical explanation of why this answer is correct."
    }
  ]
}

Strict Rules:
1. Every question MUST have exactly 4 options with keys "A", "B", "C", and "D".
2. The "answer" field MUST be only the single uppercase letter ("A", "B", "C", or "D").
3. Include an "explanation" for every question clarifying grammar rules or vocabulary meanings.
4. Number "qNumber" sequentially from 1 to ${questionCount}.
5. Ensure questions are challenging, standard exam quality, and free of typos.`;
}

export function AiJsonTemplateSection({
  defaultExpanded = false,
}: {
  defaultExpanded?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [activeTab, setActiveTab] = useState<"prompt" | "schema">("prompt");
  const [topic, setTopic] = useState("Appropriate Prepositions & Idioms");
  const [questionCount, setQuestionCount] = useState(10);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedSchema, setCopiedSchema] = useState(false);

  const promptText = generateAiPrompt(topic, questionCount);

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopySchema = async () => {
    try {
      await navigator.clipboard.writeText(SAMPLE_JSON_STRUCTURE);
      setCopiedSchema(true);
      setTimeout(() => setCopiedSchema(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="rounded-3xl glass-card border border-white/20 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-300">
      {/* Header Banner */}
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        className="p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-card/40 transition-colors select-none"
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-primary text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 flex-shrink-0">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                AI Question Generator & JSON Format Guide
              </h3>
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/25 text-[10px] font-mono"
              >
                ChatGPT / Claude / Gemini Ready
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Copy our pre-tuned AI prompt or sample JSON to generate full question sets in seconds.
            </p>
          </div>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="rounded-xl h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="p-5 sm:p-6 pt-0 border-t border-border/40 space-y-5 animate-in-fade">
          {/* Top Controls & Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4">
            <div className="flex items-center p-1 rounded-xl bg-muted/40 border border-border/40 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab("prompt")}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                  activeTab === "prompt"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Wand2 className="h-3.5 w-3.5 text-primary" />
                <span>AI Prompt Generator</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("schema")}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                  activeTab === "schema"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <FileCode2 className="h-3.5 w-3.5 text-indigo-400" />
                <span>Sample JSON Schema</span>
              </button>
            </div>

            {activeTab === "prompt" ? (
              <Button
                type="button"
                onClick={handleCopyPrompt}
                size="sm"
                className="gap-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white shadow-md shadow-primary/20 w-full sm:w-auto"
              >
                {copiedPrompt ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy AI Prompt</span>
                  </>
                )}
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleCopySchema}
                size="sm"
                className="gap-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white shadow-md shadow-primary/20 w-full sm:w-auto"
              >
                {copiedSchema ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                    <span>Copied JSON!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Sample JSON</span>
                  </>
                )}
              </Button>
            )}
          </div>

          {activeTab === "prompt" ? (
            <div className="space-y-4">
              {/* Prompt customization inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-card/40 border border-border/40">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-semibold text-muted-foreground">
                    Target Topic / Subject
                  </label>
                  <Input
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g. Appropriate Prepositions, Synonyms & Antonyms"
                    className="rounded-xl border-border/60 bg-background/60 text-xs h-9"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-muted-foreground">
                    Number of Questions
                  </label>
                  <Input
                    type="number"
                    min={1}
                    max={50}
                    value={questionCount}
                    onChange={(e) => setQuestionCount(Number(e.target.value) || 10)}
                    className="rounded-xl border-border/60 bg-background/60 text-xs h-9 font-mono"
                  />
                </div>
              </div>

              {/* Code Box for AI Prompt */}
              <div className="relative rounded-2xl border border-border/60 bg-muted/20 p-4 font-mono text-xs overflow-x-auto max-h-[300px] leading-relaxed select-all">
                <pre className="whitespace-pre-wrap text-foreground/90 font-mono">
                  {promptText}
                </pre>
              </div>

              {/* Quick instructions strip */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  How to use:
                </span>
                <span>1. Click &ldquo;Copy AI Prompt&rdquo; above</span>
                <span>•</span>
                <span>2. Paste into ChatGPT, Gemini, or Claude</span>
                <span>•</span>
                <span>3. Copy the output and paste it directly into the &ldquo;Upload / Create Quiz&rdquo; modal!</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Code Box for Sample JSON */}
              <div className="relative rounded-2xl border border-border/60 bg-muted/20 p-4 font-mono text-xs overflow-x-auto max-h-[340px] leading-relaxed select-all">
                <pre className="text-foreground/90 font-mono">
                  {SAMPLE_JSON_STRUCTURE}
                </pre>
              </div>

              {/* Schema field breakdown table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-card/40 border border-border/40">
                  <code className="text-primary font-bold font-mono">title</code>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Quiz set heading name.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-card/40 border border-border/40">
                  <code className="text-primary font-bold font-mono">options</code>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Object with keys A, B, C, D (or array of 4 items).
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-card/40 border border-border/40">
                  <code className="text-primary font-bold font-mono">answer</code>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    The correct key: &quot;A&quot;, &quot;B&quot;, &quot;C&quot;, or &quot;D&quot;.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-card/40 border border-border/40">
                  <code className="text-primary font-bold font-mono">explanation</code>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Shown during question review & results.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

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
  BookOpen,
  Target,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export const TEN_TOPICS_LIST = [
  { set: "Set 01", focus: "Adjective + Preposition", example: "proficient in, senior to, absorbed in" },
  { set: "Set 02", focus: "Verb + Preposition", example: "refrain from, abide by, rely on, comply with" },
  { set: "Set 03", focus: "Verbs with No Preposition", example: "discuss, reach, order, marry, resign" },
  { set: "Set 04", focus: "Prepositions of Time & Place", example: "in, on, at, by, within, since, for" },
  { set: "Set 05", focus: "Idioms & Phrases (Set A)", example: "standard defence exam idioms & meanings" },
  { set: "Set 06", focus: "Idioms & Phrases (Set B)", example: "contextual idiom usage in sentences" },
  { set: "Set 07", focus: "Phrasal Verbs", example: "look after, give up, put out, call off" },
  { set: "Set 08", focus: "Noun + Preposition", example: "key to, cause of, appetite for, invitation to" },
  { set: "Set 09", focus: "Mixed Prepositions & Rules", example: "sentence correction & grammatical usage" },
  { set: "Set 10", focus: "Tricky Prepositions & Traps", example: "different from vs than, die of vs from" },
];

export const TEN_SET_AI_PROMPT = `You are an English MCQ trainer for Bangladesh Air Force / Navy / BCS-style admission exams. I am preparing for the written examination and I am weak in English and grammar. Generate practice questions in the exact style of the "Navy & Airforce Preparation Guide" (Green Defence Academy).

Generate exactly 10 distinct practice sets with 10 questions in each set (100 questions total).

## 10 Specific Set Topics:
1. Set 01: Appropriate Prepositions (Adjective + Preposition)
2. Set 02: Appropriate Prepositions (Verb + Preposition)
3. Set 03: Appropriate Prepositions (Verbs that take no preposition: e.g. discuss, reach, order, marry, resign, resemble)
4. Set 04: Prepositions of Time and Place (in, on, at, by, within, since, for)
5. Set 05: Idioms and Phrases (Set A - core exam idioms and definitions)
6. Set 06: Idioms and Phrases (Set B - idioms in context sentences)
7. Set 07: Phrasal Verbs (look after, give up, put out, call off, bring about)
8. Set 08: Noun + Preposition (key to, cause of, appetite for, objection to)
9. Set 09: Mixed Prepositions & Sentence Correction Rules
10. Set 10: Tricky Prepositions & Common Traps (different from vs than, die of vs from, blind in vs to)

## Quality & Formatting Rules:
- MANDATORY BANGLA TRANSLATION: Every question prompt MUST include the English question followed by its clear Bangla translation/meaning (e.g. "He is proficient ___ English grammar. (বাংলা: তিনি ইংরেজি ব্যাকরণে দক্ষ।)" or "What is the synonym of 'Candid'? (বাংলা: 'Candid' শব্দের সমার্থক শব্দ কোনটি?)").
- BROAD & IN-DEPTH EXPLANATIONS: The "explanation" for every single question must be broad, rich, and deeply educational (NOT a single brief line) so a candidate weak in English can learn thoroughly:
  1. The core English grammar rule, phrase pattern, or vocabulary definition.
  2. Clear Bengali explanation (বাংলা ব্যাখ্যা) describing the context and meaning.
  3. Option breakdown: why the correct choice fits and why the nearest distractor is wrong (common traps for Bangla speakers).
- Exactly 4 options ("A", "B", "C", "D") per question, with exactly ONE correct answer.
- Distractors must be plausible and based on common errors made by Bangladeshi candidates.
- Answer distribution must be balanced across A, B, C, and D (roughly 25% each).
- Do not repeat questions across sets. Number qNumber 1 to 10 within each set.

## CRITICAL OUTPUT FORMAT:
Output ONLY a single valid JSON array containing all 10 sets (no markdown conversational text, no preamble, output only raw JSON). Conforming to this schema:

[
  {
    "title": "Appropriate Prepositions & Idioms - Practice Set 01 (Adjective + Preposition)",
    "description": "Comprehensive MCQ practice based on Green Defence Academy guide. Focus: Adjective + Preposition (with Bangla translations & in-depth explanations)",
    "questions": [
      {
        "qNumber": 1,
        "question": "He is proficient ___ English grammar. (বাংলা: তিনি ইংরেজি ব্যাকরণে দক্ষ।)",
        "options": {
          "A": "in",
          "B": "at",
          "C": "with",
          "D": "for"
        },
        "answer": "A",
        "explanation": "Rule: 'Proficient' এর পর কোনো বিষয়, ভাষা বা বিদ্যায় দক্ষতা প্রকাশ করতে preposition 'in' বসে (Proficient in = দক্ষ)।\\nবাংলা ব্যাখ্যা: তিনি ইংরেজি ব্যাকরণে দক্ষ। লক্ষণীয় যে, 'Good' এর সাথে 'at' বসে (Good at English), কিন্তু 'Proficient' এর সাথে সর্বদা 'in' ব্যবহৃত হয়।\\nভুল অপশনের কারণ: অনেকেই Good at-এর সাথে মিলিয়ে Option B (at) দাগিয়ে ফেলে, যা ভুল। Option C (with) ও D (for) ব্যাকরণগতভাবে প্রযোজ্য নয়।"
      }
      // ... exactly 10 questions numbered 1 to 10
    ]
  }
  // ... continue for Sets 02 through 10
]`;

export const SAMPLE_JSON_STRUCTURE = `{
  "title": "Appropriate Prepositions & Idioms - Practice Set 01",
  "description": "Comprehensive MCQ practice with Bangla translations and in-depth explanations",
  "questions": [
    {
      "qNumber": 1,
      "question": "He is proficient ___ English grammar. (বাংলা: তিনি ইংরেজি ব্যাকরণে দক্ষ।)",
      "options": {
        "A": "in",
        "B": "at",
        "C": "with",
        "D": "for"
      },
      "answer": "A",
      "explanation": "Rule: 'Proficient in' is the standard rule for languages and skills.\\nবাংলা ব্যাখ্যা: কোনো বিষয়ে বা ভাষায় পারদর্শী বোঝাতে Proficient-এর পর সর্বদা in বসে।\\nভুল অপশন: অনেকেই Good at-এর নিয়মের সাথে গুলিয়ে Option B (at) বেছে নেয়, যা ভুল।"
    },
    {
      "qNumber": 2,
      "question": "Select the correct synonym of 'Benevolent': (বাংলা: 'Benevolent' শব্দের সঠিক সমার্থক শব্দ কোনটি?)",
      "options": {
        "A": "Hostile",
        "B": "Kind and generous",
        "C": "Arrogant",
        "D": "Selfish"
      },
      "answer": "B",
      "explanation": "Meaning: 'Benevolent' মানে দয়ালু ও পরোপকারী (Kind and generous).\\nবাংলা ব্যাখ্যা: শব্দটির মূল অর্থ অন্যের ভালো চাওয়া।\\nঅন্যান্য অপশন: Hostile = শত্রুভাবাপন্ন, Arrogant = অহংকারী, Selfish = স্বার্থপর—যেগুলো বিপরীতার্থক বা অসঙ্গত।"
    }
  ]
}`;

export const SAMPLE_BATCH_JSON_STRUCTURE = `[
  {
    "title": "Appropriate Prepositions & Idioms - Practice Set 01 (Adjective + Preposition)",
    "description": "Focus: Adjective + Preposition (with Bangla translations & explanations)",
    "questions": [
      {
        "qNumber": 1,
        "question": "He is proficient ___ English. (বাংলা: তিনি ইংরেজিতে দক্ষ।)",
        "options": { "A": "in", "B": "at", "C": "with", "D": "for" },
        "answer": "A",
        "explanation": "Rule: Proficient in (দক্ষ)। বাংলায় কোনো বিষয়ে পারদর্শিতা বোঝাতে proficient in বসে। Good at-এর সাথে তুলনা করে ভুল করা যাবে না।"
      }
    ]
  },
  {
    "title": "Appropriate Prepositions & Idioms - Practice Set 02 (Verb + Preposition)",
    "description": "Focus: Verb + Preposition (with Bangla translations & explanations)",
    "questions": [
      {
        "qNumber": 1,
        "question": "You should abide ___ the rules of the academy. (বাংলা: তোমার একাডেমির নিয়ম মেনে চলা উচিত।)",
        "options": { "A": "to", "B": "by", "C": "with", "D": "in" },
        "answer": "B",
        "explanation": "Rule: 'Abide by' একটি phrasal verb যার অর্থ মেনে চলা (obey rules)। Option A (abide to) প্রচলিত ভুল কিন্তু ব্যাকরণগতভাবে ভুল।"
      }
    ]
  }
]`;

export function generateAiPrompt(topic: string, questionCount: number = 10): string {
  const chosenTopic = topic.trim() || "Air Force English Grammar, Prepositions & Vocabulary";

  return `You are an expert English MCQ trainer for Bangladesh Air Force / Navy / BCS admission exams (Green Defence Academy style). I am preparing for the written examination and I am weak in English and grammar.

Please create ${questionCount} high-quality, standard-level multiple choice questions (MCQs) for:
Topic: "${chosenTopic}"

## Requirements:
1. BANGLA TRANSLATION FOR EVERY QUESTION: Every question MUST include the English prompt followed by its clear Bangla translation/meaning (e.g. "He is absorbed ___ meditation. (বাংলা: তিনি ধ্যানে মগ্ন।)" or "What is the meaning of 'At a loss'? (বাংলা: 'At a loss' বাগধারাটির অর্থ কী?)").
2. BROAD & IN-DEPTH EXPLANATIONS: Every question must provide a rich, detailed, and broad "explanation" (not a short 1-line answer):
   - The grammar rule or vocabulary root meaning.
   - Clear Bengali explanation (বাংলা ব্যাখ্যা) of why this is correct.
   - Why the distractors are wrong and common traps made by Bangladeshi candidates.
3. Exactly 4 options: keys "A", "B", "C", "D" with plausible distractors.
4. "answer" must be single uppercase letter ("A", "B", "C", or "D").
5. Number qNumber 1 to ${questionCount}.

CRITICAL INSTRUCTION: Output ONLY a single valid raw JSON object matching this schema (no conversational text):

{
  "title": "${chosenTopic} - Practice Set",
  "description": "Comprehensive MCQ practice with Bangla translations and in-depth explanations",
  "questions": [
    {
      "qNumber": 1,
      "question": "He is proficient ___ English grammar. (বাংলা: তিনি ইংরেজি ব্যাকরণে দক্ষ।)",
      "options": {
        "A": "in",
        "B": "at",
        "C": "with",
        "D": "for"
      },
      "answer": "A",
      "explanation": "Rule: 'Proficient in' is the standard rule for languages and skills.\\nবাংলা ব্যাখ্যা: কোনো ভাষা বা বিদ্যায় পারদর্শিতা বোঝাতে proficient-এর পর in বসে। Good-এর সাথে at হলেও proficient-এর সাথে in বসে, তাই অপশন B ভুল।"
    }
  ]
}`;
}

export function AiJsonTemplateSection({
  defaultExpanded = false,
}: {
  defaultExpanded?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [mode, setMode] = useState<"ten_pack" | "single_custom" | "schema">("ten_pack");
  const [topic, setTopic] = useState("Appropriate Prepositions & Idioms");
  const [questionCount, setQuestionCount] = useState(10);
  const [copiedTenPack, setCopiedTenPack] = useState(false);
  const [copiedCustom, setCopiedCustom] = useState(false);
  const [copiedSchema, setCopiedSchema] = useState(false);

  const customPromptText = generateAiPrompt(topic, questionCount);

  const handleCopyTenPack = async () => {
    try {
      await navigator.clipboard.writeText(TEN_SET_AI_PROMPT);
      setCopiedTenPack(true);
      setTimeout(() => setCopiedTenPack(false), 2000);
    } catch {
      // clipboard fallback
    }
  };

  const handleCopyCustom = async () => {
    try {
      await navigator.clipboard.writeText(customPromptText);
      setCopiedCustom(true);
      setTimeout(() => setCopiedCustom(false), 2000);
    } catch {
      // clipboard fallback
    }
  };

  const handleCopySchema = async () => {
    try {
      await navigator.clipboard.writeText(SAMPLE_BATCH_JSON_STRUCTURE);
      setCopiedSchema(true);
      setTimeout(() => setCopiedSchema(false), 2000);
    } catch {
      // clipboard fallback
    }
  };

  return (
    <div className="rounded-2xl glass-card border border-white/20 dark:border-white/10 shadow-lg overflow-hidden transition-all duration-300">
      {/* Header Banner */}
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-card/40 transition-colors select-none"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-primary text-white flex items-center justify-center shadow-md shadow-indigo-500/20 flex-shrink-0">
            <Bot className="h-4.5 w-4.5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm sm:text-base font-bold text-foreground">
                AI Question Generator & JSON Guide
              </h3>
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/25 text-[10px] font-mono"
              >
                10-Set Exam Pack Included
              </Badge>
            </div>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Copy our 10-set BAF exam prompt (100 questions) or generate custom topic sets for ChatGPT / Claude / Gemini.
            </p>
          </div>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="rounded-xl h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
        >
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="p-4 sm:p-5 pt-0 border-t border-border/40 space-y-4 animate-in-fade">
          {/* Top Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-3">
            <button
              type="button"
              onClick={() => setMode("ten_pack")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                mode === "ten_pack"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground border border-border/40"
              }`}
            >
              <Target className="h-3.5 w-3.5" />
              <span>⭐ 10-Set BAF/Navy Master Pack (100 Qs)</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("single_custom")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                mode === "single_custom"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground border border-border/40"
              }`}
            >
              <Wand2 className="h-3.5 w-3.5" />
              <span>Single Topic Generator</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("schema")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                mode === "schema"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground border border-border/40"
              }`}
            >
              <FileCode2 className="h-3.5 w-3.5" />
              <span>Batch JSON Schema</span>
            </button>
          </div>

          {/* MODE 1: 10-SET MASTER PACK */}
          {mode === "ten_pack" && (
            <div className="space-y-4">
              {/* 10 Topic Pills Grid */}
              <div className="p-3.5 rounded-2xl bg-card/50 border border-border/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-primary" />
                    <span>Included 10 Exam Topics (10 Qs each = 100 Qs total):</span>
                  </span>
                  <Badge variant="outline" className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border-emerald-500/25">
                    Green Defence Academy Style
                  </Badge>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1 text-[11px] font-mono">
                  {TEN_TOPICS_LIST.map((t) => (
                    <div
                      key={t.set}
                      className="p-2 rounded-xl bg-muted/30 border border-border/40 text-left space-y-0.5 hover:border-primary/40 transition-colors"
                      title={t.example}
                    >
                      <span className="text-[10px] font-bold text-primary block">{t.set}</span>
                      <p className="text-[11px] font-medium text-foreground truncate">{t.focus}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action & Code Box */}
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground font-mono">
                  Prompt tuned for ChatGPT, Claude, and Gemini:
                </span>

                <Button
                  type="button"
                  onClick={handleCopyTenPack}
                  size="sm"
                  className="gap-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-md shadow-primary/20"
                >
                  {copiedTenPack ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                      <span>Copied 10-Set Prompt!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy 10-Set AI Prompt</span>
                    </>
                  )}
                </Button>
              </div>

              <div className="relative rounded-2xl border border-border/60 bg-muted/20 p-4 font-mono text-[11px] overflow-x-auto max-h-[220px] leading-relaxed select-all">
                <pre className="whitespace-pre-wrap text-foreground/90 font-mono">
                  {TEN_SET_AI_PROMPT}
                </pre>
              </div>

              {/* Quick instructions */}
              <div className="p-3 rounded-xl bg-primary/5 border border-primary/15 flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
                <span className="font-semibold text-primary">How to import:</span>
                <span>1. Click &ldquo;Copy 10-Set AI Prompt&rdquo;</span>
                <span>→</span>
                <span>2. Paste into ChatGPT/Claude</span>
                <span>→</span>
                <span>3. Copy AI&apos;s output, open &ldquo;Upload / Create Quiz&rdquo;, and click &ldquo;Import All 10 Sets&rdquo;!</span>
              </div>
            </div>
          )}

          {/* MODE 2: SINGLE TOPIC CUSTOM GENERATOR */}
          {mode === "single_custom" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-card/40 border border-border/40">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-semibold text-muted-foreground">
                    Target Topic / Category
                  </label>
                  <Input
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g. Voice & Narration, Conditionals, Idioms"
                    className="rounded-xl border-border/60 bg-background/60 text-xs h-9"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-muted-foreground">
                    Questions Count
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

              {/* Quick topic buttons */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                <span className="text-muted-foreground mr-1">Quick Topics:</span>
                {[
                  "Voice & Narration",
                  "Conditionals & Tenses",
                  "Bangla to English Translation",
                  "Correct Sentence & Rules",
                  "Articles & Question Tags",
                  "Vocabulary: Synonyms & Antonyms",
                  "Analogy & Word Pairs",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTopic(item)}
                    className="px-2 py-0.5 rounded-lg bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/40 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground font-mono">
                  Custom Prompt:
                </span>
                <Button
                  type="button"
                  onClick={handleCopyCustom}
                  size="sm"
                  className="gap-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground"
                >
                  {copiedCustom ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Single-Set Prompt</span>
                    </>
                  )}
                </Button>
              </div>

              <div className="relative rounded-2xl border border-border/60 bg-muted/20 p-4 font-mono text-[11px] overflow-x-auto max-h-[200px] leading-relaxed select-all">
                <pre className="whitespace-pre-wrap text-foreground/90 font-mono">
                  {customPromptText}
                </pre>
              </div>
            </div>
          )}

          {/* MODE 3: BATCH JSON SCHEMA */}
          {mode === "schema" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground font-mono">
                  Multi-Set Array JSON Structure (Imports all sets at once):
                </span>
                <Button
                  type="button"
                  onClick={handleCopySchema}
                  size="sm"
                  variant="outline"
                  className="gap-2 rounded-xl text-xs font-semibold"
                >
                  {copiedSchema ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Copied JSON!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Sample Batch JSON</span>
                    </>
                  )}
                </Button>
              </div>

              <div className="relative rounded-2xl border border-border/60 bg-muted/20 p-4 font-mono text-[11px] overflow-x-auto max-h-[240px] leading-relaxed select-all">
                <pre className="text-foreground/90 font-mono">
                  {SAMPLE_BATCH_JSON_STRUCTURE}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

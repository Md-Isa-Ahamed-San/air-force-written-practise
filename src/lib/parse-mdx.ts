import matter from "gray-matter";

const BENGALI_DIGITS: Record<string, string> = {
  "০": "0",
  "১": "1",
  "২": "2",
  "৩": "3",
  "৪": "4",
  "৫": "5",
  "৬": "6",
  "৭": "7",
  "৮": "8",
  "৯": "9",
};

export const BENGALI_TO_ENGLISH_OPTION: Record<string, string> = {
  "ক": "A",
  "খ": "B",
  "গ": "C",
  "ঘ": "D",
};

export const ENGLISH_TO_BENGALI_OPTION: Record<string, string> = {
  "A": "ক",
  "B": "খ",
  "C": "গ",
  "D": "ঘ",
};

/**
 * Cleans an answer string token, stripping leading/trailing punctuation
 * like periods, commas, colons, Bengali dari, and brackets.
 */
export function cleanAnswerToken(token: string): string {
  if (!token) return "";
  const cleaned = token
    .trim()
    .replace(/^[\(\[\"\'\`]+/, "")
    .replace(/[\.।,;\)\:\]\"\'\`]+$/, "")
    .trim();

  // If it's a standard single letter a-d / A-D, standardize to uppercase
  const upper = cleaned.toUpperCase();
  if (["A", "B", "C", "D"].includes(upper)) {
    return upper;
  }
  return cleaned;
}

/**
 * Normalizes an answer string to standard uppercase English (A, B, C, D)
 * or trimmed string for fair comparison.
 */
export function normalizeAnswer(ans: string): string {
  if (!ans) return "";
  const cleaned = cleanAnswerToken(ans);
  const upper = cleaned.toUpperCase();
  if (["A", "B", "C", "D"].includes(upper)) {
    return upper;
  }
  if (BENGALI_TO_ENGLISH_OPTION[cleaned]) {
    return BENGALI_TO_ENGLISH_OPTION[cleaned]!;
  }
  return cleaned;
}

export function areAnswersEqual(ans1: string, ans2: string): boolean {
  if (!ans1 || !ans2) return false;
  return normalizeAnswer(ans1) === normalizeAnswer(ans2);
}

function parseBengaliOrEnglishInt(str: string): number {
  let converted = "";
  for (const char of str) {
    converted += BENGALI_DIGITS[char] ?? char;
  }
  return parseInt(converted, 10);
}

export interface ParsedMdxResult {
  title?: string;
  total?: number;
  answers: Array<{
    qNumber: number;
    answer: string;
  }>;
}

export function parseMdxAnswerSheet(rawMdx: string): ParsedMdxResult {
  let parsedMatter: matter.GrayMatterFile<string>;
  try {
    parsedMatter = matter(rawMdx);
  } catch {
    parsedMatter = { data: {}, content: rawMdx } as matter.GrayMatterFile<string>;
  }

  const { data, content } = parsedMatter;

  // Use a Map to deduplicate question numbers and preserve the latest parsed answer
  const answersMap = new Map<number, string>();

  // Matches (number)[separator](answerToken)
  // Supports single entry per line, multiple space-separated entries per line:
  // "1.b   2.a   3.c" or "1. A" or "১. ক  ২. খ" or "100.b."
  const entryRegex = /(?:^|[\s,;|\(\[])([০-৯0-9]+)\s*[\.\)\:\-]\s*([^\s,;|\)\]]+)/g;

  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    let match: RegExpExecArray | null;
    const lineMatcher = new RegExp(entryRegex.source, "g");
    while ((match = lineMatcher.exec(trimmed)) !== null) {
      if (match[1] && match[2]) {
        const qNumber = parseBengaliOrEnglishInt(match[1]);
        const answer = cleanAnswerToken(match[2]);
        if (!isNaN(qNumber) && qNumber > 0 && answer.length > 0) {
          answersMap.set(qNumber, answer);
        }
      }
    }
  }

  // Convert to array and sort by qNumber ascending
  const answers = Array.from(answersMap.entries())
    .map(([qNumber, answer]) => ({ qNumber, answer }))
    .sort((a, b) => a.qNumber - b.qNumber);

  return {
    title: typeof data.title === "string" ? data.title : undefined,
    total: typeof data.total === "number" ? data.total : answers.length,
    answers,
  };
}

export interface EnglishOptionMap {
  A: string;
  B: string;
  C: string;
  D: string;
  [key: string]: string;
}

export interface RawQuestionInput {
  qNumber?: number;
  question: string;
  options: string[] | Record<string, string>;
  answer?: string;
  correctAnswer?: string;
  explanation?: string;
}

export interface ValidatedQuestion {
  qNumber: number;
  question: string;
  options: EnglishOptionMap;
  correctAnswer: string; // Standardized to "A", "B", "C", or "D"
  explanation?: string;
}

export interface ValidatedEnglishQuizPayload {
  title: string;
  description?: string;
  questions: ValidatedQuestion[];
}

export const SAMPLE_ENGLISH_QUIZ: ValidatedEnglishQuizPayload = {
  title: "Air Force English Written Practice - Model Set 01",
  description: "Comprehensive review: Appropriate Prepositions, Synonyms, Antonyms, Idioms & Grammatical Usage.",
  questions: [
    {
      qNumber: 1,
      question: "Choose the correct preposition: 'He is proficient ___ English grammar.'",
      options: {
        A: "at",
        B: "in",
        C: "with",
        D: "for",
      },
      correctAnswer: "B",
      explanation: "We use 'proficient in' when referring to a language, subject, or field of study.",
    },
    {
      qNumber: 2,
      question: "Select the exact synonym of the word 'BENEVOLENT':",
      options: {
        A: "Hostile",
        B: "Generous and kind",
        C: "Arrogant",
        D: "Deceptive",
      },
      correctAnswer: "B",
      explanation: "'Benevolent' means well-meaning, kindly, and charitable.",
    },
    {
      qNumber: 3,
      question: "Select the antonym of 'CANDID':",
      options: {
        A: "Frank",
        B: "Blunt",
        C: "Deceitful",
        D: "Sincere",
      },
      correctAnswer: "C",
      explanation: "'Candid' means truthful and straightforward; its antonym is deceitful or evasive.",
    },
    {
      qNumber: 4,
      question: "Identify the correctly spelled word:",
      options: {
        A: "Occurence",
        B: "Occurrence",
        C: "Occurrance",
        D: "Ocurence",
      },
      correctAnswer: "B",
      explanation: "'Occurrence' is spelled with double 'c' and double 'r'.",
    },
    {
      qNumber: 5,
      question: "What is the meaning of the idiom 'To take the bull by the horns'?",
      options: {
        A: "To escape from a severe danger",
        B: "To deal with a difficult situation directly and courageously",
        C: "To pick a fight with a stronger opponent",
        D: "To act carelessly without thinking",
      },
      correctAnswer: "B",
      explanation: "'To take the bull by the horns' means to confront a dangerous or challenging problem head-on.",
    },
    {
      qNumber: 6,
      question: "Choose the correct form: 'Neither the officer nor the airmen ___ present on parade.'",
      options: {
        A: "was",
        B: "is",
        C: "were",
        D: "has been",
      },
      correctAnswer: "C",
      explanation: "In 'Neither... nor...', the verb agrees with the closer subject ('the airmen' is plural -> 'were').",
    },
    {
      qNumber: 7,
      question: "What is the one-word substitution for 'A person who loves and supports his country'?",
      options: {
        A: "Martyr",
        B: "Patriot",
        C: "Traitor",
        D: "Diplomat",
      },
      correctAnswer: "B",
      explanation: "A 'patriot' is someone who loves, supports, and is prepared to defend their country.",
    },
    {
      qNumber: 8,
      question: "Fill in the blank: 'The pilot succeeded ___ landing the damaged aircraft safely.'",
      options: {
        A: "to",
        B: "in",
        C: "for",
        D: "with",
      },
      correctAnswer: "B",
      explanation: "The verb 'succeed' is followed by the preposition 'in' + gerund (succeeded in landing).",
    },
    {
      qNumber: 9,
      question: "Identify the antonym of 'METICULOUS':",
      options: {
        A: "Careless",
        B: "Precise",
        C: "Thorough",
        D: "Fastidious",
      },
      correctAnswer: "A",
      explanation: "'Meticulous' means showing great attention to detail; opposite is careless or negligent.",
    },
    {
      qNumber: 10,
      question: "Choose the correct indirect speech: He said, 'I have completed the flight briefing.'",
      options: {
        A: "He said that he has completed the flight briefing.",
        B: "He said that he had completed the flight briefing.",
        C: "He said that he would complete the flight briefing.",
        D: "He said that he is completing the flight briefing.",
      },
      correctAnswer: "B",
      explanation: "Present perfect ('have completed') shifts to past perfect ('had completed') in reported speech.",
    },
  ],
};

/**
 * Normalizes user answer vs question key.
 * Handles: "A" / "B" / "C" / "D", "1" / "2" / "3" / "4", option text match.
 */
export function matchEnglishAnswer(
  userAns: string,
  correctKey: string,
  options: EnglishOptionMap
): boolean {
  if (!userAns || !correctKey) return false;
  const cleanUser = userAns.trim();
  const cleanKey = correctKey.trim().toUpperCase();

  // 1. Direct letter match (e.g. "B" vs "B")
  if (cleanUser.toUpperCase() === cleanKey) return true;

  // 2. Number to letter (1 -> A, 2 -> B, 3 -> C, 4 -> D)
  const numToLetter: Record<string, string> = { "1": "A", "2": "B", "3": "C", "4": "D" };
  if (numToLetter[cleanUser] && numToLetter[cleanUser] === cleanKey) return true;

  // 3. Option value match (e.g. user answered "Generous and kind" matching option B)
  const keyOptionText = options[cleanKey]?.trim().toLowerCase();
  if (keyOptionText && cleanUser.toLowerCase() === keyOptionText) return true;

  return false;
}

/**
 * Validates and normalizes raw JSON data into ValidatedEnglishQuizPayload.
 */
export function parseAndValidateEnglishJson(raw: unknown): ValidatedEnglishQuizPayload {
  let parsed: unknown = raw;
  if (typeof raw === "string") {
    try {
      parsed = JSON.parse(raw);
    } catch {
      throw new Error("Invalid JSON format. Please check for trailing commas or missing quotes.");
    }
  }

  if (!parsed || typeof parsed !== "object") {
    throw new Error("JSON must be an object or an array of questions.");
  }

  let title = "English Practice Quiz";
  let description: string | undefined = undefined;
  let rawQuestions: unknown[] = [];

  if (Array.isArray(parsed)) {
    rawQuestions = parsed;
    title = `English Practice Quiz (${rawQuestions.length} Questions)`;
  } else {
    const obj = parsed as Record<string, unknown>;
    if (typeof obj.title === "string" && obj.title.trim()) {
      title = obj.title.trim();
    }
    if (typeof obj.description === "string" && obj.description.trim()) {
      description = obj.description.trim();
    }

    if (Array.isArray(obj.questions)) {
      rawQuestions = obj.questions;
    } else if (Array.isArray(obj.data)) {
      rawQuestions = obj.data;
    } else {
      throw new Error("JSON object must contain a 'questions' array.");
    }
  }

  if (rawQuestions.length === 0) {
    throw new Error("Questions list cannot be empty. Please provide at least 1 question.");
  }

  const validatedQuestions: ValidatedQuestion[] = [];

  rawQuestions.forEach((item, index) => {
    if (!item || typeof item !== "object") {
      throw new Error(`Question #${index + 1} is invalid.`);
    }

    const q = item as Record<string, unknown>;
    const questionText = typeof q.question === "string" ? q.question.trim() : "";
    if (!questionText) {
      throw new Error(`Question #${index + 1} is missing a 'question' prompt text.`);
    }

    // Parse options
    const optionsObj: EnglishOptionMap = { A: "", B: "", C: "", D: "" };
    if (Array.isArray(q.options)) {
      if (q.options.length < 2) {
        throw new Error(`Question #${index + 1} must have at least 2 options.`);
      }
      const letters = ["A", "B", "C", "D"];
      q.options.slice(0, 4).forEach((opt, optIdx) => {
        const letter = letters[optIdx] ?? `Opt${optIdx + 1}`;
        optionsObj[letter] = String(opt ?? "").trim();
      });
    } else if (q.options && typeof q.options === "object") {
      const optRecord = q.options as Record<string, unknown>;
      optionsObj.A = String(optRecord.A ?? optRecord.a ?? optRecord["1"] ?? "").trim();
      optionsObj.B = String(optRecord.B ?? optRecord.b ?? optRecord["2"] ?? "").trim();
      optionsObj.C = String(optRecord.C ?? optRecord.c ?? optRecord["3"] ?? "").trim();
      optionsObj.D = String(optRecord.D ?? optRecord.d ?? optRecord["4"] ?? "").trim();

      if (!optionsObj.A || !optionsObj.B) {
        // Fallback: take first 4 keys
        const keys = Object.keys(optRecord);
        if (keys.length >= 2) {
          const letters = ["A", "B", "C", "D"];
          keys.slice(0, 4).forEach((k, kIdx) => {
            const letter = letters[kIdx] ?? k;
            optionsObj[letter] = String(optRecord[k] ?? "").trim();
          });
        }
      }
    } else {
      throw new Error(`Question #${index + 1} is missing an 'options' field.`);
    }

    // Determine correct answer
    const rawAnswer = String(q.answer ?? q.correctAnswer ?? q.key ?? "").trim();
    if (!rawAnswer) {
      throw new Error(`Question #${index + 1} is missing the correct 'answer' (A, B, C, or D).`);
    }

    let standardizedKey = rawAnswer.toUpperCase();
    if (["A", "B", "C", "D"].includes(standardizedKey)) {
      // Direct letter
    } else if (["1", "2", "3", "4"].includes(rawAnswer)) {
      const numMap: Record<string, string> = { "1": "A", "2": "B", "3": "C", "4": "D" };
      standardizedKey = numMap[rawAnswer]!;
    } else {
      // Find matching option text
      const matchedLetter = Object.entries(optionsObj).find(
        ([, text]) => text.toLowerCase() === rawAnswer.toLowerCase()
      )?.[0];
      if (matchedLetter) {
        standardizedKey = matchedLetter.toUpperCase();
      } else {
        throw new Error(
          `Question #${index + 1} answer '${rawAnswer}' does not match options (A, B, C, D).`
        );
      }
    }

    const explanation =
      typeof q.explanation === "string" && q.explanation.trim()
        ? q.explanation.trim()
        : undefined;

    const qNum = typeof q.qNumber === "number" && q.qNumber > 0 ? q.qNumber : index + 1;

    validatedQuestions.push({
      qNumber: qNum,
      question: questionText,
      options: optionsObj,
      correctAnswer: standardizedKey,
      explanation,
    });
  });

  return {
    title,
    description,
    questions: validatedQuestions,
  };
}

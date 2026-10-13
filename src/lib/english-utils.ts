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
  description: "Green Defence Academy syllabus: Appropriate Prepositions, Vocabulary & Grammar with Bangla translations & detailed explanations.",
  questions: [
    {
      qNumber: 1,
      question: "Choose the correct preposition: 'He is proficient ___ English grammar.'\n(বাংলা: তিনি ইংরেজি ব্যাকরণে দক্ষ।)",
      options: {
        A: "at",
        B: "in",
        C: "with",
        D: "for",
      },
      correctAnswer: "B",
      explanation: "Rule: 'Proficient in' বসে কোনো বিষয় বা ভাষায় দক্ষতা বোঝাতে।\nবাংলা ব্যাখ্যা: তিনি ইংরেজি ব্যাকরণে দক্ষ। লক্ষণীয় যে 'Good'-এর সাথে 'at' (Good at) বসে, কিন্তু 'Proficient'-এর পর সর্বদা 'in' বসে।\nভুল অপশন: অনেকেই Good at-এর সাথে মিলিয়ে Option A (at) দাগিয়ে ফেলে, যা একটি প্রচলিত ফাঁদ।",
    },
    {
      qNumber: 2,
      question: "Select the exact synonym of the word 'BENEVOLENT':\n(বাংলা: 'BENEVOLENT' শব্দের সঠিক সমার্থক শব্দ কোনটি?)",
      options: {
        A: "Hostile",
        B: "Generous and kind",
        C: "Arrogant",
        D: "Deceptive",
      },
      correctAnswer: "B",
      explanation: "Meaning: 'Benevolent' অর্থ পরোপকারী, দয়ালু এবং সহানুভূতিশীল (Kind and generous)।\nবাংলা ব্যাখ্যা: মানবকল্যাণে নিয়োজিত বা সদয় ব্যক্তিকে benevolent বলা হয়।\nভুল অপশন: Hostile = শত্রুভাবাপন্ন, Arrogant = অহংকারী, Deceptive = প্রতারণামূলক।",
    },
    {
      qNumber: 3,
      question: "Select the antonym of 'CANDID':\n(বাংলা: 'CANDID' শব্দের বিপরীতার্থক শব্দ কোনটি?)",
      options: {
        A: "Frank",
        B: "Blunt",
        C: "Deceitful",
        D: "Sincere",
      },
      correctAnswer: "C",
      explanation: "Meaning & Antonym: 'Candid' মানে স্পষ্টভাষী, অকপট বা সত্যবাদী (Frank, sincere)।\nবাংলা ব্যাখ্যা: অকপটের বিপরীত শব্দ হলো প্রতারক বা কপট (Deceitful)।\nভুল অপশন: Option A (Frank), B (Blunt) ও D (Sincere) হলো Candid-এর সমার্থক শব্দ।",
    },
    {
      qNumber: 4,
      question: "Identify the correctly spelled word:\n(বাংলা: সঠিক বানানযুক্ত শব্দটি চিহ্নিত করুন:)",
      options: {
        A: "Occurence",
        B: "Occurrence",
        C: "Occurrance",
        D: "Ocurence",
      },
      correctAnswer: "B",
      explanation: "Spelling Rule: সঠিক বানান হলো O-C-C-U-R-R-E-N-C-E (ঘটনা)।\nবাংলা ব্যাখ্যা: এই শব্দে double 'c' এবং double 'r' উভয়ই থাকবে এবং শেষে 'ence' হবে ('ance' নয়)।\nপরীক্ষার টিপস: বিমানবাহিনী পরীক্ষায় double consonant বানান যেমন occurrence, committee, embarrassment প্রায়ই আসে।",
    },
    {
      qNumber: 5,
      question: "What is the meaning of the idiom 'To take the bull by the horns'?\n(বাংলা: 'To take the bull by the horns' বাগধারাটির অর্থ কী?)",
      options: {
        A: "To escape from a severe danger",
        B: "To deal with a difficult situation directly and courageously",
        C: "To pick a fight with a stronger opponent",
        D: "To act carelessly without thinking",
      },
      correctAnswer: "B",
      explanation: "Idiom Meaning: 'To take the bull by the horns' অর্থ সাহসের সাথে বিপদের মুখোমুখি হওয়া বা কঠিন পরিস্থিতি সাহসিকতার সাথে সমাধান করা।\nবাংলা ব্যাখ্যা: কোনো সংকট এড়িয়ে না গিয়ে সরাসরি সাহসের সাথে মোকাবিলা করা।",
    },
    {
      qNumber: 6,
      question: "Choose the correct form: 'Neither the officer nor the airmen ___ present on parade.'\n(বাংলা: প্যারেডে অফিসার বা বৈমানিকদের কেউই উপস্থিত ছিল না।)",
      options: {
        A: "was",
        B: "is",
        C: "were",
        D: "has been",
      },
      correctAnswer: "C",
      explanation: "Subject-Verb Agreement Rule: 'Neither... nor' অথবা 'Either... or' দ্বারা যুক্ত দুটি subject-এর ক্ষেত্রে verb সর্বদা তার নিকটবর্তী subject (proximity rule) অনুযায়ী বসে।\nবাংলা ব্যাখ্যা: এখানে verb-এর নিকটতম subject হলো 'the airmen' (বহুবচন/plural), তাই plural verb 'were' বসবে।",
    },
    {
      qNumber: 7,
      question: "What is the one-word substitution for 'A person who loves and supports his country'?\n(বাংলা: যে ব্যক্তি নিজের দেশকে ভালোবাসে ও সমর্থন করে তাকে এক কথায় কী বলে?)",
      options: {
        A: "Martyr",
        B: "Patriot",
        C: "Traitor",
        D: "Diplomat",
      },
      correctAnswer: "B",
      explanation: "One Word Substitution: দেশপ্রেমিককে ইংরেজিতে বলা হয় 'Patriot'।\nবাংলা ব্যাখ্যা: Martyr = শহীদ (দেশের জন্য জীবন দানকারী), Traitor = বিশ্বাসঘাতক, Diplomat = কূটনীতিক। তাই সঠিক উত্তর Patriot।",
    },
    {
      qNumber: 8,
      question: "Fill in the blank: 'The pilot succeeded ___ landing the damaged aircraft safely.'\n(বাংলা: পাইলট ক্ষতিগ্রস্ত বিমানটি নিরাপদে অবতরণ করাতে সক্ষম হয়েছিলেন।)",
      options: {
        A: "to",
        B: "in",
        C: "for",
        D: "with",
      },
      correctAnswer: "B",
      explanation: "Preposition Pattern: 'Succeed' verb-এর পরে সর্বদা preposition 'in' এবং তারপরে Gerund (V+ing) বসে—'succeed in doing something'।\nবাংলা ব্যাখ্যা: কোনো কাজ সফলভাবে সম্পন্ন করা অর্থে 'succeeded in landing' হবে। অনেকেই 'succeed to' মনে করে ভুল করে।",
    },
    {
      qNumber: 9,
      question: "Identify the antonym of 'METICULOUS':\n(বাংলা: 'METICULOUS' শব্দের বিপরীতার্থক শব্দ কোনটি?)",
      options: {
        A: "Careless",
        B: "Precise",
        C: "Thorough",
        D: "Fastidious",
      },
      correctAnswer: "A",
      explanation: "Meaning & Antonym: 'Meticulous' অর্থ অতি সতর্ক, খুঁতখুঁতে ও নিখুঁতভাবে যত্নবান (extremely careful and precise)।\nবাংলা ব্যাখ্যা: সতর্ক বা যত্নবানের বিপরীত হলো অসতর্ক বা উদাসীন (Careless)। Precise ও Thorough হলো সমার্থক শব্দ।",
    },
    {
      qNumber: 10,
      question: "Choose the correct indirect speech: He said, 'I have completed the flight briefing.'\n(বাংলা: তিনি বললেন, 'আমি ফ্লাইট ব্রিফিং সম্পন্ন করেছি।')",
      options: {
        A: "He said that he has completed the flight briefing.",
        B: "He said that he had completed the flight briefing.",
        C: "He said that he would complete the flight briefing.",
        D: "He said that he is completing the flight briefing.",
      },
      correctAnswer: "B",
      explanation: "Narration Rule: Reporting verb past tense ('said') হলে reported speech-এর Present Perfect Tense ('have completed') পরিবর্তিত হয়ে Past Perfect Tense ('had completed') হবে।\nবাংলা ব্যাখ্যা: Direct-এর 'have completed' Indirect-এ 'had completed' হয় এবং pronoun 'I' পরিবর্তিত হয়ে 'he' হয়।",
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
 * Validates a single quiz set object.
 */
export function parseSingleQuizObject(
  item: unknown,
  fallbackTitle: string = "English Practice Quiz"
): ValidatedEnglishQuizPayload {
  if (!item || typeof item !== "object") {
    throw new Error("Quiz set must be an object.");
  }

  const obj = item as Record<string, unknown>;
  let title = fallbackTitle;
  let description: string | undefined = undefined;
  let rawQuestions: unknown[] = [];

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
    throw new Error(`Quiz '${title}' must contain a 'questions' array.`);
  }

  if (rawQuestions.length === 0) {
    throw new Error(`Questions list in '${title}' cannot be empty.`);
  }

  const validatedQuestions: ValidatedQuestion[] = [];

  rawQuestions.forEach((qItem, index) => {
    if (!qItem || typeof qItem !== "object") {
      throw new Error(`Question #${index + 1} in '${title}' is invalid.`);
    }

    const q = qItem as Record<string, unknown>;

    // 1. Question stem with optional separate Bangla translation field support
    let questionText = String(
      q.question ?? q.questionText ?? q.prompt ?? q.stem ?? ""
    ).trim();

    const separateBangla = String(
      q.bangla ?? q.translation ?? q.meaning ?? q.banglaQuestion ?? ""
    ).trim();

    if (separateBangla && !questionText.includes(separateBangla)) {
      questionText = questionText
        ? `${questionText}\n(বাংলা: ${separateBangla})`
        : separateBangla;
    }

    if (!questionText) {
      throw new Error(
        `Question #${index + 1} in '${title}' is missing 'question' prompt text.`
      );
    }

    // 2. Parse options (Array or Object format, uppercase or lowercase keys)
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
      optionsObj.A = String(
        optRecord.A ?? optRecord.a ?? optRecord["1"] ?? ""
      ).trim();
      optionsObj.B = String(
        optRecord.B ?? optRecord.b ?? optRecord["2"] ?? ""
      ).trim();
      optionsObj.C = String(
        optRecord.C ?? optRecord.c ?? optRecord["3"] ?? ""
      ).trim();
      optionsObj.D = String(
        optRecord.D ?? optRecord.d ?? optRecord["4"] ?? ""
      ).trim();

      if (!optionsObj.A || !optionsObj.B) {
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
      throw new Error(
        `Question #${index + 1} in '${title}' is missing an 'options' field.`
      );
    }

    // 3. Determine correct answer (keys A-D, numbers 1-4, or option string match)
    const rawAnswer = String(
      q.answer ?? q.correctAnswer ?? q.correct_answer ?? q.key ?? q.correctKey ?? ""
    ).trim();

    if (!rawAnswer) {
      throw new Error(
        `Question #${index + 1} in '${title}' is missing the correct 'answer' (A, B, C, or D).`
      );
    }

    let standardizedKey = rawAnswer.toUpperCase();
    if (["A", "B", "C", "D"].includes(standardizedKey)) {
      // Direct key
    } else if (["1", "2", "3", "4"].includes(rawAnswer)) {
      const numMap: Record<string, string> = {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D",
      };
      standardizedKey = numMap[rawAnswer]!;
    } else {
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

    // 4. In-depth explanation with optional Bengali explanation field support
    let explanationText = String(
      q.explanation ?? q.explain ?? q.details ?? q.reason ?? ""
    ).trim();

    const explanationBn = String(
      q.explanation_bn ?? q.explanationBn ?? q.banglaExplanation ?? ""
    ).trim();

    if (explanationBn && explanationText && !explanationText.includes(explanationBn)) {
      explanationText = `${explanationText}\n\nবাংলা ব্যাখ্যা: ${explanationBn}`;
    } else if (explanationBn && !explanationText) {
      explanationText = explanationBn;
    }

    const qNum =
      typeof q.qNumber === "number" && q.qNumber > 0 ? q.qNumber : index + 1;

    validatedQuestions.push({
      qNumber: qNum,
      question: questionText,
      options: optionsObj,
      correctAnswer: standardizedKey,
      explanation: explanationText || undefined,
    });
  });

  return {
    title,
    description,
    questions: validatedQuestions,
  };
}

/**
 * Validates and normalizes raw JSON data into one or more ValidatedEnglishQuizPayload items.
 * Supports both single quiz sets and multi-set batches (e.g. 10 sets in an array).
 */
export function parseAndValidateEnglishBatchJson(raw: unknown): ValidatedEnglishQuizPayload[] {
  let parsed: unknown = raw;
  if (typeof raw === "string") {
    try {
      parsed = JSON.parse(raw);
    } catch {
      throw new Error("Invalid JSON format. Please check syntax, missing quotes, or trailing commas.");
    }
  }

  if (!parsed || typeof parsed !== "object") {
    throw new Error("JSON must be an object or an array of questions/sets.");
  }

  // Case 1: Object with "sets" or "quizzes": { "sets": [ ... ] }
  if (!Array.isArray(parsed) && typeof parsed === "object") {
    const obj = parsed as Record<string, unknown>;
    if (Array.isArray(obj.sets)) {
      parsed = obj.sets;
    } else if (Array.isArray(obj.quizzes)) {
      parsed = obj.quizzes;
    }
  }

  // Case 2: Array
  if (Array.isArray(parsed)) {
    if (parsed.length === 0) {
      throw new Error("JSON array cannot be empty.");
    }

    // Check if elements are quiz sets (contain 'questions' or 'title')
    const isArrayOfQuizSets = parsed.every(
      (item) => item && typeof item === "object" && ("questions" in item || "data" in item)
    );

    if (isArrayOfQuizSets) {
      return parsed.map((item, idx) =>
        parseSingleQuizObject(item, `Practice Set #${idx + 1}`)
      );
    }

    // If it's an array of questions directly, wrap in a single quiz set
    return [parseSingleQuizObject({ questions: parsed }, `English Practice Quiz (${parsed.length} Qs)`)];
  }

  // Case 3: Single quiz object
  return [parseSingleQuizObject(parsed, "English Practice Quiz")];
}

/**
 * Validates raw JSON data into a single ValidatedEnglishQuizPayload.
 */
export function parseAndValidateEnglishJson(raw: unknown): ValidatedEnglishQuizPayload {
  const batch = parseAndValidateEnglishBatchJson(raw);
  const first = batch[0];
  if (!first) {
    throw new Error("No valid quiz sets found in JSON.");
  }
  return first;
}

import { knowledgeBase } from "@/data/guruji-knowledge"
import { hiKnowledgeBase } from "@/data/guruji-teachings"

export interface AskGurujiResponse {
  answer: string
  topic: string
  confidence: "high" | "medium" | "low"
}

// देवनागरी + अंग्रेज़ी दोनों के लिए शब्द निकालता है
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[।,.?!"'\-—_:;()]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1)
}

// सामान्य शब्द जो स्कोरिंग में सहायक नहीं हैं
const STOP_WORDS = new Set([
  "क्या", "है", "हैं", "का", "के", "की", "को", "में", "से", "और", "कैसे",
  "क्यों", "कौन", "होता", "होती", "हम", "मैं", "यह", "वह", "एक",
  "what", "is", "are", "the", "a", "an", "how", "why", "who", "do", "does",
])

function detectHindi(text: string): boolean {
  return /[ऀ-ॿ]/.test(text)
}

// हिन्दी ज्ञान भंडार से सर्वाधिक मिलता-जुलता उत्तर खोजता है
function findHindiAnswer(question: string): AskGurujiResponse | null {
  const qWords = tokenize(question).filter((w) => !STOP_WORDS.has(w))
  if (qWords.length === 0) return null

  const scored = hiKnowledgeBase.map((entry) => {
    const entryWords = new Set([
      ...tokenize(entry.question),
      ...entry.keywords.flatMap((k) => tokenize(k)),
    ])
    let score = 0
    for (const w of qWords) {
      if (entryWords.has(w)) score += 2
      // आंशिक मिलान (उपसर्ग/उपशब्द) के लिए हल्का अंक
      else if ([...entryWords].some((ew) => ew.includes(w) || w.includes(ew))) score += 1
    }
    return { entry, score }
  })

  scored.sort((a, b) => b.score - a.score)
  const best = scored[0]
  if (!best || best.score === 0) return null

  const confidence: AskGurujiResponse["confidence"] =
    best.score >= 4 ? "high" : best.score >= 2 ? "medium" : "low"

  return { answer: best.entry.answer, topic: best.entry.category, confidence }
}

const HINDI_FALLBACK =
  "जय गुरुजी! 🙏 मैं गुरुजी की शिक्षाओं के आधार पर ही उत्तर देता हूँ। आप सेवा, भक्ति, सिमरन, गुरु महिमा, प्रेम, मन की शांति, परिवार या जीवन के उद्देश्य के बारे में पूछ सकते हैं। आप क्या जानना चाहेंगे?"

export function findAnswer(question: string): AskGurujiResponse {
  const q = question.trim()

  if (!q) {
    return {
      answer:
        "जय गुरुजी! कृपया गुरुजी के जीवन, शिक्षाओं, सेवा या आध्यात्मिक मार्गदर्शन के बारे में पूछें।",
      topic: "General",
      confidence: "low",
    }
  }

  // हिन्दी प्रश्न → पहले हिन्दी ज्ञान भंडार से उत्तर खोजें
  const isHindi = detectHindi(q)
  if (isHindi) {
    const hi = findHindiAnswer(q)
    if (hi && hi.confidence !== "low") return hi
    // कमज़ोर मिलान हो तो भी हिन्दी उत्तर लौटाएँ, वरना हिन्दी fallback
    if (hi) return hi
    return { answer: HINDI_FALLBACK, topic: "General", confidence: "low" }
  }

  // अंग्रेज़ी प्रश्न → मौजूदा अंग्रेज़ी ज्ञान भंडार से उत्तर
  const qLower = q.toLowerCase()
  const scored = knowledgeBase.map((entry) => {
    const keywordMatches = entry.keywords.filter((kw) =>
      qLower.includes(kw.toLowerCase())
    ).length
    const topicMatch = qLower.includes(entry.topic.toLowerCase()) ? 2 : 0
    return { entry, score: keywordMatches + topicMatch }
  })

  scored.sort((a, b) => b.score - a.score)
  const best = scored[0]

  if (best.score >= 2) {
    return { answer: best.entry.answer, topic: best.entry.topic, confidence: "high" }
  }
  if (best.score === 1) {
    return { answer: best.entry.answer, topic: best.entry.topic, confidence: "medium" }
  }

  // अंग्रेज़ी में कोई मिलान न मिले तो हिन्दी ज्ञान भंडार भी जाँचें
  const hiTry = findHindiAnswer(q)
  if (hiTry && hiTry.confidence !== "low") return hiTry

  return {
    answer:
      "Jai Guruji! I share wisdom about Shri Guruji Nakur Wale Baba Ji — his life, and teachings on faith, seva, meditation, compassion and discipline. You may also ask in Hindi (हिन्दी में भी पूछ सकते हैं). What would you like to know?",
    topic: "General",
    confidence: "low",
  }
}

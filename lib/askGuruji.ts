import { knowledgeBase } from "@/data/guruji-knowledge"

export interface AskGurujiResponse {
  answer: string
  topic: string
  confidence: "high" | "medium" | "low"
}

export function findAnswer(question: string): AskGurujiResponse {
  const q = question.toLowerCase().trim()

  if (!q) {
    return {
      answer:
        "Jai Guruji! Please ask me about Guruji's life, teachings, seva, or spiritual guidance.",
      topic: "General",
      confidence: "low",
    }
  }

  const scored = knowledgeBase.map((entry) => {
    const keywordMatches = entry.keywords.filter((kw) =>
      q.includes(kw.toLowerCase())
    ).length
    const topicMatch = q.includes(entry.topic.toLowerCase()) ? 2 : 0
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

  return {
    answer:
      "Jai Guruji! I am here to share wisdom about Shri Guruji Nakur Wale Baba Ji. You can ask me about Guruji's life journey, his teachings on faith, seva, meditation, compassion, and discipline, or about the ashram and kirtan. What would you like to know?",
    topic: "General",
    confidence: "low",
  }
}

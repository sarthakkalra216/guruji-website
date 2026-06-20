"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Sparkles, RotateCcw } from "lucide-react"
import { sampleQuestions } from "@/data/guruji-knowledge"

interface Message {
  id: string
  role: "user" | "guruji"
  content: string
  timestamp: Date
}

const INITIAL: Message = {
  id: "init",
  role: "guruji",
  content:
    "Jai Guruji! 🙏\n\nI am here to share the wisdom and story of Shri Guruji Nakur Wale Baba Ji. You may ask me about Guruji's life journey, his teachings on faith, seva, meditation, compassion, or about the ashram and kirtan. What would you like to know?",
  timestamp: new Date(),
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="typing-dot w-2 h-2 rounded-full bg-amber-400"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  )
}

function MessageBubble({ msg }: { msg: Message }) {
  const isGuruji = msg.role === "guruji"
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35 }}
      className={`flex gap-3 ${isGuruji ? "justify-start" : "justify-end"}`}
    >
      {isGuruji && (
        <div
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-base mt-0.5"
          style={{
            background: "linear-gradient(135deg,#d4a843,#7c3aed)",
            boxShadow: "0 0 16px rgba(212,168,67,0.3)",
          }}
        >
          🕉
        </div>
      )}
      <div
        className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
          isGuruji
            ? "rounded-tl-sm"
            : "rounded-tr-sm"
        }`}
        style={{
          background: isGuruji
            ? "rgba(212,168,67,0.08)"
            : "linear-gradient(135deg,rgba(124,58,237,0.25),rgba(88,28,135,0.2))",
          border: isGuruji
            ? "1px solid rgba(212,168,67,0.2)"
            : "1px solid rgba(124,58,237,0.3)",
          color: isGuruji ? "#fde68a" : "#e9d5ff",
        }}
      >
        {msg.content}
        <div
          className="text-[10px] mt-1.5 opacity-40 text-right"
          style={{ color: isGuruji ? "#d4a843" : "#a78bfa" }}
          suppressHydrationWarning
        >
          {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </motion.div>
  )
}

export default function AskGuruji() {
  const [messages, setMessages] = useState<Message[]>([INITIAL])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const isFirstMount = useRef(true)

  useEffect(() => {
    // Skip on initial mount — only scroll chat window when new messages arrive
    if (isFirstMount.current) {
      isFirstMount.current = false
      return
    }
    // Scroll the chat container itself, never the page
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" })
    }
  }, [messages, loading])

  const sendQuestion = async (question: string) => {
    if (!question.trim() || loading) return
    setInput("")

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: question.trim(),
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setLoading(true)

    try {
      const startTime = Date.now()
      const res = await fetch("/api/ask-guruji", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.trim() }),
      })
      const data = (await res.json()) as { answer: string; topic: string }

      // Ensure typing animation shows for at least 900ms
      const elapsed = Date.now() - startTime
      if (elapsed < 900) {
        await new Promise((r) => setTimeout(r, 900 - elapsed))
      }

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "guruji",
          content: data.answer ?? "Jai Guruji! Please try another question.",
          timestamp: new Date(),
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "guruji",
          content:
            "Jai Guruji! There was a small interruption. Please try again. 🙏",
          timestamp: new Date(),
        },
      ])
    } finally {
      setLoading(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendQuestion(input)
  }

  const reset = () => {
    setMessages([INITIAL])
    setInput("")
    inputRef.current?.focus()
  }

  return (
    <section id="ask-guruji" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(88,28,135,0.15), transparent)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-10"
        >
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em]">
            AI-Powered
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold text-amber-50">
            Ask <span className="gold-text">Guruji</span>
          </h2>
          <p className="mt-4 text-amber-100/60 max-w-xl mx-auto text-sm leading-relaxed">
            Ask any question about Guruji&apos;s life, teachings, seva, or spiritual
            guidance. Answers are drawn exclusively from Guruji&apos;s knowledge base.
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(212,168,67,0.18)",
            boxShadow: "0 0 60px rgba(88,28,135,0.2), 0 0 120px rgba(212,168,67,0.05)",
          }}
        >
          {/* Window header */}
          <div
            className="px-5 py-4 flex items-center justify-between border-b"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg,#d4a843,#7c3aed)",
                  boxShadow: "0 0 20px rgba(212,168,67,0.35)",
                }}
              >
                🕉
              </div>
              <div>
                <div className="text-sm font-semibold text-amber-50">
                  Guruji Nakur Wale Baba Ji
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-400/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  Available for guidance
                </div>
              </div>
            </div>
            <button
              onClick={reset}
              className="p-2 rounded-lg text-amber-400/50 hover:text-amber-400 hover:bg-white/5 transition-colors cursor-pointer"
              title="Reset conversation"
            >
              <RotateCcw size={16} />
            </button>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="h-80 sm:h-96 overflow-y-auto px-4 sm:px-6 py-5 space-y-5 scrollbar-hide">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} msg={msg} />
            ))}
            <AnimatePresence>
              {loading && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex gap-3 justify-start"
                >
                  <div
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-base"
                    style={{ background: "linear-gradient(135deg,#d4a843,#7c3aed)" }}
                  >
                    🕉
                  </div>
                  <div
                    className="rounded-2xl rounded-tl-sm"
                    style={{
                      background: "rgba(212,168,67,0.08)",
                      border: "1px solid rgba(212,168,67,0.2)",
                    }}
                  >
                    <TypingDots />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Suggested questions */}
          <div
            className="px-4 sm:px-6 pb-3 pt-1 border-t"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
          >
            <p className="text-[10px] text-amber-400/40 uppercase tracking-wider mb-2">
              Suggested Questions
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {sampleQuestions.slice(0, 5).map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendQuestion(q.question)}
                  disabled={loading}
                  className="shrink-0 px-3 py-1.5 rounded-full text-xs border border-amber-400/20 text-amber-300/70 hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200 whitespace-nowrap disabled:opacity-40 cursor-pointer"
                >
                  {q.question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-4 sm:px-6 pb-5 pt-2"
          >
            <div
              className="flex items-center gap-3 rounded-2xl px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(212,168,67,0.2)",
              }}
            >
              <Sparkles size={16} className="text-amber-400/50 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Guruji anything…"
                disabled={loading}
                className="flex-1 bg-transparent text-amber-50 text-sm placeholder:text-amber-200/30 outline-none min-w-0 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-40 cursor-pointer"
                style={{
                  background: input.trim() && !loading
                    ? "linear-gradient(135deg,#f59e0b,#d4a843)"
                    : "rgba(212,168,67,0.1)",
                }}
              >
                <Send size={15} className={input.trim() && !loading ? "text-slate-900" : "text-amber-400/40"} />
              </button>
            </div>
            <p className="text-center text-[10px] text-amber-200/25 mt-2">
              Answers sourced exclusively from Guruji&apos;s knowledge base.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

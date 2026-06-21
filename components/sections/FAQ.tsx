"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronDown, HelpCircle } from "lucide-react"
import { faqs, teachingCategoriesHi, homepageContent } from "@/data/guruji-teachings"

const catName = (id: string) =>
  teachingCategoriesHi.find((c) => c.id === id)?.name ?? id

export default function FAQ() {
  const [query, setQuery] = useState("")
  const [active, setActive] = useState<string | null>(null)
  const [open, setOpen] = useState<number | null>(null)

  const { description } = homepageContent.sections.faq

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return faqs.filter((f) => {
      const matchesCat = active ? f.category === active : true
      const matchesQuery = q
        ? f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
        : true
      return matchesCat && matchesQuery
    })
  }, [query, active])

  // केवल वे श्रेणियाँ दिखाएँ जिनमें FAQ मौजूद हैं
  const usedCategories = useMemo(
    () => teachingCategoriesHi.filter((c) => faqs.some((f) => f.category === c.id)),
    []
  )

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(88,28,135,0.12), transparent), radial-gradient(ellipse 40% 40% at 100% 100%, rgba(212,168,67,0.06), transparent)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-10"
        >
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em]">
            Questions &amp; Answers
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold text-amber-50">
            आध्यात्मिक <span className="gold-text">प्रश्न-उत्तर</span>
          </h2>
          <p className="mt-4 text-amber-100/60 max-w-xl mx-auto text-sm leading-relaxed">
            {description}
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 rounded-2xl px-4 py-3 mb-5"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,168,67,0.2)" }}
        >
          <Search size={16} className="text-amber-400/50 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setOpen(null)
            }}
            placeholder="प्रश्न खोजें… जैसे: सिमरन, सत्संग, संतोष, धैर्य"
            className="flex-1 bg-transparent text-amber-50 text-sm placeholder:text-amber-200/30 outline-none min-w-0"
          />
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {usedCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActive(active === cat.id ? null : cat.id); setOpen(null) }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                active === cat.id
                  ? "bg-amber-400 text-slate-900"
                  : "border border-amber-400/25 text-amber-200/70 hover:border-amber-400/50 hover:text-amber-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {filtered.length === 0 && (
            <p className="text-center text-amber-200/40 text-sm py-8">
              इस खोज से मेल खाता कोई प्रश्न नहीं मिला। कृपया दूसरा शब्द आज़माएँ।
            </p>
          )}
          {filtered.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={`${faq.category}-${i}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start gap-3 px-5 py-4 text-left cursor-pointer"
                >
                  <HelpCircle size={18} className="text-amber-400/70 shrink-0 mt-0.5" />
                  <span className="flex-1 text-amber-50 text-sm font-medium leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className="text-amber-400/60 shrink-0 transition-transform duration-300 mt-0.5"
                    style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 pl-[3.25rem]">
                        <p className="text-amber-100/65 text-sm leading-relaxed">{faq.answer}</p>
                        <span className="inline-block mt-3 text-[10px] text-amber-400/50 uppercase tracking-wider">
                          {catName(faq.category)}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <p className="text-center text-[11px] text-amber-200/30 mt-8">
          सभी उत्तर गुरुजी के प्रवचनों पर आधारित ज्ञान भंडार से लिए गए हैं।
        </p>
      </div>
    </section>
  )
}

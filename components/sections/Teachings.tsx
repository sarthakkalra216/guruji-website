"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sparkles, HandHeart, Heart, Users, Coins, Star,
  Sun, Wind, Mountain, Flower2, Home, Gift, ChevronDown, PlayCircle,
} from "lucide-react"
import { teachingCategoriesHi, teachings } from "@/data/guruji-teachings"

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={22} />,
  HandHeart: <HandHeart size={22} />,
  Heart: <Heart size={22} />,
  Users: <Users size={22} />,
  Coins: <Coins size={22} />,
  Star: <Star size={22} />,
  Sun: <Sun size={22} />,
  Wind: <Wind size={22} />,
  Mountain: <Mountain size={22} />,
  Flower2: <Flower2 size={22} />,
  Home: <Home size={22} />,
  Gift: <Gift size={22} />,
}

const gradients = [
  "linear-gradient(135deg,#f59e0b,#d97706)",
  "linear-gradient(135deg,#8b5cf6,#7c3aed)",
  "linear-gradient(135deg,#f43f5e,#db2777)",
  "linear-gradient(135deg,#0ea5e9,#2563eb)",
  "linear-gradient(135deg,#10b981,#0d9488)",
  "linear-gradient(135deg,#eab308,#ca8a04)",
]

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }

function catGradient(catId: string): string {
  const idx = teachingCategoriesHi.findIndex((c) => c.id === catId)
  return gradients[(idx < 0 ? 0 : idx) % gradients.length]
}

export default function Teachings() {
  const [active, setActive] = useState<string | null>(null)
  const [open, setOpen] = useState<string | null>(null)

  const filtered = active ? teachings.filter((t) => t.category === active) : teachings

  return (
    <section id="teachings" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(212,168,67,0.06), transparent), radial-gradient(ellipse 40% 40% at 0% 0%, rgba(88,28,135,0.1), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em]"
          >
            Spiritual Wisdom
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-serif text-3xl sm:text-5xl font-bold text-amber-50"
          >
            गुरुजी की <span className="gold-text">शिक्षाएँ</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-amber-100/60 max-w-xl mx-auto text-sm leading-relaxed"
          >
            नाम, सिमरन, समर्पण, सत्संग और संतोष — गुरुजी के प्रवचनों से ली गई अमृतमयी
            शिक्षाएँ। किसी भी कार्ड पर “और पढ़ें” दबाकर विस्तार से जानें।
          </motion.p>
          <motion.div variants={fadeUp} className="section-divider" />
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {teachingCategoriesHi.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(active === cat.id ? null : cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                active === cat.id
                  ? "bg-amber-400 text-slate-900 shadow-lg shadow-amber-400/25"
                  : "border border-amber-400/25 text-amber-200/70 hover:border-amber-400/50 hover:text-amber-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active ?? "all"}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
          >
            {filtered.map((teaching) => {
              const cat = teachingCategoriesHi.find((c) => c.id === teaching.category)
              const isOpen = open === teaching.id
              return (
                <motion.div
                  key={teaching.id}
                  variants={fadeUp}
                  className="rounded-2xl p-6 flex flex-col gap-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {/* Icon + category */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                      style={{
                        background: catGradient(teaching.category),
                        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                      }}
                    >
                      {iconMap[cat?.icon ?? "Sparkles"] ?? <Sparkles size={22} />}
                    </div>
                    <span
                      className="text-xs font-semibold tracking-wide px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(212,168,67,0.1)",
                        color: "#fde68a",
                        border: "1px solid rgba(212,168,67,0.2)",
                      }}
                    >
                      {cat?.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-semibold text-amber-50 leading-snug">
                    {teaching.title}
                  </h3>

                  {/* Quote */}
                  <p className="text-sm text-amber-300/80 italic leading-relaxed border-l-2 border-amber-400/30 pl-3">
                    “{teaching.quote}”
                  </p>

                  {/* Summary */}
                  <p className="text-amber-100/55 text-sm leading-relaxed">
                    {teaching.summary}
                  </p>

                  {/* Expanded detail */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="detail"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden flex flex-col gap-3"
                      >
                        <p className="text-amber-100/70 text-sm leading-relaxed">
                          {teaching.teaching}
                        </p>
                        <div
                          className="rounded-xl p-3 text-sm"
                          style={{ background: "rgba(212,168,67,0.07)", border: "1px solid rgba(212,168,67,0.15)" }}
                        >
                          <span className="text-amber-400 font-semibold">मुख्य सीख: </span>
                          <span className="text-amber-100/75">{teaching.keyLesson}</span>
                        </div>
                        <div
                          className="rounded-xl p-3 text-sm"
                          style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}
                        >
                          <span className="text-violet-300 font-semibold">व्यवहार में: </span>
                          <span className="text-amber-100/75">{teaching.practicalApplication}</span>
                        </div>
                        {teaching.sources.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            <span className="text-[10px] text-amber-400/50 uppercase tracking-wider">स्रोत:</span>
                            {teaching.sources.map((src, i) => (
                              <a
                                key={src}
                                href={src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] text-amber-300/70 hover:text-amber-300 transition-colors"
                              >
                                <PlayCircle size={12} /> वीडियो {i + 1}
                              </a>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1.5">
                    {teaching.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(124,58,237,0.15)",
                          color: "#c4b5fd",
                          border: "1px solid rgba(124,58,237,0.2)",
                        }}
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>

                  {/* Read more toggle */}
                  <button
                    onClick={() => setOpen(isOpen ? null : teaching.id)}
                    className="mt-auto flex items-center gap-1.5 text-xs font-medium text-amber-400/80 hover:text-amber-300 transition-colors cursor-pointer w-fit"
                  >
                    {isOpen ? "कम पढ़ें" : "और पढ़ें"}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                    />
                  </button>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

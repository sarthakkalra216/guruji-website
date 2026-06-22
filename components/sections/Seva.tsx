"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Utensils, BookOpen, HeartPulse, Home, Leaf, IndianRupee, ArrowRight } from "lucide-react"
import { RamBackground } from "@/components/decor/SacredBackground"

interface SevaItem {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  impact: string
  gradient: string
  iconBg: string
}

const SEVAS: SevaItem[] = [
  {
    id: 1,
    icon: <Utensils size={22} />,
    title: "Langar Seva",
    description:
      "Serve free meals daily at the ashram's community kitchen. Thousands of devotees and visitors are fed every day — no one leaves hungry.",
    impact: "500+ meals / day",
    gradient: "linear-gradient(135deg,rgba(245,158,11,0.08),rgba(212,168,67,0.04))",
    iconBg: "linear-gradient(135deg,#f59e0b,#d97706)",
  },
  {
    id: 2,
    icon: <BookOpen size={22} />,
    title: "Education Seva",
    description:
      "Support underprivileged children with books, stationery, and scholarships. Help the next generation access quality education.",
    impact: "200+ students helped",
    gradient: "linear-gradient(135deg,rgba(59,130,246,0.08),rgba(37,99,235,0.04))",
    iconBg: "linear-gradient(135deg,#3b82f6,#2563eb)",
  },
  {
    id: 3,
    icon: <HeartPulse size={22} />,
    title: "Medical Seva",
    description:
      "Participate in free medical camps providing health check-ups, medicines, and specialist consultations to rural communities.",
    impact: "4 camps / year",
    gradient: "linear-gradient(135deg,rgba(239,68,68,0.08),rgba(185,28,28,0.04))",
    iconBg: "linear-gradient(135deg,#ef4444,#b91c1c)",
  },
  {
    id: 4,
    icon: <Home size={22} />,
    title: "Temple Seva",
    description:
      "Help maintain the ashram premises — cleaning, decorating, and preparing for satsangs, kirtans, and special events.",
    impact: "Daily opportunity",
    gradient: "linear-gradient(135deg,rgba(124,58,237,0.08),rgba(91,33,182,0.04))",
    iconBg: "linear-gradient(135deg,#7c3aed,#5b21b6)",
  },
  {
    id: 5,
    icon: <Leaf size={22} />,
    title: "Environment Seva",
    description:
      "Join tree-plantation drives, river-cleaning yatras, and eco-friendly festival initiatives led by the ashram sangat.",
    impact: "1000+ trees planted",
    gradient: "linear-gradient(135deg,rgba(16,185,129,0.08),rgba(5,150,105,0.04))",
    iconBg: "linear-gradient(135deg,#10b981,#059669)",
  },
  {
    id: 6,
    icon: <IndianRupee size={22} />,
    title: "Donation Seva",
    description:
      "Contribute financially to sustain all seva activities. Every rupee donated goes directly toward feeding, healing, and educating.",
    impact: "100% transparent",
    gradient: "linear-gradient(135deg,rgba(212,168,67,0.08),rgba(180,83,9,0.04))",
    iconBg: "linear-gradient(135deg,#d4a843,#b45309)",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }

export default function Seva() {
  return (
    <section id="seva" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 100%, rgba(16,185,129,0.06), transparent), radial-gradient(ellipse 40% 35% at 100% 0%, rgba(88,28,135,0.1), transparent)",
        }}
      />
      {/* Sacred mandala + राम watermark */}
      <RamBackground variant="mandala" opacity={0.06} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Selfless Service
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-serif text-3xl sm:text-5xl font-bold text-amber-50"
          >
            Join <span className="gold-text">Seva</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-amber-100/60 max-w-2xl mx-auto text-sm leading-relaxed"
          >
            &ldquo;Seva se badi koi pooja nahi.&rdquo; — Guruji. Discover ways to serve and
            experience the transformative joy of selfless giving.
          </motion.p>
          <motion.div variants={fadeUp} className="section-divider" />
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SEVAS.map((seva) => (
            <motion.div
              key={seva.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: seva.gradient,
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0"
                style={{
                  background: seva.iconBg,
                  boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
                }}
              >
                {seva.icon}
              </div>

              {/* Title + impact */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-serif text-lg font-semibold text-amber-50">
                    {seva.title}
                  </h3>
                  <span
                    className="shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(16,185,129,0.15)",
                      color: "#6ee7b7",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                  >
                    {seva.impact}
                  </span>
                </div>
                <p className="text-amber-100/60 text-sm leading-relaxed">
                  {seva.description}
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group/btn cursor-pointer"
              >
                Join this Seva
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <blockquote className="font-serif text-xl sm:text-2xl text-amber-300/80 italic max-w-2xl mx-auto">
            &ldquo;When you serve others without expectation of reward, you serve God
            Himself.&rdquo;
          </blockquote>
          <p className="mt-3 text-amber-200/40 text-sm">— Guruji Nakur Wale Baba Ji</p>
        </motion.div>
      </div>
    </section>
  )
}

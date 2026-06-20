"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, MessageCircle, CheckCircle, Send } from "lucide-react"
import { gurujiProfile } from "@/data/guruji-profile"

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.message) return
    setSubmitting(true)
    // Simulate submit
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm text-amber-50 placeholder:text-amber-200/30 outline-none transition-all duration-200 focus:ring-1 focus:ring-amber-400/40"
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 100%, rgba(212,168,67,0.07), transparent), radial-gradient(ellipse 50% 45% at 100% 0%, rgba(88,28,135,0.1), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em]"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-serif text-3xl sm:text-5xl font-bold text-amber-50"
          >
            Connect with <span className="gold-text">Us</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-amber-100/60 max-w-xl mx-auto text-sm"
          >
            Reach out for satsang schedules, seva opportunities, donations, or
            any question. We are here to serve.
          </motion.p>
          <motion.div variants={fadeUp} className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center gap-5 p-10 rounded-3xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(16,185,129,0.3)",
                }}
              >
                <CheckCircle size={52} className="text-emerald-400" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-amber-50 mb-2">
                    Message Received!
                  </h3>
                  <p className="text-amber-100/60 text-sm leading-relaxed">
                    Jai Guruji! Thank you for reaching out. We will get back to
                    you very soon. May Guruji&apos;s blessings be with you. 🙏
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }) }}
                  className="px-6 py-2.5 rounded-full border border-amber-400/30 text-amber-400 text-sm hover:bg-amber-400/10 transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-6 sm:p-8 rounded-3xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-amber-400/70 text-xs mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-amber-400/70 text-xs mb-1.5 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-amber-400/70 text-xs mb-1.5 uppercase tracking-wide">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="block text-amber-400/70 text-xs mb-1.5 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Share your query, request for seva, or message for Guruji…"
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting || !form.name || !form.message}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-bold text-sm hover:from-amber-300 hover:to-yellow-400 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-amber-400/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Contact details */}
            <div
              className="p-6 rounded-2xl space-y-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(212,168,67,0.13)",
              }}
            >
              <h3 className="font-serif text-lg font-semibold text-amber-50">
                Ashram Contact
              </h3>

              {[
                { icon: <MapPin size={16} />, label: "Address", value: gurujiProfile.contact.address },
                { icon: <Phone size={16} />, label: "Phone", value: gurujiProfile.contact.phone ?? "" },
                { icon: <Mail size={16} />, label: "Email", value: gurujiProfile.contact.email ?? "" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(212,168,67,0.1)",
                      color: "#d4a843",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-amber-400/60 text-[10px] uppercase tracking-widest mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-amber-100/80 text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${gurujiProfile.contact.whatsapp?.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] group"
              style={{
                background: "linear-gradient(135deg,rgba(37,211,102,0.1),rgba(18,140,126,0.1))",
                border: "1px solid rgba(37,211,102,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
                style={{ background: "linear-gradient(135deg,#25d366,#128c7e)" }}
              >
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <div className="text-emerald-400 font-semibold text-sm">
                  Chat on WhatsApp
                </div>
                <div className="text-amber-100/50 text-xs">
                  Instant response for seva & satsang queries
                </div>
              </div>
            </a>

            {/* Map placeholder */}
            <div
              className="rounded-2xl overflow-hidden aspect-video relative"
              style={{
                background: "linear-gradient(135deg,#0d0520,#1e0531,#0d0520)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <MapPin size={28} className="text-amber-400/50" />
                <p className="text-amber-200/40 text-xs text-center px-4">
                  Nakur, Saharanpur, Uttar Pradesh
                  <br />
                  <span className="text-[10px] text-amber-200/25">
                    (Embed Google Map here)
                  </span>
                </p>
              </div>
            </div>

            {/* Satsang timings */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(212,168,67,0.05)",
                border: "1px solid rgba(212,168,67,0.13)",
              }}
            >
              <h4 className="text-amber-400 font-semibold text-sm mb-3">
                🕉 Daily Satsang Timings
              </h4>
              {[
                { time: "5:30 AM", event: "Brahma Muhurta Aarti" },
                { time: "7:00 AM", event: "Morning Satsang" },
                { time: "12:00 PM", event: "Langar Seva" },
                { time: "7:00 PM", event: "Evening Kirtan & Aarti" },
              ].map((t) => (
                <div
                  key={t.time}
                  className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0"
                >
                  <span className="text-amber-200/50 text-xs">{t.event}</span>
                  <span className="text-amber-400 text-xs font-semibold">{t.time}</span>
                </div>
              ))}
              <p className="text-amber-200/30 text-[10px] mt-2">
                * Timings may vary during special events. Please confirm before visiting.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Sparkles, Volume2, VolumeX } from "lucide-react"
import { gurujiProfile } from "@/data/guruji-profile"

interface Particle {
  id: number
  left: string
  top: string
  size: number
  color: string
  duration: number
  delay: number
  blur: number
  range: number
}

const COLORS = [
  "rgba(212,168,67,0.7)",
  "rgba(124,58,237,0.6)",
  "rgba(255,255,255,0.5)",
  "rgba(251,191,36,0.6)",
  "rgba(167,139,250,0.5)",
  "rgba(244,114,182,0.4)",
]

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMuted, setIsMuted] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setParticles(
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${2 + Math.random() * 96}%`,
        top: `${5 + Math.random() * 88}%`,
        size: 2 + Math.random() * 6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        duration: 2.5 + Math.random() * 3,
        delay: Math.random() * 3,
        blur: 1 + Math.random() * 3,
        range: 12 + Math.random() * 20,
      }))
    )
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#04000c]" />

      {/* Video background */}
      {!videoError && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/gallery/photo3.jpeg"
          onError={() => setVideoError(true)}
        >
          <source src="/gallery/video1.mp4" type="video/mp4" />
          <source src="/gallery/video2.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback: photo when video can't load */}
      {videoError && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/gallery/photo3.jpeg')" }}
        />
      )}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Radial glows on top of video */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 110% 65% at 50% -5%, rgba(88,28,135,0.45), transparent),
            radial-gradient(ellipse 55% 45% at 85% 60%, rgba(212,168,67,0.07), transparent),
            radial-gradient(ellipse 55% 45% at 15% 55%, rgba(88,28,135,0.14), transparent)
          `,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative Om */}
      <div
        className="absolute select-none pointer-events-none text-[28rem] font-bold leading-none opacity-[0.015]"
        style={{
          fontFamily: "serif",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -52%)",
          color: "#d4a843",
        }}
      >
        ॐ
      </div>

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            filter: `blur(${p.blur}px)`,
          }}
          animate={{ y: [-p.range, p.range], opacity: [0.3, 0.85, 0.3] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Mute/Unmute button */}
      {!videoError && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute top-24 right-4 sm:right-6 z-20 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-black/40 backdrop-blur-sm text-white/70 hover:text-white hover:border-amber-400/50 transition-all duration-300 cursor-pointer"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </motion.button>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-amber-400/30 bg-amber-400/[0.06] text-amber-400 text-sm font-medium"
        >
          <Sparkles size={13} className="animate-pulse" />
          <span>Jai Guruji — Nakur Wale Baba Ji</span>
          <Sparkles size={13} className="animate-pulse" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
        >
          <span className="gold-text">Shri Guruji</span>
          <br />
          <span className="text-amber-50">Nakur Wale</span>
          <br />
          <span className="purple-text">Baba Ji</span>
        </motion.h1>

        {/* Ornament divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-400/50" />
          <span className="text-amber-400 text-xl">✦</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-400/50" />
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-lg sm:text-xl lg:text-2xl text-amber-200/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {gurujiProfile.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={() => scrollTo("#about")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-bold text-base hover:from-amber-300 hover:to-yellow-400 transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-400/45 hover:scale-105 cursor-pointer"
          >
            Discover Guruji
          </button>
          <button
            onClick={() => scrollTo("#ask-guruji")}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-amber-400/40 text-amber-300 font-bold text-base hover:bg-amber-400/10 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            ✨ Ask Guruji
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="grid grid-cols-3 gap-6 max-w-sm mx-auto"
        >
          {[
            { value: "50+", label: "Years of Seva" },
            { value: "100K+", label: "Devotees" },
            { value: "∞", label: "Divine Love" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">
                {s.value}
              </div>
              <div className="text-xs text-amber-200/50 mt-1 uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-amber-400/50 hover:text-amber-400 transition-colors cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}

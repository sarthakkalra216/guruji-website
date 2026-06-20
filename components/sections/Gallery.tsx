"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn, Pause, Play } from "lucide-react"

const PHOTOS = [
  {
    src: "/gallery/photo1.jpeg",
    alt: "Guruji Nakur Wale Baba Ji darshan — morning satsang at Nakur ashram",
    title: "Guruji Darshan — Morning Satsang",
    subtitle: "Nakur Ashram",
    category: "Satsang",
  },
  {
    src: "/gallery/photo2.jpeg",
    alt: "Guruji Nakur Wale Baba Ji — evening aarti darshan at Nakur ashram",
    title: "Evening Aarti Darshan",
    subtitle: "Nakur Ashram",
    category: "Satsang",
  },
  {
    src: "/gallery/photo3.jpeg",
    alt: "Sacred shrine of Guruji Nakur Wale Baba Ji with Krishna deity",
    title: "Sacred Shrine of Guruji",
    subtitle: "Festival Decoration — Nakur Ashram",
    category: "Events",
  },
  {
    src: "/gallery/photo4.jpeg",
    alt: "Blessed darshan of Guruji Nakur Wale Baba Ji at Nakur ashram",
    title: "Blessed Darshan of Guruji",
    subtitle: "Nakur Ashram",
    category: "Satsang",
  },
  {
    src: "/gallery/photo5.jpeg",
    alt: "Sacred padukas of Guruji Nakur Wale Baba Ji with flower offerings — pushpa seva",
    title: "Sacred Padukas — Pushpa Seva",
    subtitle: "Nakur Ashram",
    category: "Seva",
  },
]

const N = PHOTOS.length
const AUTOPLAY_DELAY = 4500

// No `ease` inside variant transitions — Framer Motion v12 TypeScript constraint
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.94,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.94,
  }),
}

const headerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [autoPlaying, setAutoPlaying] = useState(true)
  const [lightbox, setLightbox] = useState(false)
  const dragActive = useRef(false)

  const paginate = useCallback((dir: number) => {
    setDirection(dir)
    setCurrent((prev) => ((prev + dir) % N + N) % N)
  }, [])

  const goTo = useCallback(
    (idx: number) => {
      if (idx === current) return
      setDirection(idx > current ? 1 : -1)
      setCurrent(idx)
    },
    [current]
  )

  // Auto-play — reset timer whenever current changes (covers manual nav too)
  useEffect(() => {
    if (!autoPlaying) return
    const id = setInterval(() => paginate(1), AUTOPLAY_DELAY)
    return () => clearInterval(id)
  }, [autoPlaying, current, paginate])

  const photo = PHOTOS[current]

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 10%, rgba(88,28,135,0.14), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerStagger}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em]"
          >
            Sacred Moments
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-serif text-3xl sm:text-5xl font-bold text-amber-50"
          >
            Divine <span className="gold-text">Gallery</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-amber-100/60 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Moments of Spiritual Grace, Seva, and Divine Blessings
          </motion.p>
          <motion.div variants={fadeUp} className="section-divider" />
        </motion.div>

        {/* ── Carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Main stage */}
          <div
            className="relative w-full aspect-[3/4] sm:aspect-[16/9] rounded-3xl overflow-hidden select-none"
            onMouseEnter={() => setAutoPlaying(false)}
            onMouseLeave={() => setAutoPlaying(true)}
            style={{
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(212,168,67,0.13)",
            }}
          >
            {/* Blurred bokeh background — crossfades with each slide */}
            <AnimatePresence mode="sync">
              <motion.div
                key={`bg-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 pointer-events-none"
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  className="object-cover scale-110"
                  style={{ filter: "blur(28px)", opacity: 0.45 }}
                  aria-hidden
                  sizes="10vw"
                />
                <div className="absolute inset-0 bg-black/55" />
              </motion.div>
            </AnimatePresence>

            {/* Sliding image */}
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragStart={() => {
                  dragActive.current = false
                }}
                onDrag={(_, info) => {
                  if (Math.abs(info.offset.x) > 6) dragActive.current = true
                }}
                onDragEnd={(_, info) => {
                  const power =
                    Math.abs(info.offset.x) * Math.abs(info.velocity.x)
                  if (power > 8000) {
                    paginate(info.offset.x < 0 ? 1 : -1)
                  }
                  setTimeout(() => {
                    dragActive.current = false
                  }, 80)
                }}
                onClick={() => {
                  if (!dragActive.current) setLightbox(true)
                }}
                style={{ cursor: "grab" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-contain"
                  priority={current === 0}
                  sizes="(max-width: 640px) 100vw, 90vw"
                  draggable={false}
                />
                {/* Zoom hint on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/10 pointer-events-none">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(0,0,0,0.45)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(212,168,67,0.3)",
                    }}
                  >
                    <ZoomIn size={22} className="text-amber-400" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom info overlay */}
            <div
              className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-6 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
              }}
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <span
                    className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2"
                    style={{
                      background: "rgba(212,168,67,0.18)",
                      color: "#fde68a",
                      border: "1px solid rgba(212,168,67,0.3)",
                    }}
                  >
                    {photo.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-xl font-bold text-amber-50 leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-amber-200/55 text-xs mt-0.5">{photo.subtitle}</p>
                </div>
                <div className="text-amber-400/50 text-sm font-mono shrink-0">
                  {String(current + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(N).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Autoplay progress bar */}
            {autoPlaying && (
              <motion.div
                key={`progress-${current}`}
                className="absolute bottom-0 left-0 h-[3px] z-30 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #d4a843, #f59e0b, #fde68a)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
              />
            )}

            {/* ←  Prev arrow */}
            <button
              onClick={() => {
                paginate(-1)
                setAutoPlaying(false)
              }}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              style={{
                background: "rgba(0,0,0,0.48)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(212,168,67,0.22)",
              }}
            >
              <ChevronLeft size={20} className="text-amber-300" />
            </button>

            {/* →  Next arrow */}
            <button
              onClick={() => {
                paginate(1)
                setAutoPlaying(false)
              }}
              aria-label="Next photo"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              style={{
                background: "rgba(0,0,0,0.48)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(212,168,67,0.22)",
              }}
            >
              <ChevronRight size={20} className="text-amber-300" />
            </button>

            {/* Play / Pause */}
            <button
              onClick={() => setAutoPlaying((p) => !p)}
              aria-label={autoPlaying ? "Pause autoplay" : "Resume autoplay"}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
              style={{
                background: "rgba(0,0,0,0.48)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {autoPlaying ? (
                <Pause size={12} className="text-white/65" />
              ) : (
                <Play size={12} className="text-white/65 ml-0.5" />
              )}
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="flex justify-center gap-2.5 sm:gap-3 mt-5">
            {PHOTOS.map((p, i) => (
              <motion.button
                key={p.src}
                onClick={() => {
                  goTo(i)
                  setAutoPlaying(false)
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative rounded-xl overflow-hidden shrink-0 cursor-pointer transition-all duration-300"
                style={{
                  width: 56,
                  height: 42,
                  outline:
                    i === current
                      ? "2px solid #d4a843"
                      : "2px solid rgba(255,255,255,0.08)",
                  outlineOffset: 2,
                  opacity: i === current ? 1 : 0.4,
                  boxShadow:
                    i === current
                      ? "0 4px 18px rgba(212,168,67,0.35)"
                      : "none",
                }}
                aria-label={`View ${p.title}`}
              >
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
                {i === current && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(212,168,67,0.15), transparent)",
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {PHOTOS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  goTo(i)
                  setAutoPlaying(false)
                }}
                aria-label={`Go to photo ${i + 1}`}
                className="cursor-pointer transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? 28 : 6,
                  height: 6,
                  background:
                    i === current
                      ? "linear-gradient(90deg, #d4a843, #f59e0b)"
                      : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
            style={{ background: "rgba(0,0,0,0.93)", backdropFilter: "blur(24px)" }}
            onClick={() => setLightbox(false)}
          >
            <motion.div
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.86, opacity: 0 }}
              transition={{ type: "spring", stiffness: 310, damping: 30 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={1600}
                className="w-full h-auto rounded-3xl block"
                style={{
                  boxShadow:
                    "0 48px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(212,168,67,0.18)",
                }}
                priority
              />

              {/* Caption */}
              <div
                className="absolute bottom-0 inset-x-0 p-5 rounded-b-3xl"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                }}
              >
                <div className="font-serif text-lg sm:text-xl font-bold text-amber-50">
                  {photo.title}
                </div>
                <div className="text-amber-300/65 text-sm mt-0.5">
                  {photo.subtitle}
                </div>
              </div>

              {/* Lightbox prev/next */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(212,168,67,0.25)",
                }}
              >
                <ChevronLeft size={18} className="text-amber-300" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(212,168,67,0.25)",
                }}
              >
                <ChevronRight size={18} className="text-amber-300" />
              </button>

              {/* Close */}
              <button
                onClick={() => setLightbox(false)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-amber-400 transition-colors cursor-pointer"
                style={{
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

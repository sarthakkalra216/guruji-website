"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Teachings", href: "#teachings" },
  { label: "Gallery", href: "#gallery" },
  { label: "Kirtan", href: "#kirtan" },
  { label: "Seva", href: "#seva" },
  { label: "Ask Guruji", href: "#ask-guruji" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Prevent browser from restoring previous scroll position on refresh
    if ("scrollRestoration" in history) history.scrollRestoration = "manual"
    window.scrollTo(0, 0)

    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }, 10)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/30"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <span className="text-2xl" aria-hidden>🕉</span>
            <div className="text-left leading-none">
              <div className="text-sm font-bold text-amber-400 tracking-wide">Guruji</div>
              <div className="text-[10px] text-amber-200/50 tracking-widest uppercase">
                Nakur Wale Baba Ji
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 text-sm text-amber-100/70 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => scrollTo("#ask-guruji")}
            className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 font-semibold text-sm px-5 py-2 rounded-full hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-105 cursor-pointer"
          >
            ✨ Ask Guruji
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-amber-400 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-slate-950 border-l border-white/10 flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <span className="text-amber-400 font-semibold text-sm">🕉 Navigation</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 text-amber-200/50 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3 text-amber-100/80 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all duration-200 text-sm cursor-pointer"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="p-4 border-t border-white/10">
                <button
                  onClick={() => scrollTo("#ask-guruji")}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 font-semibold py-3 rounded-full hover:from-amber-400 hover:to-yellow-300 transition-all text-sm cursor-pointer"
                >
                  ✨ Ask Guruji
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

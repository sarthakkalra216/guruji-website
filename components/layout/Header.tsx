"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Life Journey", href: "/#life-journey" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Seva", href: "/seva" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) => {
    const route = href.split("#")[0] || "/"
    if (route === "/") return pathname === "/"
    return pathname === route || pathname.startsWith(route + "/")
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
          {/* Logo — जय श्री राम */}
          <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
            {/* Saffron ॐ emblem */}
            <span
              aria-hidden
              className="grid place-items-center w-10 h-10 sm:w-11 sm:h-11 rounded-full shrink-0 font-hindi text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg,#f59e0b,#d4a843)",
                color: "#1a0a00",
                boxShadow: "0 4px 16px rgba(212,168,67,0.4)",
              }}
            >
              ॐ
            </span>
            <div className="leading-tight">
              <div
                className="font-hindi font-bold gold-text text-xl sm:text-2xl"
                lang="hi"
                style={{ lineHeight: 1.35, paddingBottom: "0.06em" }}
              >
                जय श्री राम
              </div>
              <div
                className="font-hindi text-[9px] sm:text-[10px] text-amber-200/55 tracking-[0.18em]"
                lang="hi"
              >
                नकुड़ वाले बाबा जी
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm transition-colors rounded-lg hover:bg-white/5 cursor-pointer",
                    isActive(link.href)
                      ? "text-amber-400 font-semibold"
                      : "text-amber-100/70 hover:text-amber-400"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 font-semibold text-sm px-5 py-2 rounded-full hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-105 cursor-pointer"
          >
            Get in Touch
          </Link>

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
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "block w-full text-left px-4 py-3 hover:bg-white/5 rounded-xl transition-all duration-200 text-sm cursor-pointer",
                        isActive(link.href)
                          ? "text-amber-400 font-semibold"
                          : "text-amber-100/80 hover:text-amber-400"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-4 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 font-semibold py-3 rounded-full hover:from-amber-400 hover:to-yellow-300 transition-all text-sm cursor-pointer"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

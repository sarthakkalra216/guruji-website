"use client"

import { Moon, Sun } from "lucide-react"
import { useSite } from "@/components/providers/SiteProvider"

/**
 * Theme (light/dark) + language (हिं/EN) switchers shown in the header.
 * `compact` tightens spacing for the mobile drawer.
 */
export default function SettingsToggles({ compact = false }: { compact?: boolean }) {
  const { theme, lang, toggleTheme, toggleLang } = useSite()

  return (
    <div className={`flex items-center ${compact ? "gap-2" : "gap-2.5"}`}>
      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        className="grid place-items-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
        style={{
          background: "var(--surface-2)",
          border: "1px solid var(--border-gold)",
          color: "var(--gold)",
        }}
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      {/* Language toggle */}
      <button
        onClick={toggleLang}
        aria-label={lang === "hi" ? "Switch to English" : "हिंदी में बदलें"}
        className="flex items-center gap-1 h-9 px-3 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
        style={{
          background: "var(--surface-2)",
          border: "1px solid var(--border-gold)",
        }}
      >
        <span
          className="font-hindi"
          style={{ color: lang === "hi" ? "var(--gold)" : "var(--text-muted)" }}
        >
          हिं
        </span>
        <span style={{ color: "var(--text-muted)", opacity: 0.5 }}>/</span>
        <span style={{ color: lang === "en" ? "var(--gold)" : "var(--text-muted)" }}>
          EN
        </span>
      </button>
    </div>
  )
}

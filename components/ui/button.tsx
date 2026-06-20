"use client"

import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "ghost" | "purple"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          variant === "gold" &&
            "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 hover:from-amber-300 hover:to-yellow-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-400/40 hover:scale-105",
          variant === "outline" &&
            "border border-amber-400/40 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400 hover:text-amber-400",
          variant === "ghost" &&
            "text-amber-200/70 hover:text-amber-400 hover:bg-white/5",
          variant === "purple" &&
            "bg-gradient-to-r from-violet-600 to-purple-700 text-white hover:from-violet-500 hover:to-purple-600 shadow-lg shadow-purple-500/20 hover:scale-105",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
export { Button }

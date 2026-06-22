import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Noto_Serif_Devanagari } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Guruji Nakur Wale Baba Ji | Spiritual Wisdom & Seva",
  description:
    "Shri Guruji Nakur Wale Baba Ji — Spreading Divine Wisdom, Seva, Love, and Spiritual Awakening from Nakur, Saharanpur.",
  keywords: [
    "Guruji",
    "Nakur Wale Baba Ji",
    "Spiritual",
    "Satsang",
    "Kirtan",
    "Seva",
    "Wisdom",
    "Nakur",
    "Saharanpur",
  ],
  openGraph: {
    title: "Guruji Nakur Wale Baba Ji | Spiritual Wisdom & Seva",
    description:
      "Spreading Divine Wisdom, Seva, Love, and Spiritual Awakening",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfairDisplay.variable} ${notoSerifDevanagari.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#04000c] text-amber-50 overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

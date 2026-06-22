import type { Metadata } from "next"
import Seva from "@/components/sections/Seva"

export const metadata: Metadata = {
  title: "Seva | Guruji Nakur Wale Baba Ji",
  description:
    "Join the selfless service (seva) initiatives — langar, education, medical camps, and more — in Guruji's name.",
}

export default function SevaPage() {
  return (
    <main className="pt-16">
      <Seva />
    </main>
  )
}

import type { Metadata } from "next"
import Gallery from "@/components/sections/Gallery"
import { getGalleryImages } from "@/lib/media"

export const metadata: Metadata = {
  title: "Gallery | Guruji Nakur Wale Baba Ji",
  description:
    "Sacred darshan, satsang, and seva moments of Shri Guruji Nakur Wale Baba Ji at the Nakur ashram.",
}

export default function GalleryPage() {
  const images = getGalleryImages()
  return (
    <main className="pt-16">
      <Gallery images={images} />
    </main>
  )
}

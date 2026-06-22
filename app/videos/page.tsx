import type { Metadata } from "next"
import VideoGallery from "@/components/sections/VideoGallery"
import Kirtan from "@/components/sections/Kirtan"
import { getVideos } from "@/lib/media"

export const metadata: Metadata = {
  title: "Videos & Kirtan | Guruji Nakur Wale Baba Ji",
  description:
    "Watch satsang pravachan videos and devotional kirtan of Shri Guruji Nakur Wale Baba Ji.",
}

export default function VideosPage() {
  const videos = getVideos()
  return (
    <main className="pt-16">
      <VideoGallery videos={videos} />
      <Kirtan />
    </main>
  )
}

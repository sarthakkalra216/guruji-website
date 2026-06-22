// Server-side media scanner.
// Reads the public/images and public/videos folders at build/request time so the
// Gallery and Videos sections are fully dynamic — drop a file in following the
// naming convention and it appears automatically, with no code changes.
//
//   public/images/photo*.{jpg,jpeg,png,webp,avif}   → Gallery   (logo.png excluded)
//   public/videos/video*.{mp4,webm,mov,ogg}         → Videos
//
// NOTE: This module uses the Node `fs` API and must only be imported from
// server components (e.g. the route `page.tsx` files), never from client code.

import { readdirSync } from "fs"
import { join } from "path"

const PUBLIC_DIR = join(process.cwd(), "public")

const IMAGE_RE = /^photo.*\.(jpe?g|png|webp|avif)$/i
const VIDEO_RE = /^video.*\.(mp4|webm|mov|ogg)$/i

// "photo2" sorts before "photo10" (natural/numeric ordering)
function naturalSort(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
}

export interface MediaFile {
  /** public URL, e.g. "/images/photo1.jpeg" */
  src: string
  /** raw file name, e.g. "photo1.jpeg" */
  name: string
}

function scan(folder: string, urlBase: string, pattern: RegExp): MediaFile[] {
  let files: string[] = []
  try {
    files = readdirSync(join(PUBLIC_DIR, folder))
  } catch {
    return [] // folder may not exist yet
  }
  return files
    .filter((f) => pattern.test(f))
    .sort(naturalSort)
    .map((f) => ({ src: `${urlBase}/${f}`, name: f }))
}

/** All gallery images (photo*) — logo.png is automatically excluded. */
export function getGalleryImages(): MediaFile[] {
  return scan("images", "/images", IMAGE_RE)
}

/** All videos (video*). */
export function getVideos(): MediaFile[] {
  return scan("videos", "/videos", VIDEO_RE)
}

# Guruji Nakur Wale Baba Ji — Website Project Status

## Build Status
✅ Production build passes — `npm run build` exits clean (no TypeScript errors, no lint errors)

---

## Completed Features

### Core Infrastructure
- [x] Next.js 16.2.9 App Router setup with TypeScript
- [x] Tailwind CSS v4 with `@import "tailwindcss"` and `@theme inline {}` pattern
- [x] Playfair Display serif font via `next/font/google` (`--font-playfair` CSS variable)
- [x] Framer Motion 12.x animations (whileInView, AnimatePresence, particles)
- [x] Glassmorphism design system (`.glass`, `.gold-text`, `.purple-text`, `.section-divider`)
- [x] Dark spiritual aesthetic (`#04000c` background, amber/gold + purple palette)
- [x] Custom gold–purple scrollbar
- [x] `next.config.ts` with `remotePatterns` for `img.youtube.com`, `i.ytimg.com`

### Pages & Layout
- [x] `app/layout.tsx` — SEO metadata, font setup
- [x] `app/page.tsx` — Section ordering: Hero → About → Teachings → Gallery → VideoGallery → Kirtan → Seva → AskGuruji → Testimonials → Contact
- [x] `app/globals.css` — all shared CSS including masonry layout, marquee, typing dots

### Components — Layout
- [x] `Header` — sticky glassmorphism header with nav links
- [x] `Footer` — brand, quick links, contact, social icons

### Components — Sections
- [x] **Hero** — full-screen video background (`video1.mp4` → `video2.mp4` fallback), poster `photo3.jpeg`, dark overlay, mute/unmute button, particles, gold text, CTA buttons, stats
- [x] **About** — bio text, life timeline, mission/vision cards; image placeholder (see TODO)
- [x] **Teachings** — 6 teaching categories, 12 teaching cards, filterable by category
- [x] **Gallery** — 5 real photos (Next.js Image), CSS masonry layout, category filter, lightbox modal
- [x] **VideoGallery** — 2 local MP4 videos (`video1.mp4`, `video2.mp4`) with custom play/pause + mute controls
- [x] **Kirtan** — 6 real YouTube videos from playlist RSS, real thumbnails (`img.youtube.com`), featured card + 5-column grid, links to YouTube
- [x] **Seva** — seva activities with animated cards
- [x] **AskGuruji** — chat interface, answers retrieved exclusively from `data/guruji-knowledge.ts`
- [x] **Testimonials** — devotee testimonials with infinite marquee
- [x] **Contact** — contact form with address/phone/email

### Data Layer
- [x] `data/guruji-profile.ts` — `GurujiProfile` interface, timeline, contact, social, values, bio
- [x] `data/guruji-knowledge.ts` — 6 teaching categories, 12 teachings, 10 knowledge entries, 10 sample questions
- [x] `data/kirtan-playlist.ts` — 6 real YouTube video IDs extracted from playlist RSS feed
- [x] `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- [x] `lib/askGuruji.ts` — keyword-matching retrieval for Ask Guruji chat
- [x] `app/api/ask-guruji/route.ts` — POST API route for chat

---

## Asset Locations

All assets are in `public/gallery/`:

| File | Description | Used In |
|------|-------------|---------|
| `photo1.jpeg` | Guruji murti portrait (close-up, left angle) | Gallery (satsang), VideoGallery poster |
| `photo2.jpeg` | Guruji murti portrait (wider angle) | Gallery (satsang) |
| `photo3.jpeg` | Full shrine with decorated murti + Krishna deity | Gallery (events), Hero poster |
| `photo4.jpeg` | Guruji murti portrait (frontal, green backdrop) | Gallery (satsang) |
| `photo5.jpeg` | Sacred golden padukas with flower offerings | Gallery (seva) |
| `video1.mp4` | Ashram footage — primary hero background | Hero background, VideoGallery card 1 |
| `video2.mp4` | Ashram footage — fallback source | Hero fallback source, VideoGallery card 2 |

---

## YouTube Playlist

**Playlist URL:** `https://www.youtube.com/playlist?list=PLBWCOzB55OJw7OFPxONBlVticcOfREi0_`

| Video ID | Title |
|----------|-------|
| `IC4QKHfRqVs` | Mere Sarkar Aaye Hain (**FEATURED**) |
| `A3q85XNvHTk` | Samman Samaroh — Sant Devi Sudiksha Saraswati Maa Ji |
| `3vX5vKBnuss` | Maa Ji Dwara Sundar Bhajan Ki Rachna |
| `OZ_ov5UFo4A` | Shri Sitaram Mandir Mein Bhajan |
| `oGcO8p-gWMs` | Tere Ehsaan Ka Badla Chukaya Ja Nahin Sakta |
| `0mNCRiCtFWk` | Maa Ji Ke Anmol Vachan |

---

## Remaining Tasks / TODOs

### Content (requires real information from the family/ashram)

- [ ] **About — Portrait photo**: Replace gradient placeholder in `About.tsx` with `photo4.jpeg` or a dedicated portrait photo. See TODO comment at line ~66.
- [ ] **About — Biography text**: Update `data/guruji-profile.ts` → `longBio` array with authentic biography content. See TODO comment in `About.tsx`.
- [ ] **Social links**: Replace `[PLACEHOLDER]` values in `data/guruji-profile.ts` → `contact` and `social` with real URLs (YouTube channel, Facebook page, Instagram handle, phone, address, email).
- [ ] **Contact form**: Wire up the contact form to a real email service (e.g., Resend, Nodemailer, Formspree).
- [ ] **Testimonials**: Replace placeholder testimonial text in `Testimonials.tsx` with real devotee quotes.

### Optional Enhancements
- [ ] **More gallery photos**: Drop additional images into `public/gallery/` and add entries to the `PHOTOS` array in `Gallery.tsx`.
- [ ] **Seva section photos**: Add real images to the Seva section cards.
- [ ] **Header nav — Videos**: Add `{ label: "Videos", href: "#videos" }` to the Header navigation array to link to the new VideoGallery section.

---

## Biography Integration Steps

1. Open `data/guruji-profile.ts`
2. Update the `longBio` array — each string is one paragraph
3. Update `shortBio` (shown as the blockquote in About + truncated in Footer)
4. Update `timeline` events with accurate years, titles, and descriptions
5. Update `contact.address`, `contact.phone`, `contact.email`
6. Update `social.youtube`, `social.facebook`, `social.instagram` with real channel URLs
7. (Optional) Replace the `About.tsx` image placeholder with `<Image src="/gallery/photo4.jpeg" ... />`

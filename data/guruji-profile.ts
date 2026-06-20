// Replace [PLACEHOLDER] sections with real content from Guruji's biography DOCX.

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  significance?: "birth" | "spiritual" | "seva" | "milestone";
}

export interface GurujiProfile {
  name: string;
  fullName: string;
  location: string;
  tagline: string;
  shortBio: string;
  longBio: string[];
  mission: string;
  vision: string;
  values: string[];
  timeline: TimelineEvent[];
  contact: {
    address: string;
    phone?: string;
    email?: string;
    whatsapp?: string;
  };
  social: {
    youtube?: string;
    facebook?: string;
    instagram?: string;
  };
}

export const gurujiProfile: GurujiProfile = {
  name: "Guruji Nakur Wale Baba Ji",
  fullName: "Shri Guruji Nakur Wale Baba Ji",
  location: "Nakur, Saharanpur, Uttar Pradesh",
  tagline: "Spreading Divine Wisdom, Seva, Love, and Spiritual Awakening",

  shortBio:
    // [PLACEHOLDER] — replace with 2–3 sentence summary from biography DOCX
    "Shri Guruji Nakur Wale Baba Ji is a revered spiritual master from Nakur, Uttar Pradesh, whose life embodies the timeless ideals of seva, bhakti, and compassion. For decades, Guruji has guided thousands of devotees toward inner peace and self-realization through satsang, kirtan, and selfless service.",

  longBio: [
    // [PLACEHOLDER] — replace each string with a paragraph from the biography DOCX
    "Shri Guruji Nakur Wale Baba Ji was born in the sacred land of Nakur, nestled in the Saharanpur district of Uttar Pradesh. From early childhood, Guruji displayed an extraordinary inclination toward spirituality, devotion, and selfless service — qualities that would define his life's mission.",

    "Under the guidance of his spiritual preceptor, Guruji undertook years of rigorous sadhana, studying the sacred scriptures, practicing meditation, and immersing himself in the traditions of bhakti. His deep communion with the divine eventually led him to emerge as a guiding light for seekers across the region.",

    "Over the decades, Guruji established a vibrant spiritual community centered on the principles of seva (selfless service), satsang (spiritual discourse), and kirtan (devotional singing). His ashram in Nakur became a place of refuge and renewal for thousands of devotees from all walks of life.",

    "Guruji's teachings transcend the boundaries of caste, creed, and religion. He emphasizes that true spirituality lies not in rituals alone, but in the sincere transformation of one's heart — cultivating love, compassion, and humility in every moment of life.",

    "Today, Guruji continues to inspire and uplift countless souls through his presence, his words, and the tireless seva activities of his community. His mission remains unchanged: to awaken the divine light that resides within every human heart.",
  ],

  mission:
    // [PLACEHOLDER]
    "To guide every seeker toward inner peace, self-realization, and selfless service — building a compassionate community rooted in divine love and wisdom.",

  vision:
    // [PLACEHOLDER]
    "A world where every individual awakens to their divine nature, lives with purpose and compassion, and contributes to the upliftment of all of humanity.",

  values: [
    // [PLACEHOLDER] — update to match Guruji's actual stated values
    "Seva (Selfless Service)",
    "Satsang (Spiritual Discourse)",
    "Bhakti (Devotion)",
    "Ahimsa (Non-violence)",
    "Satya (Truth)",
    "Karuna (Compassion)",
  ],

  timeline: [
    {
      year: "1950s", // [PLACEHOLDER] — replace with actual birth year
      title: "Divine Birth",
      description:
        "Shri Guruji was born in Nakur, Saharanpur. From his earliest years, he showed signs of an extraordinary spiritual temperament, spending long hours in prayer and contemplation.",
      significance: "birth",
    },
    {
      year: "1970s", // [PLACEHOLDER]
      title: "Meeting the Spiritual Master",
      description:
        "Guruji sought out his spiritual preceptor and began his formal sadhana — a period of intensive study, meditation, and service under the master's guidance.",
      significance: "spiritual",
    },
    {
      year: "1980s", // [PLACEHOLDER]
      title: "Beginning of Satsang",
      description:
        "Guruji began holding regular satsangs in Nakur, attracting devotees from the surrounding villages and towns who were drawn by his wisdom and peaceful presence.",
      significance: "milestone",
    },
    {
      year: "1990s", // [PLACEHOLDER]
      title: "Establishment of Ashram",
      description:
        "With the growing community of devotees, Guruji established his ashram in Nakur — a center for spiritual learning, kirtan, meditation, and community seva.",
      significance: "milestone",
    },
    {
      year: "2000s", // [PLACEHOLDER]
      title: "Expansion of Seva Activities",
      description:
        "The ashram launched major seva initiatives including langar (community kitchen), medical camps, and educational support for underprivileged families in the region.",
      significance: "seva",
    },
    {
      year: "2010s", // [PLACEHOLDER]
      title: "Kirtan Yatras Across India",
      description:
        "Guruji led devotional kirtan yatras to sacred pilgrimage sites across India, deepening the spiritual practice of thousands of devotees and spreading divine love.",
      significance: "spiritual",
    },
    {
      year: "Present",
      title: "Continuing the Divine Mission",
      description:
        "Guruji continues to hold daily satsangs, guide spiritual seekers, and oversee the ever-expanding seva activities of the ashram community.",
      significance: "milestone",
    },
  ],

  contact: {
    // [PLACEHOLDER] — replace with actual contact details
    address: "Shri Guruji Ashram, Nakur, District Saharanpur, Uttar Pradesh — 247341",
    phone: "+91 XXXXX XXXXX",
    email: "info@gurujinakurwale.com",
    whatsapp: "+91 XXXXX XXXXX",
  },

  social: {
    // [PLACEHOLDER] — replace with actual social media handles/URLs
    youtube: "https://youtube.com/@GurujNakurWale",
    facebook: "https://facebook.com/GurujNakurWale",
    instagram: "https://instagram.com/GurujNakurWale",
  },
};

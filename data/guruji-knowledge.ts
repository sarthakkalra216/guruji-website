// Knowledge base for the "Ask Guruji" AI chat feature.
// All chatbot answers are derived ONLY from this file.
// Replace [PLACEHOLDER] entries with real content from Guruji's biography DOCX.

// ─── Teaching Categories ────────────────────────────────────────────────────

export interface TeachingCategory {
  id: string;
  label: string;
  icon: string;         // Lucide icon name
  color: string;        // Tailwind gradient class
  description: string;
}

export const teachingCategories: TeachingCategory[] = [
  {
    id: "faith",
    label: "Faith",
    icon: "Heart",
    color: "from-rose-500 to-pink-600",
    description: "Cultivating unwavering trust in the divine and surrendering to God's will.",
  },
  {
    id: "seva",
    label: "Seva",
    icon: "Handshake",
    color: "from-amber-500 to-orange-600",
    description: "The path of selfless service as the highest form of worship.",
  },
  {
    id: "meditation",
    label: "Meditation",
    icon: "Brain",
    color: "from-violet-500 to-purple-600",
    description: "Stilling the mind through daily practice to experience inner peace.",
  },
  {
    id: "humanity",
    label: "Humanity",
    icon: "Users",
    color: "from-sky-500 to-blue-600",
    description: "Recognizing the divine in every human being and serving all as God.",
  },
  {
    id: "compassion",
    label: "Compassion",
    icon: "Sparkles",
    color: "from-emerald-500 to-teal-600",
    description: "Opening the heart to feel the pain of others and act with kindness.",
  },
  {
    id: "discipline",
    label: "Discipline",
    icon: "Flame",
    color: "from-yellow-500 to-amber-600",
    description: "Building a daily spiritual routine that transforms ordinary life into sadhana.",
  },
];

// ─── Individual Teachings ───────────────────────────────────────────────────

export interface Teaching {
  id: string;
  categoryId: string;
  title: string;
  quote: string;       // Short Guruji quote (Hindi or English)
  explanation: string; // 2–4 sentence elaboration
  tags: string[];
}

export const teachings: Teaching[] = [
  // FAITH
  {
    id: "faith-1",
    categoryId: "faith",
    title: "Surrender to the Divine",
    quote: "जब तक मन में संदेह है, तब तक आत्मा को शांति नहीं मिलती। पूर्ण समर्पण ही मुक्ति का द्वार है।", // [PLACEHOLDER] — replace with Guruji's actual words
    explanation:
      "Guruji teaches that true faith requires complete surrender — releasing our anxieties and trusting that the divine is always guiding us. When the ego steps aside, the soul experiences profound peace and clarity.",
    tags: ["faith", "surrender", "peace", "trust"],
  },
  {
    id: "faith-2",
    categoryId: "faith",
    title: "The Power of Nam",
    quote: "भगवान का नाम ही सबसे बड़ी शक्ति है — यही दवा है, यही दुआ है।", // [PLACEHOLDER]
    explanation:
      "Guruji emphasizes the transformative power of repeating God's name. The constant remembrance of the divine name (Nam Simran) purifies the mind, dissolves karma, and ultimately unites the devotee with the divine.",
    tags: ["faith", "naam", "prayer", "simran"],
  },

  // SEVA
  {
    id: "seva-1",
    categoryId: "seva",
    title: "Service is Supreme Worship",
    quote: "सेवा से बड़ी कोई पूजा नहीं। जब आप किसी जरूरतमंद की मदद करते हैं, तो आप ईश्वर की सेवा करते हैं।", // [PLACEHOLDER]
    explanation:
      "Guruji teaches that seva — selfless service to others — is the highest form of devotion. Every act of genuine help, offered without expectation of reward, is an offering directly to God. The ashram's daily langar and seva programs embody this principle.",
    tags: ["seva", "service", "langar", "devotion"],
  },
  {
    id: "seva-2",
    categoryId: "seva",
    title: "Seva Without Ego",
    quote: "सेवा तब सच्ची होती है जब उसमें 'मैं' नहीं होता।", // [PLACEHOLDER]
    explanation:
      "True seva, Guruji explains, is performed without pride or the desire for recognition. The moment we begin to seek praise for our service, it becomes a transaction rather than an offering. Selfless service purifies the heart and erases the ego.",
    tags: ["seva", "ego", "humility", "purification"],
  },

  // MEDITATION
  {
    id: "meditation-1",
    categoryId: "meditation",
    title: "The Still Mind",
    quote: "जैसे तालाब का पानी स्थिर होने पर आकाश को दर्शाता है, वैसे ही शांत मन परमात्मा को प्रतिबिंबित करता है।", // [PLACEHOLDER]
    explanation:
      "Guruji uses the metaphor of still water reflecting the sky to describe meditation. When the mind is still through regular practice, it becomes a perfect mirror that reflects the divine. He recommends beginning each day with at least 20 minutes of silent meditation.",
    tags: ["meditation", "mind", "stillness", "practice"],
  },
  {
    id: "meditation-2",
    categoryId: "meditation",
    title: "Daily Sadhana",
    quote: "रोज़ सुबह उठकर, पहले ईश्वर को याद करो — बाकी सब काम अपने आप बनता है।", // [PLACEHOLDER]
    explanation:
      "Guruji teaches that a consistent morning spiritual practice — rising before dawn, bathing, and sitting in silence or prayer — sets the tone for the entire day. This discipline gradually transforms one's character and outlook on life.",
    tags: ["meditation", "sadhana", "morning", "routine"],
  },

  // HUMANITY
  {
    id: "humanity-1",
    categoryId: "humanity",
    title: "See God in Every Being",
    quote: "हर इंसान में भगवान बसते हैं — जाति, धर्म, और रंग से ऊपर उठकर सबको प्रेम करो।", // [PLACEHOLDER]
    explanation:
      "One of Guruji's most consistent teachings is that God dwells in every human being, regardless of caste, religion, or background. He encourages devotees to transcend social divisions and serve all people with equal love and respect.",
    tags: ["humanity", "equality", "love", "universal"],
  },
  {
    id: "humanity-2",
    categoryId: "humanity",
    title: "Family as First Ashram",
    quote: "घर ही पहला आश्रम है — माता-पिता की सेवा सबसे बड़ी तीर्थयात्रा है।", // [PLACEHOLDER]
    explanation:
      "Guruji teaches that spirituality must begin at home. Respecting and caring for parents, being honest in relationships, and maintaining peace in the family are the foundational spiritual practices before pursuing any external pilgrimage or ritual.",
    tags: ["humanity", "family", "parents", "home"],
  },

  // COMPASSION
  {
    id: "compassion-1",
    categoryId: "compassion",
    title: "The Compassionate Heart",
    quote: "जिसके दिल में दया है, उसके दिल में भगवान है।", // [PLACEHOLDER]
    explanation:
      "Guruji says that compassion is the clearest sign of a spiritually awakened heart. A person who feels genuine concern for the suffering of others — and acts to relieve it — has touched the divine nature within themselves.",
    tags: ["compassion", "kindness", "heart", "divine"],
  },
  {
    id: "compassion-2",
    categoryId: "compassion",
    title: "Feed the Hungry",
    quote: "भूखे को खाना खिलाना — यह सबसे सरल और सबसे पवित्र कर्म है।", // [PLACEHOLDER]
    explanation:
      "The langar (community kitchen) at Guruji's ashram runs daily, providing free meals to all who come — rich or poor, devotee or stranger. Guruji teaches that feeding a hungry person is one of the purest acts of worship, pleasing to God above all rituals.",
    tags: ["compassion", "langar", "food", "charity"],
  },

  // DISCIPLINE
  {
    id: "discipline-1",
    categoryId: "discipline",
    title: "Rise Before the Sun",
    quote: "ब्रह्ममुहूर्त में उठने वाले को परमात्मा स्वयं बुलाता है।", // [PLACEHOLDER]
    explanation:
      "Guruji emphasizes the sacred hour before sunrise — Brahma Muhurta — as the most auspicious time for spiritual practice. The mind is naturally calm and receptive at this hour, making meditation and prayer most powerful.",
    tags: ["discipline", "morning", "brahma-muhurta", "practice"],
  },
  {
    id: "discipline-2",
    categoryId: "discipline",
    title: "Simple Living",
    quote: "कम खाओ, कम सोओ, कम बोलो — और भगवान का नाम ज़्यादा लो।", // [PLACEHOLDER]
    explanation:
      "Guruji teaches the principle of simplicity in lifestyle. Moderation in eating, sleeping, and speaking conserves vital energy that can be redirected toward spiritual growth. A simple life creates space for deeper awareness and inner peace.",
    tags: ["discipline", "simplicity", "lifestyle", "moderation"],
  },
];

// ─── Knowledge Base (for AI chat retrieval) ─────────────────────────────────

export interface KnowledgeEntry {
  id: string;
  topic: string;
  keywords: string[];
  answer: string;
}

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: "kb-who-is-guruji",
    topic: "Who is Guruji?",
    keywords: ["who", "guruji", "baba ji", "nakur", "saint", "identity", "about"],
    answer:
      "Shri Guruji Nakur Wale Baba Ji is a revered spiritual master based in Nakur, Saharanpur district of Uttar Pradesh, India. He is known for his profound wisdom, compassionate heart, and tireless dedication to seva and satsang. For decades, Guruji has guided thousands of devotees toward inner peace, self-realization, and a life of purposeful service. His ashram in Nakur is a center for spiritual learning, kirtan, meditation, and community seva.",
  },
  {
    id: "kb-teachings",
    topic: "What are Guruji's core teachings?",
    keywords: ["teachings", "message", "philosophy", "guidance", "what does guruji teach", "principles"],
    answer:
      "Guruji's core teachings revolve around six pillars: Faith (unwavering trust in the divine), Seva (selfless service as the highest worship), Meditation (daily practice to still the mind), Humanity (seeing God in every being), Compassion (genuine concern for others' suffering), and Discipline (building a consistent spiritual routine). He teaches that true spirituality is not found in rituals alone, but in the sincere transformation of one's heart.",
  },
  {
    id: "kb-seva",
    topic: "What is the importance of seva according to Guruji?",
    keywords: ["seva", "service", "selfless", "importance", "why", "langar"],
    answer:
      "Guruji considers seva — selfless service — to be the highest form of worship. He teaches that when we serve others without any expectation of reward or recognition, we are directly serving God. His ashram runs a daily langar (community kitchen) and numerous community service programs, embodying this principle. Guruji also emphasizes that true seva must be performed without ego — the moment we seek praise for our service, it loses its spiritual merit.",
  },
  {
    id: "kb-life-journey",
    topic: "Tell me about Guruji's life journey",
    keywords: ["life", "journey", "biography", "history", "early life", "childhood", "story"],
    answer:
      "Guruji was born in Nakur, Saharanpur, and displayed a deep spiritual inclination from childhood. He received formal spiritual initiation from his preceptor and underwent years of intense sadhana. In the 1980s he began holding regular satsangs in Nakur, and in the 1990s established his ashram, which became a spiritual hub for the region. The ashram expanded its seva activities in the 2000s, launching community kitchens, medical camps, and educational support. Guruji has also led kirtan yatras to sacred sites across India. He continues his mission today, guiding seekers through daily satsang, kirtan, and seva.",
  },
  {
    id: "kb-meditation",
    topic: "What does Guruji teach about meditation?",
    keywords: ["meditation", "sadhana", "practice", "how to meditate", "mind", "peace"],
    answer:
      "Guruji teaches that meditation is the art of stilling the mind so it can reflect the divine, just as still water reflects the sky. He recommends a consistent daily practice — ideally beginning in the Brahma Muhurta (the sacred hour before sunrise) — starting with 20 minutes of silent sitting. He emphasizes that regularity is more important than duration: a short daily practice is far more valuable than an occasional long session. As the mind grows still, the devotee naturally experiences deeper peace, clarity, and connection to the divine.",
  },
  {
    id: "kb-ashram",
    topic: "Where is Guruji's ashram?",
    keywords: ["ashram", "location", "where", "address", "nakur", "visit"],
    answer:
      "Guruji's ashram is located in Nakur, Saharanpur district, Uttar Pradesh. The ashram serves as a center for satsang, kirtan, meditation, and community seva. It is open to all seekers regardless of caste, creed, or religion. Daily programs include morning prayers, satsang, and langar (community meals). For specific timings and directions, please contact the ashram directly.",
  },
  {
    id: "kb-kirtan",
    topic: "What is the significance of kirtan?",
    keywords: ["kirtan", "bhajan", "singing", "devotional", "music", "prayer"],
    answer:
      "Guruji holds kirtan — devotional singing — to be a powerful path to the divine. The vibration of sacred music and divine names penetrates deep into the heart, dissolving mental chatter and awakening devotion. Guruji leads regular kirtan sessions at the ashram and has organized kirtan yatras across India. He teaches that singing God's praises with a pure heart, even for a few minutes daily, can profoundly transform one's inner state.",
  },
  {
    id: "kb-daily-life",
    topic: "How should a devotee structure their daily life?",
    keywords: ["daily", "routine", "lifestyle", "how to live", "practice", "morning"],
    answer:
      "Guruji recommends a simple, disciplined daily routine: rise before sunrise and sit in silence or prayer; begin the day with gratitude and remembrance of God; practice moderation in eating, speaking, and sleeping; engage in some form of seva or contribution to others; attend satsang whenever possible; and end the day with a few minutes of reflection and prayer. He summarizes it as: 'Eat less, sleep less, speak less — and remember God more.'",
  },
  {
    id: "kb-purpose",
    topic: "What is the purpose of human life according to Guruji?",
    keywords: ["purpose", "meaning", "life", "why", "human birth", "goal", "moksha"],
    answer:
      "Guruji teaches that the human birth is an extraordinarily rare and precious opportunity for the soul to realize its divine nature and achieve liberation. He says the purpose of life is twofold: to awaken to who we truly are (self-realization), and to serve others (seva) as an expression of that awakening. A life lived in love, honesty, compassion, and service fulfills the highest purpose of human existence.",
  },
  {
    id: "kb-problems-suffering",
    topic: "How does Guruji suggest dealing with problems and suffering?",
    keywords: ["problem", "suffering", "pain", "difficulty", "challenge", "grief", "help"],
    answer:
      "Guruji teaches that suffering often arises from attachment and the belief that we are alone in our difficulties. His guidance is threefold: first, surrender the problem to God with genuine faith; second, take whatever practical action is within your power; third, accept the outcome with equanimity. He also emphasizes that satsang, seva, and constant remembrance of God's name provide tremendous strength and comfort during difficult times.",
  },
  {
    id: "kb-equality",
    topic: "What does Guruji teach about caste and religion?",
    keywords: ["caste", "religion", "equality", "discrimination", "unity", "hindu", "sikh"],
    answer:
      "Guruji firmly teaches that God dwells equally in every human being, regardless of caste, religion, gender, or social status. He considers discrimination of any kind to be contrary to the divine will. His ashram and langar are open to all people without distinction. He says, 'See God in every face you meet — that is the truest form of worship.'",
  },
];

// ─── Sample Chat Questions ───────────────────────────────────────────────────

export interface SampleQuestion {
  question: string;
  categoryId: string;
}

export const sampleQuestions: SampleQuestion[] = [
  { question: "Who is Guruji Nakur Wale Baba Ji?", categoryId: "faith" },
  { question: "What are Guruji's core teachings?", categoryId: "faith" },
  { question: "Why is seva so important according to Guruji?", categoryId: "seva" },
  { question: "Tell me about Guruji's life journey.", categoryId: "faith" },
  { question: "How should I meditate according to Guruji's teachings?", categoryId: "meditation" },
  { question: "What is the significance of kirtan?", categoryId: "faith" },
  { question: "Where is Guruji's ashram located?", categoryId: "faith" },
  { question: "How does Guruji suggest I deal with problems in life?", categoryId: "compassion" },
  { question: "What does Guruji say about daily spiritual routine?", categoryId: "discipline" },
  { question: "What is the purpose of human life according to Guruji?", categoryId: "humanity" },
];

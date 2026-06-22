"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { RamBackground, Lotus } from "@/components/decor/SacredBackground"

// ── परिचय (about me) — स्रोत: public/about me/about me_extracted_text.txt ─────

const SHORT_BIO =
  "श्री श्री 108 स्वामी रामानन्द सरस्वती जी महाराज — प्रेम से 'नकुड़ वाले बाबा जी' कहलाने वाले — एक ऐसे महान सन्त थे जिनका सम्पूर्ण जीवन दूसरों के कल्याण को समर्पित रहा। उनका कहना था कि मनुष्य पहले इन्सान है, बाद में हिन्दू या मुसलमान।"

const BIO_PARAS = [
  "बचपन में 'जहान सिंह' नाम से जाने गए गुरुजी का जन्म चैत्र शुक्ल अष्टमी, सन् 1912 (सम्वत् 1968 वि०) को जिला बागपत के ग्राम बामनौली में हुआ। उनकी माता श्रीमती भारती देवी (गाँव सरूरपुर) में प्रभु राम की भक्ति कूट-कूट कर भरी थी, और वही संस्कार धीरे-धीरे उनमें पल्लवित होते गए। बचपन से ही उनका हृदय दुखियों पर तरस खाता था और वे सदैव उनकी सेवा करते थे।",
  "सन् 1934 में गाँव कुरमाली की भागीरथी देवी से उनका विवाह हुआ, और 18 जनवरी 1936 को उन्हें पुलिस विभाग में नौकरी मिली। सेवा के दौरान वे भारत के अनेक स्थानों पर रहे तथा महात्मा गांधी, पं० जवाहरलाल नेहरू, डॉ० राजेन्द्र प्रसाद व श्री लाल बहादुर शास्त्री जैसे नेताओं के पास ड्यूटी पर रहे — फिर भी न कभी किसी को गाली दी, न कर्तव्य की अवहेलना की, और जीवन भर किसी से एक पाई-पैसा नहीं लिया।",
  "सन् 1953-54 में उन्होंने पुलिस लाइन में रामायण पर प्रवचन देना आरम्भ किया और 'बाबा' के रूप में विख्यात हुए। संसार को निःसार समझकर 5 सितम्बर 1981 को हरिद्वार में श्री नारायण मुनि जी महाराज से संन्यास की दीक्षा ली, जिन्होंने उन्हें 'श्री रामानन्द सरस्वती' नाम दिया। 15 जनवरी 2003 को वे प्रभु श्री राम के ध्यान में लीन होकर महासमाधि को प्राप्त हुए।",
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } }

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 100% 50%, rgba(88,28,135,0.13), transparent), radial-gradient(ellipse 40% 40% at 0% 50%, rgba(212,168,67,0.05), transparent)",
        }}
      />
      {/* Sacred राम watermark — moving columns (one up, one down) */}
      <RamBackground variant="vertical" opacity={0.3} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em]"
            lang="hi"
          >
            जीवन परिचय
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-serif text-3xl sm:text-5xl font-bold text-amber-50"
            lang="hi"
          >
            गुरुजी का <span className="gold-text">परिचय</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex justify-center mt-5">
            <Lotus className="w-24 h-14 opacity-50" />
          </motion.div>
        </motion.div>

        {/* Bio grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left – image + values */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Soft golden halo */}
              <div
                className="absolute -inset-4 rounded-[2rem] pointer-events-none ram-breathe"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 30%, rgba(245,185,66,0.18), transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <Image
                src="/images/photo2.jpg"
                alt="श्री गुरुजी नकुड़ वाले बाबा जी"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 448px"
              />
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ border: "1px solid rgba(212,168,67,0.25)" }}
              />
            </div>
          </motion.div>

          {/* Right – bio text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.blockquote
              variants={fadeUp}
              lang="hi"
              className="font-serif text-lg sm:text-xl text-amber-300/90 font-medium italic leading-relaxed mb-8 border-l-2 border-amber-400/40 pl-5"
            >
              &ldquo;{SHORT_BIO}&rdquo;
            </motion.blockquote>

            {BIO_PARAS.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                lang="hi"
                className="text-amber-100/70 leading-8 mb-4 text-[0.95rem]"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

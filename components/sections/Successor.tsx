"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award } from "lucide-react"
import { RamBackground, Lotus } from "@/components/decor/SacredBackground"

// सद्गुरुदेव की उत्तराधिकारिणी — सुश्री देवी सुदीक्षा सरस्वती जी (राष्ट्रपति पदक से सम्मानित)
// स्रोत: public/about me/about me_extracted_text.txt (अंतिम अनुच्छेद)

const PARAS = [
  "परम पूज्य, प्रातः स्मरणीय, वन्दनीय श्री महाराज जी के पावन चरणों में इस तुच्छ शिष्या की भावांजलि सादर समर्पित है। शिष्या का जीवन ही अपने आप में एक संस्मरण है। सन् 1969 से आपने मुझे अपने पावन चरणों में स्थान दिया; मुझ अकिंचन को मोह-ममता के जाल से निकालकर अपने स्नेह के सागर में सराबोर करना — यह आप जैसी निःस्वार्थ, तपोमय व अनुपम विभूति-स्वरूप फ़रिश्ते ही कर सकते थे।",
  "सन् 1970 में आपने पवित्र नगरी हरिद्वार से पावन ग्रन्थ श्री रामचरितमानस प्रसाद रूप में दिया तथा मनन व चिन्तन की प्रेरणा दी। सन् 1971 ई० में प्रशिक्षित करवाकर शिक्षा विभाग में सेवा का अवसर आशीर्वाद-स्वरूप मेरी झोली में डाला, जो अब तक भी पल्लवित है।",
  "सन् 1969 से 15 जनवरी 2003, सायं 5.55 तक आपकी महिमा, मर्यादा, नियम, संयम, शालीनता और प्रेम की जो अमिट छाप है — वह इस शिष्या तो क्या, सम्पूर्ण समाज के मन पर अंकित है। उसका गुणगान प्रकृति भी अपने चमचमाते सूर्य के माध्यम से कर चुकी है।",
  "जिस प्रकार भगवान श्री राम के जन्म पर सूर्यदेव एक मास तक आकाश में स्थिर रहे, उसी प्रकार सूर्यवंश में अवतरित प्रभु राम के सच्चे संत-भक्त के दर्शन हेतु सूर्य प्रातःकाल आकाश में आकर टिक गये। इससे अधिक और क्या प्रभाव चाहिए।",
]

const COUPLETS = [
  "राम ते अधिक राम कर दासा।",
  "तुम ते अधिक गुरुहि जिय जानी॥",
]

const CLOSING =
  "इसी भाव के साथ — शक्ति देना, भक्ति देना, आशीर्वाद देना — ताकि आपके पुनः आगमन तक मैं आपकी प्रतीक्षा कर सकूँ; क्योंकि यह निश्चित है। आपके सभी प्रेमी भक्तजनों एवं समाज के लिए मंगल-कामना।"

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }

export default function Successor() {
  return (
    <section id="successor" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 100% 50%, rgba(88,28,135,0.14), transparent), radial-gradient(ellipse 45% 45% at 0% 50%, rgba(212,168,67,0.06), transparent)",
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
            className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] font-hindi"
            lang="hi"
          >
            गुरु परम्परा
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-hindi font-bold text-3xl sm:text-5xl text-amber-50"
            lang="hi"
            style={{ lineHeight: 1.4, paddingBlock: "0.08em" }}
          >
            पूज्य <span className="gold-text">उत्तराधिकारिणी</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex justify-center mt-5">
            <Lotus className="w-24 h-14 opacity-50" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content — LEFT (on desktop) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="order-2 lg:order-1"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <span
                className="font-hindi gold-text font-bold text-5xl sm:text-6xl lg:text-7xl inline-block"
                lang="hi"
                style={{ lineHeight: 1.6, paddingTop: "0.18em", paddingBottom: "0.14em" }}
              >
                समर्पण
              </span>
            </motion.div>

            {PARAS.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                lang="hi"
                className="font-hindi text-amber-100/70 leading-8 mb-4 text-[0.97rem]"
              >
                {para}
              </motion.p>
            ))}

            {/* Sacred couplets */}
            <motion.div
              variants={fadeUp}
              className="my-6 py-4 px-5 rounded-2xl text-center"
              style={{
                background: "rgba(212,168,67,0.06)",
                border: "1px solid rgba(212,168,67,0.2)",
              }}
            >
              {COUPLETS.map((c) => (
                <p
                  key={c}
                  lang="hi"
                  className="font-hindi italic text-amber-300/90 text-base sm:text-lg leading-relaxed"
                >
                  {c}
                </p>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              lang="hi"
              className="font-hindi text-amber-100/70 leading-8 mb-4 text-[0.97rem]"
            >
              {CLOSING}
            </motion.p>

            {/* Designation / signature */}
            <motion.div
              variants={fadeUp}
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(212,168,67,0.2)" }}
            >
              <div
                className="font-hindi font-bold text-xl sm:text-2xl gold-text"
                lang="hi"
                style={{ lineHeight: 1.4, paddingBottom: "0.06em" }}
              >
                सुश्री देवी सुदीक्षा सरस्वती जी
              </div>
              <div
                className="inline-flex items-center gap-2.5 mt-3 px-4 py-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(212,168,67,0.08))",
                  border: "1px solid rgba(212,168,67,0.35)",
                }}
              >
                <Award size={18} className="text-amber-400 shrink-0" />
                <span className="font-hindi text-sm font-semibold text-amber-200" lang="hi">
                  राष्ट्रपति पदक से सम्मानित
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image — RIGHT (on desktop), shown first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative max-w-xl mx-auto lg:mx-0 w-full"
          >
            <div
              className="absolute -inset-4 rounded-[2rem] pointer-events-none ram-breathe"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 35%, rgba(245,185,66,0.18), transparent 70%)",
                filter: "blur(22px)",
              }}
            />
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ border: "1px solid rgba(212,168,67,0.28)" }}
            >
              <Image
                src="/images/devi-ji.png"
                alt="सुश्री देवी सुदीक्षा सरस्वती जी — पूज्य गुरुदेव के साथ"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 520px"
                className="w-full h-auto block"
              />
            </div>
            <div
              className="relative rounded-3xl overflow-hidden mt-6"
              style={{ border: "1px solid rgba(212,168,67,0.28)" }}
            >
              <Image
                src="/images/devi-ji2.png"
                alt="हमारे हैं श्री गुरुवर — सुश्री देवी सुदीक्षा सरस्वती जी एवं पूज्य गुरुदेव"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 520px"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

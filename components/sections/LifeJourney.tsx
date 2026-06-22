"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { RamBackground, Lotus } from "@/components/decor/SacredBackground"

// ─────────────────────────────────────────────────────────────────────────────
// संक्षिप्त जीवन परिचय — श्री श्री 108 स्वामी रामानन्द सरस्वती जी महाराज
// (नकुड़ वाले बाबा जी)
// स्रोत: public/about me/about me_extracted_text.txt — सम्पूर्ण सामग्री
// ─────────────────────────────────────────────────────────────────────────────

interface Chapter {
  era: string
  year?: string
  title: string
  text: string
}

const CHAPTERS: Chapter[] = [
  {
    era: "परिचय",
    title: "समाज के पथ-प्रदर्शक",
    text: "श्री श्री 108 स्वामी रामानन्द सरस्वती जी महाराज (नकुड़ वाले बाबा जी) समाज के लिए ऐसे पथ-प्रदर्शक थे जिनका नाम बड़े आदर के साथ लिया जाता है। जिन्होंने उनका नाम सुना, वे उनके दर्शनों के लिए उतावले रहते थे; और जो भी उनके सम्पर्क में आया या जिसने उनकी वाणी एक बार सुन ली, वह उनके पास से हटना ही नहीं चाहता था। यहाँ तक कि उनके दर्शन करके प्राणी उन्हीं की स्मृति में खोया रहता था।",
  },
  {
    era: "सिद्धांत",
    title: "औरों के कल्याण का संकल्प",
    text: "स्वामी जी का सिद्धांत था — 'औरों के कल्याण में रहता जिनका ध्यान, उनका अपने आप ही हो जाता कल्याण।' ये महापुरुष जीवन पर्यन्त सदैव दूसरों का कल्याण करते रहे — धर्मार्थ औषधालय बनवाना, बारात घर बनवाना, मन्दिर बनवाना, सत्संग भवन और विद्यालय बनवाना आदि। महाराज श्री समाज के प्रत्येक प्राणी को आपस में मिलाना चाहते थे; इनका कहना था कि मनुष्य पहले इन्सान है, बाद में हिन्दू या मुसलमान।",
  },
  {
    era: "अवतरण",
    year: "1912",
    title: "बामनौली में जन्म",
    text: "भारतवर्ष के ये महान सन्त जिला बागपत के ग्राम बामनौली में अवतरित हुए। इनका अवतार शुभ तिथि चैत्र शुक्ल अष्टमी, सन् 1912 (सम्वत् 1968 वि०) को हुआ। इनके दादा श्री शीश राम जी बहुत न्यायप्रिय और परिश्रमी व्यक्ति थे। इनके पिता श्री गणेशी सिंह जी भी बड़े सज्जन व धार्मिक विचारों के व्यक्ति थे। इनकी माता जी श्रीमती भारती देवी, जो गाँव सरूरपुर की रहने वाली थीं, धार्मिक विचारों की सती-साध्वी स्त्री थीं, जिनमें प्रभु राम की भक्ति कूट-कूट कर भरी थी।",
  },
  {
    era: "बचपन",
    title: "जहान सिंह — दुखियों के सेवक",
    text: "माता-पिता के ये संस्कार श्री स्वामी जी में भी धीरे-धीरे पल्लवित होते गए। स्वामी जी के बचपन का नाम जहान सिंह था। इनका हृदय सदैव दुखियों पर तरस खाता था और गुरुदेव सदैव उनकी सेवा किया करते थे।",
  },
  {
    era: "गृहस्थ",
    year: "1934",
    title: "विवाह व पुत्र-जन्म",
    text: "इनका विवाह गाँव कुरमाली के श्री हरख्याल जी की सुपुत्री भागीरथी देवी के साथ सन् 1934 ई० में हुआ था। सौभाग्य से भागीरथी देवी भी गंगा की तरह निर्मल मन वाली, सीधी-सादी व भोली-भाली महिला थीं। विवाह के दो वर्ष बाद, सन् 1936 में, उन्होंने एक पुत्र को जन्म दिया जिसका नाम जगपाल सिंह है।",
  },
  {
    era: "सेवा",
    year: "1936",
    title: "पुलिस विभाग में नौकरी",
    text: "18 जनवरी 1936 को गुरुदेव को पुलिस विभाग में नौकरी मिली। सन् 1940 ई० के फरवरी माह में श्री स्वामी जी की धर्मपत्नी का स्वर्गवास हो गया। बालक जगपाल का लालन-पालन कठिनाई से हुआ — माता के बिना बच्चा उचित प्रकार से पोषित नहीं हो पाता।",
  },
  {
    era: "राष्ट्रसेवा",
    title: "नेताओं के साथ कर्तव्य",
    text: "पुलिस की नौकरी करते हुए श्री महाराज जी भारत के अनेक स्थानों पर रहे व भ्रमण किया। आप राष्ट्रपिता महात्मा गांधी जी, श्री जवाहरलाल नेहरू जी, श्री राजेन्द्र प्रसाद और श्री लाल बहादुर शास्त्री जी आदि नेताओं के पास ड्यूटी पर रहे।",
  },
  {
    era: "जागरण",
    year: "1949–50",
    title: "पथ-प्रदर्शकों से भेंट",
    text: "धीरे-धीरे माता द्वारा भरे हुए रामभक्ति के संस्कार प्रस्फुटित हुए और धार्मिक विचार जागृत हो गए। कानपुर में रहते हुए सन् 1949-50 में श्री गंभीरानन्द जी व श्री रामशंकर जी पाठक से आपकी मुलाकात हुई, जो बनारस के रहने वाले थे; वे ही गुरुदेव के पथ-प्रदर्शक बने।",
  },
  {
    era: "ख्याति",
    year: "1953–54",
    title: "रामायण-प्रवचन व 'बाबा' खिताब",
    text: "फिर सहारनपुर में रहते हुए इन्होंने मेला गुघाल से रामायण खरीदी और 1953-54 में पुलिस लाइन में रामायण पर बोलना प्रारम्भ कर दिया। धीरे-धीरे इनकी ख्याति बढ़ने लगी। अधिकारी गण भी इनके द्वारा पढ़ी गई रामायण को सुनते थे व इनके विचारों से बहुत प्रभावित रहने लगे। ड्यूटी पर भी अधिकारी गण इन्हें वर्दी पहनने के लिए बाध्य नहीं करते थे। 'बाबा' का खिताब भी इन्हें पुलिस विभाग से ही मिला।",
  },
  {
    era: "निष्काम कर्म",
    title: "कर्तव्य व राम-कृपा",
    text: "पुलिस विभाग में रहते हुए भी इन्होंने न कभी किसी को गाली दी, न ही कभी ली, तथा कभी भी अपने कर्तव्य की अवहेलना नहीं की। इसी कारण से कठिन समय में भी प्रभु राम ने सदैव इनकी रक्षा की व सम्मान रखा।",
  },
  {
    era: "भक्ति",
    title: "राम-नाम की रूप-माधुरी में लीन",
    text: "धीरे-धीरे ये प्रभु राम के अनन्य भक्त बन गए। ध्यान करते-करते ये प्रभु श्री राम की रूप-माधुरी में ऐसे लीन हो जाते थे कि इन्हें आस-पास की कुछ सुध-बुध नहीं रहती थी। इनका अधिकांश समय रामायण पढ़ने में, प्रभु श्री राम जी का ध्यान करने व प्रवचन करने में ही बीतने लगा।",
  },
  {
    era: "प्रवचन",
    year: "1960",
    title: "हर बाधा से ऊपर निःस्वार्थ सेवा",
    text: "इनके प्रवचनों में धूप, गर्मी, सर्दी, वर्षा, ओले — कभी भी बाधक नहीं बन सके; रात के एक बजे वर्षा में भी बाहर के गाँवों में प्रवचन करके आते थे। इनके प्रवचन निःस्वार्थ व अत्यंत उपदेशात्मक होते थे। श्री महाराज जी ने जीवन पर्यन्त किसी से कोई पाई-पैसा नहीं लिया और समाज की निःस्वार्थ सेवा की। नकुड़ में रहते हुए जनवरी 1960 में इन्होंने पुलिस की सेवा से निवृत्ति ले ली।",
  },
  {
    era: "संन्यास",
    year: "1981",
    title: "श्री रामानन्द सरस्वती नामकरण",
    text: "इन्होंने संसार को निःसार समझा और दिनांक 5 सितम्बर 1981 (ऋषि पंचमी) को हरिद्वार में श्री नारायण मुनि जी महाराज चतुर्वेदी जी से संन्यास की दीक्षा ग्रहण की। श्री नारायण मुनि जी भी स्वामी जी की राम भक्ति व विचारों से बहुत प्रभावित हुए, इसीलिए उन्होंने स्वामी जी का नाम 'श्री रामानन्द सरस्वती' रखा। श्री स्वामी जी के त्याग, तपस्या व संयम से सभी लोग अत्यंत प्रभावित होते थे।",
  },
  {
    era: "स्वरूप",
    title: "ज्ञानी व करुणामय गुरुदेव",
    text: "गुरुदेव बहुत ही ज्ञानी, प्रसन्नचित्त, विद्वान, मनोविनोदी व दीन-दुखियों की सहायता करने वाले थे। उनकी छत्रछाया उनके शिष्यों पर इस प्रकार थी, जैसे उनके सिर पर स्वयं परमपिता परमात्मा का हाथ हो। परंतु श्री महाराज जी के कथनानुसार — संसार में ऐसी कोई जीवन-ज्योति नहीं जो प्रकाशित होकर बुझ न गई हो।",
  },
  {
    era: "महासमाधि",
    year: "2003",
    title: "प्रभु श्री राम में लीन",
    text: "15 जनवरी 2003 की ऐसी शाम आई कि महाराज श्री के शिष्यों पर गहरा वज्रपात हुआ। पौष शुक्ल पक्ष द्वादशी, मकर राशि, बुधवार, रोहिणी नक्षत्र में सायं 5.55 बजे श्री महाराज जी प्रभु श्री राम के ध्यान में ऐसे खोये कि प्रभु श्री राम में ही लीन हो गए। 16 जनवरी, पौष शुक्ल त्रयोदशी, गुरुवार, मृगशिरा नक्षत्र को सायंकाल 4.30 बजे पन्तविहार स्थित श्री सरस्वती सत्संग भवन में गुरुदेव को भू-समाधि दी गई।",
  },
  {
    era: "अमर विरासत",
    title: "नाम व रूप-माधुरी अमिट",
    text: "आज भी श्री महाराज जी का नाम व रूप-माधुरी उनके भक्तों व शिष्यों के हृदय-पटल पर अंकित है, जो सदैव अमिट रहेगा। धन्य हैं ऐसे महान सन्त, जिनका अवतार केवल जग की भलाई के लिए हुआ। किसी ने ठीक ही कहा है — 'परोपकाराय सतां विभूतयः।'",
  },
  {
    era: "उत्तराधिकार",
    title: "सन्त देवी सुदीक्षा सरस्वती जी",
    text: "अब उनकी सद् शिष्या व उत्तराधिकारिणी श्री श्री 108 सन्त देवी सुदीक्षा सरस्वती जी — वेद-शास्त्रों में प्रवीण, सन्त समाज में प्रतिष्ठित, परमार्थ-व्यवहार में कुशल, शालीनता व नम्रता की मूर्ति, गुरुचरणानुरागी व सच्ची श्रद्धालु — सेवा, त्याग, कर्म, भक्ति व ज्ञान के सुन्दर समन्वित स्वरूप में, पूज्य सद्गुरुदेव जी के चरण-चिह्नों पर चलते हुए, इन सभी स्थानों पर अमृत-वर्षा करते हुए और उनके द्वारा लगाए गए वृक्षों को सींचते हुए जनता-जनार्दन का कल्याण कर रही हैं।",
  },
]

// 3D scroll-driven timeline card — tilts up as it rises into view and tilts
// down as it leaves, giving a sense of depth while scrolling down the journey.
function JourneyCard({ ch }: { ch: Chapter }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -14])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [70, 0, -45])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.2, 1, 1, 0.35])

  return (
    <div ref={ref} className="relative pl-12 sm:pl-16">
      {/* Node (stays flat on the rail) */}
      <div
        className="absolute top-3 left-[12px] sm:left-5 w-3.5 h-3.5 rounded-full z-10"
        style={{
          background: "#04000c",
          border: "2px solid #d4a843",
          boxShadow: "0 0 12px rgba(212,168,67,0.6)",
        }}
      />

      <motion.div
        style={{
          rotateX,
          y,
          scale,
          opacity,
          transformPerspective: 1200,
          transformOrigin: "center top",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(212,168,67,0.16)",
          backdropFilter: "blur(12px)",
        }}
        className="rounded-2xl p-5 sm:p-6 will-change-transform"
      >
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(212,168,67,0.1)",
              border: "1px solid rgba(212,168,67,0.25)",
              color: "#fde68a",
            }}
            lang="hi"
          >
            {ch.era}
          </span>
          {ch.year && (
            <span className="font-serif text-xl font-bold gold-text">{ch.year}</span>
          )}
        </div>
        <h3
          className="font-serif text-lg sm:text-xl font-semibold text-amber-50 mb-2"
          lang="hi"
        >
          {ch.title}
        </h3>
        <p className="text-amber-100/70 text-[0.95rem] sm:text-base leading-8" lang="hi">
          {ch.text}
        </p>
      </motion.div>
    </div>
  )
}

export default function LifeJourney() {
  return (
    <section id="life-journey" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(88,28,135,0.16), transparent), radial-gradient(ellipse 50% 45% at 50% 100%, rgba(212,168,67,0.05), transparent)",
        }}
      />
      {/* Sacred राम vertical watermark */}
      <RamBackground variant="vertical" opacity={0.3} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em]">
            संक्षिप्त जीवन परिचय
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold text-amber-50">
            <span className="gold-text">जीवन</span> यात्रा
          </h2>
          <p className="mt-4 ram-glyph text-base sm:text-lg" style={{ opacity: 0.85 }}>
            श्री श्री 108 स्वामी रामानन्द सरस्वती जी महाराज — नकुड़ वाले बाबा जी
          </p>
          <div className="flex justify-center mt-5">
            <Lotus className="w-24 h-14 opacity-50" />
          </div>
        </motion.div>

        {/* Guiding principle */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mb-16 max-w-2xl rounded-2xl px-6 py-7 text-center"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(212,168,67,0.2)",
            backdropFilter: "blur(14px)",
          }}
        >
          <p
            className="font-serif text-lg sm:text-2xl text-amber-300/90 italic leading-relaxed"
            lang="hi"
          >
            ॥ औरों के कल्याण में रहता जिनका ध्यान,
            <br className="hidden sm:block" /> उनका अपने आप ही हो जाता कल्याण ॥
          </p>
        </motion.blockquote>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rail */}
          <div
            className="absolute left-[18px] sm:left-6 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(212,168,67,0.5), rgba(212,168,67,0.5), transparent)",
            }}
          />

          <div className="space-y-7" style={{ perspective: "1200px" }}>
            {CHAPTERS.map((ch, i) => (
              <JourneyCard key={i} ch={ch} />
            ))}
          </div>
        </div>

        {/* Closing seal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="ram-glyph text-2xl sm:text-3xl mb-3" style={{ opacity: 0.9 }}>
            ॥ परोपकाराय सतां विभूतयः ॥
          </p>
          <p className="text-amber-200/45 text-sm" lang="hi">
            — संतों की विभूतियाँ परोपकार के लिए ही होती हैं
          </p>
        </motion.div>
      </div>
    </section>
  )
}

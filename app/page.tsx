import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Teachings from "@/components/sections/Teachings"
import LifeJourney from "@/components/sections/LifeJourney"
import Gallery from "@/components/sections/Gallery"
import VideoGallery from "@/components/sections/VideoGallery"
import Kirtan from "@/components/sections/Kirtan"
import Seva from "@/components/sections/Seva"
import AskGuruji from "@/components/sections/AskGuruji"
import FAQ from "@/components/sections/FAQ"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <LifeJourney />
        <Teachings />
        <Gallery />
        <VideoGallery />
        <Kirtan />
        <Seva />
        <AskGuruji />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

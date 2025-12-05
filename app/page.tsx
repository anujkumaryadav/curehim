import Navbar from "@/components/core/common/Navbar"
import Hero from "@/components/core/sections/Hero"
import Services from "@/components/core/sections/Services"
import Blog from "@/components/core/sections/Blog"
import Contact from "@/components/core/sections/Contact"
import Footer from "@/components/core/common/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

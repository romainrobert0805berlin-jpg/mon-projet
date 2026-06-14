import { Footer } from "@/components/Footer"
import { Gallery } from "@/components/Gallery"
import { Hero } from "@/components/Hero"
import { MapSection } from "@/components/MapSection"
import { Menu } from "@/components/Menu"
import { Navbar } from "@/components/Navbar"
import { Reservation } from "@/components/Reservation"

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Reservation />
        <MapSection />
      </main>
      <Footer />
    </div>
  )
}

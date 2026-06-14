import { MapPin, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[88vh] items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(173 58% 12% / .82), hsl(173 58% 12% / .55)), url('https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="container relative text-white">
        <div className="max-w-xl">
          <p className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-accent">
            <MapPin className="size-4" /> Paris 15ᵉ · Rue Cambronne
          </p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            La cuisine d'Asie, fraîche et généreuse
          </h1>
          <p className="mt-6 text-lg text-white/85">
            Spécialités chinoises et asiatiques préparées maison depuis 2002.
            Nems, phở, riz cantonais, porc au caramel — à savourer sur place ou à emporter.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#menu">
                <UtensilsCrossed /> Voir la carte
              </a>
            </Button>
            <Button asChild size="lg" variant="accent">
              <a href="#reserver">Réserver une table</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

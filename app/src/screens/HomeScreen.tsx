import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/ProductCard"
import { products } from "@/data/menu"
import { Clock, MapPin, Gift, Briefcase, ChevronRight } from "lucide-react"
import type { Tab } from "@/App"

export function HomeScreen({ go }: { go: (t: Tab) => void }) {
  const bestSellers = products.filter((p) => p.badges.includes("signature")).slice(0, 3)

  return (
    <div className="flex flex-col gap-6 pb-4">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#d9542b] via-[#b8390f] to-[#7a2408] p-6 text-white">
        <div className="absolute -right-6 -top-6 text-[120px] opacity-25 select-none" aria-hidden>
          🥖
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
          <span className="size-2 rounded-full bg-green-400 shadow-[0_0_0_4px_rgba(74,222,128,0.3)]" />
          Ouvert · ferme à 16h00
        </span>
        <h1 className="mt-4 text-3xl font-semibold leading-[1.1]">
          Le sandwich d'auteur, au cœur de La Défense.
        </h1>
        <p className="mt-2 max-w-[26ch] text-sm text-white/85">
          Frais, pain travaillé chaque matin, recettes signées d'un chef Ferrandi.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            onClick={() => go("menu")}
            className="bg-white text-[#7a2408] hover:bg-white/90"
          >
            🥪 Commander
          </Button>
          <Button
            variant="outline"
            onClick={() => go("menu")}
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            Voir le menu
          </Button>
        </div>
      </div>

      {/* Infos rapides */}
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardContent className="flex items-center gap-3 py-4">
            <Clock className="size-5 text-primary" />
            <div>
              <p className="text-sm font-semibold">Prêt en 5 min</p>
              <p className="text-xs text-muted-foreground">Sans file d'attente</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 py-4">
            <MapPin className="size-5 text-primary" />
            <div>
              <p className="text-sm font-semibold">CNIT</p>
              <p className="text-xs text-muted-foreground">La Défense</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Signatures */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Nos signatures</h2>
          <button
            onClick={() => go("menu")}
            className="flex items-center text-sm font-medium text-primary"
          >
            Tout voir <ChevronRight className="size-4" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Fidélité + B2B */}
      <button
        onClick={() => go("compte")}
        className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-[#a8360f] to-[#6e2208] p-5 text-left text-white"
      >
        <Gift className="size-7 shrink-0" />
        <div className="flex-1">
          <p className="font-semibold">Programme fidélité</p>
          <p className="text-sm text-white/85">Cumulez des points à chaque commande.</p>
        </div>
        <ChevronRight className="size-5" />
      </button>

      <button className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-5 text-left text-white">
        <Briefcase className="size-7 shrink-0" />
        <div className="flex-1">
          <p className="font-semibold">Entreprises & plateaux repas</p>
          <p className="text-sm text-white/85">Livrés à vos étages. Devis sous 24h.</p>
        </div>
        <ChevronRight className="size-5" />
      </button>
    </div>
  )
}

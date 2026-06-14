import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Star, Briefcase, Mail, FileText, ChevronRight } from "lucide-react"

const links = [
  { icon: Briefcase, label: "Carrières", sub: "Rejoindre l'équipe Claubert" },
  { icon: FileText, label: "Entreprises / Plateaux repas", sub: "Devis sous 24h" },
  { icon: Mail, label: "Contact", sub: "Une question ?" },
]

export function AccountScreen() {
  return (
    <div className="flex flex-col gap-5 pb-4">
      <h1 className="text-2xl font-semibold">Mon compte</h1>

      {/* Carte fidélité Heypongo (placeholder) */}
      <div className="rounded-2xl bg-gradient-to-br from-[#a8360f] to-[#6e2208] p-5 text-white">
        <div className="flex items-center gap-2">
          <Gift className="size-5" />
          <p className="font-semibold">Carte fidélité</p>
        </div>
        <div className="mt-3 flex items-end gap-2">
          <span className="text-4xl font-semibold">120</span>
          <span className="mb-1 text-sm text-white/80">points</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-white/20">
          <div className="h-2 w-3/5 rounded-full bg-white" />
        </div>
        <p className="mt-2 text-xs text-white/80">
          Plus que 80 points avant votre prochaine récompense 🎁
        </p>
        <p className="mt-3 text-[11px] text-white/60">
          🔌 Programme géré par Heypongo — à brancher.
        </p>
      </div>

      {/* Connexion (placeholder) */}
      <Card>
        <CardContent className="flex flex-col gap-3 py-4">
          <p className="text-sm font-semibold">Pas encore membre ?</p>
          <p className="text-sm text-muted-foreground">
            Inscrivez-vous en 30 secondes et cumulez des points dès aujourd'hui.
          </p>
          <div className="flex gap-2">
            <Button className="flex-1">
              <Star /> S'inscrire
            </Button>
            <Button variant="outline" className="flex-1">
              Se connecter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Liens */}
      <div className="flex flex-col gap-2">
        {links.map((l) => (
          <button
            key={l.label}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left"
          >
            <l.icon className="size-5 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-semibold">{l.label}</p>
              <p className="text-xs text-muted-foreground">{l.sub}</p>
            </div>
            <ChevronRight className="size-4 text-muted-foreground" />
          </button>
        ))}
      </div>

      <p className="text-center text-[11px] text-muted-foreground">
        Claubert · CNIT, La Défense — Maquette de travail
      </p>
    </div>
  )
}

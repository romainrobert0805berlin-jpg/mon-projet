import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/ProductCard"
import { products } from "@/data/menu"
import { useI18n } from "@/i18n/I18nProvider"
import { Clock, MapPin, Gift, Briefcase, ChefHat, ChevronRight, Bike } from "lucide-react"

// Liens de livraison — à remplacer par les URLs exactes de la fiche Claubert.
const UBER_EATS_URL = "https://www.ubereats.com/"
const DELIVEROO_URL = "https://deliveroo.fr/"

export function HomeScreen() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const bestSellers = products.filter((p) => p.badges.includes("signature")).slice(0, 3)

  return (
    <div className="flex flex-col gap-6 pb-4">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-[#9cd8e4] p-6 text-foreground">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-xs font-semibold">
          <span className="size-2 rounded-full bg-green-600" />
          {t("home.open")}
        </span>
        <h1 className="mt-4 text-3xl leading-[1.1]">{t("home.heroTitle")}</h1>
        <p className="mt-2 max-w-[30ch] text-sm text-foreground/70">{t("home.heroSub")}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={() => navigate("/menu")}>{t("common.order")}</Button>
          <Button
            variant="outline"
            onClick={() => navigate("/menu")}
            className="border-foreground/25 bg-white/50 hover:bg-white/70"
          >
            {t("common.seeMenu")}
          </Button>
        </div>
      </div>

      {/* Infos rapides */}
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardContent className="flex items-center gap-3 py-4">
            <Clock className="size-5 text-primary" />
            <div>
              <p className="text-sm font-semibold">{t("home.ready")}</p>
              <p className="text-xs text-muted-foreground">{t("home.noQueue")}</p>
            </div>
          </CardContent>
        </Card>
        <Link to="/adresses">
          <Card>
            <CardContent className="flex items-center gap-3 py-4">
              <MapPin className="size-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">CNIT</p>
                <p className="text-xs text-muted-foreground">La Défense</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Livraison */}
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center gap-3">
          <Bike className="size-6 shrink-0 text-primary" />
          <div className="flex-1">
            <p className="font-semibold">{t("home.deliveryTitle")}</p>
            <p className="text-sm text-muted-foreground">{t("home.deliverySub")}</p>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <Button asChild variant="outline" className="flex-1">
            <a href={UBER_EATS_URL} target="_blank" rel="noopener noreferrer">
              Uber Eats
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <a href={DELIVEROO_URL} target="_blank" rel="noopener noreferrer">
              Deliveroo
            </a>
          </Button>
        </div>
      </div>

      {/* Signatures */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{t("home.signatures")}</h2>
          <Link to="/menu" className="flex items-center text-sm font-medium text-primary">
            {t("common.seeAll")} <ChevronRight className="size-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Histoire */}
      <Link
        to="/histoire"
        className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
      >
        <ChefHat className="size-7 shrink-0 text-primary" />
        <div className="flex-1">
          <p className="font-semibold">{t("home.storyTitle")}</p>
          <p className="text-sm text-muted-foreground">{t("home.storySub")}</p>
        </div>
        <ChevronRight className="size-5 text-muted-foreground" />
      </Link>

      {/* Fidélité */}
      <Link
        to="/fidelite"
        className="flex items-center gap-4 rounded-2xl bg-foreground p-5 text-background"
      >
        <Gift className="size-7 shrink-0" />
        <div className="flex-1">
          <p className="font-semibold">{t("home.loyaltyTitle")}</p>
          <p className="text-sm text-background/80">{t("home.loyaltySub")}</p>
        </div>
        <ChevronRight className="size-5" />
      </Link>

      {/* B2B */}
      <Link
        to="/b2b"
        className="flex items-center gap-4 rounded-2xl border border-border bg-accent p-5 text-foreground"
      >
        <Briefcase className="size-7 shrink-0 text-primary" />
        <div className="flex-1">
          <p className="font-semibold">{t("home.b2bTitle")}</p>
          <p className="text-sm text-muted-foreground">{t("home.b2bSub")}</p>
        </div>
        <ChevronRight className="size-5 text-muted-foreground" />
      </Link>
    </div>
  )
}

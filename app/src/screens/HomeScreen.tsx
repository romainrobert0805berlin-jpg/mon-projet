import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/ProductCard"
import { products } from "@/data/menu"
import { useI18n } from "@/i18n/I18nProvider"
import { Clock, MapPin, Gift, Briefcase, ChefHat, ChevronRight } from "lucide-react"

export function HomeScreen() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const bestSellers = products.filter((p) => p.badges.includes("signature")).slice(0, 3)

  return (
    <div className="flex flex-col gap-6 pb-4">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#d9542b] via-[#b8390f] to-[#7a2408] p-6 text-white">
        <div className="absolute -right-6 -top-6 select-none text-[120px] opacity-25" aria-hidden>
          🥖
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
          <span className="size-2 rounded-full bg-green-400 shadow-[0_0_0_4px_rgba(74,222,128,0.3)]" />
          {t("home.open")}
        </span>
        <h1 className="mt-4 text-3xl font-semibold leading-[1.1]">{t("home.heroTitle")}</h1>
        <p className="mt-2 max-w-[28ch] text-sm text-white/85">{t("home.heroSub")}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={() => navigate("/menu")} className="bg-white text-[#7a2408] hover:bg-white/90">
            🥪 {t("common.order")}
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/menu")}
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
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
        className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-[#a8360f] to-[#6e2208] p-5 text-white"
      >
        <Gift className="size-7 shrink-0" />
        <div className="flex-1">
          <p className="font-semibold">{t("home.loyaltyTitle")}</p>
          <p className="text-sm text-white/85">{t("home.loyaltySub")}</p>
        </div>
        <ChevronRight className="size-5" />
      </Link>

      {/* B2B */}
      <Link
        to="/b2b"
        className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-5 text-white"
      >
        <Briefcase className="size-7 shrink-0" />
        <div className="flex-1">
          <p className="font-semibold">{t("home.b2bTitle")}</p>
          <p className="text-sm text-white/85">{t("home.b2bSub")}</p>
        </div>
        <ChevronRight className="size-5" />
      </Link>
    </div>
  )
}

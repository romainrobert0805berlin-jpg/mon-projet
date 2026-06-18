import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/i18n/I18nProvider"
import { Gift, Star, Briefcase, Mail, FileText, HelpCircle, ChevronRight, RotateCcw } from "lucide-react"
import { DEMO_POINTS, nextReward, rewardLabel } from "@/data/loyalty"
import { loadOrders, type Order } from "@/lib/order"
import { useCart } from "@/store/cart"

export function AccountScreen() {
  const { t, lang } = useI18n()
  const navigate = useNavigate()
  const { add } = useCart()
  const [orders] = React.useState<Order[]>(loadOrders)
  const points = DEMO_POINTS
  const next = nextReward(points)
  const progress = next ? Math.min(100, Math.round((points / next.points) * 100)) : 100

  const reorder = (order: Order) => {
    for (const it of order.items) {
      for (let i = 0; i < it.qty; i++) add(it.productId, it.variant)
    }
    navigate("/panier")
  }

  const links = [
    { to: "/fidelite", icon: Gift, label: t("home.loyaltyTitle"), sub: t("home.loyaltySub") },
    { to: "/carrieres", icon: Briefcase, label: t("page.careers"), sub: t("careers.sub") },
    { to: "/b2b", icon: FileText, label: t("page.b2b"), sub: t("b2b.sub") },
    { to: "/faq", icon: HelpCircle, label: t("page.faq"), sub: "" },
    { to: "/contact", icon: Mail, label: t("page.contact"), sub: t("contact.sub") },
  ]

  return (
    <div className="flex flex-col gap-5 pb-4">
      <h1 className="text-2xl font-semibold">{t("account.title")}</h1>

      {/* Carte fidélité Heypongo (placeholder) */}
      <div className="rounded-2xl bg-foreground p-5 text-background">
        <div className="flex items-center gap-2">
          <Gift className="size-5" />
          <p className="font-semibold">{t("account.loyaltyCard")}</p>
        </div>
        <div className="mt-3 flex items-end gap-2">
          <span className="text-4xl font-semibold">{points}</span>
          <span className="mb-1 text-sm text-white/80">{t("account.points")}</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-white/20">
          <div className="h-2 rounded-full bg-white" style={{ width: `${progress}%` }} />
        </div>
        {next && (
          <p className="mt-2 text-xs text-white/80">
            {t("loyalty.toReward").replace("{n}", String(next.points - points))}{" "}
            {rewardLabel(next, lang)} {next.emoji}
          </p>
        )}
        <p className="mt-3 text-[11px] text-white/60">🔌 {t("account.heypongoNote")}</p>
      </div>

      {/* Connexion (placeholder) */}
      <Card>
        <CardContent className="flex flex-col gap-3 py-4">
          <p className="text-sm font-semibold">{t("account.notMember")}</p>
          <p className="text-sm text-muted-foreground">{t("account.notMemberSub")}</p>
          <div className="flex gap-2">
            <Button asChild className="flex-1">
              <Link to="/fidelite">
                <Star /> {t("account.signup")}
              </Link>
            </Button>
            <Button variant="outline" className="flex-1">
              {t("account.login")}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Dernieres commandes */}
      {orders.length > 0 && (
        <section className="flex flex-col gap-2">
          <p className="text-sm font-semibold">{t("account.orders")}</p>
          {orders.map((o) => (
            <Card key={o.number}>
              <CardContent className="flex items-center gap-3 py-3">
                <div className="flex -space-x-1.5">
                  {o.items.slice(0, 3).map((it, i) => (
                    <span
                      key={i}
                      className="grid size-9 place-items-center rounded-full border-2 border-card bg-secondary text-base"
                    >
                      {it.emoji}
                    </span>
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold leading-tight">{o.number}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(o.createdAt).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
                      day: "2-digit",
                      month: "short",
                    })}{" "}
                    · {o.items.reduce((s, it) => s + it.qty, 0)} {t("account.items")} ·{" "}
                    {o.total.toFixed(2)} €
                  </p>
                </div>
                <Button size="sm" variant="outline" onClick={() => reorder(o)}>
                  <RotateCcw /> {t("account.reorder")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      )}

      {/* Liens */}
      <div className="flex flex-col gap-2">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left"
          >
            <l.icon className="size-5 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-semibold">{l.label}</p>
              {l.sub && <p className="text-xs text-muted-foreground">{l.sub}</p>}
            </div>
            <ChevronRight className="size-4 text-muted-foreground" />
          </Link>
        ))}
      </div>

      <p className="text-center text-[11px] text-muted-foreground">
        Claubert · CNIT, La Défense
      </p>
    </div>
  )
}

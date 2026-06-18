import { useLocation, useNavigate, Navigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useI18n } from "@/i18n/I18nProvider"
import { CheckCircle2, Clock, MapPin, Gift } from "lucide-react"
import { getProduct, describeLine } from "@/data/menu"
import { ProductImage } from "@/components/ProductImage"
import type { Order } from "@/lib/order"

const confettiColors = ["#c8431f", "#e0a23a", "#3f7d4e", "#2742ff", "#d96a3e", "#f3c969"]

const confettiPieces = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 0.5,
  duration: 1.6 + Math.random() * 1.4,
  color: confettiColors[i % confettiColors.length],
  size: 6 + Math.random() * 6,
  round: Math.random() > 0.5,
}))

function Confetti() {
  const pieces = confettiPieces
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            top: -12,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.round ? "50%" : 2,
            animation: `clb-confetti ${p.duration}s linear ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  )
}

export function ConfirmationScreen() {
  const navigate = useNavigate()
  const { t, lang } = useI18n()
  const location = useLocation()
  const order = (location.state as { order?: Order } | null)?.order

  if (!order) return <Navigate to="/" replace />

  return (
    <div className="flex flex-col gap-5 pb-4">
      <div className="relative -mx-4 -mt-4 overflow-hidden bg-gradient-to-br from-[#2f7d4e] to-[#1f5a37] px-6 py-10 text-center text-white">
        <Confetti />
        <div className="relative">
          <span className="clb-check mx-auto grid size-20 place-items-center rounded-full bg-white/20">
            <CheckCircle2 className="size-12" />
          </span>
          <h1 className="mt-4 text-2xl font-semibold">{t("confirm.title")}</h1>
          <p className="mx-auto mt-1 max-w-[30ch] text-sm text-white/85">{t("confirm.sub")}</p>
        </div>
      </div>

      <Card>
        <CardContent className="flex items-center justify-between py-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {t("confirm.number")}
            </p>
            <p className="text-xl font-bold tracking-wide">{order.number}</p>
          </div>
          <div className="text-right">
            <p className="flex items-center justify-end gap-1.5 text-sm font-semibold">
              <Clock className="size-4 text-primary" /> {t("confirm.pickup")} {t("confirm.at")}{" "}
              {order.slot}
            </p>
            <p className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
              <MapPin className="size-3.5" /> CNIT · La Défense
            </p>
          </div>
        </CardContent>
      </Card>

      <section className="flex flex-col gap-2">
        <p className="text-sm font-semibold">{t("confirm.recap")}</p>
        <Card>
          <CardContent className="flex flex-col gap-3 py-4">
            {order.items.map((it, i) => {
              const pr = getProduct(it.productId)
              return (
              <div key={i} className="flex items-center gap-3">
                <span className="size-9 shrink-0 overflow-hidden rounded-lg bg-secondary">
                  {pr && <ProductImage product={pr} className="size-full" />}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium leading-tight">
                    {it.qty}× {it.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{describeLine(it, lang)}</p>
                </div>
                <p className="text-sm font-semibold">{(it.unit * it.qty).toFixed(2)} €</p>
              </div>
              )
            })}
            {order.notes && (
              <>
                <Separator />
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{t("confirm.note")} : </span>
                  {order.notes}
                </p>
              </>
            )}
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{t("confirm.total")}</span>
              <span className="text-lg font-semibold">{order.total.toFixed(2)} €</span>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="flex items-center justify-center gap-2 rounded-xl bg-primary/8 px-4 py-3 text-sm font-semibold text-primary">
        <Gift className="size-5" />
        <span>
          +{order.points} {t("confirm.points")}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <Button size="lg" onClick={() => navigate("/menu")}>
          {t("confirm.again")}
        </Button>
        <Button size="lg" variant="outline" onClick={() => navigate("/")}>
          {t("confirm.home")}
        </Button>
      </div>

      <p className="text-center text-[11px] text-muted-foreground">
        {t("confirm.payNote")}
      </p>
    </div>
  )
}

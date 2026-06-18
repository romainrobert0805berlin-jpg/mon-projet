import * as React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ProductImage } from "@/components/ProductImage"
import { useCart } from "@/store/cart"
import { useI18n } from "@/i18n/I18nProvider"
import { describeLine } from "@/data/menu"
import { Minus, Plus, ShoppingBag, Clock, Gift } from "lucide-react"
import { newOrderNumber, saveOrder, type Order } from "@/lib/order"

const slots = ["11:30", "11:40", "11:50", "12:00", "12:10", "12:20", "12:30"]

export function CartScreen() {
  const navigate = useNavigate()
  const { t, lang } = useI18n()
  const { detailed, setQty, total, count, points, clear } = useCart()
  const [slot, setSlot] = React.useState(slots[0])
  const [notes, setNotes] = React.useState("")

  const checkout = () => {
    const order: Order = {
      number: newOrderNumber(),
      slot,
      items: detailed.map((d) => ({
        productId: d.product.id,
        name: d.product.name,
        emoji: d.product.emoji,
        bread: d.bread,
        supplements: d.supplements,
        formula: d.formula,
        qty: d.qty,
        unit: d.unit,
      })),
      total,
      points,
      notes: notes.trim() || undefined,
      createdAt: Date.now(),
    }
    saveOrder(order)
    clear()
    navigate("/confirmation", { state: { order } })
  }

  if (count === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <ShoppingBag className="size-12 text-muted-foreground" />
        <div>
          <h1 className="text-xl font-semibold">{t("cart.empty")}</h1>
          <p className="text-sm text-muted-foreground">{t("cart.emptySub")}</p>
        </div>
        <Button onClick={() => navigate("/menu")}>{t("common.seeMenu")}</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 pb-4">
      <h1 className="text-2xl font-semibold">{t("cart.title")}</h1>

      <div className="flex flex-col gap-3">
        {detailed.map((d) => (
          <Card key={d.key}>
            <CardContent className="flex items-center gap-3 py-3">
              <div className="size-12 shrink-0 overflow-hidden rounded-lg">
                <ProductImage product={d.product} className="size-full" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-tight">{d.product.name}</p>
                <p className="text-xs leading-snug text-muted-foreground">
                  {describeLine(d, lang)}
                </p>
                <p className="text-xs font-medium">{d.unit.toFixed(2)} €</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="size-8"
                  onClick={() => setQty(d.key, d.qty - 1)}
                >
                  <Minus />
                </Button>
                <span className="w-5 text-center text-sm font-semibold">{d.qty}</span>
                <Button
                  size="icon"
                  variant="outline"
                  className="size-8"
                  onClick={() => setQty(d.key, d.qty + 1)}
                >
                  <Plus />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-2 text-sm font-semibold">
          <Clock className="size-4 text-primary" /> {t("cart.slot")}
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {slots.map((s) => (
            <button
              key={s}
              onClick={() => setSlot(s)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium ${
                slot === s ? "border-primary bg-primary text-primary-foreground" : "border-border"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Note cuisine */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cart-notes" className="text-sm font-semibold">
          {t("cart.notes")}
        </label>
        <Textarea
          id="cart-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={t("cart.notesPlaceholder")}
          rows={2}
        />
      </div>

      <Card>
        <CardContent className="flex items-center justify-between py-4">
          <div>
            <p className="text-sm text-muted-foreground">
              {t("cart.total")} {slot}
            </p>
            <p className="text-2xl font-semibold">{total.toFixed(2)} €</p>
          </div>
          <button onClick={clear} className="text-xs text-muted-foreground underline">
            {t("cart.clear")}
          </button>
        </CardContent>
      </Card>

      <p className="flex items-center justify-center gap-1.5 text-sm font-medium text-primary">
        <Gift className="size-4" /> {t("cart.earn").replace("{n}", String(points))}
      </p>

      <div className="rounded-xl border border-dashed border-border bg-muted/40 p-3 text-center text-xs text-muted-foreground">
        {t("cart.payNote")}
      </div>

      <Button size="lg" className="w-full" onClick={checkout}>
        {t("cart.pay")} {total.toFixed(2)} €
      </Button>
    </div>
  )
}

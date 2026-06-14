import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/store/cart"
import { Minus, Plus, ShoppingBag, Clock } from "lucide-react"
import type { Tab } from "@/App"

// Créneaux de retrait toutes les 10 min (placeholder — sera synchronisé Innovorder).
const slots = ["11:30", "11:40", "11:50", "12:00", "12:10", "12:20", "12:30"]

export function CartScreen({ go }: { go: (t: Tab) => void }) {
  const { detailed, add, remove, total, count, clear } = useCart()
  const [slot, setSlot] = React.useState(slots[0])

  if (count === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <ShoppingBag className="size-12 text-muted-foreground" />
        <div>
          <h1 className="text-xl font-semibold">Votre panier est vide</h1>
          <p className="text-sm text-muted-foreground">Ajoutez un sandwich depuis le menu.</p>
        </div>
        <Button onClick={() => go("menu")}>Voir le menu</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 pb-4">
      <h1 className="text-2xl font-semibold">Votre panier</h1>

      <div className="flex flex-col gap-3">
        {detailed.map((d) => (
          <Card key={d.product.id + d.variant}>
            <CardContent className="flex items-center gap-3 py-3">
              <div className="grid size-12 place-items-center rounded-lg bg-secondary text-2xl">
                {d.product.emoji}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">{d.product.name}</p>
                <p className="text-xs text-muted-foreground">
                  {d.variant === "signature" ? "Signature" : "Classique"} ·{" "}
                  {d.unit.toFixed(2)} €
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="size-8"
                  onClick={() => remove(d.product.id, d.variant)}
                >
                  <Minus />
                </Button>
                <span className="w-5 text-center text-sm font-semibold">{d.qty}</span>
                <Button
                  size="icon"
                  variant="outline"
                  className="size-8"
                  onClick={() => add(d.product.id, d.variant)}
                >
                  <Plus />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Créneau de retrait */}
      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-2 text-sm font-semibold">
          <Clock className="size-4 text-primary" /> Créneau de retrait
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {slots.map((s) => (
            <button
              key={s}
              onClick={() => setSlot(s)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium ${
                slot === s
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Récap */}
      <Card>
        <CardContent className="flex items-center justify-between py-4">
          <div>
            <p className="text-sm text-muted-foreground">Total · retrait {slot}</p>
            <p className="text-2xl font-semibold">{total.toFixed(2)} €</p>
          </div>
          <button onClick={clear} className="text-xs text-muted-foreground underline">
            Vider
          </button>
        </CardContent>
      </Card>

      {/* Placeholder paiement Innovorder */}
      <div className="rounded-xl border border-dashed border-border bg-muted/40 p-3 text-center text-xs text-muted-foreground">
        🔌 Paiement (CB, Apple Pay, titres-resto) via <strong>Innovorder</strong> — à brancher.
      </div>

      <Button size="lg" className="w-full">
        Payer {total.toFixed(2)} €
      </Button>
    </div>
  )
}

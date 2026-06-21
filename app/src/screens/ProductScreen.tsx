import * as React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ProductImage } from "@/components/ProductImage"
import { useCart, unitPrice, type Bread } from "@/store/cart"
import { useI18n } from "@/i18n/I18nProvider"
import {
  getProduct,
  allergenLabels,
  proteinLabels,
  supplements,
  MENU_FORMULA_PRICE,
  loc,
} from "@/data/menu"
import { cn } from "@/lib/utils"
import { Minus, Plus, Check, Info } from "lucide-react"

function InfoTip({ label, text }: { label: string; text: string }) {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLSpanElement>(null)
  React.useEffect(() => {
    if (!open) return
    const handler = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("pointerdown", handler)
    return () => document.removeEventListener("pointerdown", handler)
  }, [open])
  return (
    <span ref={ref} className="relative mt-2 inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground underline-offset-2 hover:underline"
      >
        <Info className="size-3.5" /> {label}
      </button>
      {open && (
        <span
          role="tooltip"
          className="clb-fadeup absolute bottom-full left-0 z-20 mb-2 w-60 rounded-lg bg-foreground p-3 text-xs leading-snug text-background shadow-lg"
        >
          {text}
          <span className="absolute -bottom-1 left-4 size-2 rotate-45 bg-foreground" />
        </span>
      )}
    </span>
  )
}

export function ProductScreen() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { add } = useCart()
  const { t, lang } = useI18n()

  const [bread, setBread] = React.useState<Bread>("baguette")
  const [sup, setSup] = React.useState<Record<string, number>>({})
  const [formula, setFormula] = React.useState(false)
  const [qty, setQty] = React.useState(1)

  const product = id ? getProduct(id) : undefined
  if (!product) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <p className="text-muted-foreground">
          {lang === "fr" ? "Produit introuvable." : "Product not found."}
        </p>
        <Button onClick={() => navigate("/menu")}>{t("common.seeMenu")}</Button>
      </div>
    )
  }

  const options = { bread, supplements: sup, formula }
  const unit = unitPrice(product, options)
  const total = unit * qty

  const bumpSup = (key: string, d: number) =>
    setSup((prev) => {
      const n = Math.max(0, (prev[key] || 0) + d)
      const next = { ...prev }
      if (n === 0) delete next[key]
      else next[key] = n
      return next
    })

  return (
    <div className="flex flex-col gap-5 pb-4">
      <div className="relative -mx-4 -mt-4 aspect-[4/3] overflow-hidden">
        <ProductImage product={product} className="size-full" />
        {!product.inStock && (
          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white">
            {t("common.soldOut")}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {product.badges.includes("signature") && (
          <Badge variant="signature">{t("common.signature")}</Badge>
        )}
        {product.badges.includes("new") && (
          <Badge variant="new">{lang === "fr" ? "Nouveau" : "New"}</Badge>
        )}
        {product.badges.includes("veg") && <Badge variant="veg">{t("menu.filter.veg")}</Badge>}
      </div>

      <div>
        <h1 className="text-2xl">{product.name}</h1>
        <p className="mt-1 text-muted-foreground">{loc(product.description, lang)}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {t("product.protein")}
          </p>
          <p className="font-medium">{loc(proteinLabels[product.protein], lang)}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {t("common.allergens")}
          </p>
          <p className="font-medium">
            {product.allergens.map((a) => loc(allergenLabels[a], lang)).join(", ")}
          </p>
        </div>
      </div>

      <Separator />

      {/* Pain */}
      <div>
        <p className="mb-2 text-sm font-semibold">{t("product.chooseVariant")}</p>
        <div className="grid grid-cols-2 gap-2">
          {(["baguette", "ciabatta"] as Bread[]).map((b) => {
            const p = b === "ciabatta" ? product.priceSignature : product.priceClassic
            return (
              <button
                key={b}
                onClick={() => setBread(b)}
                className={cn(
                  "rounded-xl border p-3 text-left transition-colors",
                  bread === b ? "border-primary bg-accent" : "border-border"
                )}
              >
                <p className="text-sm font-semibold">
                  {b === "ciabatta" ? `${t("common.ciabatta")} *` : t("common.baguette")}
                </p>
                <p className="text-sm text-muted-foreground">{p.toFixed(2)} €</p>
              </button>
            )
          })}
        </div>
        <InfoTip
          label={lang === "fr" ? "Ciabatta, c'est quoi ?" : "What is ciabatta?"}
          text={t("common.ciabattaNote").replace(/^\*\s*/, "")}
        />
      </div>

      {/* Suppléments */}
      <div>
        <p className="mb-2 text-sm font-semibold">{t("product.supplements")}</p>
        <div className="flex flex-col gap-2">
          {supplements.map((s) => {
            const n = sup[s.key] || 0
            return (
              <div
                key={s.key}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-2.5 pl-3.5 transition-colors",
                  n > 0 ? "border-primary bg-accent" : "border-border"
                )}
              >
                <div className="flex-1">
                  <p className="text-sm font-medium">{loc(s.label, lang)}</p>
                  <p className="text-xs text-muted-foreground">+ {s.price.toFixed(2)} €</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="size-8"
                    disabled={n === 0}
                    onClick={() => bumpSup(s.key, -1)}
                    aria-label="−"
                  >
                    <Minus />
                  </Button>
                  <span className="w-4 text-center text-sm font-semibold">{n}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    className="size-8"
                    onClick={() => bumpSup(s.key, 1)}
                    aria-label="+"
                  >
                    <Plus />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Formule menu */}
      <button
        onClick={() => setFormula((f) => !f)}
        className={cn(
          "flex items-center gap-3 rounded-xl border p-3.5 text-left transition-colors",
          formula ? "border-primary bg-accent" : "border-border"
        )}
      >
        <span
          className={cn(
            "grid size-6 shrink-0 place-items-center rounded-md border",
            formula ? "border-primary bg-primary text-primary-foreground" : "border-border"
          )}
        >
          {formula && <Check className="size-4" />}
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold">{t("product.formula")}</p>
          <p className="text-xs text-muted-foreground">{t("product.formulaDesc")}</p>
        </div>
        <span className="text-sm font-semibold">+ {MENU_FORMULA_PRICE.toFixed(2)} €</span>
      </button>

      {/* Quantité */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{lang === "fr" ? "Quantité" : "Quantity"}</p>
        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="outline"
            className="size-9"
            disabled={qty <= 1}
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            <Minus />
          </Button>
          <span className="w-6 text-center text-base font-semibold">{qty}</span>
          <Button size="icon" variant="outline" className="size-9" onClick={() => setQty((q) => q + 1)}>
            <Plus />
          </Button>
        </div>
      </div>

      <Button
        size="lg"
        className="w-full"
        disabled={!product.inStock}
        onClick={() => {
          add(product.id, options, qty)
          navigate("/panier")
        }}
      >
        {t("product.addToCart")} · {total.toFixed(2)} €
      </Button>
    </div>
  )
}

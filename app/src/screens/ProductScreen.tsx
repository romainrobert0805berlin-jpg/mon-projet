import * as React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useCart, type Variant } from "@/store/cart"
import { useI18n } from "@/i18n/I18nProvider"
import {
  getProduct,
  allergenLabels,
  proteinLabels,
  loc,
} from "@/data/menu"
import { cn } from "@/lib/utils"

const gradients: Record<string, string> = {
  viande: "from-orange-400 to-red-600",
  vege: "from-lime-400 to-green-600",
}

export function ProductScreen() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { add } = useCart()
  const { t, lang } = useI18n()
  const [variant, setVariant] = React.useState<Variant>("signature")

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

  const price = variant === "signature" ? product.priceSignature : product.priceClassic

  return (
    <div className="flex flex-col gap-5 pb-4">
      <div
        className={`relative -mx-4 -mt-4 flex aspect-[4/3] items-center justify-center bg-gradient-to-br text-[120px] ${gradients[product.diet]}`}
      >
        <span aria-hidden>{product.emoji}</span>
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
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <p className="mt-1 text-muted-foreground">{loc(product.description, lang)}</p>
      </div>

      <Separator />

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {t("product.protein")}
          </p>
          <p className="font-medium">{loc(proteinLabels[product.protein], lang)}</p>
        </div>
        {product.kcal && (
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Kcal</p>
            <p className="font-medium">{product.kcal} kcal</p>
          </div>
        )}
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

      {/* Choix variante */}
      <div>
        <p className="mb-2 text-sm font-semibold">{t("product.chooseVariant")}</p>
        <div className="grid grid-cols-2 gap-2">
          {(["classic", "signature"] as Variant[]).map((v) => {
            const p = v === "signature" ? product.priceSignature : product.priceClassic
            return (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={cn(
                  "rounded-xl border p-3 text-left transition-colors",
                  variant === v ? "border-primary bg-primary/5" : "border-border"
                )}
              >
                <p className="text-sm font-semibold">
                  {v === "signature" ? t("common.signature") : t("common.classic")}
                </p>
                <p className="text-sm text-muted-foreground">{p.toFixed(2)} €</p>
              </button>
            )
          })}
        </div>
      </div>

      <Button
        size="lg"
        className="w-full"
        disabled={!product.inStock}
        onClick={() => {
          add(product.id, variant)
          navigate("/panier")
        }}
      >
        {t("product.addToCart")} · {price.toFixed(2)} €
      </Button>
    </div>
  )
}

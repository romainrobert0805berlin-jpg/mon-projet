import { useNavigate } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductImage } from "@/components/ProductImage"
import { Plus } from "lucide-react"
import { useCart } from "@/store/cart"
import { useI18n } from "@/i18n/I18nProvider"
import { allergenLabels, loc, type Product } from "@/data/menu"

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const { t, lang } = useI18n()
  const navigate = useNavigate()

  return (
    <Card className="pt-0">
      <button
        onClick={() => navigate(`/menu/${product.id}`)}
        className="group relative block aspect-[16/10] w-full overflow-hidden"
        aria-label={product.name}
      >
        <ProductImage
          product={product}
          className="size-full transition-transform duration-500 group-hover:scale-105"
        />
        {!product.inStock && (
          <span className="absolute inset-0 grid place-items-center bg-black/55 text-sm font-semibold text-white">
            {t("common.soldOut")}
          </span>
        )}
      </button>
      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-1.5">
          {product.badges.includes("signature") && (
            <Badge variant="signature">{t("common.signature")}</Badge>
          )}
          {product.badges.includes("new") && (
            <Badge variant="new">{lang === "fr" ? "Nouveau" : "New"}</Badge>
          )}
          {product.badges.includes("veg") && (
            <Badge variant="veg">{t("menu.filter.veg")}</Badge>
          )}
        </div>
        <button
          onClick={() => navigate(`/menu/${product.id}`)}
          className="text-left text-lg font-semibold leading-tight"
        >
          {product.name}
        </button>
        <p className="text-sm text-muted-foreground">{loc(product.description, lang)}</p>
        <p className="text-[11px] text-muted-foreground">
          {t("common.allergens")} :{" "}
          {product.allergens.map((a) => loc(allergenLabels[a], lang)).join(", ")}
          {product.kcal ? ` · ${product.kcal} kcal` : ""}
        </p>
        <div className="mt-2 text-sm">
          <span className="text-muted-foreground">{t("common.classic")} </span>
          <span className="font-semibold">{product.priceClassic.toFixed(2)} €</span>
          <span className="text-muted-foreground"> · {t("common.signature")} </span>
          <span className="font-semibold text-primary">
            {product.priceSignature.toFixed(2)} €
          </span>
        </div>
        <div className="mt-1 flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            disabled={!product.inStock}
            onClick={() => add(product.id, "classic")}
          >
            <Plus /> {t("common.classic")}
          </Button>
          <Button
            size="sm"
            className="flex-1"
            disabled={!product.inStock}
            onClick={() => add(product.id, "signature")}
          >
            <Plus /> {t("common.signature")}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

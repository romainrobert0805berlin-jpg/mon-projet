import { useNavigate } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductImage } from "@/components/ProductImage"
import { Plus } from "lucide-react"
import { useCart } from "@/store/cart"
import { useI18n } from "@/i18n/I18nProvider"
import { loc, type Product } from "@/data/menu"

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const { t, lang } = useI18n()
  const navigate = useNavigate()
  const open = () => navigate(`/menu/${product.id}`)

  return (
    <Card className="gap-0 p-0">
      <div className="flex gap-3 p-3">
        <button
          onClick={open}
          className="relative size-24 shrink-0 overflow-hidden rounded-xl"
          aria-label={product.name}
        >
          <ProductImage product={product} className="size-full" />
          {!product.inStock && (
            <span className="absolute inset-0 grid place-items-center bg-black/55 p-1 text-center text-[10px] font-semibold leading-tight text-white">
              {t("common.soldOut")}
            </span>
          )}
        </button>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex flex-wrap gap-1">
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
          <button onClick={open} className="text-left text-base font-semibold leading-tight">
            {product.name}
          </button>
          <p className="line-clamp-2 text-xs text-muted-foreground">
            {loc(product.description, lang)}
          </p>
        </div>
      </div>

      <div className="flex gap-2 border-t border-border p-2">
        <Button
          size="sm"
          variant="outline"
          className="h-9 flex-1 px-2 text-xs"
          disabled={!product.inStock}
          onClick={() => add(product.id, "classic")}
        >
          <Plus /> {t("common.baguette")} · {product.priceClassic.toFixed(2)} €
        </Button>
        <Button
          size="sm"
          className="h-9 flex-1 px-2 text-xs"
          disabled={!product.inStock}
          onClick={() => add(product.id, "signature")}
        >
          <Plus /> {t("common.ciabatta")}
        </Button>
      </div>
    </Card>
  )
}

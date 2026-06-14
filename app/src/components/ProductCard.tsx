import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useCart } from "@/store/cart"
import type { Product } from "@/data/menu"

const gradients: Record<string, string> = {
  viande: "from-orange-400 to-red-600",
  vege: "from-lime-400 to-green-600",
}

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()

  return (
    <Card className="pt-0">
      <div
        className={`relative aspect-[16/10] bg-gradient-to-br ${gradients[product.diet]} flex items-center justify-center text-6xl`}
      >
        <span aria-hidden>{product.emoji}</span>
        {!product.inStock && (
          <span className="absolute inset-0 bg-black/55 text-white grid place-items-center text-sm font-semibold">
            Épuisé aujourd'hui
          </span>
        )}
      </div>
      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-1.5">
          {product.badges.includes("signature") && (
            <Badge variant="signature">Signature</Badge>
          )}
          {product.badges.includes("new") && <Badge variant="new">Nouveau</Badge>}
          {product.badges.includes("veg") && <Badge variant="veg">Végé</Badge>}
        </div>
        <h3 className="text-lg font-semibold leading-tight">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <p className="text-[11px] text-muted-foreground">
          Allergènes : {product.allergens.join(", ")}
          {product.kcal ? ` · ${product.kcal} kcal` : ""}
        </p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="text-sm">
            <span className="text-muted-foreground">Classique </span>
            <span className="font-semibold">{product.priceClassic.toFixed(2)} €</span>
            <span className="text-muted-foreground"> · Signature </span>
            <span className="font-semibold text-primary">
              {product.priceSignature.toFixed(2)} €
            </span>
          </div>
        </div>
        <div className="mt-1 flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            disabled={!product.inStock}
            onClick={() => add(product.id, "classic")}
          >
            <Plus /> Classique
          </Button>
          <Button
            size="sm"
            className="flex-1"
            disabled={!product.inStock}
            onClick={() => add(product.id, "signature")}
          >
            <Plus /> Signature
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

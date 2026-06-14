import * as React from "react"
import { ProductCard } from "@/components/ProductCard"
import { products } from "@/data/menu"
import { cn } from "@/lib/utils"

type Filter = "tout" | "vege" | "viande"

const filters: { id: Filter; label: string }[] = [
  { id: "tout", label: "Tout" },
  { id: "viande", label: "Viande / poisson" },
  { id: "vege", label: "Végé" },
]

export function MenuScreen() {
  const [filter, setFilter] = React.useState<Filter>("tout")
  const list = products.filter((p) => filter === "tout" || p.diet === filter)

  return (
    <div className="flex flex-col gap-4 pb-4">
      <div>
        <h1 className="text-2xl font-semibold">Le menu</h1>
        <p className="text-sm text-muted-foreground">
          Chaque recette en Classique ou Signature. Allergènes affichés.
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              filter === f.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

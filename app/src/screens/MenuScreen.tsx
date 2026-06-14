import * as React from "react"
import { ProductCard } from "@/components/ProductCard"
import { products } from "@/data/menu"
import { useI18n } from "@/i18n/I18nProvider"
import { cn } from "@/lib/utils"

type Filter = "tout" | "vege" | "viande"

export function MenuScreen() {
  const { t } = useI18n()
  const [filter, setFilter] = React.useState<Filter>("tout")
  const list = products.filter((p) => filter === "tout" || p.diet === filter)

  const filters: { id: Filter; label: string }[] = [
    { id: "tout", label: t("menu.filter.all") },
    { id: "viande", label: t("menu.filter.meat") },
    { id: "vege", label: t("menu.filter.veg") },
  ]

  return (
    <div className="flex flex-col gap-4 pb-4">
      <div>
        <h1 className="text-2xl font-semibold">{t("menu.title")}</h1>
        <p className="text-sm text-muted-foreground">{t("menu.sub")}</p>
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

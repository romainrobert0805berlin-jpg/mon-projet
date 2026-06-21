import * as React from "react"
import { Search } from "lucide-react"
import { ProductCard } from "@/components/ProductCard"
import { Input } from "@/components/ui/input"
import {
  products,
  proteinLabels,
  allergenLabels,
  loc,
  type ProteinKey,
  type AllergenKey,
} from "@/data/menu"
import { useI18n } from "@/i18n/I18nProvider"
import { cn } from "@/lib/utils"

type Diet = "tout" | "vege" | "viande"

const proteins = [...new Set(products.map((p) => p.protein))] as ProteinKey[]
const allergens = [...new Set(products.flatMap((p) => p.allergens))] as AllergenKey[]

export function MenuScreen() {
  const { t, lang } = useI18n()
  const [query, setQuery] = React.useState("")
  const [diet, setDiet] = React.useState<Diet>("tout")
  const [protein, setProtein] = React.useState<ProteinKey | "all">("all")
  const [exclude, setExclude] = React.useState<Set<AllergenKey>>(new Set())

  const toggleExclude = (a: AllergenKey) =>
    setExclude((prev) => {
      const next = new Set(prev)
      if (next.has(a)) next.delete(a)
      else next.add(a)
      return next
    })

  const q = query.trim().toLowerCase()
  const list = products.filter((p) => {
    const hay = `${p.name} ${loc(p.description, lang)}`.toLowerCase()
    const okSearch = !q || hay.includes(q)
    const okDiet = diet === "tout" || p.diet === diet
    const okProtein = protein === "all" || p.protein === protein
    const okAllergen = ![...exclude].some((a) => p.allergens.includes(a))
    return okSearch && okDiet && okProtein && okAllergen
  })

  const chip = (active: boolean) =>
    cn(
      "shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
      active
        ? "border-primary bg-primary text-primary-foreground"
        : "border-border bg-background text-foreground"
    )

  return (
    <div className="flex flex-col gap-4 pb-4">
      <div>
        <h1 className="text-2xl font-semibold">{t("menu.title")}</h1>
        <p className="text-sm text-muted-foreground">{t("menu.sub")}</p>
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="pl-9"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={lang === "fr" ? "Rechercher un sandwich, un ingrédient…" : "Search a sandwich, an ingredient…"}
        />
      </div>

      <div className="rounded-xl border border-border bg-accent/60 p-3 text-sm">
        <p className="font-semibold">{t("menu.composeTitle")}</p>
        <p className="text-muted-foreground">{t("menu.composeBody")}</p>
      </div>

      {/* Régime */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {([
          { id: "tout", label: t("menu.filter.all") },
          { id: "viande", label: t("menu.filter.meat") },
          { id: "vege", label: t("menu.filter.veg") },
        ] as { id: Diet; label: string }[]).map((f) => (
          <button key={f.id} onClick={() => setDiet(f.id)} className={chip(diet === f.id)}>
            {f.label}
          </button>
        ))}
      </div>

      {/* Protéine */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        <button onClick={() => setProtein("all")} className={chip(protein === "all")}>
          {lang === "fr" ? "Toutes protéines" : "All proteins"}
        </button>
        {proteins.map((p) => (
          <button key={p} onClick={() => setProtein(p)} className={chip(protein === p)}>
            {loc(proteinLabels[p], lang)}
          </button>
        ))}
      </div>

      {/* Sans allergène */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {lang === "fr" ? "Sans" : "Without"}
        </span>
        {allergens.map((a) => (
          <button key={a} onClick={() => toggleExclude(a)} className={chip(exclude.has(a))}>
            {loc(allergenLabels[a], lang)}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        {list.length} {lang === "fr" ? "sandwich(s)" : "sandwich(es)"}
      </p>

      <div className="flex flex-col gap-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {list.length === 0 && (
          <p className="py-10 text-center text-muted-foreground">
            {lang === "fr" ? "Aucun sandwich ne correspond." : "No sandwich matches."}
          </p>
        )}
      </div>
    </div>
  )
}

/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import { products, supplements, MENU_FORMULA_PRICE, type Product } from "@/data/menu"
import { toast } from "@/lib/toast"

export type Bread = "baguette" | "ciabatta"

export interface LineOptions {
  bread: Bread
  supplements: Record<string, number> // clé supplément -> quantité
  formula: boolean
}

export interface CartLine extends LineOptions {
  key: string
  productId: string
  qty: number
}

export interface DetailedLine {
  key: string
  product: Product
  bread: Bread
  supplements: Record<string, number>
  formula: boolean
  qty: number
  unit: number
}

interface CartCtx {
  lines: CartLine[]
  add: (productId: string, options: LineOptions, qty?: number) => void
  setQty: (key: string, qty: number) => void
  remove: (key: string) => void
  count: number
  total: number
  points: number
  detailed: DetailedLine[]
  clear: () => void
}

const Ctx = React.createContext<CartCtx | null>(null)
const STORAGE_KEY = "claubert.cart.v2"

function breadPrice(p: Product, bread: Bread) {
  return bread === "ciabatta" ? p.priceSignature : p.priceClassic
}

function supplementsTotal(sup: Record<string, number> | undefined) {
  if (!sup) return 0
  return supplements.reduce((s, def) => s + (sup[def.key] || 0) * def.price, 0)
}

export function unitPrice(p: Product, o: LineOptions) {
  return (
    breadPrice(p, o.bread) + supplementsTotal(o.supplements) + (o.formula ? MENU_FORMULA_PRICE : 0)
  )
}

export function optionsKey(productId: string, o: LineOptions) {
  const sup = Object.entries(o.supplements || {})
    .filter(([, n]) => n > 0)
    .sort()
    .map(([k, n]) => `${k}:${n}`)
    .join(",")
  return `${productId}|${o.bread || "baguette"}|${sup}|${o.formula ? "menu" : ""}`
}

export const defaultOptions = (): LineOptions => ({
  bread: "baguette",
  supplements: {},
  formula: false,
})

function loadLines(): CartLine[] {
  if (typeof localStorage === "undefined") return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (l) =>
        l &&
        typeof l.productId === "string" &&
        products.some((p) => p.id === l.productId) &&
        (l.bread === "baguette" || l.bread === "ciabatta") &&
        l.supplements && typeof l.supplements === "object" &&
        typeof l.formula === "boolean" &&
        typeof l.qty === "number" &&
        typeof l.key === "string"
    )
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = React.useState<CartLine[]>(loadLines)

  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      /* stockage indisponible : on ignore */
    }
  }, [lines])

  const add = (productId: string, options: LineOptions, qty = 1) => {
    setLines((prev) => {
      const key = optionsKey(productId, options)
      const i = prev.findIndex((l) => l.key === key)
      if (i >= 0) {
        const copy = [...prev]
        copy[i] = { ...copy[i], qty: copy[i].qty + qty }
        return copy
      }
      return [
        ...prev,
        {
          key,
          productId,
          bread: options.bread || "baguette",
          supplements: options.supplements || {},
          formula: !!options.formula,
          qty,
        },
      ]
    })
    const product = products.find((p) => p.id === productId)
    if (product) toast(`${product.name} ajouté`)
  }

  const setQty = (key: string, qty: number) =>
    setLines((prev) =>
      prev.map((l) => (l.key === key ? { ...l, qty: Math.max(0, qty) } : l)).filter((l) => l.qty > 0)
    )

  const remove = (key: string) => setLines((prev) => prev.filter((l) => l.key !== key))

  const clear = () => setLines([])

  const detailed = lines
    .map((l) => {
      const product = products.find((p) => p.id === l.productId)
      if (!product) return null
      const options = { bread: l.bread, supplements: l.supplements, formula: l.formula }
      return {
        key: l.key,
        product,
        bread: l.bread,
        supplements: l.supplements,
        formula: l.formula,
        qty: l.qty,
        unit: unitPrice(product, options),
      }
    })
    .filter(Boolean) as DetailedLine[]

  const count = lines.reduce((s, l) => s + l.qty, 0)
  const total = detailed.reduce((s, d) => s + d.unit * d.qty, 0)
  const points = Math.floor(total)

  return (
    <Ctx.Provider value={{ lines, add, setQty, remove, count, total, points, detailed, clear }}>
      {children}
    </Ctx.Provider>
  )
}

export function useCart() {
  const ctx = React.useContext(Ctx)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}

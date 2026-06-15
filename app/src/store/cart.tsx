/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import { products, type Product } from "@/data/menu"
import { toast } from "@/lib/toast"

export type Variant = "classic" | "signature"

export interface CartLine {
  productId: string
  variant: Variant
  qty: number
}

interface CartCtx {
  lines: CartLine[]
  add: (productId: string, variant: Variant) => void
  remove: (productId: string, variant: Variant) => void
  setQty: (productId: string, variant: Variant, qty: number) => void
  count: number
  total: number
  points: number
  detailed: { product: Product; variant: Variant; qty: number; unit: number }[]
  clear: () => void
}

const Ctx = React.createContext<CartCtx | null>(null)
const STORAGE_KEY = "claubert.cart.v1"

function priceOf(p: Product, v: Variant) {
  return v === "signature" ? p.priceSignature : p.priceClassic
}

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
        (l.variant === "classic" || l.variant === "signature") &&
        typeof l.qty === "number" &&
        products.some((p) => p.id === l.productId)
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

  const add = (productId: string, variant: Variant) => {
    setLines((prev) => {
      const i = prev.findIndex(
        (l) => l.productId === productId && l.variant === variant
      )
      if (i >= 0) {
        const copy = [...prev]
        copy[i] = { ...copy[i], qty: copy[i].qty + 1 }
        return copy
      }
      return [...prev, { productId, variant, qty: 1 }]
    })
    const product = products.find((p) => p.id === productId)
    if (product) toast(`${product.name} ajouté`, product.emoji)
  }

  const setQty = (productId: string, variant: Variant, qty: number) =>
    setLines((prev) =>
      prev
        .map((l) =>
          l.productId === productId && l.variant === variant
            ? { ...l, qty: Math.max(0, qty) }
            : l
        )
        .filter((l) => l.qty > 0)
    )

  const remove = (productId: string, variant: Variant) =>
    setLines((prev) =>
      prev
        .map((l) =>
          l.productId === productId && l.variant === variant
            ? { ...l, qty: l.qty - 1 }
            : l
        )
        .filter((l) => l.qty > 0)
    )

  const clear = () => setLines([])

  const detailed = lines
    .map((l) => {
      const product = products.find((p) => p.id === l.productId)!
      return product
        ? { product, variant: l.variant, qty: l.qty, unit: priceOf(product, l.variant) }
        : null
    })
    .filter(Boolean) as CartCtx["detailed"]

  const count = lines.reduce((s, l) => s + l.qty, 0)
  const total = detailed.reduce((s, d) => s + d.unit * d.qty, 0)
  const points = Math.floor(total)

  return (
    <Ctx.Provider
      value={{ lines, add, remove, setQty, count, total, points, detailed, clear }}
    >
      {children}
    </Ctx.Provider>
  )
}

export function useCart() {
  const ctx = React.useContext(Ctx)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}

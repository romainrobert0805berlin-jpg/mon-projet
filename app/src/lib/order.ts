// Modele de commande (cote demo). Passe via l'etat de navigation vers la confirmation.
import type { Bread } from "@/store/cart"

export interface OrderItem {
  productId: string
  name: string
  emoji: string
  bread: Bread
  supplements: Record<string, number>
  formula: boolean
  qty: number
  unit: number
}

export interface Order {
  number: string
  slot: string
  items: OrderItem[]
  total: number
  points: number
  notes?: string
  createdAt: number
}

export function newOrderNumber() {
  return `CLB-${Math.floor(1000 + Math.random() * 9000)}`
}

const HISTORY_KEY = "claubert.orders.v1"

export function loadOrders(): Order[] {
  if (typeof localStorage === "undefined") return []
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as Order[]) : []
  } catch {
    return []
  }
}

export function saveOrder(order: Order) {
  if (typeof localStorage === "undefined") return
  try {
    const next = [order, ...loadOrders()].slice(0, 5)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next))
  } catch {
    /* stockage indisponible : on ignore */
  }
}

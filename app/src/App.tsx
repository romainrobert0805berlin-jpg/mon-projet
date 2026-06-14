import * as React from "react"
import { Home, UtensilsCrossed, ShoppingBag, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { CartProvider, useCart } from "@/store/cart"
import { HomeScreen } from "@/screens/HomeScreen"
import { MenuScreen } from "@/screens/MenuScreen"
import { CartScreen } from "@/screens/CartScreen"
import { AccountScreen } from "@/screens/AccountScreen"

export type Tab = "accueil" | "menu" | "panier" | "compte"

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "accueil", label: "Accueil", icon: Home },
  { id: "menu", label: "Menu", icon: UtensilsCrossed },
  { id: "panier", label: "Panier", icon: ShoppingBag },
  { id: "compte", label: "Compte", icon: User },
]

function Shell() {
  const [tab, setTab] = React.useState<Tab>("accueil")
  const { count } = useCart()

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/85 px-4 py-3 backdrop-blur">
        <div className="text-xl font-bold tracking-tight" style={{ fontFamily: "Fraunces, serif" }}>
          Clau<span className="text-primary">bert</span>
        </div>
        <span className="rounded-full border border-border px-2 py-1 text-xs font-semibold text-muted-foreground">
          FR / EN
        </span>
      </header>

      {/* Contenu */}
      <main className="flex-1 px-4 pt-4 pb-24">
        {tab === "accueil" && <HomeScreen go={setTab} />}
        {tab === "menu" && <MenuScreen />}
        {tab === "panier" && <CartScreen go={setTab} />}
        {tab === "compte" && <AccountScreen />}
      </main>

      {/* Barre d'onglets */}
      <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto flex max-w-md items-stretch border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        {tabs.map((t) => {
          const active = tab === t.id
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "relative flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs font-medium transition-colors",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              <span className="relative">
                <t.icon className={cn("size-5", active && "fill-primary/10")} />
                {t.id === "panier" && count > 0 && (
                  <span className="absolute -right-2 -top-1.5 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {count}
                  </span>
                )}
              </span>
              {t.label}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <Shell />
    </CartProvider>
  )
}

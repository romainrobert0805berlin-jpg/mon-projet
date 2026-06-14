import { useState } from "react"
import { menu } from "@/data/menu"
import { cn } from "@/lib/utils"

const tagStyles: Record<string, string> = {
  signature: "bg-accent/15 text-accent",
  "épicé": "bg-red-100 text-red-700",
  "végé": "bg-primary/10 text-primary",
}

export function Menu() {
  const [active, setActive] = useState(menu[0].id)
  const current = menu.find((c) => c.id === active) ?? menu[0]

  return (
    <section id="menu" className="py-24">
      <div className="container">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">À la carte</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Nos spécialités</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Une sélection de plats faits maison. Carte complète disponible sur place et à emporter.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition",
                active === cat.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-transparent hover:border-primary/40"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-x-12 gap-y-2 sm:grid-cols-2">
          {current.dishes.map((dish) => (
            <div
              key={dish.name}
              className="flex items-start justify-between gap-4 border-b border-dashed border-border py-4"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-lg">{dish.name}</h4>
                  {dish.tag && (
                    <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-medium", tagStyles[dish.tag])}>
                      {dish.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{dish.description}</p>
              </div>
              <span className="whitespace-nowrap font-semibold text-primary">{dish.price}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Prix indicatifs susceptibles d'évoluer — merci de confirmer au restaurant.
        </p>
      </div>
    </section>
  )
}

import { useEffect } from "react"
import { Outlet, useLocation, useNavigate, Link } from "react-router-dom"
import { Home, UtensilsCrossed, ShoppingBag, User, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/store/cart"
import { useI18n } from "@/i18n/I18nProvider"
import { Toaster } from "@/components/Toaster"

const tabs = [
  { to: "/", key: "nav.accueil", icon: Home },
  { to: "/menu", key: "nav.menu", icon: UtensilsCrossed },
  { to: "/panier", key: "nav.panier", icon: ShoppingBag },
  { to: "/compte", key: "nav.compte", icon: User },
]

const mainPaths = ["/", "/menu", "/panier", "/compte"]

export function Layout() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { count } = useCart()
  const { t, lang, toggle } = useI18n()

  const isMain = mainPaths.includes(pathname)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col bg-background shadow-xl">
      {/* Bandeau maquette */}
      <div className="bg-foreground py-1 text-center text-[10px] font-semibold tracking-wide text-amber-300">
        {t("common.draft")}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/85 px-4 py-3 backdrop-blur">
        {isMain ? (
          <Link to="/" className="text-xl font-bold tracking-tight" style={{ fontFamily: "Fraunces, serif" }}>
            Clau<span className="text-primary">bert</span>
          </Link>
        ) : (
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-sm font-medium"
          >
            <ChevronLeft className="size-5" /> {t("common.back")}
          </button>
        )}
        <button
          onClick={toggle}
          className="rounded-full border border-border px-2.5 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Changer de langue"
        >
          {lang === "fr" ? "FR · EN" : "EN · FR"}
        </button>
      </header>

      {/* Contenu */}
      <main className="flex-1 px-4 pt-4 pb-24">
        <div key={pathname} className="clb-fadeup">
          <Outlet />
        </div>
      </main>
      <Toaster />

      {/* Barre d'onglets */}
      <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto flex max-w-md items-stretch border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        {tabs.map((tab) => {
          const active =
            tab.to === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.to)
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className={cn(
                "relative flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs font-medium transition-colors",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              <span className="relative">
                <tab.icon className={cn("size-5", active && "fill-primary/10")} />
                {tab.to === "/panier" && count > 0 && (
                  <span
                    key={count}
                    className="clb-pop absolute -right-2 -top-1.5 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground"
                  >
                    {count}
                  </span>
                )}
              </span>
              {t(tab.key)}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

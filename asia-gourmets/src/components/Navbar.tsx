import { useState } from "react"
import { Menu as MenuIcon, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#menu", label: "La carte" },
  { href: "#galerie", label: "Galerie" },
  { href: "#reserver", label: "Réserver" },
  { href: "#infos", label: "Infos & accès" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 text-primary-foreground backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-serif text-xl">
          <span className="text-accent">◆</span> Asia Gourmets
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-90 transition hover:opacity-100 hover:text-accent">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="accent" size="sm">
            <a href="tel:+33142730207">
              <Phone /> 01 42 73 02 07
            </a>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 pb-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 opacity-90">
              {l.label}
            </a>
          ))}
          <a href="tel:+33142730207" className="py-2 font-medium text-accent">
            ☎ 01 42 73 02 07
          </a>
        </nav>
      )}
    </header>
  )
}

import { Clock, MapPin, Phone, Train } from "lucide-react"

const hours = [
  { d: "Lundi – Vendredi", h: "11h30 – 15h00 · 18h30 – 22h30" },
  { d: "Samedi", h: "18h30 – 22h30" },
  { d: "Dimanche", h: "Fermé" },
]

export function MapSection() {
  return (
    <section id="infos" className="bg-primary text-primary-foreground">
      <div className="container grid gap-0 lg:grid-cols-2">
        <div className="py-20 pr-0 lg:pr-12">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">Nous trouver</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Infos &amp; accès</h2>

          <div className="mt-8 space-y-6 text-primary-foreground/90">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <p className="font-medium text-white">Adresse</p>
                <p>91 rue Cambronne, 75015 Paris</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <p className="font-medium text-white">Téléphone</p>
                <a href="tel:+33142730207" className="hover:text-accent">01 42 73 02 07</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Train className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <p className="font-medium text-white">Métro</p>
                <p>Cambronne (L6) · Sèvres-Lecourbe (L6) · Vaugirard (L12)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-accent" />
              <div className="w-full">
                <p className="font-medium text-white">Horaires <span className="text-xs font-normal text-primary-foreground/60">(à confirmer)</span></p>
                <ul className="mt-1 space-y-1">
                  {hours.map((row) => (
                    <li key={row.d} className="flex justify-between gap-6 border-b border-white/10 py-1 text-sm">
                      <span>{row.d}</span>
                      <span className="text-right">{row.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[360px] overflow-hidden lg:min-h-full">
          <iframe
            title="Carte — Asia Gourmets, 91 rue Cambronne, Paris"
            src="https://www.google.com/maps?q=91+rue+Cambronne+75015+Paris&output=embed"
            className="h-full min-h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormState = {
  name: string
  phone: string
  date: string
  time: string
  guests: string
  notes: string
}

const empty: FormState = { name: "", phone: "", date: "", time: "", guests: "2", notes: "" }

export function Reservation() {
  const [form, setForm] = useState<FormState>(empty)
  const [sent, setSent] = useState(false)

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Démo front-end : pas de backend. On simule l'envoi.
    setSent(true)
  }

  return (
    <section id="reserver" className="py-24">
      <div className="container grid items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-accent">Votre table</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Réserver en ligne</h2>
          <p className="mt-4 text-muted-foreground">
            Réservez en quelques secondes. Pour les groupes ou une demande urgente,
            appelez-nous directement au{" "}
            <a href="tel:+33142730207" className="font-medium text-primary underline-offset-2 hover:underline">
              01 42 73 02 07
            </a>
            .
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>• Sur place &amp; à emporter</li>
            <li>• Accès PMR (de plain-pied)</li>
            <li>• Idéal déjeuner rapide ou dîner en famille</li>
          </ul>
        </div>

        <Card className="shadow-md">
          <CardContent className="p-6">
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="size-12 text-primary" />
                <h3 className="mt-4 text-xl">Demande envoyée&nbsp;!</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Merci {form.name || ""}. Votre demande pour {form.guests} pers. le {form.date} à{" "}
                  {form.time} a bien été prise en compte (démo). Nous vous confirmons par téléphone.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => { setForm(empty); setSent(false) }}>
                  Nouvelle réservation
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" required value={form.name} onChange={update("name")} placeholder="Votre nom" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" type="tel" required value={form.phone} onChange={update("phone")} placeholder="06 12 34 56 78" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" required value={form.date} onChange={update("date")} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="time">Heure</Label>
                    <Input id="time" type="time" required value={form.time} onChange={update("time")} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="guests">Nombre de personnes</Label>
                  <select
                    id="guests"
                    value={form.guests}
                    onChange={update("guests")}
                    className="flex h-11 w-full rounded-md border border-input bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n > 1 ? "personnes" : "personne"}</option>
                    ))}
                    <option value="9+">9 et plus (nous appeler)</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Remarque (optionnel)</Label>
                  <Textarea id="notes" value={form.notes} onChange={update("notes")} placeholder="Allergies, occasion spéciale…" />
                </div>
                <Button type="submit" size="lg" className="mt-2">
                  Demander la réservation
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Démo : ce formulaire n'envoie pas encore d'e-mail (pas de backend connecté).
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

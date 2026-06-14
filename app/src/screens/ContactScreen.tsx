import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useI18n } from "@/i18n/I18nProvider"
import { CheckCircle2, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const intents = ["client", "b2b", "press", "recruit"] as const

export function ContactScreen() {
  const { t } = useI18n()
  const [sent, setSent] = React.useState(false)
  const [intent, setIntent] = React.useState<string>(intents[0])

  return (
    <div className="flex flex-col gap-5 pb-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
          {t("page.contact")}
        </p>
        <h1 className="mt-1 text-2xl font-semibold">{t("page.contact")}</h1>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <a href="mailto:contact@claubert.fr" className="flex items-center gap-2">
          <Mail className="size-4 text-primary" /> contact@claubert.fr
        </a>
        <a href="tel:+33100000000" className="flex items-center gap-2">
          <Phone className="size-4 text-primary" /> +33 1 00 00 00 00
        </a>
      </div>

      {sent ? (
        <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300">
          <CheckCircle2 className="size-5" />
          <p className="text-sm font-medium">{t("form.sent")}</p>
        </div>
      ) : (
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <div className="flex flex-col gap-1.5">
            <Label>{t("form.intent")}</Label>
            <div className="grid grid-cols-2 gap-2">
              {intents.map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIntent(i)}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                    intent === i ? "border-primary bg-primary/5" : "border-border"
                  )}
                >
                  {t(`form.intent.${i}`)}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ct-name">{t("form.name")}</Label>
            <Input id="ct-name" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ct-email">{t("form.email")}</Label>
            <Input id="ct-email" type="email" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ct-msg">{t("form.message")}</Label>
            <Textarea id="ct-msg" required />
          </div>
          <Button type="submit" size="lg">
            {t("common.send")}
          </Button>
        </form>
      )}
    </div>
  )
}

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useI18n } from "@/i18n/I18nProvider"
import { Gift, CheckCircle2 } from "lucide-react"

export function LoyaltyScreen() {
  const { t } = useI18n()
  const [done, setDone] = React.useState(false)

  const steps = ["loyalty.step1", "loyalty.step2", "loyalty.step3"]

  return (
    <div className="flex flex-col gap-5 pb-4">
      <div className="rounded-2xl bg-gradient-to-br from-[#a8360f] to-[#6e2208] p-5 text-white">
        <Gift className="size-7" />
        <h1 className="mt-3 text-2xl font-semibold">{t("loyalty.title")}</h1>
      </div>

      <section className="flex flex-col gap-3">
        <p className="text-sm font-semibold">{t("loyalty.how")}</p>
        {steps.map((s, i) => (
          <div key={s} className="flex items-start gap-3">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <p className="text-sm text-muted-foreground">{t(s)}</p>
          </div>
        ))}
      </section>

      {done ? (
        <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300">
          <CheckCircle2 className="size-5" />
          <p className="text-sm font-medium">{t("form.sent")}</p>
        </div>
      ) : (
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault()
            setDone(true)
          }}
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="l-email">{t("form.email")}</Label>
            <Input id="l-email" type="email" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="l-phone">{t("form.phone")}</Label>
            <Input id="l-phone" type="tel" />
          </div>
          <Button type="submit" size="lg">
            {t("account.signup")}
          </Button>
          <p className="text-center text-[11px] text-muted-foreground">
            🔌 {t("account.heypongoNote")}
          </p>
        </form>
      )}
    </div>
  )
}

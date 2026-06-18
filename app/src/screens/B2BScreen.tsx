import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useI18n } from "@/i18n/I18nProvider"
import { CheckCircle2, Download, Briefcase } from "lucide-react"

export function B2BScreen() {
  const { t } = useI18n()
  const [sent, setSent] = React.useState(false)

  return (
    <div className="flex flex-col gap-5 pb-4">
      <div className="rounded-2xl bg-foreground p-5 text-background">
        <Briefcase className="size-7" />
        <h1 className="mt-3 text-2xl">{t("b2b.title")}</h1>
        <p className="mt-2 text-sm text-background/80">{t("b2b.value")}</p>
      </div>

      <Button variant="outline" className="w-full">
        <Download /> {t("b2b.catalog")}
      </Button>

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
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="b-people">{t("b2b.people")}</Label>
              <Input id="b-people" type="number" min={1} required />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="b-budget">{t("b2b.budget")}</Label>
              <Input id="b-budget" placeholder="€" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="b-date">{t("b2b.date")}</Label>
            <Input id="b-date" type="date" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="b-name">{t("form.name")}</Label>
            <Input id="b-name" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="b-email">{t("form.email")}</Label>
            <Input id="b-email" type="email" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="b-phone">{t("form.phone")}</Label>
            <Input id="b-phone" type="tel" />
          </div>
          <Button type="submit" size="lg">
            {t("b2b.cta")}
          </Button>
        </form>
      )}
    </div>
  )
}

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useI18n } from "@/i18n/I18nProvider"
import { CheckCircle2 } from "lucide-react"

const jobs = ["equipier", "manager", "chef"] as const

export function CareersScreen() {
  const { t } = useI18n()
  const [sent, setSent] = React.useState(false)
  const [role, setRole] = React.useState<string>(jobs[0])

  return (
    <div className="flex flex-col gap-5 pb-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
          {t("page.careers")}
        </p>
        <h1 className="mt-1 text-2xl font-semibold">{t("careers.title")}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t("careers.pitch")}</p>
      </div>

      <section className="flex flex-col gap-2">
        <p className="text-sm font-semibold">{t("careers.openings")}</p>
        {jobs.map((j) => (
          <Card key={j}>
            <CardContent className="flex items-center justify-between gap-3 py-3">
              <div>
                <p className="text-sm font-semibold">{t(`job.${j}`)}</p>
                <p className="text-xs text-muted-foreground">{t(`job.${j}.desc`)}</p>
              </div>
              <Button
                size="sm"
                variant={role === j ? "default" : "outline"}
                onClick={() => {
                  setRole(j)
                  document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("careers.apply")}
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {sent ? (
        <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300">
          <CheckCircle2 className="size-5" />
          <p className="text-sm font-medium">{t("form.sent")}</p>
        </div>
      ) : (
        <form
          id="apply-form"
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <p className="text-sm font-semibold">
            {t("careers.apply")} — {t(`job.${role}`)}
          </p>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="c-name">{t("form.name")}</Label>
            <Input id="c-name" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="c-email">{t("form.email")}</Label>
            <Input id="c-email" type="email" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="c-phone">{t("form.phone")}</Label>
            <Input id="c-phone" type="tel" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="c-cv">{t("form.cv")}</Label>
            <Input id="c-cv" type="file" accept="application/pdf" className="pt-2" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="c-msg">{t("form.message")}</Label>
            <Textarea id="c-msg" />
          </div>
          <Button type="submit" size="lg">
            {t("common.send")}
          </Button>
        </form>
      )}
    </div>
  )
}

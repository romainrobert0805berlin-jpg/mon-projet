import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useI18n } from "@/i18n/I18nProvider"
import { Gift, CheckCircle2, Users } from "lucide-react"
import { rewards, rewardLabel, DEMO_POINTS, nextReward } from "@/data/loyalty"
import { cn } from "@/lib/utils"

export function LoyaltyScreen() {
  const { t, lang } = useI18n()
  const [done, setDone] = React.useState(false)

  const points = DEMO_POINTS
  const next = nextReward(points)
  const steps = ["loyalty.step1", "loyalty.step2", "loyalty.step3"]

  return (
    <div className="flex flex-col gap-5 pb-4">
      <div className="rounded-2xl bg-gradient-to-br from-[#a8360f] to-[#6e2208] p-5 text-white">
        <Gift className="size-7" />
        <h1 className="mt-3 text-2xl font-semibold">{t("loyalty.title")}</h1>
        <p className="mt-1 text-sm text-white/85">{t("loyalty.rate")}</p>
      </div>

      {/* Comment ça marche */}
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

      {/* Récompenses / paliers */}
      <section className="flex flex-col gap-3">
        <p className="text-sm font-semibold">{t("loyalty.rewards")}</p>
        {next && (
          <p className="text-xs text-muted-foreground">
            {t("loyalty.toReward").replace("{n}", String(next.points - points))}{" "}
            <span className="font-medium text-foreground">{rewardLabel(next, lang)}</span>
          </p>
        )}
        <div className="flex flex-col gap-2">
          {rewards.map((r) => {
            const unlocked = points >= r.points
            return (
              <div
                key={r.points}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-3",
                  unlocked ? "border-primary/40 bg-primary/5" : "border-border"
                )}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-xl">
                  {r.emoji}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{rewardLabel(r, lang)}</p>
                  <p className="text-xs text-muted-foreground">
                    {r.points} {t("loyalty.pointsShort")}
                  </p>
                </div>
                {unlocked ? (
                  <span className="flex items-center gap-1 text-xs font-semibold text-primary">
                    <CheckCircle2 className="size-4" /> {t("loyalty.unlocked")}
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-muted-foreground">
                    +{r.points - points}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Parrainage */}
      <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
        <Users className="size-5 shrink-0 text-primary" />
        <p className="text-sm text-muted-foreground">{t("loyalty.referral")}</p>
      </div>

      {/* Inscription */}
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

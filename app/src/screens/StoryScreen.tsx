import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/i18n/I18nProvider"
import { Sprout, ChefHat } from "lucide-react"

export function StoryScreen() {
  const { t } = useI18n()
  return (
    <div className="flex flex-col gap-5 pb-4">
      <div className="flex aspect-[5/4] items-center justify-center rounded-2xl bg-[#9cd8e4]">
        <ChefHat className="size-20 text-foreground/70" strokeWidth={1.2} />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
          {t("page.story")}
        </p>
        <h1 className="mt-1 text-2xl font-semibold">{t("home.storySub")}</h1>
      </div>
      <p className="text-muted-foreground">{t("story.body")}</p>

      <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
        <Sprout className="size-6 shrink-0 text-primary" />
        <div>
          <p className="font-semibold">{t("story.sourcingTitle")}</p>
          <p className="text-sm text-muted-foreground">{t("story.sourcingBody")}</p>
        </div>
      </div>

      <Button asChild size="lg" className="w-full">
        <Link to="/menu">{t("common.seeMenu")}</Link>
      </Button>
    </div>
  )
}

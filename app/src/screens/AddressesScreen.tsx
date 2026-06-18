import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/i18n/I18nProvider"
import { MapPin, Train, Clock } from "lucide-react"

export function AddressesScreen() {
  const { t } = useI18n()
  return (
    <div className="flex flex-col gap-5 pb-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
          {t("page.addresses")}
        </p>
        <h1 className="mt-1 text-2xl font-semibold">{t("addr.title")}</h1>
      </div>

      {/* Carte (placeholder) */}
      <div className="flex aspect-[16/9] items-center justify-center rounded-2xl border border-border bg-[repeating-linear-gradient(45deg,#ece3d4,#ece3d4_18px,#e4d8c4_18px,#e4d8c4_36px)] text-sm font-semibold text-foreground/60 dark:bg-[repeating-linear-gradient(45deg,#2a2622,#2a2622_18px,#332e29_18px,#332e29_36px)]">
        {t("addr.mapPlaceholder")}
      </div>

      <Card>
        <CardContent className="flex flex-col gap-4 py-4">
          <div className="flex items-start gap-3">
            <MapPin className="size-5 shrink-0 text-primary" />
            <p className="text-sm">{t("addr.address")}</p>
          </div>
          <div className="flex items-start gap-3">
            <Train className="size-5 shrink-0 text-primary" />
            <div className="text-sm">
              <p className="font-medium">{t("addr.access")}</p>
              <p className="text-muted-foreground">RER A · Métro 1 · Transilien</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="size-5 shrink-0 text-primary" />
            <div className="text-sm">
              <p className="font-medium">{t("addr.hours")}</p>
              <p className="text-muted-foreground">
                {t("addr.everyday")} : {t("addr.hoursValue")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

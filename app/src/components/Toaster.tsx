import * as React from "react"
import { createPortal } from "react-dom"
import { subscribeToasts, type Toast } from "@/lib/toast"

export function Toaster() {
  const [items, setItems] = React.useState<Toast[]>([])
  React.useEffect(() => subscribeToasts(setItems), [])

  if (typeof document === "undefined") return null

  return createPortal(
    <div className="pointer-events-none fixed inset-x-0 bottom-24 z-50 mx-auto flex max-w-md flex-col items-center gap-2 px-4">
      {items.map((t) => (
        <div
          key={t.id}
          className="clb-toast-in pointer-events-auto flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background shadow-lg"
        >
          {t.emoji && <span className="text-base">{t.emoji}</span>}
          {t.message}
        </div>
      ))}
    </div>,
    document.body
  )
}

// Mini systeme de toasts sans dependance : un emetteur global + abonnement.
export interface Toast {
  id: number
  message: string
  emoji?: string
}

let toasts: Toast[] = []
let seq = 0
const listeners = new Set<(t: Toast[]) => void>()

function emit() {
  for (const l of listeners) l(toasts)
}

export function toast(message: string, emoji?: string) {
  const t: Toast = { id: ++seq, message, emoji }
  toasts = [...toasts, t]
  emit()
  setTimeout(() => {
    toasts = toasts.filter((x) => x.id !== t.id)
    emit()
  }, 2200)
}

export function subscribeToasts(listener: (t: Toast[]) => void) {
  listeners.add(listener)
  listener(toasts)
  return () => {
    listeners.delete(listener)
  }
}

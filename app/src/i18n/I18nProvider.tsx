/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import { dict, type Lang } from "./dict"

interface I18nCtx {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (key: string) => string
}

const Ctx = React.createContext<I18nCtx | null>(null)

const STORAGE_KEY = "claubert.lang"

function initialLang(): Lang {
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "fr" || saved === "en") return saved
  }
  return "fr"
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(initialLang)

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l
  }, [])

  const toggle = React.useCallback(
    () => setLang(lang === "fr" ? "en" : "fr"),
    [lang, setLang]
  )

  const t = React.useCallback(
    (key: string) => {
      const entry = dict[key]
      if (!entry) return key
      return entry[lang]
    },
    [lang]
  )

  React.useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <Ctx.Provider value={{ lang, setLang, toggle, t }}>{children}</Ctx.Provider>
  )
}

export function useI18n() {
  const ctx = React.useContext(Ctx)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}

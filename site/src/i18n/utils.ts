// Utilitaires i18n + URLs (tiennent compte du base path /mon-projet).
export type Lang = 'fr' | 'en'

const BASE = import.meta.env.BASE_URL // ex: /mon-projet/

export function stripBase(pathname: string) {
  let p = pathname
  if (p.startsWith(BASE)) p = p.slice(BASE.length)
  if (!p.startsWith('/')) p = '/' + p
  return p
}

// Construit une URL localisee. path commence par '/'. Le francais est a la racine.
export function localePath(path: string, lang: Lang) {
  const clean = path === '/' ? '' : path.replace(/^\//, '')
  const prefix = lang === 'en' ? 'en/' : ''
  return BASE + prefix + clean
}

// Detecte la langue depuis l'URL courante.
export function langFromUrl(url: URL): Lang {
  const rest = stripBase(url.pathname)
  return rest.startsWith('/en') ? 'en' : 'fr'
}

// Chemin "logique" (sans prefixe de langue) pour generer l'alternat hreflang.
export function logicalPath(url: URL): string {
  let rest = stripBase(url.pathname)
  if (rest.startsWith('/en')) rest = rest.slice(3) || '/'
  if (!rest.startsWith('/')) rest = '/' + rest
  return rest
}

export function pick<T>(value: { fr: T; en: T }, lang: Lang): T {
  return value[lang]
}

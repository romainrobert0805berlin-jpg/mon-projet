import type { Lang } from './utils'

// Liens de navigation (slugs communs FR/EN, prefixe /en/ pour l'anglais).
export const nav: { path: string; label: { fr: string; en: string } }[] = [
  { path: '/menu', label: { fr: 'Menu', en: 'Menu' } },
  { path: '/notre-histoire', label: { fr: 'Notre histoire', en: 'Our story' } },
  { path: '/nos-adresses', label: { fr: 'Nos adresses', en: 'Locations' } },
  { path: '/entreprises', label: { fr: 'Entreprises', en: 'Companies' } },
  { path: '/fidelite', label: { fr: 'Fidélité', en: 'Loyalty' } },
  { path: '/carrieres', label: { fr: 'Carrières', en: 'Careers' } },
  { path: '/faq', label: { fr: 'FAQ', en: 'FAQ' } },
  { path: '/contact', label: { fr: 'Contact', en: 'Contact' } },
]

export const ui = {
  order: { fr: 'Commander', en: 'Order' },
  seeMenu: { fr: 'Voir le menu', en: 'See the menu' },
  classic: { fr: 'Classique', en: 'Classic' },
  signature: { fr: 'Signature', en: 'Signature' },
  allergens: { fr: 'Allergènes', en: 'Allergens' },
  soldOut: { fr: 'Épuisé', en: 'Sold out' },
  openNow: { fr: 'Ouvert · ferme à 16h00', en: 'Open · closes at 4:00 PM' },
  footerLegal: { fr: 'Légal', en: 'Legal' },
  footerBrand: { fr: 'Marque', en: 'Brand' },
  footerOrder: { fr: 'Commander', en: 'Order' },
  footerCompanies: { fr: 'Entreprises', en: 'Companies' },
  hours: { fr: 'Lun–Ven · 11h–16h', en: 'Mon–Fri · 11am–4pm' },
  draft: { fr: 'Maquette de travail (démo)', en: 'Work in progress (demo)' },
}

export const legalNav: { path: string; label: { fr: string; en: string } }[] = [
  { path: '/mentions-legales', label: { fr: 'Mentions légales', en: 'Legal notice' } },
  { path: '/cgv', label: { fr: 'CGV', en: 'Terms of sale' } },
  { path: '/confidentialite', label: { fr: 'Confidentialité', en: 'Privacy' } },
  { path: '/cookies', label: { fr: 'Cookies', en: 'Cookies' } },
]

export function t(key: keyof typeof ui, lang: Lang) {
  return ui[key][lang]
}

// Données menu Claubert — d'après la carte officielle (A1 MENU).
// Concept : sandwichs à composer, base baguette tradition ou ciabatta grillée (+1 €).
// La base protéine détermine le prix. Ici "classic" = baguette, "signature" = ciabatta (+1 €).
import type { Lang } from "@/i18n/dict"

export type Diet = "viande" | "vege"
export type AllergenKey = "gluten" | "nuts" | "milk" | "sesame" | "fish" | "mustard"
export type ProteinKey = "chicken" | "beef" | "fish" | "cheese" | "vegetal"

export interface Localized {
  fr: string
  en: string
}

export interface Product {
  id: string
  name: string
  emoji: string
  description: Localized
  protein: ProteinKey
  diet: Diet
  priceClassic: number // baguette tradition
  priceSignature: number // ciabatta grillée (+1 €)
  allergens: AllergenKey[]
  kcal?: number
  badges: ("signature" | "new" | "veg")[]
  inStock: boolean
}

export const allergenLabels: Record<AllergenKey, Localized> = {
  gluten: { fr: "Gluten", en: "Gluten" },
  nuts: { fr: "Fruits à coque", en: "Tree nuts" },
  milk: { fr: "Lait", en: "Milk" },
  sesame: { fr: "Sésame", en: "Sesame" },
  fish: { fr: "Poisson", en: "Fish" },
  mustard: { fr: "Moutarde", en: "Mustard" },
}

export const proteinLabels: Record<ProteinKey, Localized> = {
  chicken: { fr: "Poulet rôti", en: "Roast chicken" },
  beef: { fr: "Bœuf", en: "Beef" },
  fish: { fr: "Poisson", en: "Fish" },
  cheese: { fr: "Halloumi", en: "Halloumi" },
  vegetal: { fr: "Végétal", en: "Plant-based" },
}

export function loc(value: Localized, lang: Lang) {
  return value[lang]
}

// Suppléments (par portion) et formule menu.
export const MENU_FORMULA_PRICE = 9.9
export const supplements: { key: string; label: Localized; price: number }[] = [
  { key: "avocat", label: { fr: "Avocat", en: "Avocado" }, price: 1.5 },
  { key: "fromage", label: { fr: "Extra fromage", en: "Extra cheese" }, price: 1.5 },
  { key: "proteine", label: { fr: "Extra protéine", en: "Extra protein" }, price: 2 },
]

export const products: Product[] = [
  {
    id: "rome",
    name: "Rome",
    emoji: "🍗",
    description: {
      fr: "Poulet rôti, comté AOP, roquette, tomates confites, oignons caramélisés, sauce poulet rôti.",
      en: "Roast chicken, Comté AOP, rocket, confit tomatoes, caramelized onions, roast chicken sauce.",
    },
    protein: "chicken",
    diet: "viande",
    priceClassic: 10.9,
    priceSignature: 11.9,
    allergens: ["gluten", "milk"],
    badges: ["signature", "new"],
    inStock: true,
  },
  {
    id: "nievre",
    name: "Nièvre",
    emoji: "🥩",
    description: {
      fr: "Pastrami de bœuf, comté, roquette, cornichon, oignons caramélisés, moutarde à l'ancienne, huile d'olive.",
      en: "Beef pastrami, Comté, rocket, gherkin, caramelized onions, wholegrain mustard, olive oil.",
    },
    protein: "beef",
    diet: "viande",
    priceClassic: 9.9,
    priceSignature: 10.9,
    allergens: ["gluten", "milk", "mustard"],
    badges: ["signature"],
    inStock: true,
  },
  {
    id: "lisbonne",
    name: "Lisbonne",
    emoji: "🥩",
    description: {
      fr: "Bresaola de bœuf, mozzarella, roquette, tomates confites, huile d'olive.",
      en: "Beef bresaola, mozzarella, rocket, confit tomatoes, olive oil.",
    },
    protein: "beef",
    diet: "viande",
    priceClassic: 9.9,
    priceSignature: 10.9,
    allergens: ["gluten", "milk"],
    badges: ["signature"],
    inStock: true,
  },
  {
    id: "bali",
    name: "Bali",
    emoji: "🧀",
    description: {
      fr: "Halloumi grillé, poivrons au four, aubergines, roquette, pesto, tomates confites.",
      en: "Grilled halloumi, roasted peppers, eggplant, rocket, pesto, confit tomatoes.",
    },
    protein: "cheese",
    diet: "vege",
    priceClassic: 9.9,
    priceSignature: 10.9,
    allergens: ["gluten", "milk", "nuts"],
    badges: ["veg"],
    inStock: true,
  },
  {
    id: "paris",
    name: "Paris",
    emoji: "🐟",
    description: {
      fr: "Thon cuit mayo, concombre, cornichon, oignon rouge pickles, roquette.",
      en: "Cooked tuna mayo, cucumber, gherkin, pickled red onion, rocket.",
    },
    protein: "fish",
    diet: "viande",
    priceClassic: 9.9,
    priceSignature: 10.9,
    allergens: ["gluten", "fish", "mustard"],
    badges: [],
    inStock: true,
  },
  {
    id: "kuala-lumpur",
    name: "Kuala Lumpur",
    emoji: "🐟",
    description: {
      fr: "Saumon fumé, cream cheese, oignon rouge pickles, roquette, concombre, huile d'olive.",
      en: "Smoked salmon, cream cheese, pickled red onion, rocket, cucumber, olive oil.",
    },
    protein: "fish",
    diet: "viande",
    priceClassic: 9.9,
    priceSignature: 10.9,
    allergens: ["gluten", "fish", "milk"],
    badges: ["new"],
    inStock: true,
  },
]

export function getProduct(id: string) {
  return products.find((p) => p.id === id)
}

// Résumé lisible des options d'une ligne (pain · suppléments · formule).
export function describeLine(
  o: { bread: "baguette" | "ciabatta"; supplements: Record<string, number>; formula: boolean },
  lang: Lang
): string {
  const parts: string[] = [o.bread === "ciabatta" ? "Ciabatta" : "Baguette"]
  const sup = o.supplements || {}
  for (const s of supplements) {
    const n = sup[s.key] || 0
    if (n > 0) parts.push(`${loc(s.label, lang)}${n > 1 ? ` ×${n}` : ""}`)
  }
  if (o.formula) parts.push(lang === "fr" ? "Formule menu" : "Menu deal")
  return parts.join(" · ")
}

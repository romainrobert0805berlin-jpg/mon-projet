// Données menu Claubert — provisoires (à remplacer par les vraies données client).
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
  priceClassic: number
  priceSignature: number
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
  chicken: { fr: "Poulet", en: "Chicken" },
  beef: { fr: "Bœuf", en: "Beef" },
  fish: { fr: "Poisson", en: "Fish" },
  cheese: { fr: "Fromage", en: "Cheese" },
  vegetal: { fr: "Végétal", en: "Plant-based" },
}

export function loc(value: Localized, lang: Lang) {
  return value[lang]
}

export const products: Product[] = [
  {
    id: "le-defense",
    name: "Le Défense",
    emoji: "🥪",
    description: {
      fr: "Poulet rôti maison, tomates confites, pesto de roquette, pain focaccia.",
      en: "House-roasted chicken, confit tomatoes, rocket pesto, focaccia bread.",
    },
    protein: "chicken",
    diet: "viande",
    priceClassic: 7.9,
    priceSignature: 9.9,
    allergens: ["gluten", "nuts"],
    kcal: 540,
    badges: ["signature", "new"],
    inStock: true,
  },
  {
    id: "jardin-cnit",
    name: "Le Jardin du CNIT",
    emoji: "🥗",
    description: {
      fr: "Falafel croustillant, houmous, légumes grillés, sauce yaourt-menthe.",
      en: "Crispy falafel, hummus, grilled vegetables, mint-yogurt sauce.",
    },
    protein: "vegetal",
    diet: "vege",
    priceClassic: 7.5,
    priceSignature: 9.5,
    allergens: ["gluten", "sesame", "milk"],
    kcal: 480,
    badges: ["veg"],
    inStock: true,
  },
  {
    id: "le-parvis",
    name: "Le Parvis",
    emoji: "🥓",
    description: {
      fr: "Bœuf braisé 12h, cheddar affiné, oignons caramélisés, pain brioché.",
      en: "12h braised beef, aged cheddar, caramelized onions, brioche bun.",
    },
    protein: "beef",
    diet: "viande",
    priceClassic: 8.9,
    priceSignature: 11.9,
    allergens: ["gluten", "milk", "mustard"],
    kcal: 690,
    badges: ["signature"],
    inStock: true,
  },
  {
    id: "le-coupole",
    name: "La Coupole",
    emoji: "🧀",
    description: {
      fr: "Chèvre frais, miel, noix, roquette, pain aux céréales.",
      en: "Fresh goat cheese, honey, walnuts, rocket, multigrain bread.",
    },
    protein: "cheese",
    diet: "vege",
    priceClassic: 7.2,
    priceSignature: 9.2,
    allergens: ["gluten", "milk", "nuts"],
    kcal: 510,
    badges: ["veg"],
    inStock: false,
  },
  {
    id: "esplanade",
    name: "L'Esplanade",
    emoji: "🐟",
    description: {
      fr: "Saumon fumé, fromage frais aux herbes, concombre, aneth, pain seigle.",
      en: "Smoked salmon, herb cream cheese, cucumber, dill, rye bread.",
    },
    protein: "fish",
    diet: "viande",
    priceClassic: 8.5,
    priceSignature: 10.9,
    allergens: ["gluten", "fish", "milk"],
    kcal: 460,
    badges: ["new"],
    inStock: true,
  },
]

export function getProduct(id: string) {
  return products.find((p) => p.id === id)
}

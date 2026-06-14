// Données menu Claubert — provisoires (à remplacer par les vraies données client).
export type Diet = "viande" | "vege"

export interface Product {
  id: string
  name: string
  emoji: string
  description: string
  protein: string
  diet: Diet
  priceClassic: number
  priceSignature: number
  allergens: string[]
  kcal?: number
  badges: ("signature" | "new" | "veg")[]
  inStock: boolean
}

export const products: Product[] = [
  {
    id: "le-defense",
    name: "Le Défense",
    emoji: "🥪",
    description: "Poulet rôti maison, tomates confites, pesto de roquette, pain focaccia.",
    protein: "Poulet",
    diet: "viande",
    priceClassic: 7.9,
    priceSignature: 9.9,
    allergens: ["Gluten", "Fruits à coque"],
    kcal: 540,
    badges: ["signature", "new"],
    inStock: true,
  },
  {
    id: "jardin-cnit",
    name: "Le Jardin du CNIT",
    emoji: "🥗",
    description: "Falafel croustillant, houmous, légumes grillés, sauce yaourt-menthe.",
    protein: "Végétal",
    diet: "vege",
    priceClassic: 7.5,
    priceSignature: 9.5,
    allergens: ["Gluten", "Sésame", "Lait"],
    kcal: 480,
    badges: ["veg"],
    inStock: true,
  },
  {
    id: "le-parvis",
    name: "Le Parvis",
    emoji: "🥓",
    description: "Bœuf braisé 12h, cheddar affiné, oignons caramélisés, pain brioché.",
    protein: "Bœuf",
    diet: "viande",
    priceClassic: 8.9,
    priceSignature: 11.9,
    allergens: ["Gluten", "Lait", "Moutarde"],
    kcal: 690,
    badges: ["signature"],
    inStock: true,
  },
  {
    id: "le-coupole",
    name: "La Coupole",
    emoji: "🧀",
    description: "Chèvre frais, miel, noix, roquette, pain aux céréales.",
    protein: "Fromage",
    diet: "vege",
    priceClassic: 7.2,
    priceSignature: 9.2,
    allergens: ["Gluten", "Lait", "Fruits à coque"],
    kcal: 510,
    badges: ["veg"],
    inStock: false,
  },
  {
    id: "le-saumon",
    name: "L'Esplanade",
    emoji: "🐟",
    description: "Saumon fumé, fromage frais aux herbes, concombre, aneth, pain seigle.",
    protein: "Poisson",
    diet: "viande",
    priceClassic: 8.5,
    priceSignature: 10.9,
    allergens: ["Gluten", "Poisson", "Lait"],
    kcal: 460,
    badges: ["new"],
    inStock: true,
  },
]

// Programme fidélité Claubert — exemple provisoire (à valider, géré ensuite par Heypongo).
// Règle : 1 € dépensé = 1 point.
import type { Lang } from "@/i18n/dict"

export const POINTS_PER_EURO = 1

// Points de démo de l'utilisateur connecté (placeholder).
export const DEMO_POINTS = 120

export interface Reward {
  points: number
  emoji: string
  label: { fr: string; en: string }
}

export const rewards: Reward[] = [
  { points: 75, emoji: "☕", label: { fr: "Café offert", en: "Free coffee" } },
  { points: 125, emoji: "🍰", label: { fr: "Dessert offert", en: "Free dessert" } },
  {
    points: 200,
    emoji: "🥪",
    label: { fr: "Sandwich Classique offert", en: "Free Classic sandwich" },
  },
  {
    points: 350,
    emoji: "🍽️",
    label: { fr: "Menu Signature offert", en: "Free Signature menu" },
  },
]

export function rewardLabel(r: Reward, lang: Lang) {
  return r.label[lang]
}

// Prochaine récompense au-dessus d'un solde de points donné.
export function nextReward(points: number): Reward | undefined {
  return rewards.find((r) => r.points > points)
}

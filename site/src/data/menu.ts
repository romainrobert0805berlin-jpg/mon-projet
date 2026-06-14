// Donnees menu (provisoires). Photos reelles a integrer (brief : pas de banque d'images).
export interface Localized { fr: string; en: string }
export type AllergenKey = 'gluten' | 'nuts' | 'milk' | 'sesame' | 'fish' | 'mustard'
export type ProteinKey = 'chicken' | 'beef' | 'fish' | 'cheese' | 'vegetal'

export interface Product {
  id: string
  name: string
  emoji: string
  description: Localized
  diet: 'viande' | 'vege'
  protein: ProteinKey
  priceClassic: number
  priceSignature: number
  allergens: AllergenKey[]
  kcal?: number
  badges: ('signature' | 'new' | 'veg')[]
  inStock: boolean
}

export const allergenLabels: Record<AllergenKey, Localized> = {
  gluten: { fr: 'Gluten', en: 'Gluten' },
  nuts: { fr: 'Fruits à coque', en: 'Tree nuts' },
  milk: { fr: 'Lait', en: 'Milk' },
  sesame: { fr: 'Sésame', en: 'Sesame' },
  fish: { fr: 'Poisson', en: 'Fish' },
  mustard: { fr: 'Moutarde', en: 'Mustard' },
}

export const proteinLabels: Record<ProteinKey, Localized> = {
  chicken: { fr: 'Poulet', en: 'Chicken' },
  beef: { fr: 'Bœuf', en: 'Beef' },
  fish: { fr: 'Poisson', en: 'Fish' },
  cheese: { fr: 'Fromage', en: 'Cheese' },
  vegetal: { fr: 'Végétal', en: 'Plant-based' },
}

export const products: Product[] = [
  {
    id: 'le-defense', name: 'Le Défense', emoji: '🥪',
    description: { fr: 'Poulet rôti maison, tomates confites, pesto de roquette, pain focaccia.', en: 'House-roasted chicken, confit tomatoes, rocket pesto, focaccia bread.' },
    diet: 'viande', protein: 'chicken', priceClassic: 7.9, priceSignature: 9.9, allergens: ['gluten', 'nuts'], kcal: 540,
    badges: ['signature', 'new'], inStock: true,
  },
  {
    id: 'jardin-cnit', name: 'Le Jardin du CNIT', emoji: '🥗',
    description: { fr: 'Falafel croustillant, houmous, légumes grillés, sauce yaourt-menthe.', en: 'Crispy falafel, hummus, grilled vegetables, mint-yogurt sauce.' },
    diet: 'vege', protein: 'vegetal', priceClassic: 7.5, priceSignature: 9.5, allergens: ['gluten', 'sesame', 'milk'], kcal: 480,
    badges: ['veg'], inStock: true,
  },
  {
    id: 'le-parvis', name: 'Le Parvis', emoji: '🥓',
    description: { fr: 'Bœuf braisé 12h, cheddar affiné, oignons caramélisés, pain brioché.', en: '12h braised beef, aged cheddar, caramelized onions, brioche bun.' },
    diet: 'viande', protein: 'beef', priceClassic: 8.9, priceSignature: 11.9, allergens: ['gluten', 'milk', 'mustard'], kcal: 690,
    badges: ['signature'], inStock: true,
  },
  {
    id: 'la-coupole', name: 'La Coupole', emoji: '🧀',
    description: { fr: 'Chèvre frais, miel, noix, roquette, pain aux céréales.', en: 'Fresh goat cheese, honey, walnuts, rocket, multigrain bread.' },
    diet: 'vege', protein: 'cheese', priceClassic: 7.2, priceSignature: 9.2, allergens: ['gluten', 'milk', 'nuts'], kcal: 510,
    badges: ['veg'], inStock: false,
  },
  {
    id: 'esplanade', name: "L'Esplanade", emoji: '🐟',
    description: { fr: 'Saumon fumé, fromage frais aux herbes, concombre, aneth, pain seigle.', en: 'Smoked salmon, herb cream cheese, cucumber, dill, rye bread.' },
    diet: 'viande', protein: 'fish', priceClassic: 8.5, priceSignature: 10.9, allergens: ['gluten', 'fish', 'milk'], kcal: 460,
    badges: ['new'], inStock: true,
  },
]

export const faqs: { q: Localized; a: Localized }[] = [
  {
    q: { fr: 'Comment commander en click & collect ?', en: 'How do I order for click & collect?' },
    a: { fr: 'Choisissez vos produits, ajoutez-les au panier, sélectionnez un créneau de retrait, puis payez en ligne. Vous récupérez votre commande sans attendre au CNIT.', en: 'Pick your items, add them to the cart, choose a pickup slot, then pay online. Collect your order with no wait at CNIT.' },
  },
  {
    q: { fr: 'Où récupérer ma commande ?', en: 'Where do I collect my order?' },
    a: { fr: 'Au comptoir Claubert du CNIT, La Défense (Puteaux), au créneau choisi.', en: 'At the Claubert counter in the CNIT, La Défense (Puteaux), at your chosen slot.' },
  },
  {
    q: { fr: 'Les allergènes sont-ils indiqués ?', en: 'Are allergens listed?' },
    a: { fr: 'Oui, chaque fiche produit indique les allergènes (règlement INCO 1169/2011) et les calories quand disponibles.', en: 'Yes, each product lists allergens (INCO 1169/2011 regulation) and calories when available.' },
  },
  {
    q: { fr: 'Proposez-vous des plateaux repas pour entreprises ?', en: 'Do you offer catering for companies?' },
    a: { fr: 'Oui, nous livrons des plateaux repas à vos étages à La Défense. Demandez un devis, réponse sous 24h.', en: 'Yes, we deliver catering to your floors at La Défense. Request a quote, reply within 24h.' },
  },
  {
    q: { fr: 'Comment fonctionne le programme de fidélité ?', en: 'How does the loyalty program work?' },
    a: { fr: 'Inscrivez-vous en 30 secondes, cumulez 1 point par euro dépensé et débloquez des récompenses (café, dessert, sandwich offert...).', en: 'Sign up in 30 seconds, earn 1 point per euro spent and unlock rewards (free coffee, dessert, sandwich...).' },
  },
  {
    q: { fr: 'Comment rejoindre l’équipe Claubert ?', en: 'How can I join the Claubert team?' },
    a: { fr: 'Consultez nos postes ouverts dans la section Carrières et postulez en quelques secondes.', en: 'Check our open positions in the Careers section and apply in seconds.' },
  },
]

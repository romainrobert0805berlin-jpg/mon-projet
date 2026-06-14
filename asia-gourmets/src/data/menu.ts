// Menu indicatif basé sur les spécialités citées dans les avis publics
// (cuisine chinoise / asiatique). Les prix sont des estimations — à ajuster
// avec la vraie carte du restaurant.

export type Dish = {
  name: string
  description: string
  price: string
  tag?: "signature" | "épicé" | "végé"
}

export type MenuCategory = {
  id: string
  label: string
  dishes: Dish[]
}

export const menu: MenuCategory[] = [
  {
    id: "entrees",
    label: "Entrées",
    dishes: [
      { name: "Nems au poulet (×4)", description: "Rouleaux croustillants, salade & nuoc-mâm", price: "5,90 €", tag: "signature" },
      { name: "Raviolis vapeur (×6)", description: "Porc & crevette, sauce soja sucrée", price: "6,50 €" },
      { name: "Beignets de crevette", description: "Pâte légère, sauce aigre-douce", price: "6,90 €" },
      { name: "Samoussas légumes (×4)", description: "Légumes épicés, croustillants", price: "5,50 €", tag: "végé" },
    ],
  },
  {
    id: "soupes",
    label: "Soupes",
    dishes: [
      { name: "Phở bœuf", description: "Bouillon parfumé, nouilles de riz, herbes fraîches", price: "11,50 €", tag: "signature" },
      { name: "Soupe wonton", description: "Raviolis maison, bouillon clair", price: "8,90 €" },
      { name: "Soupe pékinoise", description: "Aigre & piquante, tofu, champignons noirs", price: "7,50 €", tag: "épicé" },
    ],
  },
  {
    id: "plats",
    label: "Plats",
    dishes: [
      { name: "Poulet sauté basilic thaï", description: "Wok de poulet, basilic, piment doux", price: "12,90 €", tag: "épicé" },
      { name: "Bœuf épicé", description: "Émincé de bœuf, sauce relevée, légumes croquants", price: "13,90 €", tag: "épicé" },
      { name: "Porc au caramel", description: "Mijoté à la vietnamienne, riz parfumé", price: "12,90 €", tag: "signature" },
      { name: "Canard laqué", description: "Sauce hoisin, oignons nouveaux", price: "14,50 €" },
      { name: "Crevettes sel & poivre", description: "Sautées, ail, poivre du Sichuan", price: "14,90 €" },
      { name: "Wok de légumes & tofu", description: "Légumes de saison, tofu doré", price: "10,90 €", tag: "végé" },
    ],
  },
  {
    id: "accompagnements",
    label: "Riz & Nouilles",
    dishes: [
      { name: "Riz cantonais", description: "Œuf, jambon, petits pois", price: "5,90 €", tag: "signature" },
      { name: "Nouilles sautées", description: "Légumes croquants, sauce soja", price: "6,50 €" },
      { name: "Riz nature parfumé", description: "Riz jasmin", price: "3,00 €" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    dishes: [
      { name: "Perles de coco", description: "Boules de riz gluant, noix de coco", price: "4,50 €" },
      { name: "Beignets de banane", description: "Tièdes, miel & sésame", price: "4,90 €" },
      { name: "Litchis au sirop", description: "Frais et désaltérant", price: "3,90 €" },
    ],
  },
]

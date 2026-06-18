// Dictionnaire FR / EN. Clés plates, lookup via t("section.cle").
export type Lang = "fr" | "en"

type Dict = Record<string, { fr: string; en: string }>

export const dict: Dict = {
  // Navigation
  "nav.accueil": { fr: "Accueil", en: "Home" },
  "nav.menu": { fr: "Menu", en: "Menu" },
  "nav.panier": { fr: "Panier", en: "Cart" },
  "nav.compte": { fr: "Compte", en: "Account" },

  // Communs
  "common.order": { fr: "Commander", en: "Order" },
  "common.seeMenu": { fr: "Voir le menu", en: "See the menu" },
  "common.seeAll": { fr: "Tout voir", en: "See all" },
  "common.back": { fr: "Retour", en: "Back" },
  "common.classic": { fr: "Classique", en: "Classic" },
  "common.signature": { fr: "Signature", en: "Signature" },
  "common.baguette": { fr: "Baguette", en: "Baguette" },
  "common.ciabatta": { fr: "Ciabatta +1 €", en: "Ciabatta +1 €" },
  "common.add": { fr: "Ajouter", en: "Add" },
  "common.soldOut": { fr: "Épuisé aujourd'hui", en: "Sold out today" },
  "common.allergens": { fr: "Allergènes", en: "Allergens" },
  "common.send": { fr: "Envoyer", en: "Send" },
  "common.draft": {
    fr: "Maquette de travail (démo)",
    en: "Work in progress (demo)",
  },

  // Statut / hero
  "home.open": { fr: "Ouvert 7/7 · 11h – 20h", en: "Open 7/7 · 11am – 8pm" },
  "home.heroTitle": {
    fr: "Le sandwich d'auteur, au cœur de La Défense.",
    en: "Signature sandwiches, in the heart of La Défense.",
  },
  "home.heroSub": {
    fr: "Frais, pain travaillé chaque matin, recettes signées d'un chef Ferrandi.",
    en: "Fresh, bread baked every morning, recipes by a Ferrandi-trained chef.",
  },
  "home.ready": { fr: "Prêt en 5 min", en: "Ready in 5 min" },
  "home.noQueue": { fr: "Sans file d'attente", en: "No waiting line" },
  "home.signatures": { fr: "Nos signatures", en: "Our signatures" },
  "home.loyaltyTitle": { fr: "Programme fidélité", en: "Loyalty program" },
  "home.loyaltySub": {
    fr: "Cumulez des points à chaque commande.",
    en: "Earn points with every order.",
  },
  "home.b2bTitle": { fr: "Entreprises & plateaux repas", en: "Companies & catering" },
  "home.b2bSub": {
    fr: "Livrés à vos étages. Devis sous 24h.",
    en: "Delivered to your floor. Quote within 24h.",
  },
  "home.storyTitle": { fr: "Notre histoire", en: "Our story" },
  "home.storySub": {
    fr: "Un savoir-faire de chef, dans un sandwich.",
    en: "Chef's craft, in a sandwich.",
  },

  // Menu
  "menu.title": { fr: "Le menu", en: "The menu" },
  "menu.sub": {
    fr: "Sandwichs à composer, baguette tradition ou ciabatta grillée. Allergènes affichés.",
    en: "Build-your-own sandwiches, baguette or grilled ciabatta. Allergens shown.",
  },
  "menu.composeTitle": { fr: "À composer", en: "Build your own" },
  "menu.composeBody": {
    fr: "Base baguette ou ciabatta, votre protéine, légumes à volonté, 1 fromage, 1 assaisonnement.",
    en: "Baguette or ciabatta base, your protein, unlimited veggies, 1 cheese, 1 seasoning.",
  },
  "menu.filter.all": { fr: "Tout", en: "All" },
  "menu.filter.meat": { fr: "Viande / poisson", en: "Meat / fish" },
  "menu.filter.veg": { fr: "Végé", en: "Veggie" },

  // Panier
  "cart.title": { fr: "Votre panier", en: "Your cart" },
  "cart.empty": { fr: "Votre panier est vide", en: "Your cart is empty" },
  "cart.emptySub": {
    fr: "Ajoutez un sandwich depuis le menu.",
    en: "Add a sandwich from the menu.",
  },
  "cart.slot": { fr: "Créneau de retrait", en: "Pickup time" },
  "cart.total": { fr: "Total · retrait", en: "Total · pickup" },
  "cart.clear": { fr: "Vider", en: "Clear" },
  "cart.payNote": {
    fr: "Paiement (CB, Apple Pay, titres-resto) via Innovorder — à brancher.",
    en: "Payment (card, Apple Pay, meal vouchers) via Innovorder — to connect.",
  },
  "cart.pay": { fr: "Payer", en: "Pay" },
  "cart.notes": { fr: "Note pour la cuisine (option)", en: "Note for the kitchen (optional)" },
  "cart.notesPlaceholder": {
    fr: "Sans oignons, pain bien cuit…",
    en: "No onions, well-baked bread…",
  },
  "cart.earn": { fr: "Vous cumulerez {n} points", en: "You'll earn {n} points" },

  // Confirmation de commande
  "confirm.title": { fr: "Commande confirmée !", en: "Order confirmed!" },
  "confirm.sub": {
    fr: "On s'y met. Présentez votre numéro au comptoir.",
    en: "We're on it. Show your number at the counter.",
  },
  "confirm.number": { fr: "Numéro de commande", en: "Order number" },
  "confirm.pickup": { fr: "Retrait", en: "Pickup" },
  "confirm.at": { fr: "à", en: "at" },
  "confirm.recap": { fr: "Récapitulatif", en: "Summary" },
  "confirm.total": { fr: "Total", en: "Total" },
  "confirm.points": { fr: "points cumulés", en: "points earned" },
  "confirm.note": { fr: "Note", en: "Note" },
  "confirm.home": { fr: "Retour à l'accueil", en: "Back to home" },
  "confirm.again": { fr: "Commander à nouveau", en: "Order again" },
  "confirm.payNote": {
    fr: "Démo : aucun paiement réel n'a été effectué.",
    en: "Demo: no real payment was made.",
  },

  // Compte
  "account.title": { fr: "Mon compte", en: "My account" },
  "account.loyaltyCard": { fr: "Carte fidélité", en: "Loyalty card" },
  "account.points": { fr: "points", en: "points" },
  "account.heypongoNote": {
    fr: "Programme géré par Heypongo — à brancher.",
    en: "Program powered by Heypongo — to connect.",
  },
  "account.notMember": { fr: "Pas encore membre ?", en: "Not a member yet?" },
  "account.notMemberSub": {
    fr: "Inscrivez-vous en 30 secondes et cumulez des points dès aujourd'hui.",
    en: "Sign up in 30 seconds and start earning points today.",
  },
  "account.signup": { fr: "S'inscrire", en: "Sign up" },
  "account.login": { fr: "Se connecter", en: "Log in" },
  "account.orders": { fr: "Mes dernières commandes", en: "My recent orders" },
  "account.reorder": { fr: "Recommander", en: "Reorder" },
  "account.items": { fr: "article(s)", en: "item(s)" },

  // Liens / pages
  "page.story": { fr: "Notre histoire", en: "Our story" },
  "page.addresses": { fr: "Nos adresses", en: "Locations" },
  "page.careers": { fr: "Carrières", en: "Careers" },
  "page.b2b": { fr: "Entreprises / Plateaux repas", en: "Companies / Catering" },
  "page.contact": { fr: "Contact", en: "Contact" },
  "page.faq": { fr: "FAQ", en: "FAQ" },

  "careers.sub": { fr: "Rejoindre l'équipe Claubert", en: "Join the Claubert team" },
  "b2b.sub": { fr: "Devis sous 24h", en: "Quote within 24h" },
  "contact.sub": { fr: "Une question ?", en: "A question?" },

  // Histoire
  "story.body": {
    fr: "Claubert est né d'une idée simple : et si le déjeuner rapide de La Défense avait le goût d'une vraie cuisine ? Nos recettes sont pensées par un chef formé à Ferrandi, avec un sourcing exigeant et un pain travaillé chaque matin sur place.",
    en: "Claubert was born from a simple idea: what if the quick lunch of La Défense tasted like real cuisine? Our recipes are crafted by a Ferrandi-trained chef, with demanding sourcing and bread baked fresh every morning.",
  },
  "story.sourcingTitle": { fr: "Un sourcing exigeant", en: "Demanding sourcing" },
  "story.sourcingBody": {
    fr: "Producteurs sélectionnés, ingrédients de saison, pain maison quotidien.",
    en: "Selected producers, seasonal ingredients, daily house bread.",
  },

  // Adresses
  "addr.title": { fr: "Au CNIT, La Défense", en: "At CNIT, La Défense" },
  "addr.address": {
    fr: "2 place de la Défense, 92800 Puteaux — CNIT",
    en: "2 place de la Défense, 92800 Puteaux — CNIT",
  },
  "addr.access": { fr: "Accès", en: "Access" },
  "addr.hours": { fr: "Horaires", en: "Opening hours" },
  "addr.everyday": { fr: "7 jours / 7", en: "7 days a week" },
  "addr.hoursValue": { fr: "11h – 20h", en: "11am – 8pm" },
  "addr.mapPlaceholder": {
    fr: "Emplacement carte Google Maps",
    en: "Google Maps location placeholder",
  },

  // Carrières
  "careers.title": { fr: "Rejoignez Claubert", en: "Join Claubert" },
  "careers.pitch": {
    fr: "Une marque ambitieuse, une équipe soudée, des perspectives d'évolution. Postulez en quelques secondes.",
    en: "An ambitious brand, a close-knit team, room to grow. Apply in seconds.",
  },
  "careers.openings": { fr: "Postes ouverts", en: "Open positions" },
  "careers.apply": { fr: "Postuler", en: "Apply" },
  "job.equipier": { fr: "Équipier polyvalent", en: "Team member" },
  "job.equipier.desc": { fr: "Accueil, préparation, service. Temps plein ou partiel.", en: "Welcome, prep, service. Full or part time." },
  "job.manager": { fr: "Manager adjoint", en: "Assistant manager" },
  "job.manager.desc": { fr: "Encadrement d'équipe, ouverture/fermeture, qualité.", en: "Team leadership, opening/closing, quality." },
  "job.chef": { fr: "Chef de site", en: "Site manager" },
  "job.chef.desc": { fr: "Pilotage complet du point de vente et des résultats.", en: "Full ownership of the location and results." },

  // Formulaires
  "form.name": { fr: "Nom", en: "Name" },
  "form.email": { fr: "Email", en: "Email" },
  "form.phone": { fr: "Téléphone", en: "Phone" },
  "form.message": { fr: "Message", en: "Message" },
  "form.cv": { fr: "CV (PDF)", en: "Resume (PDF)" },
  "form.sent": { fr: "Merci ! Nous revenons vers vous rapidement.", en: "Thanks! We'll get back to you shortly." },
  "form.intent": { fr: "Votre demande concerne", en: "Your request is about" },
  "form.intent.client": { fr: "Client", en: "Customer" },
  "form.intent.b2b": { fr: "Entreprise / B2B", en: "Company / B2B" },
  "form.intent.press": { fr: "Presse", en: "Press" },
  "form.intent.recruit": { fr: "Recrutement", en: "Recruitment" },

  // B2B
  "b2b.title": { fr: "Entreprises & plateaux repas", en: "Companies & catering" },
  "b2b.value": {
    fr: "Plateaux repas livrés à vos étages à La Défense. Lissez le pic du midi, régalez vos équipes.",
    en: "Catering delivered to your floors at La Défense. Smooth the lunch rush, delight your teams.",
  },
  "b2b.people": { fr: "Nombre de personnes", en: "Number of people" },
  "b2b.budget": { fr: "Budget par personne", en: "Budget per person" },
  "b2b.date": { fr: "Date souhaitée", en: "Desired date" },
  "b2b.cta": { fr: "Demander un devis", en: "Request a quote" },
  "b2b.catalog": { fr: "Télécharger le catalogue (PDF)", en: "Download the catalog (PDF)" },

  // Fidélité
  "loyalty.title": { fr: "Programme fidélité", en: "Loyalty program" },
  "loyalty.how": { fr: "Comment ça marche", en: "How it works" },
  "loyalty.step1": { fr: "Inscrivez-vous en 30 secondes (email ou téléphone).", en: "Sign up in 30 seconds (email or phone)." },
  "loyalty.step2": { fr: "Cumulez des points à chaque commande.", en: "Earn points with every order." },
  "loyalty.step3": { fr: "Débloquez des récompenses et parrainez vos collègues.", en: "Unlock rewards and refer your colleagues." },
  "loyalty.rate": { fr: "1 € dépensé = 1 point", en: "1 € spent = 1 point" },
  "loyalty.rewards": { fr: "Vos récompenses", en: "Your rewards" },
  "loyalty.referral": {
    fr: "Parrainage : +50 points pour vous.",
    en: "Referral: +50 points for you.",
  },
  "loyalty.unlocked": { fr: "Débloqué", en: "Unlocked" },
  "loyalty.pointsShort": { fr: "pts", en: "pts" },
  "loyalty.toReward": { fr: "Plus que {n} points avant :", en: "Only {n} points until:" },

  // FAQ
  "faq.title": { fr: "Questions fréquentes", en: "Frequently asked questions" },

  // Détail produit
  "product.chooseVariant": { fr: "Choisissez votre pain", en: "Choose your bread" },
  "product.addToCart": { fr: "Ajouter au panier", en: "Add to cart" },
  "product.protein": { fr: "Base protéine", en: "Protein base" },
  "product.supplements": { fr: "Suppléments (par portion)", en: "Add-ons (per portion)" },
  "product.formula": { fr: "Formule menu", en: "Menu deal" },
  "product.formulaDesc": {
    fr: "+ boisson + dessert pour +9,90 €",
    en: "+ drink + dessert for +€9.90",
  },
}

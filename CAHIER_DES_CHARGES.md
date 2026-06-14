# Cahier des charges — Site Claubert

> Document de référence du projet. Sert de fil rouge entre les sessions de travail.
> Dernière mise à jour : 2026-06-14 (ajout stratégie app mobile & stores)

---

## 1. Vision

Le site **Claubert** (sandwicherie au CNIT, La Défense / Puteaux) **n'est pas une vitrine**.
C'est un **asset d'acquisition** :

- SEO local (acquisition organique)
- Canal direct **click & collect** (hors agrégateurs)
- Moteur de **fidélité**
- Porte d'entrée **B2B** (plateaux repas)
- Page d'atterrissage des campagnes payantes (Meta, TikTok, Google Ads)
- Constitution d'une base de données **1st party** (emails, téléphones, fréquence d'achat)

## 2. Objectifs & KPIs (M+6 après ouverture)

| Objectif | Cible |
|---|---|
| SEO local | Top 3 Google sur « sandwich La Défense », « restaurant CNIT », « click and collect Puteaux », « déjeuner rapide La Défense » |
| Click & collect | 20 % du CA site en direct (hors agrégateurs) |
| Fidélité | 40 % des commandes identifiées, réachat > 30 % |
| B2B | 10 % de CA additionnel à M+12, lissage du pic 12h-13h30 |
| Recrutement | Parcours LinkedIn/Indeed/QR kiosque → page carrières → candidature simplifiée |

---

## 3. Périmètre — qui fait quoi

> ⚠️ Distinction essentielle : le site (constructible ici) vs les services tiers (comptes/clés API requis).

### ✅ Constructible dans ce projet
Pages, design, contenu, SEO structuré (JSON-LD), multilingue FR/EN, mobile-first,
formulaires, structure du menu (filtres/allergènes/badges), emplacements prêts à brancher.

### 🔌 Services tiers (nécessitent comptes + clés API du client)
| Service | Usage | Intégration |
|---|---|---|
| **Innovorder** | POS + click & collect + paiement + cartes cadeaux | Natif / API — cœur transactionnel (iframe ou API, à cadrer) |
| **Heypongo** | Programme fidélité (points, paliers, parrainage) | API / SDK — affichage site + checkout |
| **Innovorder (agrégation)** | Commandes Uber Eats / Deliveroo | Liens sortants + tracking |
| **Google Business Profile** | SEO local, avis, NAP | Widget avis + cohérence NAP |
| **Instagram / UGC** | Feed auto accueil | Widget |
| Paiement | CB, Apple Pay, Google Pay, titres-resto (Swile, Edenred, Pluxee) | Via Innovorder |

**Tant que les clés ne sont pas fournies, ces blocs sont des emplacements prêts à connecter.**

---

## 4. Arborescence (sitemap)

- Accueil
- Notre histoire (storytelling chef Ferrandi / marque / sourcing)
- Menu (filtres, allergènes, variantes Classique / Signature)
- Commander en ligne (click & collect — CTA principal)
- Nos adresses (CNIT + futurs sites)
- Entreprises / Plateaux repas (B2B)
- Programme fidélité
- Carrières
- FAQ
- Contact
- Footer légal : Mentions légales, CGV, Confidentialité, Cookies, Plan du site

### Détails par page

- **Accueil** : hero (proposition de valeur + CTA « Commander » + CTA secondaire « Voir le menu ») · bloc « Où nous trouver » CNIT + horaires temps réel (ouvert/fermé) · storytelling chef Ferrandi/sourcing · best-sellers/signatures · teasing fidélité · avis Google (4,5+/5) · teasing B2B · feed Instagram/UGC.
- **Menu** : photos **réelles** obligatoires (pas de banque d'images) · par produit : nom, descriptif, prix Classique/Signature, allergènes (INCO 1169/2011), kcal si dispo, badges (Nouveau, Signature, Végé) · filtres protéine/régime/allergènes · statut stock temps réel (sync Innovorder) · CTA « Commander ce produit » (pré-remplit le panier).
- **Click & collect** : sélection point de vente → menu → panier → créneau pickup (pas 10 min) → paiement · compte client (historique, favoris, re-commande 1 clic) · Heypongo (points au paiement, réductions auto) · option livraison (Uber Eats / Deliveroo).
- **Nos adresses** : Google Maps + Waze/Citymapper · accès RER A / métro 1 / transiliens · photos emplacement · horaires par jour + fériés + fermetures exceptionnelles (back-office) · templating multi-sites.
- **B2B** : valeur (plateaux, livraison multi-étages La Défense) · formulaire qualifié (nb personnes, fréquence, budget, date, contact → rappel sous 24h) · cas clients · catalogue PDF (formules, prix HT) · facturation pro (TVA, virement, carte achat).
- **Fidélité** : mécaniques Heypongo (gains, paliers, récompenses) · inscription 30 s (tél/email) · espace membre · parrainage.
- **Carrières** : fiches de poste (équipier, manager adjoint, chef de site…) · formulaire (nom, email, tél, CV, message) · pitch employeur.
- **FAQ** : SEO longue traîne (schéma FAQPage) · catégories commande/retrait/allergènes/fidélité/B2B/carrière.
- **Contact** : formulaire segmenté par intention (client, B2B, presse, recrutement, partenariat) · email, tél, réseaux, adresse siège.
- **Footer** : colonnes Marque/Commander/Entreprises/Carrières/Légal · réseaux (TikTok, Instagram, LinkedIn, Facebook) · horaires + adresse CNIT.

---

## 5. Fonctionnalités transverses

- **Mobile-first** (80 %+ du trafic) : sticky bottom bar « Commander » toujours visible · menu hamburger au pouce · lazy loading images · WebP/AVIF.
- **Recherche interne** : produits, FAQ, articles.
- **Multilingue** : FR + EN, architecture prête pour d'autres langues sans refonte.
- **SEO structuré** : JSON-LD par template (Restaurant, Menu, FAQ, LocalBusiness).

---

## 6. SEO & acquisition

- **SEO local prioritaire** : Google Business Profile (CNIT) optimisé · cohérence **NAP** stricte (nom/adresse/téléphone) sur tout le web.
- **Mots-clés** : « sandwich La Défense », « restaurant CNIT », « déjeuner rapide Puteaux », « click and collect La Défense », « plateau repas entreprise Puteaux », « meilleur sandwich Paris », « sandwicherie CNIT ».
- **Annuaires** : PagesJaunes, TripAdvisor, TheFork, Yelp (cohérence NAP).
- **Domaines** : 3 domaines qui redirigent vers 1 site unique.

---

## 7. Choix technique

**Décision (2026-06-14) : app-first.** Objectif prioritaire = présence App Store + Play Store, rendu type application.

Stack retenue : **React + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui**, emballage **Capacitor** pour iOS/Android. Code dans le dossier `app/`.
- Rendu app (navigation par onglets en bas, écrans), pas un long site qui scrolle.
- shadcn/ui pour des composants soignés et cohérents.
- Capacitor réutilise 100 % du code web pour produire les apps natives.

> Le SEO web (priorité du brief original) reste un livrable distinct (site Astro) à traiter **après** l'app, en réutilisant contenu et données. Une app ne s'indexe pas sur Google.

**Contrainte environnement** : le registre `ui.shadcn.com` et le CDN navigateur sont bloqués par la politique réseau (npm reste accessible). Conséquence : composants shadcn câblés **manuellement** (même résultat) ; pas de capture d'écran générable ici (à voir en local via `npm run dev`).

---

## 8. Plan par tranches

| # | Tranche | Contenu | Statut |
|---|---|---|---|
| 1 | **Fondations app** | Projet React+Vite+Tailwind+shadcn, thème Claubert, shell mobile (onglets bas), header | ✅ Fait |
| 2 | **Écrans de base** | Accueil (hero + blocs), Menu (filtres/badges/allergènes), Panier (créneau retrait), Compte (fidélité) | ✅ Fait (v1) |
| 3 | **Contenu & écrans secondaires** | Notre histoire, Nos adresses (carte), Carrières, Contact, FAQ, détail produit | ⬜ À faire |
| 4 | **Multilingue FR/EN** | i18n, bascule de langue fonctionnelle | ⬜ À faire |
| 5 | **B2B + Fidélité** | Écrans + formulaires qualifiés | ⬜ À faire |
| 6 | **Branchements tiers** | Innovorder (commande/paiement), Heypongo (points), avis Google, Instagram — à réception des clés | ⬜ À faire |
| 7 | **Finitions** | Perfs, accessibilité, mentions légales, recette | ⬜ À faire |
| 8 | **Capacitor / Stores** | Emballage iOS+Android, icônes/splash, build, publication App Store + Play Store | ⬜ À faire |

Règle de travail : on valide une tranche avant la suivante · commit + push à chaque tranche terminée.

---

## 8 bis. Stratégie App mobile & Stores

Le site est web (Astro). Pour être présent sur **App Store** et **Play Store**, on procède en 2 temps :

1. **PWA** (Progressive Web App) : intégrée dès le site (manifest + service worker). App installable depuis le navigateur, icône écran d'accueil, mode plein écran, offline partiel. **Gratuit, aucun store requis.**
2. **Capacitor** : on emballe le site dans une coquille native pour produire une vraie app iOS + Android publiable. Réutilise 100 % du site, ouvre les notifications push.

> ⚠️ **Risque App Store (règle 4.2)** : Apple refuse les apps « simple site emballé ». L'app doit apporter une vraie valeur (commande click & collect via Innovorder, fidélité Heypongo, push). À anticiper : on publie sur les stores **une fois ces intégrations branchées** (après tranche 6).

**Objectif confirmé : publication sur App Store ET Play Store (les deux).**

**Prérequis stores (à la charge du client) :**
- [ ] Compte **Apple Developer** — 99 $/an — ✅ *client peut le créer*
- [ ] Compte **Google Play Console** — 25 $ (une fois) — ✅ *client peut le créer*
- [x] Accès à un **Mac** pour compiler l'app iOS — ✅ *client en dispose*
- [ ] Assets app : icône haute résolution, splash screen, captures d'écran pour les fiches store
- [ ] Textes fiches store (description, mots-clés) FR + EN

---

## 9. À fournir par le client (au fil de l'eau)

- [ ] Comptes / clés API : Innovorder, Heypongo
- [ ] Accès Google Business Profile + lien avis
- [ ] Photos produits **réelles** (menu) + photos emplacement
- [ ] Contenu storytelling (chef Ferrandi, sourcing)
- [ ] Données menu (noms, descriptifs, prix Classique/Signature, allergènes, kcal)
- [ ] Coordonnées exactes (NAP : nom, adresse CNIT, téléphone), horaires
- [ ] Fiches de poste + textes B2B + catalogue PDF
- [ ] Les 3 noms de domaine
- [ ] Réseaux sociaux (TikTok, Instagram, LinkedIn, Facebook)
- [ ] Mentions légales / CGV / politiques (ou validation des modèles)

# Claubert — App

Application mobile Claubert (sandwicherie, CNIT La Défense).
Stack : React + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui. PWA installable. Emballage Capacitor pour App Store / Play Store.

## Développement

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # build production (dist/)
npm run preview    # sert le build (http://localhost:4173)
npm run lint
```

Astuce : pour le rendu "app", réduisez la fenêtre du navigateur en format mobile (l'app est centrée, largeur max ~448px).

## Structure

- `src/App.tsx` — routeur (react-router) + providers (i18n, panier).
- `src/components/Layout.tsx` — coquille : header (bascule FR/EN, retour) + barre d'onglets bas.
- `src/screens/` — écrans : Accueil, Menu, Détail produit, Panier, Compte, Histoire, Adresses, Carrières, Contact, FAQ, B2B, Fidélité.
- `src/components/ui/` — composants shadcn (câblés manuellement, registre bloqué en environnement web).
- `src/i18n/` — bilingue FR/EN (`dict.ts` + `I18nProvider`).
- `src/data/menu.ts` — données menu (provisoires).
- `src/store/cart.tsx` — panier.

## Stores (Capacitor)

Comptes requis : Apple Developer (99 $/an), Google Play (25 $). iOS nécessite un Mac.

```bash
# Sur le Mac, une fois :
npm run cap:add:ios
npm run cap:add:android

# À chaque mise à jour :
npm run cap:ios       # build + sync + ouvre Xcode
npm run cap:android   # build + sync + ouvre Android Studio
```

`appId` : `fr.claubert.app` (voir `capacitor.config.ts`).

## À brancher (services tiers)

- **Innovorder** : commande, paiement (CB, Apple Pay, titres-resto), stock temps réel.
- **Heypongo** : programme fidélité (points, paliers, parrainage).
- Avis Google, feed Instagram, liens Uber Eats / Deliveroo.

Les emplacements sont marqués avec une icône prise (🔌) dans l'interface.

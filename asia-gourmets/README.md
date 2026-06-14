# Asia Gourmets — site vitrine

Site vitrine du restaurant **Asia Gourmets** (91 rue Cambronne, 75015 Paris),
construit avec **React + Vite + TypeScript + Tailwind CSS + composants shadcn/ui**.

## Démarrer

```bash
npm install
npm run dev      # serveur de dev sur http://localhost:5173
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Contenu

- **Hero** plein écran + appels à l'action
- **Carte** interactive par catégories (`src/data/menu.ts`)
- **Galerie** photos
- **Réservation** en ligne (formulaire front-end — à connecter à un backend/e-mail)
- **Carte Google Maps** intégrée + infos & horaires

## À personnaliser

- Les **prix** et le **menu** sont indicatifs (basés sur les avis publics) → mettre la vraie carte dans `src/data/menu.ts`.
- Les **horaires** sont marqués « à confirmer » dans `src/components/MapSection.tsx`.
- Les **photos** sont des visuels libres Unsplash → remplacer par les vraies photos du restaurant.
- Le **formulaire de réservation** ne fait pas d'envoi réel : brancher un service (e-mail, API) dans `src/components/Reservation.tsx`.

## Thème

Palette « Jade & Crème » définie via variables CSS dans `src/index.css`.

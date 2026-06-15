import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  // L'app est l'experience principale : servie a la racine /mon-projet/.
  base: '/mon-projet/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Claubert — Sandwicherie',
        short_name: 'Claubert',
        description: "Sandwicherie d'auteur au CNIT, La Défense. Click & collect.",
        lang: 'fr',
        theme_color: '#c8431f',
        background_color: '#fbf7f0',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/mon-projet/',
        start_url: '/mon-projet/',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

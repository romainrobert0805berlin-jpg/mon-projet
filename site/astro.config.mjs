import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// Site SEO Claubert. Servi à la racine de GitHub Pages : /mon-projet/
export default defineConfig({
  site: 'https://romainrobert0805berlin-jpg.github.io',
  base: '/mon-projet',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
})

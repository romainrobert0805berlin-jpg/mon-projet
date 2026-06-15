// Service worker "auto-destructeur".
// Objectif : remplacer l'ancien service worker de l'app (jadis deploye sous /mon-projet/)
// qui resservait l'app en cache a la place du site. Il vide les caches, se desinstalle,
// puis recharge les onglets ouverts pour afficher le vrai site.
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys()
        await Promise.all(keys.map((k) => caches.delete(k)))
        await self.registration.unregister()
        const clients = await self.clients.matchAll({ type: 'window' })
        for (const client of clients) {
          client.navigate(client.url)
        }
      } catch (e) {
        // ignore
      }
    })()
  )
})

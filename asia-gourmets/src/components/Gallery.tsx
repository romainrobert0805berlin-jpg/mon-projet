const photos = [
  { src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80", alt: "Nems croustillants" },
  { src: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=700&q=80", alt: "Bol de phở" },
  { src: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80", alt: "Wok de légumes" },
  { src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80", alt: "Nouilles sautées" },
  { src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=700&q=80", alt: "Raviolis vapeur" },
  { src: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=700&q=80", alt: "Plat épicé" },
]

export function Gallery() {
  return (
    <section id="galerie" className="bg-secondary/40 py-24">
      <div className="container">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">En images</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Quelques plats</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Photos d'illustration — venez découvrir les vraies assiettes sur place&nbsp;!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((p) => (
            <div key={p.src} className="group overflow-hidden rounded-xl">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

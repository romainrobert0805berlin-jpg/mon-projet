export function Footer() {
  return (
    <footer className="bg-foreground py-10 text-center text-sm text-white/70">
      <div className="container space-y-2">
        <p className="font-serif text-lg text-white">
          <span className="text-accent">◆</span> Asia Gourmets
        </p>
        <p>91 rue Cambronne, 75015 Paris · 01 42 73 02 07</p>
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Asia Gourmets — Site vitrine d'exemple. Photos d'illustration (Unsplash), horaires et prix à confirmer.
        </p>
      </div>
    </footer>
  )
}

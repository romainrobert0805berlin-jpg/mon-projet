import * as React from "react"
import type { Product, ProteinKey } from "@/data/menu"
import { cn } from "@/lib/utils"

// Photos produits (placeholders Unsplash, chargées par le navigateur).
// Remplacer par les vraies photos Claubert quand elles seront prêtes.
// Si une URL ne charge pas, on retombe automatiquement sur l'illustration.
const photos: Record<string, string> = {
  rome: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=70",
  nievre: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=70",
  lisbonne: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=800&q=70",
  bali: "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?auto=format&fit=crop&w=800&q=70",
  paris: "https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&w=800&q=70",
  "kuala-lumpur":
    "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=70",
}

interface Palette {
  bg: [string, string]
  bunTop: [string, string]
  bunBottom: [string, string]
  filling: string
  extra?: string
  veg: string
  garnish: string
  sesame: boolean
}

const palettes: Record<ProteinKey, Palette> = {
  chicken: {
    bg: ["#fbe7c2", "#f1ca8a"],
    bunTop: ["#ecbb63", "#d89a3c"],
    bunBottom: ["#e3ab4f", "#cf8f34"],
    filling: "#ecd3a2",
    veg: "#7cb342",
    garnish: "#e2563b",
    sesame: true,
  },
  beef: {
    bg: ["#f6dcb6", "#e9bd7e"],
    bunTop: ["#e3a857", "#c9882f"],
    bunBottom: ["#d99a45", "#bd7d2a"],
    filling: "#8a4f2e",
    extra: "#f3c948",
    veg: "#7cb342",
    garnish: "#e2563b",
    sesame: true,
  },
  fish: {
    bg: ["#f7e2d6", "#f0c6b2"],
    bunTop: ["#e7d6ab", "#d2b87c"],
    bunBottom: ["#dcc896", "#c6a96c"],
    filling: "#f0a18d",
    veg: "#8fbf6a",
    garnish: "#a7cf72",
    sesame: false,
  },
  cheese: {
    bg: ["#f6ecc6", "#ecd88f"],
    bunTop: ["#e7c373", "#d3a847"],
    bunBottom: ["#dcb65f", "#c49a3a"],
    filling: "#f4d35e",
    extra: "#e8a83a",
    veg: "#7cb342",
    garnish: "#9c6b3f",
    sesame: false,
  },
  vegetal: {
    bg: ["#eaf0cf", "#d3e09a"],
    bunTop: ["#e3b15a", "#cd9233"],
    bunBottom: ["#d7a449", "#bd862c"],
    filling: "#9a7b3f",
    extra: "#e7d2a0",
    veg: "#6fae3f",
    garnish: "#e2563b",
    sesame: true,
  },
}

function lettucePath(y: number) {
  const x0 = 44
  const x1 = 196
  const bump = 19
  const h = 12
  let d = `M ${x0} ${y}`
  for (let x = x0; x < x1; x += bump) d += ` q ${bump / 2} ${-h} ${bump} 0`
  d += ` L ${x1} ${y + 12} L ${x0} ${y + 12} Z`
  return d
}

function Illustration({ product, className }: { product: Product; className?: string }) {
  const p = palettes[product.protein]
  const uid = product.id
  return (
    <svg
      viewBox="0 0 240 170"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={product.name}
    >
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.bg[0]} />
          <stop offset="1" stopColor={p.bg[1]} />
        </linearGradient>
        <linearGradient id={`bunTop-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.bunTop[0]} />
          <stop offset="1" stopColor={p.bunTop[1]} />
        </linearGradient>
        <linearGradient id={`bunBot-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.bunBottom[0]} />
          <stop offset="1" stopColor={p.bunBottom[1]} />
        </linearGradient>
        <radialGradient id={`glow-${uid}`} cx="0.5" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="240" height="170" fill={`url(#bg-${uid})`} />
      <rect x="0" y="0" width="240" height="170" fill={`url(#glow-${uid})`} />
      <g fill="#ffffff" opacity="0.18">
        <circle cx="34" cy="34" r="4" />
        <circle cx="210" cy="28" r="6" />
        <circle cx="198" cy="120" r="4" />
        <circle cx="40" cy="128" r="5" />
      </g>
      <ellipse cx="120" cy="150" rx="78" ry="10" fill="#000000" opacity="0.08" />
      <rect x="50" y="116" width="140" height="26" rx="13" fill={`url(#bunBot-${uid})`} />
      <rect x="48" y="98" width="144" height="22" rx="9" fill={p.filling} />
      {p.extra && (
        <rect x="52" y="92" width="136" height="12" rx="6" fill={p.extra} opacity="0.95" />
      )}
      <circle cx="66" cy="104" r="9" fill={p.garnish} />
      <circle cx="174" cy="104" r="9" fill={p.garnish} />
      <path d={lettucePath(94)} fill={p.veg} />
      <path d={`M 46 100 Q 120 40 194 100 Z`} fill={`url(#bunTop-${uid})`} />
      <path
        d={`M 46 100 Q 120 40 194 100`}
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      {p.sesame && (
        <g fill="#fff7e6">
          <ellipse cx="100" cy="78" rx="3" ry="2" transform="rotate(-20 100 78)" />
          <ellipse cx="120" cy="70" rx="3" ry="2" transform="rotate(10 120 70)" />
          <ellipse cx="140" cy="78" rx="3" ry="2" transform="rotate(25 140 78)" />
          <ellipse cx="110" cy="86" rx="3" ry="2" transform="rotate(-5 110 86)" />
          <ellipse cx="131" cy="86" rx="3" ry="2" transform="rotate(15 131 86)" />
        </g>
      )}
    </svg>
  )
}

export function ProductImage({
  product,
  className,
}: {
  product: Product
  className?: string
}) {
  const [failed, setFailed] = React.useState(false)
  const src = photos[product.id]

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={product.name}
        loading="lazy"
        className={cn("object-cover", className)}
        onError={() => setFailed(true)}
      />
    )
  }
  return <Illustration product={product} className={className} />
}

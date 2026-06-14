import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useI18n } from "@/i18n/I18nProvider"

const faqs: { q: { fr: string; en: string }; a: { fr: string; en: string } }[] = [
  {
    q: { fr: "Comment commander en click & collect ?", en: "How do I order for click & collect?" },
    a: {
      fr: "Choisissez vos produits, ajoutez-les au panier, sélectionnez un créneau de retrait, puis payez en ligne. Vous récupérez votre commande sans attendre.",
      en: "Pick your items, add them to the cart, choose a pickup slot, then pay online. Collect your order with no wait.",
    },
  },
  {
    q: { fr: "Où récupérer ma commande ?", en: "Where do I collect my order?" },
    a: {
      fr: "Au comptoir Claubert du CNIT, La Défense, au créneau choisi.",
      en: "At the Claubert counter in the CNIT, La Défense, at your chosen slot.",
    },
  },
  {
    q: { fr: "Les allergènes sont-ils indiqués ?", en: "Are allergens listed?" },
    a: {
      fr: "Oui, chaque fiche produit indique les allergènes (règlement INCO 1169/2011) et les calories quand disponibles.",
      en: "Yes, each product page lists allergens (INCO 1169/2011 regulation) and calories when available.",
    },
  },
  {
    q: { fr: "Comment fonctionne la fidélité ?", en: "How does the loyalty program work?" },
    a: {
      fr: "Inscrivez-vous en 30 secondes, cumulez des points à chaque commande et débloquez des récompenses. Le parrainage est inclus.",
      en: "Sign up in 30 seconds, earn points with every order and unlock rewards. Referral is included.",
    },
  },
  {
    q: { fr: "Proposez-vous des plateaux repas pour entreprises ?", en: "Do you offer catering for companies?" },
    a: {
      fr: "Oui, nous livrons des plateaux repas à vos étages à La Défense. Demandez un devis, réponse sous 24h.",
      en: "Yes, we deliver catering to your floors at La Défense. Request a quote, reply within 24h.",
    },
  },
  {
    q: { fr: "Comment rejoindre l'équipe ?", en: "How can I join the team?" },
    a: {
      fr: "Consultez nos postes ouverts dans la section Carrières et postulez en quelques secondes.",
      en: "Check our open positions in the Careers section and apply in seconds.",
    },
  },
]

export function FaqScreen() {
  const { t, lang } = useI18n()
  return (
    <div className="flex flex-col gap-4 pb-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
          {t("page.faq")}
        </p>
        <h1 className="mt-1 text-2xl font-semibold">{t("faq.title")}</h1>
      </div>
      <Accordion type="single" collapsible className="rounded-xl border border-border px-4">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{f.q[lang]}</AccordionTrigger>
            <AccordionContent>{f.a[lang]}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

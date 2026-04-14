import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CTASection from '../components/CTASection'
import { useSEO } from '../hooks/useSEO'

const CALENDLY = 'https://calendly.com/contact-klinstudio-fr'

const services = [
  {
    icon: '✨',
    title: 'Formule Auto Essentielle',
    price: '50€',
    duration: '1h',
    tag: 'Auto',
    desc: 'Le nettoyage parfait pour un véhicule entretenu. Redonne un aspect propre et frais à votre habitacle.',
    features: [
      'Aspiration complète (habitacle + coffre)',
      'Dépoussiérage et dégraissage des plastiques (tableau de bord, portières)',
      'Finition des plastiques — protection anti-UV et antistatique',
      'Nettoyage des vitres intérieures et rétroviseurs (zéro trace)',
      'Parfum habitacle « Propre »',
    ],
    notes: [
      'Besoin d\'une prise électrique à moins de 40m',
      'Supplément 4×4 / SUV / 7 places : +10€ (à régler sur place)',
    ],
  },
  {
    icon: '💎',
    title: 'Formule Auto Premium',
    price: '75€',
    duration: '1h40',
    tag: 'Auto',
    featured: true,
    desc: 'Le grand nettoyage en profondeur. Idéal pour les sièges tachés, les auréoles ou les véhicules familiaux.',
    features: [
      'Tout ce que comprend la formule Essentielle',
      'Shampouinage des sièges par injection-extraction (élimine les taches et la saleté incrustée)',
      'Shampouinage des tapis de sol et moquettes',
      'Brossage minutieux de tous les textiles',
      'Nettoyage approfondi des seuils de portes',
    ],
    notes: [
      'Temps de séchage nécessaire après intervention',
      'Besoin d\'une prise électrique à moins de 40m',
      'Supplément 4×4 / SUV / 7 places : +15€ (à régler sur place)',
    ],
  },
  {
    icon: '🛋️',
    title: 'Nettoyage Canapé & Textile',
    price: 'À partir de 40€',
    duration: '45 min',
    tag: 'Textile',
    desc: 'Rénovation professionnelle de vos textiles par injection-extraction. Élimine les taches, les mauvaises odeurs, les acariens et ravive les couleurs.',
    features: [
      'Technique : injection-extraction + aspiration haute puissance',
      'Produits professionnels respectueux des fibres (Koch Chemie Pol Star)',
      'Fauteuil 1 place : 40€',
      'Canapé 2 places : 60€',
      'Canapé 3 places : 80€',
      'Canapé d\'angle (4-5 places) : 110€',
      'Canapé panoramique / En U (6 places et +) : 140€',
      'Lot de chaises tissu : sur devis (~10€/chaise)',
    ],
    notes: [
      'Prévoir un temps de séchage de 12h à 24h',
      'Merci d\'envoyer une photo du canapé après réservation pour valider le tarif exact',
    ],
  },
  {
    icon: '🛏️',
    title: 'Formule Matelas & Tapis',
    price: 'À partir de 30€',
    duration: '45 min',
    tag: 'Textile',
    desc: 'Désinfection en profondeur pour un sommeil sain. Idéal contre les allergies (acariens), la transpiration et les taches jaunâtres.',
    features: [
      'Tapis (selon taille) : à partir de 30€',
      'Matelas simple 90cm : 40€',
      'Matelas double 140cm : 60€',
      'Matelas Queen / King size 160-200cm : 80€',
      'Inclus : détachage + shampouinage + désinfection vapeur',
    ],
    notes: [
      'Le matelas ne pourra pas être utilisé le soir même — prévoir 24h de séchage ou un couchage d\'appoint',
    ],
  },
]

function ServiceBlock({ s, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`
        relative rounded-2xl p-7 border transition-all duration-300
        ${s.featured
          ? 'bg-surface-2 border-blue/30 shadow-xl shadow-blue/10'
          : 'bg-surface-2 border-white/6 hover:border-white/12'}
      `}
    >
      {s.featured && (
        <>
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue to-transparent" />
          <div className="absolute top-4 right-4">
            <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-blue rounded-full text-white">
              Best seller
            </span>
          </div>
        </>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div className="flex items-start gap-4">
          <div className="text-3xl mt-0.5">{s.icon}</div>
          <div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-blue/70 mb-1">{s.tag}</div>
            <h3 className="text-xl font-black tracking-tight">{s.title}</h3>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="inline-flex items-center gap-1.5 text-xs text-white/40 glass rounded-full px-2.5 py-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {s.duration}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-3xl font-black ${s.featured ? 'text-blue' : 'text-white'}`}>
            {s.price}
          </div>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              mt-3 inline-block px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
              ${s.featured
                ? 'bg-blue hover:bg-blue-light text-white hover:shadow-lg hover:shadow-blue/30 hover:-translate-y-0.5'
                : 'glass hover:bg-white/6 text-white/70 hover:text-white'}
            `}
          >
            Réserver
          </a>
        </div>
      </div>

      {/* Desc */}
      <p className="text-white/45 text-sm leading-relaxed mb-6">{s.desc}</p>

      {/* Features + Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/25 mb-3">Inclus</p>
          <ul className="space-y-2">
            {s.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>
        {s.notes && (
          <div>
            <p className="text-[10px] font-bold tracking-widest uppercase text-white/25 mb-3">À noter</p>
            <ul className="space-y-2">
              {s.notes.map((n) => (
                <li key={n} className="flex items-start gap-2 text-sm text-white/40">
                  <span className="text-yellow-500/70 flex-shrink-0">⚠️</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Prestations() {
  useSEO({
    title: 'Prestations & Tarifs — Nettoyage Auto, Canapé, Matelas',
    description:
      'Découvrez toutes les formules Klin Studio : Auto Essentielle 50€, Auto Premium 75€, Canapé dès 40€, Matelas dès 30€. Tarifs fixes, intervention à domicile en Île-de-France.',
    canonical: 'https://www.klinstudio.fr/prestations',
  })

  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(30,144,255,0.07) 0%, transparent 70%)',
        }} />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-blue text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-6 h-px bg-blue" /> Toutes les formules <span className="w-6 h-px bg-blue" />
            </span>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
              Nos <span className="text-gradient-blue">prestations</span>
            </h1>
            <p className="text-white/40 text-lg max-w-lg mx-auto leading-relaxed">
              Tarifs clairs, résultats professionnels. On s'équipe pour vous, directement à votre adresse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-12 pb-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-6">
            {services.map((s, i) => (
              <ServiceBlock key={s.title} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Auto Essentielle',
    price: '50€',
    duration: '1h',
    desc: 'Pour un véhicule entretenu qui a besoin d\'un bon rafraîchissement.',
    features: [
      'Aspiration complète — habitacle et coffre',
      'Dépoussiérage et dégraissage des plastiques',
      'Protection des plastiques (anti-UV)',
      'Vitres intérieures sans trace',
      'Parfum d\'habitacle',
    ],
    note: '+10€ pour 4×4, SUV ou 7 places',
  },
  {
    title: 'Auto Premium',
    price: '75€',
    duration: '1h40',
    featured: true,
    desc: 'Pour les véhicules avec des sièges tachés, des auréoles ou une saleté incrustée.',
    features: [
      'Tout ce que comprend la formule Essentielle',
      'Shampouinage des sièges par injection-extraction',
      'Shampouinage des tapis de sol et moquettes',
      'Brossage des textiles',
      'Nettoyage des seuils de portes',
    ],
    note: '+15€ pour 4×4, SUV ou 7 places',
  },
  {
    title: 'Canapé & Textile',
    price: 'Dès 40€',
    duration: '45 min',
    desc: 'Canapés, fauteuils, chaises — on élimine les taches, les odeurs et les acariens.',
    features: [
      'Fauteuil 1 place — 40€',
      'Canapé 2 places — 60€',
      'Canapé 3 places — 80€',
      'Canapé d\'angle (4-5 pl.) — 110€',
      'Panoramique / En U — 140€',
    ],
    note: 'Chaises tissu sur devis (~10€/chaise)',
  },
  {
    title: 'Matelas & Tapis',
    price: 'Dès 30€',
    duration: '45 min',
    desc: 'Désinfection en profondeur contre les acariens, la transpiration et les taches.',
    features: [
      'Tapis — à partir de 30€',
      'Matelas 90cm — 40€',
      'Matelas 140cm — 60€',
      'Matelas 160-200cm — 80€',
      'Détachage + shampouinage + désinfection',
    ],
    note: 'Prévoir 24h de séchage avant utilisation',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-blue text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-5 h-px bg-blue" /> Prestations
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-3">
            Ce qu'on fait,<br />et à quel prix.
          </h2>
          <p className="text-white/35 text-base max-w-md leading-relaxed">
            Tarifs fixes, pas de mauvaises surprises. Le règlement se fait sur place, après l'intervention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className={`
                relative rounded-2xl p-6 flex flex-col gap-5 border transition-all duration-300
                ${s.featured
                  ? 'bg-surface-2 border-blue/25 shadow-lg shadow-blue/8'
                  : 'bg-surface-2 border-white/6 hover:border-white/10'}
              `}
            >
              {s.featured && (
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue/60 to-transparent" />
              )}

              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-bold tracking-tight leading-snug">{s.title}</h3>
                  {s.featured && (
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-blue rounded-full text-white flex-shrink-0 ml-2">
                      Best seller
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-2xl font-black ${s.featured ? 'text-blue' : 'text-white'}`}>
                    {s.price}
                  </span>
                  <span className="text-white/25 text-xs">· {s.duration}</span>
                </div>
              </div>

              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>

              <div className="h-px bg-white/5" />

              <ul className="flex flex-col gap-2 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-white/55">
                    <svg className="w-3.5 h-3.5 text-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="text-[11px] text-white/20 leading-snug">{s.note}</p>

              <a
                href="https://calendly.com/contact-klinstudio-fr"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-all duration-200
                  ${s.featured
                    ? 'bg-blue hover:bg-blue-light text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue/25'
                    : 'glass hover:bg-white/5 text-white/60 hover:text-white'}
                `}
              >
                Réserver
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Link
            to="/prestations"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors"
          >
            Voir le détail complet
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

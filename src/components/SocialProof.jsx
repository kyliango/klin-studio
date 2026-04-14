import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const perks = [
  {
    title: 'On se déplace chez vous',
    desc: 'Vous n\'avez rien à faire. On arrive avec le matériel, on repart quand c\'est propre.',
  },
  {
    title: 'Injection-extraction',
    desc: 'Une technique qui va chercher la saleté en profondeur — pas juste en surface.',
  },
  {
    title: 'Produits adaptés aux textiles',
    desc: 'Des formules professionnelles qui nettoient sans abîmer les fibres.',
  },
  {
    title: 'Réservation en ligne',
    desc: 'Choisissez votre créneau sur Calendly, on confirme rapidement.',
  },
]

function MockupScreen({ src, platform, handle, followers, href, alt }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60 bg-surface-2"
      style={{ width: 210 }}
    >
      {/* Platform label */}
      <div className="absolute top-3 left-3 z-10 glass rounded-full px-2.5 py-1">
        <span className="text-[10px] font-semibold text-white/50 tracking-widest uppercase">{platform}</span>
      </div>

      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover object-top"
        style={{ maxHeight: 320 }}
      />

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white text-sm font-semibold">{handle}</div>
            <div className="text-white/35 text-xs">{followers} abonnés</div>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-blue border border-blue/30 hover:border-blue px-2.5 py-1 rounded-full transition-colors"
          >
            Suivre
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function SocialProof() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Pourquoi nous */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 text-blue text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-5 h-px bg-blue" /> Notre approche
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-3">
            Comment on travaille.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue mb-4" />
              <div className="text-sm font-semibold mb-2 leading-snug">{p.title}</div>
              <p className="text-white/35 text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 text-blue text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-5 h-px bg-blue" /> On est aussi là
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Suivez Klin Studio<br />sur les réseaux.
          </h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-start gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <MockupScreen
              src="/medias/screen insta$.PNG"
              platform="Instagram"
              handle="@klinstudio.fr"
              followers="27"
              href="https://www.instagram.com/klinstudio.fr"
              alt="Profil Instagram Klin Studio"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ marginTop: 40 }}
          >
            <MockupScreen
              src="/medias/screen tiktok.PNG"
              platform="TikTok"
              handle="@klinstudio.fr"
              followers="85"
              href="https://www.tiktok.com/@klinstudio.fr"
              alt="Profil TikTok Klin Studio"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="max-w-xs"
          >
            <p className="text-white/40 text-base leading-relaxed mb-6">
              Des avant/après, des interventions en cours, des conseils entretien.
              Tout ce qu'on fait, on le montre.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/klinstudio.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram — @klinstudio.fr
              </a>
              <a
                href="https://www.tiktok.com/@klinstudio.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.76a4.85 4.85 0 01-1.02-.07z"/>
                </svg>
                TikTok — @klinstudio.fr
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

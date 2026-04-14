import { motion } from 'framer-motion'
import { useSEO } from '../hooks/useSEO'

const CALENDLY = 'https://calendly.com/contact-klinstudio-fr'

const zones = [
  'Paris', 'Seine-et-Marne', 'Yvelines', 'Essonne',
  'Hauts-de-Seine', 'Seine-Saint-Denis', 'Val-de-Marne', "Val-d'Oise",
]

function ContactCard({ icon, label, value, href, delay }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl glass-blue flex items-center justify-center text-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-1">{label}</div>
        <div className="text-base font-semibold text-white">{value}</div>
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {href ? (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="block p-5 glass rounded-2xl hover:bg-white/5 hover:border-blue/20 transition-all duration-300 group"
        >
          {content}
        </a>
      ) : (
        <div className="block p-5 glass rounded-2xl">{content}</div>
      )}
    </motion.div>
  )
}

export default function Contact() {
  useSEO({
    title: 'Contact & Réservation — Klin Studio Île-de-France',
    description:
      'Contactez Klin Studio pour réserver un nettoyage auto, canapé ou matelas à domicile en Île-de-France. Disponible 7j/7 — réservation en ligne sur Calendly ou par téléphone au 07 56 85 27 58.',
    canonical: 'https://www.klinstudio.fr/contact',
  })

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(30,144,255,0.07) 0%, transparent 70%)',
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-blue text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-6 h-px bg-blue" /> On se parle <span className="w-6 h-px bg-blue" />
            </span>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
              Prendre <span className="text-gradient-blue">rendez-vous</span>
            </h1>
            <p className="text-white/40 text-lg max-w-md mx-auto leading-relaxed">
              Choisissez votre créneau en ligne ou contactez-nous directement. On se déplace en Île-de-France.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-8 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left: contact info */}
            <div className="flex flex-col gap-4">
              <ContactCard
                icon="📞"
                label="Téléphone"
                value="07 56 85 27 58"
                href="tel:0756852758"
                delay={0.1}
              />
              <ContactCard
                icon="📅"
                label="Réservation en ligne"
                value="calendly.com/contact-klinstudio-fr"
                href={CALENDLY}
                delay={0.2}
              />
              <ContactCard
                icon="📍"
                label="Zone d'intervention"
                value="Île-de-France — Service à domicile"
                delay={0.3}
              />
              <ContactCard
                icon="📸"
                label="Instagram"
                value="@klinstudio.fr"
                href="https://www.instagram.com/klinstudio.fr"
                delay={0.4}
              />
              <ContactCard
                icon="🎵"
                label="TikTok"
                value="@klinstudio.fr"
                href="https://www.tiktok.com/@klinstudio.fr"
                delay={0.5}
              />

              {/* Zone tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-5 glass rounded-2xl"
              >
                <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-3">Départements couverts</p>
                <div className="flex flex-wrap gap-2">
                  {zones.map((z) => (
                    <span
                      key={z}
                      className="text-xs px-3 py-1 rounded-full bg-blue/8 border border-blue/15 text-blue/80"
                    >
                      {z}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: CTA box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden"
            >
              {/* Glow top */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue/50 to-transparent" />

              <div className="glass-blue rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center gap-6">
                {/* Calendar icon */}
                <div className="w-20 h-20 rounded-2xl bg-blue/10 border border-blue/20 flex items-center justify-center text-4xl animate-float">
                  📅
                </div>

                <div>
                  <h2 className="text-2xl font-black tracking-tight mb-3">
                    Réservez votre créneau
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                    Choisissez la date et l'heure qui vous conviennent. La réservation est rapide, simple et gratuite.
                  </p>
                </div>

                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-blue hover:bg-blue-light text-white font-bold text-base rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue/30 flex items-center justify-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Ouvrir Calendly
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>

                <div className="h-px w-full bg-white/5" />

                <a
                  href="tel:0756852758"
                  className="w-full py-3 glass hover:bg-white/5 text-white/70 hover:text-white font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02L6.62 10.79z"/>
                  </svg>
                  Appeler le 07 56 85 27 58
                </a>

                <p className="text-white/20 text-xs">
                  Réponse rapide · Déplacement gratuit · Île-de-France
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

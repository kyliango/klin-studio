import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTASection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(30,144,255,0.06) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-flex items-center gap-2 text-blue text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-5 h-px bg-blue" /> Prendre rendez-vous
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-tight">
            Prêt à redonner vie<br />
            <span className="text-blue">à votre intérieur ?</span>
          </h2>

          <p className="text-white/40 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Choisissez une date sur Calendly. On s'occupe du reste.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/contact-klinstudio-fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-9 py-4 bg-blue hover:bg-blue-light text-white font-semibold text-base rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue/30"
            >
              Réserver en ligne
            </a>
            <a
              href="tel:0756852758"
              className="inline-flex items-center gap-2 px-9 py-4 glass hover:bg-white/5 text-white/60 hover:text-white font-medium text-base rounded-xl transition-all duration-200"
            >
              07 56 85 27 58
            </a>
          </div>

          <p className="text-white/20 text-sm mt-8">
            Service à domicile · Île-de-France · Réponse rapide
          </p>
        </motion.div>
      </div>
    </section>
  )
}

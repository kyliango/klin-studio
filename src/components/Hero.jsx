import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref    = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const scale   = useTransform(scrollYProgress, [0, 0.55], [1, 1.07])
  const yText   = useTransform(scrollYProgress, [0, 0.55], [0, -50])

  return (
    <section ref={ref} className="relative w-full h-screen min-h-[680px] overflow-hidden flex items-center">

      {/* Vidéo de fond */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <video
          src="/medias/aebe32ca-65d1-4dca-8315-35bf702bac82.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </motion.div>

      {/* Grille subtile */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30,144,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Contenu */}
      <motion.div
        style={{ opacity, y: yText }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full"
      >
        <div className="max-w-xl">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            <span className="text-white/50 text-xs font-medium tracking-widest uppercase">
              Île-de-France · À domicile
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="text-5xl sm:text-6xl lg:text-[68px] font-black leading-[1.03] tracking-tight mb-7"
          >
            Votre intérieur,
            <br />
            <span className="text-blue">nettoyé</span> comme
            <br />
            au premier jour.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46 }}
            className="text-white/50 text-[17px] leading-relaxed mb-10 max-w-md"
          >
            Nettoyage intérieur auto, canapé et matelas par injection-extraction.
            On se déplace chez vous avec tout le matériel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="https://calendly.com/contact-klinstudio-fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-blue hover:bg-blue-light text-white font-semibold text-[15px] rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue/30"
            >
              Prendre rendez-vous
            </a>
            <a
              href="tel:0756852758"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 glass hover:bg-white/5 text-white/70 hover:text-white font-medium text-[15px] rounded-xl transition-all duration-200"
            >
              07 56 85 27 58
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex gap-10 mt-14 pt-8 border-t border-white/8"
          >
            {[
              { value: 'Dès 30€',     label: 'Pour un tapis' },
              { value: 'Dès 50€',     label: 'Pour une voiture' },
              { value: 'À domicile',  label: 'On se déplace' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-bold text-white leading-none">{s.value}</div>
                <div className="text-xs text-white/30 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
        />
      </motion.div>
    </section>
  )
}

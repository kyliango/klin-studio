import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import CTASection from '../components/CTASection'
import { useSEO } from '../hooks/useSEO'

const videos = [
  '/medias/29eec905-eea7-4edb-ae4e-562d5f088fe4.mp4',
  '/medias/cf567bf2-e93e-40c8-9201-c2eeaffed69b.mp4',
  '/medias/97827086-e824-48a3-b7d8-ae03538376c0.mp4',
]

function VideoCard({ src, index }) {
  const ref      = useRef(null)
  const videoRef = useRef(null)
  const inView   = useInView(ref, { once: true, margin: '-60px' })
  const [playing, setPlaying] = useState(false)

  const handleHoverStart = () => {
    videoRef.current?.play()
    setPlaying(true)
  }
  const handleHoverEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setPlaying(false)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: '9/16' }}
    >
      <div
        className="absolute inset-0 rounded-2xl border-2 z-20 pointer-events-none transition-all duration-300"
        style={{ borderColor: playing ? 'rgba(30,144,255,0.5)' : 'rgba(255,255,255,0.07)' }}
      />

      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-black/60 rounded-full z-10" />

      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25 z-10" />

      <AnimatePresence>
        {!playing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            className="absolute top-0 left-0 right-0 h-0.5 bg-blue z-20 origin-left"
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Realisations() {
  useSEO({
    title: 'Réalisations — Avant/Après Nettoyage Auto & Textile',
    description:
      'Découvrez les réalisations de Klin Studio : nettoyage intérieur automobile, canapés et matelas à domicile en Île-de-France. Des résultats concrets, visibles immédiatement.',
    canonical: 'https://www.klinstudio.fr/realisations',
  })

  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(30,144,255,0.07) 0%, transparent 70%)',
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-blue text-xs font-semibold tracking-widest uppercase mb-5">
              <span className="w-5 h-px bg-blue" /> Portfolio
            </span>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
              Nos <span className="text-gradient-blue">réalisations</span>
            </h1>
            <p className="text-white/40 text-lg max-w-md mx-auto leading-relaxed">
              Passez la souris sur les vidéos pour les lancer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {videos.map((src, i) => (
              <VideoCard key={src} src={src} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-14"
          >
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
              <span className="text-white/35 text-sm">
                Plus de réalisations sur{' '}
                <a
                  href="https://www.instagram.com/klinstudio.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors underline underline-offset-2"
                >
                  Instagram
                </a>
                {' '}&{' '}
                <a
                  href="https://www.tiktok.com/@klinstudio.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors underline underline-offset-2"
                >
                  TikTok
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

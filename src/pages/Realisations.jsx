import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
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
  const isVisible = useInView(ref, { amount: 0.5 })

  // Autoplay quand visible, pause quand hors écran
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isVisible) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isVisible])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden group"
      style={{ aspectRatio: '9/16' }}
    >
      <div
        className="absolute inset-0 rounded-2xl border-2 z-20 pointer-events-none transition-all duration-300"
        style={{ borderColor: isVisible ? 'rgba(30,144,255,0.4)' : 'rgba(255,255,255,0.07)' }}
      />

      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10 pointer-events-none" />
    </motion.div>
  )
}

export default function Realisations() {
  useSEO({
    title: 'Réalisations — Avant/Après Nettoyage Auto & Textile',
    description:
      'Découvrez les réalisations de Klin Studio : nettoyage intérieur automobile, canapés et matelas à domicile en Île-de-France.',
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
          </motion.div>
        </div>
      </section>

      <section className="py-8 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex sm:grid sm:grid-cols-3 gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0 pb-4 sm:pb-0">
            {videos.map((src, i) => (
              <div key={src} className="snap-center flex-shrink-0 w-[70vw] sm:w-auto">
                <VideoCard src={src} index={i} />
              </div>
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

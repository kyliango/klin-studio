import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const videos = [
  '/medias/29eec905-eea7-4edb-ae4e-562d5f088fe4.mp4',
  '/medias/cf567bf2-e93e-40c8-9201-c2eeaffed69b.mp4',
  '/medias/97827086-e824-48a3-b7d8-ae03538376c0.mp4',
]

function PhoneCard({ src, index, sectionInView }) {
  const videoRef = useRef(null)
  const cardRef  = useRef(null)
  const isVisible = useInView(cardRef, { amount: 0.5 })

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
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.93 }}
      animate={sectionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex-shrink-0"
      style={{ width: 200, aspectRatio: '9/16' }}
    >
      <div
        className="relative w-full h-full rounded-[28px] overflow-hidden border-2 transition-all duration-400"
        style={{
          borderColor: isVisible ? 'rgba(30,144,255,0.4)' : 'rgba(255,255,255,0.08)',
          boxShadow: isVisible
            ? '0 0 40px rgba(30,144,255,0.15), 0 30px 60px rgba(0,0,0,0.7)'
            : '0 20px 60px rgba(0,0,0,0.6)',
        }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-1 bg-black/60 rounded-full z-10" />

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

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
      </div>
    </motion.div>
  )
}

export default function Reels() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-blue text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-5 h-px bg-blue" /> Réalisations
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Le résultat,<br />
              <span className="text-gradient-blue">vous le voyez.</span>
            </h2>
          </div>
        </motion.div>

        {/* Phones — scroll horizontal sur mobile, centré sur desktop */}
        <div className="flex items-center sm:justify-center gap-5 sm:gap-8 overflow-x-auto sm:overflow-visible px-4 sm:px-0 pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 sm:mx-0">
          {videos.map((src, i) => (
            <div
              key={src}
              className="snap-center"
              style={{ marginTop: i === 1 ? 40 : 0 }}
            >
              <PhoneCard src={src} index={i} sectionInView={inView} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.instagram.com/klinstudio.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-white/30 hover:text-white/60 text-sm transition-colors"
          >
            Plus de contenu sur @klinstudio.fr
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

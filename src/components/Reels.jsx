import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const videos = [
  '/medias/29eec905-eea7-4edb-ae4e-562d5f088fe4.mp4',
  '/medias/cf567bf2-e93e-40c8-9201-c2eeaffed69b.mp4',
  '/medias/97827086-e824-48a3-b7d8-ae03538376c0.mp4',
]

function PhoneCard({ src, index, inView }) {
  const videoRef  = useRef(null)
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
      initial={{ opacity: 0, y: 50, scale: 0.93 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="relative flex-shrink-0 cursor-pointer"
      style={{ width: 200, aspectRatio: '9/16' }}
    >
      <div
        className="relative w-full h-full rounded-[28px] overflow-hidden border-2 transition-all duration-400"
        style={{
          borderColor: playing ? 'rgba(30,144,255,0.6)' : 'rgba(255,255,255,0.08)',
          boxShadow: playing
            ? '0 0 40px rgba(30,144,255,0.2), 0 30px 60px rgba(0,0,0,0.7)'
            : '0 20px 60px rgba(0,0,0,0.6)',
          transform: playing ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.35s ease, border-color 0.3s, box-shadow 0.3s',
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
          preload="none"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Play icon */}
        <AnimatePresence>
          {!playing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-13 h-13 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blue progress bar on play */}
        <AnimatePresence>
          {playing && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              className="absolute top-0 left-0 right-0 h-0.5 bg-blue z-10 origin-left"
            />
          )}
        </AnimatePresence>
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
          <p className="text-white/35 text-sm max-w-xs leading-relaxed sm:text-right">
            Passez la souris sur une vidéo pour la lancer.
          </p>
        </motion.div>

        {/* Phones — décalage vertical alterné */}
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          {videos.map((src, i) => (
            <div
              key={src}
              style={{ marginTop: i === 1 ? 40 : 0 }}
            >
              <PhoneCard src={src} index={i} inView={inView} />
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

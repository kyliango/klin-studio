import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Accueil',      to: '/' },
  { label: 'Prestations',  to: '/prestations' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'Contact',      to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const { pathname }              = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/medias/Logo Klin studio.png"
                alt="Klin Studio"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10 group-hover:ring-blue/50 transition-all duration-300"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-blue rounded-full border-2 border-black animate-pulse-slow" />
            </div>
            <span className="font-bold text-sm tracking-widest uppercase text-white/90 group-hover:text-white transition-colors">
              Klin Studio
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative ${
                  pathname === to ? 'text-white' : 'text-white/50 hover:text-white/90'
                }`}
              >
                {label}
                {pathname === to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-blue"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0756852758"
              className="text-xs text-white/40 hover:text-white/70 transition-colors font-medium tracking-wide"
            >
              07 56 85 27 58
            </a>
            <a
              href="https://calendly.com/contact-klinstudio-fr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-blue hover:bg-blue-light text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue/30 hover:-translate-y-0.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
              Prendre RDV
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-6 h-px bg-white origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 10 : 0 }}
              className="block w-6 h-px bg-white"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-6 h-px bg-white origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map(({ label, to }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={to}
                  className={`text-3xl font-bold tracking-tight ${
                    pathname === to ? 'text-blue' : 'text-white/80 hover:text-white'
                  } transition-colors`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col items-center gap-4 mt-4"
            >
              <a
                href="https://calendly.com/contact-klinstudio-fr"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue text-white font-semibold rounded-lg text-lg"
              >
                Réserver en ligne
              </a>
              <a
                href="tel:0756852758"
                className="text-white/40 text-sm tracking-widest"
              >
                07 56 85 27 58
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

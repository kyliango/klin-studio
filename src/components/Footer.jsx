import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Accueil',      to: '/' },
  { label: 'Prestations',  to: '/prestations' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'Contact',      to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/5">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/medias/Logo Klin studio.png"
                alt="Klin Studio"
                className="h-11 w-11 rounded-full object-cover ring-1 ring-white/10"
              />
              <span className="font-bold tracking-widest uppercase text-sm">Klin Studio</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Spécialiste du nettoyage intérieur automobile & textile à domicile.
              Service professionnel en Île-de-France.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/klinstudio.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-9 h-9 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-blue/30 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@klinstudio.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-9 h-9 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-blue/30 transition-all duration-200"
                aria-label="TikTok"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.76a4.85 4.85 0 01-1.02-.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/50 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:0756852758" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-blue">📞</span> 07 56 85 27 58
                </a>
              </li>
              <li>
                <span className="text-sm text-white/50 flex items-center gap-2">
                  <span className="text-blue">📍</span> Île-de-France · À domicile
                </span>
              </li>
              <li>
                <a
                  href="https://calendly.com/contact-klinstudio-fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue hover:text-blue-light transition-colors flex items-center gap-2"
                >
                  <span>📅</span> Réserver un créneau
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-white/25 text-xs">© 2025 Klin Studio · Tous droits réservés</p>
          <p className="text-white/25 text-xs">Nettoyage auto & textile · Île-de-France</p>
        </div>
      </div>
    </footer>
  )
}

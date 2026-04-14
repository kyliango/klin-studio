import { useEffect } from 'react'

/**
 * Hook utilitaire pour gérer dynamiquement les balises SEO.
 * @param {object} params
 * @param {string} params.title        — Titre de la page (sans le suffixe de marque)
 * @param {string} params.description  — Meta description (max ~160 car.)
 * @param {string} [params.canonical]  — URL canonique complète
 */
export function useSEO({ title, description, canonical }) {
  useEffect(() => {
    // Titre
    const fullTitle = title
      ? `${title} · Klin Studio`
      : 'Klin Studio · Nettoyage Auto & Textile en Île-de-France'
    document.title = fullTitle

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', description || '')

    // Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link')
        linkCanonical.setAttribute('rel', 'canonical')
        document.head.appendChild(linkCanonical)
      }
      linkCanonical.setAttribute('href', canonical)
    }

    // Open Graph
    const ogMetas = {
      'og:title':       fullTitle,
      'og:description': description || '',
      'og:type':        'website',
      'og:image':       '/medias/Logo Klin studio.png',
      'og:locale':      'fr_FR',
    }
    if (canonical) ogMetas['og:url'] = canonical

    Object.entries(ogMetas).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    })

    // Twitter card
    const twitterMetas = {
      'twitter:card':        'summary_large_image',
      'twitter:title':       fullTitle,
      'twitter:description': description || '',
    }
    Object.entries(twitterMetas).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    })
  }, [title, description, canonical])
}

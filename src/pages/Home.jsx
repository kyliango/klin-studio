import { useSEO }   from '../hooks/useSEO'
import Hero        from '../components/Hero'
import Services    from '../components/Services'
import Reels       from '../components/Reels'
import SocialProof from '../components/SocialProof'
import CTASection  from '../components/CTASection'

export default function Home() {
  useSEO({
    title: 'Nettoyage Auto & Textile à domicile en Île-de-France',
    description:
      'Klin Studio — nettoyage intérieur voiture, canapé et matelas à domicile en Île-de-France. Intervention professionnelle par injection-extraction. Réservez en ligne sur Calendly.',
    canonical: 'https://www.klinstudio.fr/',
  })

  return (
    <>
      <Hero />
      <Services />
      <Reels />
      <SocialProof />
      <CTASection />
    </>
  )
}

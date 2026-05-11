import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Services from '@/components/Services'
import Proof from '@/components/Proof'
import Process from '@/components/Process'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section > div').forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })

    const ph = (window as any).posthog

    document.querySelectorAll<HTMLAnchorElement>('a[href^="https://buy.stripe.com"]').forEach((link) => {
      link.addEventListener('click', () => {
        if (ph) {
          ph.capture('checkout_intent', {
            tier: link.closest<HTMLElement>('[data-product]')
              ?.querySelector('[data-product-name]')
              ?.textContent?.trim(),
          })
        }
      })
    })

    document.querySelectorAll<HTMLAnchorElement>('a[href*="calendly"]').forEach((link) => {
      link.addEventListener('click', () => {
        if (ph) ph.capture('book_call_clicked')
      })
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Proof />
      <Process />
      <CTA />
      <Footer />
    </>
  )
}

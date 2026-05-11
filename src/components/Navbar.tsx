import Image from 'next/image'
import logo from '@/assets/logo.png'

const navLinks = [
  { href: '#villain', label: 'The Problem' },
  { href: '#services', label: 'Services' },
  { href: '#proof', label: 'Work' },
  { href: '#process', label: 'How It Works' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-100 bg-[rgba(10,10,10,0.85)] backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-8 max-md:px-5 flex items-center justify-between h-18 max-md:h-16">

        <a href="#" className="flex items-center relative shrink-0" style={{ width: 180, height: 48 }}>
          <Image src={logo} alt="NodeVision" fill style={{ objectFit: 'contain', objectPosition: 'left' }} />
        </a>

        <ul className="flex gap-10 list-none max-md:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-ink-muted no-underline text-sm font-medium hover:text-ink transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="inline-flex items-center gap-2 bg-accent text-canvas px-6 py-3 rounded-sm font-semibold text-sm no-underline [transition:transform_0.15s,background_0.2s] hover:bg-accent-dark hover:-translate-y-px"
        >
          Book a Call →
        </a>

      </div>
    </nav>
  )
}

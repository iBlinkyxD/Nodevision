import Image from 'next/image'
import logo from '@/assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-canvas pt-16 pb-10 border-t border-line">
      <div className="max-w-7xl mx-auto px-8 max-md:px-5">

        <div className="flex justify-between items-start flex-wrap gap-10 mb-12">
          <div>
            <a href="#" className="flex items-center relative shrink-0" style={{ width: 160, height: 40 }}>
              <Image src={logo} alt="NodeVision" fill style={{ objectFit: 'contain', objectPosition: 'left' }} />
            </a>
            <p className="text-ink-muted text-sm mt-4 max-w-[320px] leading-normal">
              AI growth infrastructure for businesses that have outgrown duct tape. Based in the USA.
            </p>
          </div>

          <div className="flex gap-12 flex-wrap">
            <div>
              <h4 className="text-ink-dim font-display text-[12px] tracking-[0.12em] uppercase font-semibold mb-4">
                Systems
              </h4>
              {['AI Audit', 'AI Agent', 'Landing Pages', 'Content Factory', 'Lead Generation', 'Growth Engine'].map((item) => (
                <a key={item} href="#services" className="block text-ink-muted no-underline text-sm py-1 hover:text-accent transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
            <div>
              <h4 className="text-ink-dim font-display text-[12px] tracking-[0.12em] uppercase font-semibold mb-4">
                Company
              </h4>
              {[
                { label: 'Work', href: '#proof' },
                { label: 'Process', href: '#process' },
                { label: 'Contact', href: '#cta' },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="block text-ink-muted no-underline text-sm py-1 hover:text-accent transition-colors duration-200">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-line pt-8 flex justify-between text-ink-dim text-[13px] flex-wrap gap-4">
          <div>© 2026 NodeVision. All rights reserved.</div>
          <div>Intelligence. Infrastructure. Impact.</div>
        </div>

      </div>
    </footer>
  )
}

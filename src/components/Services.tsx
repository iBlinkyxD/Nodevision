const tiers = [
  {
    step: 'STEP 1 — DIAGNOSE',
    name: 'AI Revenue Leak Audit',
    wound: "For businesses that know they're losing money but don't know where. We map your operation and pinpoint exactly where AI creates the most leverage.",
    anchor: 'If one inefficient process costs you $2,000/month, this pays for itself before week two.',
    price: '$500',
    priceSub: 'one-time · full business map',
    features: [
      'Full review of systems, tools, and workflows',
      'Cost-saving opportunities across marketing & ops',
      'Lead generation and acquisition optimization',
      'Custom AI "digital assistant" structure',
      'Clear roadmap to simplify and upgrade your setup',
      'AI readiness + optimization report',
    ],
    cta: 'Find My Revenue Leaks →',
    href: process.env.NEXT_PUBLIC_STRIPE_AUDIT ?? '#',
    featured: false,
  },
  {
    step: 'STEP 2 — INSTALL',
    name: 'AI Agent System',
    wound: 'For teams drowning in repetitive decisions. We deploy a custom AI operator inside your business — handling follow-up, qualification, routing, and booking.',
    anchor: 'If one missed lead costs you $500–$5,000, this only needs to save a handful to pay for itself.',
    price: '$2,500',
    priceSub: 'one-time · includes deployment & docs',
    features: [
      'Custom AI agent designed for your workflows',
      'Integration into CRM, email, forms, and systems',
      'Automated core ops — leads, follow-ups, routing',
      'AI decision logic mapped to your sales journey',
      'Prompt architecture + system instruction design',
      'Deployment, testing, refinement cycle + docs',
    ],
    cta: 'Install My Follow-Up Machine →',
    href: process.env.NEXT_PUBLIC_STRIPE_AGENT ?? '#',
    featured: true,
  },
  {
    step: 'STEP 3 — SCALE',
    name: 'Full Growth Engine',
    wound: 'For businesses ready to stop assembling and start scaling. The complete install: traffic, conversion, follow-up, automation, and reporting — engineered as one machine.',
    anchor: 'For founders done piecing it together. Custom-scoped to your revenue model.',
    price: 'Custom',
    priceSub: 'scoped on diagnostic call',
    features: [
      'Audit + agent + landing page + content + lead system',
      'Unified analytics and reporting dashboard',
      'End-to-end automation across the full funnel',
      'Quarterly optimization cycles + new feature builds',
      'Direct line to the team — no ticket queue',
      '90-day implementation, then steady-state operations',
    ],
    cta: 'Scope My Growth Engine →',
    href: '#cta',
    featured: false,
  },
]

const addons = [
  {
    name: 'Website Landing Page',
    wound: "For businesses sending traffic to pages that look nice but don't sell.",
    price: '$1,200',
    priceSub: 'one-time · includes one revision cycle',
    cta: 'Fix My Offer Page →',
    href: process.env.NEXT_PUBLIC_STRIPE_LANDING ?? '#',
  },
  {
    name: 'Content Factory',
    wound: 'For founders who need authority content that feeds pipeline — not vanity posts.',
    price: '$2,000',
    priceSub: 'setup · then $500/month optimization',
    cta: 'Build My Content Machine →',
    href: process.env.NEXT_PUBLIC_STRIPE_CONTENT ?? '#',
  },
  {
    name: 'Lead Generation System',
    wound: 'For businesses that need qualified conversations — not random names in a spreadsheet.',
    price: '$3,000',
    priceSub: 'one-time · includes performance dashboard',
    cta: 'Turn Leads Into Booked Calls →',
    href: process.env.NEXT_PUBLIC_STRIPE_LEADGEN ?? '#',
  },
]

export default function Services() {
  return (
    <section className="py-35 border-b border-line max-md:py-20" id="services">
      <div className="max-w-7xl mx-auto px-8 max-md:px-5">

        <div className="text-accent text-[13px] font-medium tracking-[0.12em] uppercase mb-6">
          The Staircase
        </div>
        <h2 className="display-tight text-[clamp(40px,6vw,72px)] mb-6 max-w-225">
          Find the leaks. <span className="text-accent">Install the fix.</span> Scale the output.
        </h2>
        <p className="text-xl text-ink-muted max-w-170 mb-16 leading-normal">
          Six systems, one installation philosophy. Start at the entry point or skip straight to
          what&apos;s bleeding. No bundles — every system stands alone.
        </p>

        {/* Tier cards */}
        <div className="grid grid-cols-3 gap-6 mb-20 max-[968px]:grid-cols-1">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              data-product
              className={[
                'relative flex flex-col py-10 px-8 transition-[border-color,transform] duration-300 hover:border-line-hover hover:-translate-y-1',
                tier.featured
                  ? 'border-2 border-accent bg-linear-to-b from-[#161A0E] to-[#111111]'
                  : 'border border-line bg-raised',
              ].join(' ')}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 bg-accent text-canvas font-display font-bold text-[11px] tracking-widest px-3 py-1 rounded-xs">
                  CORE OFFER
                </span>
              )}

              <div className="text-accent font-display font-bold text-[13px] tracking-[0.08em] mb-4">
                {tier.step}
              </div>
              <div className="font-display font-extrabold text-[32px] tracking-[-0.02em] leading-[1.1] mb-3" data-product-name>
                {tier.name}
              </div>
              <p className="text-ink-muted text-[15px] leading-normal mb-8 min-h-16.5 max-[968px]:min-h-0">
                {tier.wound}
              </p>
              <p className="text-ink-dim text-[13px] italic mb-2 leading-normal">{tier.anchor}</p>
              <div className="font-display font-extrabold text-[48px] tracking-[-0.02em] text-accent leading-none mb-2">
                {tier.price}
              </div>
              <div className="text-ink-muted text-[13px] mb-8">{tier.priceSub}</div>

              <ul className="list-none mb-8 grow">
                {tier.features.map((f) => (
                  <li key={f} className="relative pl-7 py-2.5 text-ink text-sm border-t border-line leading-normal first:border-t-0">
                    <span className="absolute left-0 top-2.5 text-accent font-semibold">→</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={[
                  'block text-center py-4 no-underline font-semibold text-sm transition-all duration-200 rounded-sm',
                  tier.featured
                    ? 'bg-accent text-canvas border border-accent hover:bg-accent-dark'
                    : 'bg-card text-ink border border-line-hover hover:bg-accent hover:text-canvas hover:border-accent',
                ].join(' ')}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Addons */}
        <div className="text-ink-muted font-display font-semibold text-[13px] tracking-[0.12em] uppercase mb-8 pt-12 border-t border-line">
          Standalone Systems — Buy What You Actually Need
        </div>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {addons.map((addon) => (
            <div
              key={addon.name}
              data-product
              className="bg-raised border border-line p-8 transition-colors duration-300 hover:border-line-hover"
            >
              <div className="font-display font-bold text-[22px] tracking-[-0.01em] mb-2" data-product-name>
                {addon.name}
              </div>
              <p className="text-ink-muted text-sm leading-normal mb-6 min-h-10.5 max-md:min-h-0">
                {addon.wound}
              </p>
              <div className="font-display font-bold text-[28px] text-accent mb-1">{addon.price}</div>
              <div className="text-ink-muted text-[13px] mb-6">{addon.priceSub}</div>
              <a
                href={addon.href}
                className="text-accent no-underline font-semibold text-sm inline-flex items-center gap-1.5 [transition:gap_0.2s] hover:gap-3"
              >
                {addon.cta}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

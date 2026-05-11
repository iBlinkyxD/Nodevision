const stats = [
  { num: '50K+', label: 'Leads generated for clients' },
  { num: '18+', label: 'Years of combined experience' },
  { num: '9+', label: 'Full installations shipped' },
]

export default function Hero() {
  return (
    <section className="pt-30 pb-35 border-b border-line relative overflow-hidden max-sm:pt-20 max-sm:pb-25">
      <div className="max-w-7xl mx-auto px-8 max-md:px-5">

        <div className="inline-flex items-center gap-2 text-accent text-[13px] font-medium tracking-[0.08em] uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
          AI Growth Infrastructure
        </div>

        <h1 className="display-tight text-[clamp(48px,8vw,104px)] mb-8 max-w-275">
          Your business is running on you.<br />
          <span className="text-accent">That&apos;s the ceiling.</span>
        </h1>

        <p className="text-[clamp(18px,2vw,22px)] text-ink-muted max-w-180 mb-12 leading-normal">
          NodeVision installs the AI systems — audits, agents, pages, pipelines, content, and lead
          engines — that take the operation off your shoulders so revenue can scale without burning
          you out.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="#cta" className="inline-flex items-center gap-2 bg-accent text-canvas px-6 py-3 rounded-sm font-semibold text-sm no-underline [transition:transform_0.15s,background_0.2s] hover:bg-accent-dark hover:-translate-y-px">
            Get My Revenue Leak Diagnosis →
          </a>
          <a href="#services" className="inline-flex items-center gap-2 bg-transparent text-ink border border-line-hover px-6 py-3 rounded-sm font-semibold text-sm no-underline transition-all duration-200 hover:bg-raised hover:border-accent">
            See the Systems
          </a>
        </div>

        <div className="mt-24 grid grid-cols-3 gap-6 pt-12 border-t border-line max-sm:grid-cols-1 max-sm:gap-8">
          {stats.map((s) => (
            <div key={s.num}>
              <div className="font-display font-extrabold text-[clamp(36px,5vw,56px)] text-accent leading-none mb-2">
                {s.num}
              </div>
              <div className="text-ink-muted text-sm tracking-[0.04em]">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

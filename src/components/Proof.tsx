const cases = [
  {
    industry: 'Tourism & Real Estate · Dominican Republic',
    name: 'Hotel Kaoba',
    outcome: 'AI systems and digital transformation for a boutique hotel and fractional ownership operation in Cabarete. Built the infrastructure that runs guest experience and investor relations as one machine.',
    systems: ['AI Agent', 'Digital Transformation', 'Lead Infrastructure'],
  },
  {
    industry: 'Premium Advisory · Dominican Republic',
    name: 'Transcend Advisory Services',
    outcome: 'Brand architecture, lead generation, and content factory build for a premium relocation and lifestyle advisory firm. Editorial brand voice, premium positioning, and a pipeline that runs itself.',
    systems: ['Brand Architecture', 'Lead Generation', 'Content Factory'],
  },
  {
    industry: 'Health & Wellness',
    name: 'Reflux Guard',
    outcome: 'Community development, automation systems, and growth marketing infrastructure for a health product brand. Turned manual outreach into a self-running engine.',
    systems: ['Community', 'Automation', 'Growth Marketing'],
  },
  {
    industry: 'Professional Education',
    name: 'Wayne Whyte Cuts',
    outcome: 'Social media management, content production, and full online academy development for a professional grooming education brand. Built the system that turns expertise into recurring revenue.',
    systems: ['Content Production', 'Online Academy', 'Social Systems'],
  },
]

export default function Proof() {
  return (
    <section className="py-35 border-b border-line max-md:py-20" id="proof">
      <div className="max-w-7xl mx-auto px-8 max-md:px-5">

        <div className="text-accent text-[13px] font-medium tracking-[0.12em] uppercase mb-6">
          Installed Systems
        </div>
        <h2 className="display-tight text-[clamp(40px,6vw,72px)] mb-6 max-w-225">
          Real businesses. <span className="text-accent">Real installations.</span>
        </h2>
        <p className="text-xl text-ink-muted max-w-170 mb-16 leading-normal">
          Range matters. We&apos;ve built for neon-aggressive direct-response brands and
          editorial-premium advisory firms. Same install philosophy, different aesthetic execution.
        </p>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {cases.map((c) => (
            <div
              key={c.name}
              className="bg-raised border border-line p-10 transition-colors duration-300 hover:border-line-hover max-md:px-6 max-md:py-8"
            >
              <div className="text-accent text-[12px] font-semibold tracking-widest uppercase mb-4">
                {c.industry}
              </div>
              <div className="font-display font-extrabold text-[28px] tracking-[-0.02em] mb-4">
                {c.name}
              </div>
              <p className="text-ink text-base leading-normal mb-6">{c.outcome}</p>
              <div className="flex flex-wrap gap-2">
                {c.systems.map((s) => (
                  <span
                    key={s}
                    className="bg-card border border-line text-ink-muted px-3 py-1.5 text-[12px] rounded-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

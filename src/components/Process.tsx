const steps = [
  {
    num: '01',
    name: 'Diagnose',
    desc: "We audit your operation, identify the bottleneck causing the most damage, and scope the build. You leave with a roadmap whether you hire us or not.",
  },
  {
    num: '02',
    name: 'Build',
    desc: 'We design, deploy, and integrate the system into your stack. CRM, calendar, inbox, content channels — wired together and tested against your real workflows.',
  },
  {
    num: '03',
    name: 'Hand-off',
    desc: "Documentation, training, and a refinement cycle. The system is yours — it runs whether we're in the room or not. That's the whole point.",
  },
]

export default function Process() {
  return (
    <section className="py-35 border-b border-line max-md:py-20" id="process">
      <div className="max-w-7xl mx-auto px-8 max-md:px-5">

        <div className="text-accent text-[13px] font-medium tracking-[0.12em] uppercase mb-6">
          How the Install Works
        </div>
        <h2 className="display-tight text-[clamp(40px,6vw,72px)] mb-16 max-w-225">
          Three phases. <span className="text-accent">No fluff.</span>
        </h2>

        <div className="grid grid-cols-3 gap-12 max-md:grid-cols-1 max-md:gap-10">
          {steps.map((step) => (
            <div key={step.num}>
              <div className="font-display font-black text-[80px] text-accent leading-none mb-6">
                {step.num}
              </div>
              <div className="font-display font-bold text-[28px] tracking-[-0.01em] mb-3">
                {step.name}
              </div>
              <p className="text-ink-muted text-[15px] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

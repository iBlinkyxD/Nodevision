const problems = [
  {
    num: '01',
    name: 'Manual follow-up',
    desc: "Leads cool off while you're in meetings. Speed-to-lead is killing your conversion rate.",
  },
  {
    num: '02',
    name: 'Scattered tools',
    desc: 'CRM, calendar, inbox, sheets, Slack — none of them talk. The duct tape is the system.',
  },
  {
    num: '03',
    name: "Pages that don't sell",
    desc: "You're driving traffic to a brochure. Pretty design, no conversion path, no offer clarity.",
  },
  {
    num: '04',
    name: 'Founder bottleneck',
    desc: "Strategy, sales, content, ops — all routed through one person. Growth has a ceiling and it's your calendar.",
  },
  {
    num: '05',
    name: 'Random content',
    desc: "Posts go out when there's time. No throughline, no pipeline contribution, no compounding authority.",
  },
  {
    num: '06',
    name: 'Pipeline by luck',
    desc: "Referrals are great until they aren't. Without a system, every dry month feels existential.",
  },
]

export default function Villain() {
  return (
    <section className="py-35 border-b border-line max-md:py-20" id="villain">
      <div className="max-w-7xl mx-auto px-8 max-md:px-5">

        <div className="text-accent text-[13px] font-medium tracking-[0.12em] uppercase mb-6">
          The Real Problem
        </div>
        <h2 className="display-tight text-[clamp(40px,6vw,72px)] mb-6 max-w-225">
          Most businesses don&apos;t need <span className="text-accent">more tools.</span>
        </h2>
        <p className="text-xl text-ink-muted max-w-170 mb-16 leading-normal">
          They need the mess cleaned up. Leads are coming in. Follow-up is slow. Offers are unclear.
          And every growth task still depends on the founder. Here&apos;s what we install AI against.
        </p>

        {/* gap-px + bg-line creates 1px divider lines between cells */}
        <div className="grid grid-cols-3 gap-px bg-line border border-line max-md:grid-cols-1">
          {problems.map((p) => (
            <div
              key={p.num}
              className="bg-canvas py-10 px-8 transition-colors duration-300 hover:bg-raised"
            >
              <div className="font-display font-bold text-accent text-sm mb-4">{p.num}</div>
              <div className="font-display font-bold text-2xl tracking-[-0.01em] mb-3">{p.name}</div>
              <div className="text-ink-muted text-[15px] leading-normal">{p.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-12 [border-left:3px_solid_var(--accent)] bg-raised max-md:p-8 max-md:px-6">
          <p className="font-display font-semibold text-[clamp(20px,2.4vw,28px)] leading-[1.3] max-w-225">
            We don&apos;t add more software to the pile. We install the systems that make the pile go
            away — and turn your operation into something that runs whether you&apos;re at the desk or not.
          </p>
        </div>

      </div>
    </section>
  )
}

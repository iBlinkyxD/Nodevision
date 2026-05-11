export default function FinalCTA() {
  return (
    <section
      className="py-40 text-center bg-[radial-gradient(ellipse_at_center,#1A1F0E_0%,var(--canvas)_70%)] max-md:py-25"
      id="cta"
    >
      <div className="max-w-7xl mx-auto px-8 max-md:px-5">
        <h2 className="display-tight text-[clamp(40px,7vw,88px)] mb-6 max-w-225 mx-auto">
          Not sure <span className="text-accent">where the leak is?</span>
        </h2>
        <p className="text-xl text-ink-muted max-w-150 mx-auto mb-12 leading-normal">
          Book a free 30-minute diagnostic call. We&apos;ll map your situation and tell you exactly
          where to start — no pressure, no pitch.
        </p>
        <a
          href="https://calendly.com/REPLACE_CALENDLY"
          className="inline-flex items-center gap-2 bg-accent text-canvas px-10 py-5 rounded-sm font-semibold text-base no-underline [transition:transform_0.15s,background_0.2s] hover:bg-accent-dark hover:-translate-y-px"
        >
          Get My Revenue Leak Diagnosis →
        </a>
      </div>
    </section>
  )
}

const POINTS = [
  'Share honest reviews on products and topics you care about',
  'Answer surveys and shape decisions for real brands',
  'Upload and share photos with the community',
  'Get paid in British Pounds, wherever you are',
]

export default function WhatIsVireon() {
  return (
    <section id="what-is-vireon" className="bg-sage border-y border-sage-line py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="aspect-[4/5] w-full max-w-md rounded-[2rem] bg-navy overflow-hidden relative">
            <img
              src="/assets/vireon-hero.jpg"
              alt="Woman in blue holding the Vireon logo"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="hidden sm:flex absolute -bottom-6 -right-6 items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg shadow-ink/10 border border-ink/[0.06]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/10 text-amber font-semibold">£</span>
            <div>
              <p className="text-sm font-semibold text-ink">Paid in GBP</p>
              <p className="text-xs text-ink-soft">Every activity, every time</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            What is Vireon?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Vireon connects everyday people across Africa with brands that want
            to hear from them. Share what you think, complete short tasks, and
            get rewarded in British Pounds & no special skills required,
            just your honest opinion.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo text-white">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6.5l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[15px] text-ink-soft">{point}</span>
              </li>
            ))}
          </ul>

          
          <a
            href="#final-cta"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-indigo px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm shadow-indigo/30 hover:bg-indigo-deep transition-colors"
          >
            Join Vireon
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
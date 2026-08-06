const STEPS = [
  {
    number: '01',
    title: 'Create your account',
    description: 'Sign up in minutes with just your name and email address.',
  },
  {
    number: '02',
    title: 'Choose an activity',
    description: 'Pick from reviews, surveys, or photo uploads based on what fits your day.',
  },
  {
    number: '03',
    title: 'Complete and get paid',
    description: 'Finish the activity and receive your reward in British Pounds.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Get started in three simple steps
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            No experience needed &mdash; just an honest opinion and a few
            minutes to spare.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-semibold text-indigo tabular-nums">
                  {step.number}
                </span>
                <span className="h-px flex-1 bg-ink/10" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-xl text-ink">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                {step.description}
              </p>
              {i < STEPS.length - 1 && (
                <span className="hidden sm:block absolute top-2 -right-4 text-ink/15">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

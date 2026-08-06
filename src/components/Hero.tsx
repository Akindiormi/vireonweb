import { useState } from 'react'
import ActivityTicker from './ActivityTicker'
import VireonOnboardingFlow from './vireon-onboarding'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="font-display font-semibold text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Your opinions are
            <br />
            <span className="text-indigo">worth something.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            Join a growing community across Africa earning by sharing reviews,
            answering surveys, and uploading photos. Every task pays out in
            British Pounds.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm shadow-indigo/30 hover:bg-indigo-deep transition-colors cursor-pointer"
            >
              Get started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-ink/10 px-7 py-3.5 text-[15px] font-semibold text-ink hover:border-ink/25 transition-colors"
            >
              See how it works
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="sr-only">Members</dt>
              <dd className="font-display font-semibold text-2xl text-ink">212,900+</dd>
              <p className="text-sm text-ink-soft">active members</p>
            </div>
            <div>
              <dt className="sr-only">Payout method</dt>
              <dd className="font-display font-semibold text-2xl text-ink">GBP</dd>
              <p className="text-sm text-ink-soft">payouts, anywhere</p>
            </div>
            <div>
              <dt className="sr-only">Support</dt>
              <dd className="font-display font-semibold text-2xl text-ink">24/7</dd>
              <p className="text-sm text-ink-soft">member support</p>
            </div>
          </dl>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ActivityTicker />
        </div>
      </div>

      <VireonOnboardingFlow
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
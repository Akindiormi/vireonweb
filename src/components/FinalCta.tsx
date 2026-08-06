import { useState } from 'react'
import VireonOnboardingFlow from './vireon-onboarding'

export default function FinalCta() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="final-cta" className="bg-sage border-y border-sage-line">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 py-24 text-center">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
          Ready to get <span className="text-indigo">started?</span>
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Join Vireon today and start turning simple activities into rewards
          &mdash; paid in British Pounds.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-indigo px-8 py-4 text-base font-semibold text-white shadow-sm shadow-indigo/30 hover:bg-indigo-deep transition-colors cursor-pointer"
        >
          Join Vireon today
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <VireonOnboardingFlow
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
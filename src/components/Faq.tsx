import { useState } from 'react'

const FAQS = [
  {
    q: 'What is Vireon?',
    a: 'Vireon is a global activity platform where members share reviews, complete surveys, and upload photos in exchange for rewards paid in British Pounds.',
  },
  {
    q: 'How do I get started?',
    a: 'Create an account with your name and email, choose an activity that suits you, and complete it to start earning.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'No. Creating a Vireon account and browsing available activities is completely free.',
  },
  {
    q: 'How do activities work?',
    a: 'Each activity has clear instructions and an estimated time to complete. Once submitted, it’s reviewed and your reward is added to your balance.',
  },
  {
    q: 'How do rewards work?',
    a: 'Rewards vary by activity and are shown before you start. Payouts are made in British Pounds and processed securely through Paystack.',
  },
  {
    q: 'How do I contact support?',
    a: 'Reach our team any time via the Contact Us page or support@vireonofficial.com.ng — we aim to respond within 24 hours.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Vireon does not charge fees for participation, so there is nothing to refund. See our Refund Policy for full details.',
  },
  {
    q: 'How do I cancel my account?',
    a: 'You can close your account any time from your settings, or by contacting support directly.',
  },
]

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-ink/10 py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-semibold text-ink">{q}</span>
        <span
          className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-ink/15 text-ink transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr] mt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[15px] leading-relaxed text-ink-soft pr-10">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.4fr] gap-14">
        <div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Got questions?
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Find answers to the most commonly asked questions about Vireon.
          </p>
          <p className="mt-6 text-[15px] text-ink-soft">
            Can&rsquo;t find what you&rsquo;re looking for?{' '}
            <a href="#final-cta" className="font-semibold text-indigo hover:text-indigo-deep">
              Contact us
            </a>
          </p>
        </div>

        <div>
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
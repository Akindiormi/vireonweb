import logo from '../assets/logo.png'

const PLATFORM_LINKS = ['About', 'Features', 'How it works', 'FAQs']
const COMPANY_LINKS = ['Contact us', 'Terms of service', 'Privacy policy', 'Refund policy']

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-10 grid sm:grid-cols-[1.4fr_1fr_1fr] gap-12">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Vireon" className="h-7 w-auto" />
            <span className="font-display font-semibold text-lg text-white">Vireon</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Global platform for sharing reviews, surveys, and feedback. Start
            your journey with Vireon today.
          </p>
          <p className="mt-5 flex items-center gap-2 text-xs text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            All systems operational
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-white/40 uppercase">Platform</p>
          <ul className="mt-4 space-y-3">
            {PLATFORM_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-white/40 uppercase">Company</p>
          <ul className="mt-4 space-y-3">
            {COMPANY_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/40">
          <p>Vireon &mdash; a global activity platform.</p>
          <p>support@vireonofficial.com.ng</p>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-8 text-[11px] leading-relaxed text-white/30">
          Rewards and points on Vireon are not guaranteed and vary based on
          individual activity. Vireon does not promise any specific returns.
          All payments are processed securely through Paystack.
        </div>
      </div>
    </footer>
  )
}

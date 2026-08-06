import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import VireonOnboardingFlow from './vireon-onboarding'

const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Ways to earn', href: '#earning-streams' },
  { label: 'Dashboard', href: '#task-dashboard' },
  { label: 'FAQs', href: '#faqs' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-ink/5' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <img src={logo} alt="Vireon" className="h-8 w-auto" />
            <span className="font-display font-semibold text-xl tracking-tight text-ink">
              Vireon
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-ink-soft hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center rounded-full bg-indigo px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm shadow-indigo/30 hover:bg-indigo-deep transition-colors cursor-pointer"
            >
              Get started
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-cream border-b border-ink/5 px-6 pb-6 pt-2">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-ink-soft"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false)
                  setIsModalOpen(true)
                }}
                className="inline-flex items-center justify-center rounded-full bg-indigo px-5 py-3 text-base font-semibold text-white cursor-pointer"
              >
                Get started
              </button>
            </nav>
          </div>
        )}
      </header>

      <VireonOnboardingFlow
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
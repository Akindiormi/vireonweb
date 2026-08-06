import { useEffect, useRef, useState } from 'react'
import {
  Sparkles,
  Users,
  Network,
  GitBranch,
  Wallet,
  CalendarDays,
  BarChart3,
  CreditCard,
  PhoneCall,
  MessageSquareCode,
  Pin,
  Camera,
  Brain,
  type LucideIcon,
} from 'lucide-react'

type TileData = {
  icon: LucideIcon
  label: string
  amount: number | string
  isUnlimited?: boolean
}

const TILES: TileData[] = [
  { icon: Sparkles, label: 'Vireon Onboarding', amount: 14500 },
  { icon: Users, label: 'Vireon Partner Reward', amount: 12500 },
  { icon: Network, label: 'Indirect Commission', amount: 300 },
  { icon: GitBranch, label: '2nd-Level Indirect Reward', amount: 100 },
  { icon: Wallet, label: 'Vireon Credit', amount: 12000 },
  { icon: CalendarDays, label: 'Daily Survey Reward', amount: 3650 },
  { icon: BarChart3, label: 'Survey Earnings', amount: 9000 },
  { icon: CreditCard, label: 'Loan Disbursement', amount: 'Unlimited', isUnlimited: true },
  { icon: PhoneCall, label: 'Daily Call Cash', amount: 10000 },
  { icon: MessageSquareCode, label: 'Vireon Converse', amount: 4560 },
  { icon: Pin, label: 'Pin To Profit', amount: 2000 },
  { icon: Camera, label: 'Snap Pro & Google', amount: '2,500 / engagement' },
  { icon: Brain, label: 'Vireon IQ', amount: 9000 },
]

const TOTAL_REWARDS_VALUE = TILES.reduce((sum, t) => {
  return typeof t.amount === 'number' ? sum + t.amount : sum
}, 0)
const ACTIVE_STREAMS = TILES.length

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

function useCountUp(value: number, start: boolean, duration = 1200) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf: number
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, value, duration])

  return display
}

function formatNaira(n: number) {
  return `₦${Math.round(n).toLocaleString('en-NG')}`
}

export default function TaskDashboardPreview() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const totalDisplay = useCountUp(TOTAL_REWARDS_VALUE, inView, 1600)
  const streamsDisplay = useCountUp(ACTIVE_STREAMS, inView, 900)

  const rowOne = TILES.slice(0, 7)
  const rowTwo = TILES.slice(7)

  return (
    <section id="task-dashboard" className="relative bg-slate-950 py-28 overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 35s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl">
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white leading-tight">
            The Vireon Premier <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">Earning Layout</span>
          </h2>
          <p className="mt-5 text-xl font-medium leading-relaxed text-slate-300">
            Every reward stream you unlock the moment you complete Vireon registration. Watch your income streams flow continuously in perpetual motion.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-16 relative rounded-[2.5rem] border border-white/15 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          <div
            className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full opacity-30 blur-[100px] animate-pulse"
            style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.5), transparent 70%)' }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full opacity-30 blur-[100px]"
            style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.4), transparent 70%)' }}
          />

          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-10 mb-10 border-b border-white/10">
            <div>
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Combined Initial Streams Pool</p>
              <p className="mt-2 font-display font-black text-5xl sm:text-7xl text-white tabular-nums tracking-tighter bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                {formatNaira(totalDisplay)}
              </p>
            </div>
            <div className="flex flex-wrap gap-6 sm:gap-10 bg-slate-950/60 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
              <div>
                <p className="font-display font-black text-3xl sm:text-4xl text-amber-400 tabular-nums">
                  {Math.round(streamsDisplay)}
                </p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">Active Streams</p>
              </div>
              <div className="border-l border-white/10 pl-6 sm:pl-10">
                <p className="font-display font-black text-3xl sm:text-4xl text-emerald-400 tabular-nums">
                  Instant
                </p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">Activation Layout</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden w-full space-y-5 py-4 mask-gradient">
            <div className="flex overflow-x-hidden">
              <div className="animate-marquee-left flex gap-5 shrink-0">
                {[...rowOne, ...rowOne].map((tile, i) => {
                  const Icon = tile.icon
                  const numericAmount = typeof tile.amount === 'number' ? tile.amount : 0
                  const animatedValue = useCountUp(numericAmount, inView, 900)

                  return (
                    <div
                      key={`row1-${i}`}
                      className="group relative w-72 rounded-3xl bg-slate-900/90 border border-white/10 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-slate-800/90 hover:border-amber-500/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(217,119,6,0.2)] flex flex-col justify-between shrink-0"
                    >
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-500/10 to-transparent blur-2xl pointer-events-none" />
                      <div>
                        <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/30 to-amber-500/5 text-amber-400 shadow-inner">
                          <Icon size={22} strokeWidth={2} />
                        </div>
                        <p className="mt-5 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                          {tile.label}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="font-display font-extrabold text-xl text-white tabular-nums tracking-tight">
                          {tile.isUnlimited ? (
                            <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 bg-clip-text text-transparent animate-pulse font-black">
                              Unlimited
                            </span>
                          ) : typeof tile.amount === 'number' ? (
                            formatNaira(animatedValue)
                          ) : (
                            <span className="text-sm font-black text-amber-400 tracking-normal">{tile.amount}</span>
                          )}
                        </p>
                        <p className="mt-1 text-[10px] font-semibold tracking-wide text-slate-500 uppercase">
                          {typeof tile.amount === 'number' ? 'Instant Stream Unlock' : 'Active Engagement Payout'}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex overflow-x-hidden">
              <div className="animate-marquee-right flex gap-5 shrink-0">
                {[...rowTwo, ...rowTwo].map((tile, i) => {
                  const Icon = tile.icon
                  const numericAmount = typeof tile.amount === 'number' ? tile.amount : 0
                  const animatedValue = useCountUp(numericAmount, inView, 900)

                  return (
                    <div
                      key={`row2-${i}`}
                      className="group relative w-72 rounded-3xl bg-slate-900/90 border border-white/10 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-slate-800/90 hover:border-amber-500/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(217,119,6,0.2)] flex flex-col justify-between shrink-0"
                    >
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-500/10 to-transparent blur-2xl pointer-events-none" />
                      <div>
                        <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/30 to-amber-500/5 text-amber-400 shadow-inner">
                          <Icon size={22} strokeWidth={2} />
                        </div>
                        <p className="mt-5 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                          {tile.label}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="font-display font-extrabold text-xl text-white tabular-nums tracking-tight">
                          {tile.isUnlimited ? (
                            <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 bg-clip-text text-transparent animate-pulse font-black">
                              Unlimited
                            </span>
                          ) : typeof tile.amount === 'number' ? (
                            formatNaira(animatedValue)
                          ) : (
                            <span className="text-sm font-black text-amber-400 tracking-normal">{tile.amount}</span>
                          )}
                        </p>
                        <p className="mt-1 text-[10px] font-semibold tracking-wide text-slate-500 uppercase">
                          {typeof tile.amount === 'number' ? 'Instant Stream Unlock' : 'Active Engagement Payout'}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="relative mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-medium">
            <p>Dashboard layout dynamically reflects real-time activation parameters upon successful Vireon registration.</p>
            <span className="flex items-center gap-2 text-amber-400 font-bold tracking-wide uppercase">
              <Sparkles size={14} /> Continuous Autonomous Flow
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
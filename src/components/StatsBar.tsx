const STATS = [
  { value: 'Global', label: 'Growing community' },
  { value: '24/7', label: 'Member support' },
  { value: 'GBP', label: 'Reliable payouts' },
  { value: 'High', label: 'Member satisfaction' },
]

export default function StatsBar() {
  return (
    <section className="bg-sage border-y border-sage-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-2 sm:grid-cols-4 gap-10">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-display font-semibold text-3xl text-ink">{stat.value}</p>
            <p className="mt-1.5 text-sm text-ink-soft">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

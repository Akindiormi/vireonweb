type Activity = {
  city: string
  action: string
  amount: string
  kind: 'review' | 'survey' | 'photo'
}

const ACTIVITIES: Activity[] = [
  { city: 'Lagos', action: 'Survey completed', amount: '£1.80', kind: 'survey' },
  { city: 'Nairobi', action: 'Product review shared', amount: '£1.20', kind: 'review' },
  { city: 'Accra', action: 'Photo uploaded', amount: '£0.90', kind: 'photo' },
  { city: 'Abuja', action: 'Survey completed', amount: '£2.40', kind: 'survey' },
  { city: 'Kampala', action: 'Product review shared', amount: '£1.50', kind: 'review' },
  { city: 'Kigali', action: 'Photo uploaded', amount: '£0.75', kind: 'photo' },
  { city: 'Lagos', action: 'Survey completed', amount: '£3.10', kind: 'survey' },
  { city: 'Cape Town', action: 'Product review shared', amount: '£1.35', kind: 'review' },
]

const ICON: Record<Activity['kind'], string> = {
  review: '★',
  survey: '☰',
  photo: '◒',
}

function Row({ activity }: { activity: Activity }) {
  return (
    <div className="flex items-center gap-3.5 px-5 py-3.5 border-b border-ink/[0.06] last:border-b-0">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-soft text-indigo text-sm font-semibold">
        {ICON[activity.kind]}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink truncate">{activity.action}</p>
        <p className="text-xs text-ink-soft">{activity.city} · just now</p>
      </div>
      <span className="shrink-0 text-sm font-bold text-amber">+{activity.amount}</span>
    </div>
  )
}

export default function ActivityTicker() {
  const doubled = [...ACTIVITIES, ...ACTIVITIES]

  return (
    <div className="relative w-full max-w-md rounded-3xl border border-ink/[0.06] bg-white shadow-[0_20px_60px_-15px_rgba(67,56,202,0.25)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-ink/[0.06]">
        <div>
          <p className="text-sm font-semibold text-ink">Live activity</p>
          <p className="text-xs text-ink-soft">Earnings happening right now</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-sage px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </span>
      </div>

      <div className="relative h-[268px] overflow-hidden">
        <div className="animate-ticker">
          {doubled.map((activity, i) => (
            <Row activity={activity} key={i} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  )
}

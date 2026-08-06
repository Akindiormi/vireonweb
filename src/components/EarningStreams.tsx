import {
  MessagesSquare,
  Clapperboard,
  Camera,
  ClipboardCheck,
  Briefcase,
  Mic,
  Share2,
  PenTool,
  Search,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'

type Stream = {
  icon: LucideIcon
  category: string
  name: string
  rate: string
  description: string
}

const STREAMS: Stream[] = [
  {
    icon: MessagesSquare,
    category: 'Share your opinion',
    name: 'Vireon Surveys',
    rate: '£3 per approved survey',
    description: 'Answer short surveys and quizzes on products from real brands in minutes.',
  },
  {
    icon: Clapperboard,
    category: 'Content review',
    name: 'Vireon Review',
    rate: '£4 per approved review',
    description: 'Review selected media and product content, then submit precise, structured feedback.',
  },
  {
    icon: Camera,
    category: 'Photo tasks',
    name: 'Vireon Snap',
    rate: '£2 per approved photo',
    description: 'Upload and tag photos for brand and community campaigns.',
  },
  {
    icon: ClipboardCheck,
    category: 'Data verification',
    name: 'Vireon Verify',
    rate: '£3 per completed batch',
    description: 'Check structured data entries for accuracy and flag inconsistencies.',
  },
  {
    icon: Briefcase,
    category: 'Micro freelance',
    name: 'Vireon Tasks',
    rate: '£5 per completed task',
    description: 'Short, well-defined tasks — scheduling, light research, admin support.',
  },
  {
    icon: Mic,
    category: 'Transcription',
    name: 'Vireon Transcribe',
    rate: '£4 per audio file',
    description: 'Convert short audio clips into clean, accurate text.',
  },
  {
    icon: Share2,
    category: 'Social content',
    name: 'Vireon Social',
    rate: '£3 per campaign post',
    description: 'Test captions and creative for brands on your own social accounts.',
  },
  {
    icon: PenTool,
    category: 'Design feedback',
    name: 'Vireon Critique',
    rate: '£3 per review',
    description: 'Give structured feedback on early-stage app and web designs.',
  },
  {
    icon: Search,
    category: 'Research tasks',
    name: 'Vireon Research',
    rate: '£4 per task',
    description: 'Small research assignments — compare products, summarize findings.',
  },
  {
    icon: GraduationCap,
    category: 'Tutoring & Q&A',
    name: 'Vireon Learn',
    rate: '£5 per session',
    description: 'Answer subject questions or review study material for learners.',
  },
]

function StreamCard({ stream }: { stream: Stream }) {
  const Icon = stream.icon
  return (
    <div className="group relative rounded-[1.75rem] p-px bg-gradient-to-br from-indigo/25 via-ink/[0.06] to-transparent transition-all duration-300 hover:from-indigo/50 hover:via-amber/20">
      <div className="relative h-full rounded-[1.75rem] bg-white p-7 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'radial-gradient(circle, rgba(67,56,202,0.18), transparent 70%)' }}
        />

        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo to-indigo-deep text-white shadow-md shadow-indigo/25">
          <Icon size={22} strokeWidth={1.75} />
        </span>

        <p className="relative mt-5 text-xs font-semibold tracking-wide text-ink-soft uppercase">
          {stream.category}
        </p>
        <h3 className="relative mt-1.5 font-display font-semibold text-lg text-ink">
          {stream.name}
        </h3>
        <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">
          {stream.description}
        </p>

        <div className="relative mt-6 flex items-center justify-between border-t border-ink/[0.06] pt-4">
          <span className="text-sm font-bold text-amber">{stream.rate}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink-soft transition-all duration-300 group-hover:border-indigo/40 group-hover:text-indigo group-hover:translate-x-0.5">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default function EarningStreams() {
  return (
    <section id="earning-streams" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-indigo/20 bg-indigo-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo uppercase">
            How the Vireon platform works
          </span>
          <h2 className="mt-5 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Every way to earn on Vireon
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            One dashboard, ten earning streams. Pick what fits your time and
            skills, and get paid per task &mdash; clearly and transparently.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STREAMS.map((stream) => (
            <StreamCard stream={stream} key={stream.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

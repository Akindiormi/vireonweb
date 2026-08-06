import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './root'
import Hero from '../components/Hero'
import WhatIsVireon from '../components/WhatIsVireon'
import HowItWorks from '../components/HowItWorks'
import StatsBar from '../components/StatsBar'
import EarningStreams from '../components/EarningStreams'
import TaskDashboardPreview from '../components/TaskDashboardPreview'
import Faq from '../components/Faq'
import FinalCta from '../components/FinalCta'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsVireon />
      <HowItWorks />
      <StatsBar />
      <EarningStreams />
      <TaskDashboardPreview />
      <Faq />
      <FinalCta />
    </>
  )
}

# Vireon — Landing Page

Rebuilt landing page for Vireon (React + TanStack Router + Tailwind CSS v4 + TypeScript, deployed via Netlify).

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploy to Netlify

`netlify.toml` is already configured (`npm run build`, publishes `dist/`, SPA redirect included).
Either connect the repo in Netlify's dashboard, or from the CLI:

```bash
npx netlify deploy --prod
```

## Structure

```
src/
  components/    Header, Hero, ActivityTicker, WhatIsVireon,
                 HowItWorks, StatsBar, Faq, FinalCta, Footer
  routes/        root.tsx (shell), index.tsx (page composition)
  router.tsx     TanStack Router instance
  index.css      Tailwind v4 theme tokens (colors, fonts, ticker animation)
  assets/logo.png
```

## Design notes

- **Palette:** indigo `#4338CA` (primary/CTA), cream `#FAF9F6` (page bg),
  sage `#EAF3EA` (alternating sections), navy `#1B1730` (footer),
  amber `#D97706` (reward highlights).
- **Type:** Space Grotesk (display/headlines) + Inter (body/UI).
- **Signature element:** the hero's "Live activity" ticker replaces a static
  dashboard screenshot — it's an auto-scrolling feed of real-feeling earning
  events (city, activity type, amount), tying directly into what the product
  actually is rather than a generic stats card.
- Same section flow as the original site (hero, what is Vireon, how it
  works, stats, FAQ, final CTA, footer) — copy and visuals rewritten.
- Fully responsive, mobile nav included, reduced-motion respected, visible
  focus states on interactive elements.

## Next steps worth considering

- Swap the placeholder mark treatment in "What is Vireon" for real product
  screenshots once you have them.
- Wire the "Get started" / "Join Vireon" CTAs to your actual signup flow.
- Add real testimonials or social proof if you want more trust signal.

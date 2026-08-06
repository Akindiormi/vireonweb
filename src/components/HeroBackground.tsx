"use client";

import { motion } from "framer-motion";

/**
 * Ambient, slowly-drifting gradient background for a LIGHT Hero section.
 * Matches the site's light theme (white/near-white base, dark "ink" text).
 * Pure CSS/SVG gradients animated with framer-motion — no canvas, no WebGL.
 *
 *   <section className="relative overflow-hidden">
 *     <HeroBackground />
 *     <div className="relative z-10"> ...your content... </div>
 *   </section>
 */
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-white" />

      {/* blob 1 — indigo, upper left */}
      <motion.div
        className="absolute -top-32 -left-24 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.16) 0%, rgba(99,102,241,0) 70%)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 30, -10, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* blob 2 — emerald/sage, lower right */}
      <motion.div
        className="absolute -bottom-40 -right-20 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0) 70%)",
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* blob 3 — soft violet accent, center */}
      <motion.div
        className="absolute top-1/3 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.10) 0%, rgba(167,139,250,0) 70%)",
        }}
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -25, 10, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* very light vignette at the edges, keeps center clean for text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, transparent 0%, rgba(255,255,255,0.7) 90%)",
        }}
      />

      {/* faint grain for texture, avoids a flat gradient look */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.025]">
        <filter id="hero-grain-light">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain-light)" />
      </svg>
    </div>
  );
}
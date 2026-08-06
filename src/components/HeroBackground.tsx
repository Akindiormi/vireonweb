"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Ambient, interactive gradient background for a LIGHT Hero section.
 * Blobs drift on their own AND respond to mouse position (parallax) and
 * scroll position (vertical drift). Pure CSS/SVG gradients animated with
 * framer-motion — no canvas, no WebGL.
 *
 *   <section className="relative overflow-hidden">
 *     <HeroBackground />
 *     <div className="relative z-10"> ...your content... </div>
 *   </section>
 */
export default function HeroBackground() {
  // Raw mouse position, normalized to -1..1 relative to viewport center.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Smoothed so blobs glide rather than snap to the cursor.
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.6 });

  // Raw scroll position within this section's own height, roughly 0..1.
  const scrollY = useMotionValue(0);
  const smoothScroll = useSpring(scrollY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(nx);
      mouseY.set(ny);
    };
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollY.set(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY, scrollY]);

  // Each blob reacts to cursor/scroll at a different strength for a parallax feel.
  const blob1X = useTransform(smoothX, (v) => v * 60);
  const blob1Y = useTransform([smoothY, smoothScroll], ([y, s]: number[]) => y * 60 + s * -80);

  const blob2X = useTransform(smoothX, (v) => v * -45);
  const blob2Y = useTransform([smoothY, smoothScroll], ([y, s]: number[]) => y * -45 + s * 60);

  const blob3X = useTransform(smoothX, (v) => v * 30);
  const blob3Y = useTransform([smoothY, smoothScroll], ([y, s]: number[]) => y * 30 + s * -40);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-white" />

      {/* blob 1 — indigo, upper left */}
      <motion.div
        className="absolute -top-32 -left-24 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,0.6) 0%, rgba(79,70,229,0) 70%)",
          x: blob1X,
          y: blob1Y,
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

      {/* blob 2 — emerald, lower right */}
      <motion.div
        className="absolute -bottom-40 -right-20 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(5,150,105,0.5) 0%, rgba(5,150,105,0) 70%)",
          x: blob2X,
          y: blob2Y,
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

      {/* blob 3 — violet accent, center */}
      <motion.div
        className="absolute top-1/3 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.42) 0%, rgba(139,92,246,0) 70%)",
          x: blob3X,
          y: blob3Y,
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

      {/* light vignette at the edges, keeps center clean for text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, transparent 0%, rgba(255,255,255,0.3) 95%)",
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
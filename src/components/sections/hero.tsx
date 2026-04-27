"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

// Reusable spring-like ease that feels natural, not robotic
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Returns Framer Motion props for a staggered fade-up entrance
function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease, delay },
  };
}

const heroTech = [
  "React 19",
  "Next.js 16",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "Bootstrap",
  "Figma Design",
  "UX/UI",
  "SEO",
  "Framer Motion",
  "Supabase",
  "Prisma",
  "PostgreSQL",
  "SQL",
  "Vercel",
  "Git",
  "Spec-Driven Dev",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Subtle dot grid — adds depth without distracting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial vignette that fades the grid into the background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, var(--background) 100%)",
        }}
      />

      {/* Accent glow — a soft warmth behind the headline */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,255,71,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Available badge with pulsing indicator */}
        <motion.div {...fadeUp(0.1)} className="inline-flex">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main headline — large, bold, instantly scannable */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl lg:text-[5.25rem] font-bold leading-[1.02] tracking-tight font-display"
        >
          I build web apps
          <br />
          <span className="text-accent">that ship.</span>
        </motion.h1>

        {/* Supporting context */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Frontend developer with{" "}
          <span className="text-foreground font-medium">5+ years</span> of production
          experience in{" "}
          <span className="text-foreground font-medium">
            React, Next.js & TypeScript
          </span>
          . Currently building SaaS products from{" "}
          <span className="text-foreground font-medium">Leipzig, Germany</span>.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            See my work
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-semibold text-sm bg-card/50 hover:bg-card transition-colors"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Current stack — sets expectations without listing every tool */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap items-center justify-center gap-2 pt-2"
        >
          {heroTech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full bg-muted/60 text-muted-foreground text-xs font-mono border border-border"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-border rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

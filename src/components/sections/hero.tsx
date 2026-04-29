"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { translations } from "@/lib/translations";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section
      id="home"
      className="relative min-h-svh flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, var(--background) 100%)",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,255,71,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div {...fadeUp(0.1)} className="inline-flex">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {t.available}
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl lg:text-[5.25rem] font-bold leading-[1.02] tracking-tight font-display"
        >
          {t.headline1}
          <br />
          <span className="text-accent">{t.headline2}</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {t.seeWork}
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-semibold text-sm bg-card/50 hover:bg-card transition-colors"
          >
            {t.getInTouch}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

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

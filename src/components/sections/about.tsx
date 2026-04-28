"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { techStack, experience, education, type EducationEntry } from "@/lib/data";
import { CertificateModal } from "@/components/ui/certificate-modal";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function About() {
  const headerRef = useRef(null);
  const narrativeRef = useRef(null);
  const stackRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
  const isNarrativeInView = useInView(narrativeRef, { once: true, margin: "-60px" });
  const isStackInView = useInView(stackRef, { once: true, margin: "-60px" });

  const [activeEntry, setActiveEntry] = useState<EducationEntry | null>(null);

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mt-3">
            The person behind the code
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* ── Left: narrative + experience timeline ── */}
          <motion.div
            ref={narrativeRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isNarrativeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m Pablo, a frontend developer from Chile, now based in
              Leipzig, Germany. With over{" "}
              <span className="text-foreground font-medium">
                5 years of production experience
              </span>
              , I&apos;ve shipped everything from mobile-first consumer apps to
              multi-tenant SaaS platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I care about the details that users feel but don&apos;t notice — fast
              load times, smooth transitions, accessible components, and UIs that{" "}
              <em>just work</em>. I build with an{" "}
              <span className="text-foreground font-medium">
                AI-assisted, Spec-Driven Development
              </span>{" "}
              workflow that lets me ship cleaner and faster without cutting corners.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Right now I&apos;m building{" "}
              <a
                href="https://agitpropstudio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium underline underline-offset-4 decoration-border hover:decoration-accent transition-colors"
              >
                Agitprop Studio
              </a>
              , a multi-tenant SaaS for artists, and looking for a{" "}
              <span className="text-foreground font-medium">frontend role</span>{" "}
              in Leipzig or remote across Europe.
            </p>

            {/* Experience timeline */}
            <div className="pt-6">
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
                Experience
              </h3>
              <ol className="space-y-0">
                {experience.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent mt-1.5" />
                      {i < experience.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-1 mb-0" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="font-semibold text-sm leading-tight">{item.role}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 mb-2">
                        {item.company} · {item.period}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* ── Right: tech stack + languages + education ── */}
          <motion.div
            ref={stackRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isStackInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.2 }}
          >
            <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-7">
              Tech Stack
            </h3>
            <div className="space-y-7">
              {Object.entries(techStack).map(([category, techs], catIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isStackInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease, delay: 0.3 + catIndex * 0.07 }}
                >
                  <p className="text-sm font-semibold mb-3">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-mono rounded-lg bg-muted border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8 pt-7 border-t border-border">
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                Languages
              </h3>
              <div className="space-y-2">
                {[
                  { lang: "Spanish", level: "Native" },
                  { lang: "English", level: "Professional (B2)" },
                  { lang: "German", level: "Conversational (B1)" },
                ].map(({ lang, level }) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{lang}</span>
                    <span className="text-xs font-mono text-muted-foreground">{level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-8 pt-7 border-t border-border">
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
                Education
              </h3>
              <ol className="space-y-0">
                {education.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent mt-1.5" />
                      {i < education.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-1 mb-0" />
                      )}
                    </div>
                    <div className="pb-6 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-semibold text-sm leading-tight">{item.degree}</p>
                        {item.certificates && item.certificates.length > 0 && (
                          <button
                            onClick={() => setActiveEntry(item)}
                            className="shrink-0 text-xs font-mono text-muted-foreground border border-border rounded px-2 py-0.5 hover:text-foreground hover:border-accent/50 transition-colors"
                          >
                            View
                          </button>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 mb-2">
                        {item.institution} · {item.period}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate modal */}
      {activeEntry?.certificates && (
        <CertificateModal
          certificates={activeEntry.certificates}
          title={`${activeEntry.degree} — ${activeEntry.institution}`}
          onClose={() => setActiveEntry(null)}
          translations={activeEntry.translations}
        />
      )}
    </section>
  );
}

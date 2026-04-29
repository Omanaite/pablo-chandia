"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { techStack, experience, education, type EducationEntry } from "@/lib/data";
import { CertificateModal } from "@/components/ui/certificate-modal";
import { useLanguage } from "@/providers/language-provider";
import { translations } from "@/lib/translations";
import type { Lang } from "@/lib/translations";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function About() {
  const headerRef = useRef(null);
  const narrativeRef = useRef(null);
  const stackRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
  const isNarrativeInView = useInView(narrativeRef, { once: true, margin: "-60px" });
  const isStackInView = useInView(stackRef, { once: true, margin: "-60px" });

  const [activeEntry, setActiveEntry] = useState<EducationEntry | null>(null);
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            {t.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mt-3">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: narrative + experience timeline */}
          <motion.div
            ref={narrativeRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isNarrativeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">{t.bio1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.bio2}</p>
            <p className="text-muted-foreground leading-relaxed">
              {t.bio3prefix}
              <a
                href="https://agitpropstudio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium underline underline-offset-4 decoration-border hover:decoration-accent transition-colors"
              >
                Agitprop Studio
              </a>
              {t.bio3suffix}
            </p>

            {/* Experience timeline */}
            <div className="pt-6">
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
                {t.experience}
              </h3>
              <ol className="space-y-0">
                {experience.map((item, i) => {
                  const tr = lang !== "en" ? item.translations?.[lang as "es" | "de"] : undefined;
                  const role = tr?.role ?? item.role;
                  const description = tr?.description ?? item.description;
                  return (
                    <li key={i} className="flex gap-4">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-accent mt-1.5" />
                        {i < experience.length - 1 && (
                          <div className="w-px flex-1 bg-border mt-1 mb-0" />
                        )}
                      </div>
                      <div className="pb-6">
                        <p className="font-semibold text-sm leading-tight">{role}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 mb-2">
                          {item.company} · {item.period}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </motion.div>

          {/* Right: tech stack + languages + education */}
          <motion.div
            ref={stackRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isStackInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.2 }}
          >
            <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-7">
              {t.techStack}
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
                {t.languages}
              </h3>
              <div className="space-y-2">
                {t.languagesList.map(({ lang: langName, level }) => (
                  <div key={langName} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{langName}</span>
                    <span className="text-xs font-mono text-muted-foreground">{level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-8 pt-7 border-t border-border">
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
                {t.education}
              </h3>
              <ol className="space-y-0">
                {education.map((item, i) => {
                  const eduLang = lang as Lang;
                  const eduTr = item.translations?.[eduLang as "en" | "de" | "es"];
                  const degree = eduTr?.degree ?? item.degree;
                  const description = eduTr?.description ?? item.description;
                  return (
                    <li key={i} className="flex gap-4">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-accent mt-1.5" />
                        {i < education.length - 1 && (
                          <div className="w-px flex-1 bg-border mt-1 mb-0" />
                        )}
                      </div>
                      <div className="pb-6 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-semibold text-sm leading-tight">{degree}</p>
                          {item.certificates && item.certificates.length > 0 && (
                            <button
                              onClick={() => setActiveEntry(item)}
                              className="shrink-0 text-xs font-mono text-muted-foreground border border-border rounded px-2 py-0.5 hover:text-foreground hover:border-accent/50 transition-colors"
                            >
                              {t.view}
                            </button>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 mb-2">
                          {item.institution} · {item.period}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>

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

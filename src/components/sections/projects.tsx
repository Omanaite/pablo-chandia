"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import { useLanguage } from "@/providers/language-provider";
import { translations } from "@/lib/translations";
import type { Lang } from "@/lib/translations";

function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function DesignProcess({
  design,
  tProjects,
}: {
  design: NonNullable<Project["design"]>;
  tProjects: (typeof translations)[Lang]["projects"];
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="pt-6 pb-2">
      <div className="flex items-center gap-2 mb-4">
        {design.tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => { setActiveTab(i); setIframeLoaded(false); }}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              activeTab === i
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="relative w-full rounded-xl overflow-hidden border border-border bg-muted"
        style={{ paddingBottom: "56.25%" }}
      >
        {!iframeLoaded && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" strokeOpacity={0.25} />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
            {tProjects.loadingPrototype}
          </div>
        )}
        <iframe
          key={design.tabs[activeTab].embedUrl}
          src={design.tabs[activeTab].embedUrl}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          onLoad={() => setIframeLoaded(true)}
          title={`${design.tabs[activeTab].label} prototype`}
        />
      </div>

      <div className="mt-4 flex items-center justify-end">
        <a
          href={design.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <FigmaIcon className="w-3.5 h-3.5" />
          {tProjects.openFigma}
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  lang,
}: {
  project: Project;
  index: number;
  lang: Lang;
}) {
  const [expanded, setExpanded] = useState(false);
  const [designExpanded, setDesignExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const t = translations[lang].projects;

  const tr = lang !== "en" ? project.translations?.[lang as "es" | "de"] : undefined;
  const tagline = tr?.tagline ?? project.tagline;
  const type = tr?.type ?? project.type;
  const outcome = tr?.outcome ?? project.outcome;
  const problem = tr?.problem ?? project.problem;
  const solution = tr?.solution ?? project.solution;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease, delay: index * 0.12 }}
      className="rounded-2xl border border-border bg-card overflow-hidden"
    >
      <div className="p-6 sm:p-8">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block px-2.5 py-1 text-xs font-mono rounded-md bg-muted text-muted-foreground">
              {type}
            </span>
            <time className="text-xs font-mono text-muted-foreground">
              {project.date}
            </time>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight">
            {project.title}
          </h3>
          <p className="text-muted-foreground mt-1.5 text-sm sm:text-base">
            {tagline}
          </p>
        </div>

        <div className="mb-6 p-4 rounded-xl bg-muted/50 border border-border">
          <p className="text-sm leading-relaxed">
            <span className="text-accent font-semibold">{t.outcome} </span>
            {outcome}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-background text-muted-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              {t.liveDemo}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-border text-sm font-semibold rounded-full hover:bg-muted transition-colors"
            >
              GitHub
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}

          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto"
            aria-expanded={expanded}
          >
            {t.caseStudy}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {project.design && (
            <button
              onClick={() => setDesignExpanded((v) => !v)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm transition-colors ${
                designExpanded
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-expanded={designExpanded}
            >
              <FigmaIcon className="w-3.5 h-3.5" />
              {t.designProcess}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  designExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="case-study"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pt-6 pb-8 border-t border-border">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                    {t.theProblem}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                    {t.theSolution}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {solution}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {designExpanded && project.design && (
          <motion.div
            key="design-process"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-8 border-t border-border">
              <div className="flex items-center gap-2 pt-5 mb-1">
                <FigmaIcon className="w-4 h-4 text-muted-foreground" />
                <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  {t.designProcess}
                </h4>
              </div>
              <DesignProcess design={project.design} tProjects={t} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            {t.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mt-3">
            {t.title}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

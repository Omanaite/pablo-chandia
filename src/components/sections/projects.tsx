"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";

// GitHub brand icon — not in lucide-react v1, using inline SVG
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Individual project card with expandable case study
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease, delay: index * 0.12 }}
      className="rounded-2xl border border-border bg-card overflow-hidden"
    >
      {/* ── Card body ── */}
      <div className="p-6 sm:p-8">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <span className="inline-block px-2.5 py-1 text-xs font-mono rounded-md bg-muted text-muted-foreground mb-3">
              {project.type}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground mt-1.5 text-sm sm:text-base">
              {project.tagline}
            </p>
          </div>
          <time className="text-xs font-mono text-muted-foreground shrink-0 pt-1">
            {project.date}
          </time>
        </div>

        {/* Outcome callout — the most important information, shown first */}
        <div className="mb-6 p-4 rounded-xl bg-muted/50 border border-border">
          <p className="text-sm leading-relaxed">
            <span className="text-accent font-semibold">Outcome: </span>
            {project.outcome}
          </p>
        </div>

        {/* Tech stack */}
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

        {/* Links and case study toggle */}
        <div className="flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Live demo
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

          {/* Case study toggle — slides open with the full problem/solution context */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto"
            aria-expanded={expanded}
          >
            Case study
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Expandable case study ── */}
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
                    The Problem
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                    The Solution
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.solution}
                  </p>
                </div>
              </div>
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

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mt-3">
            Projects that ship
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
            Each project solves a real problem. Expand the case study to understand
            the thinking behind it — not just the tech used.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

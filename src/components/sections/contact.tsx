"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { personal } from "@/lib/data";
import { useLanguage } from "@/providers/language-provider";
import { translations } from "@/lib/translations";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease }}
          className="max-w-2xl"
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            {t.label}
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold font-display mt-3 mb-6 leading-tight">
            {t.headline1}
            <br />
            <span className="text-accent">{t.headline2}</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-10 text-sm sm:text-base">
            {t.description}
          </p>

          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="group inline-flex items-center gap-3 px-6 py-4 bg-accent text-accent-foreground rounded-2xl font-semibold text-sm hover:opacity-90 transition-opacity mb-10"
          >
            <Mail className="w-4 h-4" />
            {personal.email}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
          </motion.a>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-muted hover:border-accent/30 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-muted hover:border-accent/30 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

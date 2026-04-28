"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CertificateTranslation } from "@/lib/data";

interface CertificateModalProps {
  certificates: string[];
  title: string;
  onClose: () => void;
  translations?: {
    en: CertificateTranslation;
    de: CertificateTranslation;
    es?: CertificateTranslation;
  };
}

type Lang = "en" | "de" | "es";

export function CertificateModal({ certificates, title, onClose, translations }: CertificateModalProps) {
  const [page, setPage] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
   
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showTranslation) setShowTranslation(false);
        else onClose();
      }
      if (!showTranslation) {
        if (e.key === "ArrowRight") setPage((p) => Math.min(p + 1, certificates.length - 1));
        if (e.key === "ArrowLeft") setPage((p) => Math.max(p - 1, 0));
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, certificates.length, showTranslation]);

  const translation = translations?.[lang];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* Blurred backdrop */}
        <motion.div
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal card */}
        <motion.div
          className="relative z-10 w-full max-w-3xl flex flex-col"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Certificate
                </p>
                <p className="text-sm font-semibold mt-0.5">{title}</p>
              </div>
              {translations && (
                <button
                  onClick={() => setShowTranslation((v) => !v)}
                  className={`shrink-0 text-xs font-mono border rounded px-2 py-0.5 transition-colors ${
                    showTranslation
                      ? "text-foreground border-accent/60 bg-accent/10"
                      : "text-muted-foreground border-border hover:text-foreground hover:border-accent/40"
                  }`}
                >
                  Translation
                </button>
              )}
            </div>
            <div className="flex items-center gap-3">
              {certificates.length > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(p - 1, 0))}
                    disabled={page === 0}
                    className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 disabled:opacity-30 transition-colors text-xs"
                  >
                    ‹
                  </button>
                  <span className="text-xs font-mono text-muted-foreground">
                    {page + 1} / {certificates.length}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(p + 1, certificates.length - 1))}
                    disabled={page === certificates.length - 1}
                    className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 disabled:opacity-30 transition-colors text-xs"
                  >
                    ›
                  </button>
                </div>
              )}
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors text-sm"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Certificate display */}
          <div className="relative rounded-xl overflow-hidden border border-border bg-muted">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={certificates[page]}
                  alt={title}
                  className="w-full object-contain max-h-[70vh]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Translation overlay */}
            <AnimatePresence>
              {showTranslation && translation && (
                <motion.div
                  className="absolute inset-0 bg-background/92 backdrop-blur-sm flex flex-col p-5 sm:p-7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Language selector */}
                  <div className="flex justify-end mb-5">
                    <div className="flex items-center gap-1 border border-border rounded-md p-0.5">
                      {(["en", "de", ...(translations?.es ? ["es"] : [])] as Lang[]).map((l) => (
                        <button
                          key={l}
                          onClick={() => setLang(l)}
                          className={`text-xs font-mono uppercase px-2.5 py-1 rounded transition-colors ${
                            lang === l
                              ? "bg-accent/20 text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Translation content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={lang}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="flex flex-col gap-3"
                    >
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        {lang === "en" ? "English" : lang === "de" ? "Deutsch" : "Español"}
                      </p>
                      <p className="text-xl sm:text-2xl font-semibold leading-snug">
                        {translation.degree}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                        {translation.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Page dots */}
          {certificates.length > 1 && (
            <div className="flex justify-center gap-1.5 mt-3">
              {certificates.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === page ? "bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

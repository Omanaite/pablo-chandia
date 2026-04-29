"use client";

import { personal } from "@/lib/data";
import { useLanguage } from "@/providers/language-provider";
import { translations } from "@/lib/translations";

export function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground">
          © {year}{" "}
          <span className="text-foreground font-medium">{personal.name}</span>.{" "}
          {t.builtWith}
        </p>
        <p className="text-sm text-muted-foreground">{personal.location}</p>
      </div>
    </footer>
  );
}

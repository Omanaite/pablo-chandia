"use client";

import { useLanguage } from "@/providers/language-provider";
import type { Lang } from "@/lib/translations";

const langs: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-border bg-muted/40 p-0.5 gap-0.5">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-label={`Switch to ${label}`}
          className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold transition-colors ${
            lang === code
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

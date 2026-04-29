"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { personal } from "@/lib/data";
import { useLanguage } from "@/providers/language-provider";
import { translations } from "@/lib/translations";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  const navLinks = [
    { label: t.nav.work, href: "#projects" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/85 backdrop-blur-xl border-b border-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Name / logo */}
        <a
          href="#home"
          className="font-display font-semibold text-sm tracking-tight hover:text-accent transition-colors"
        >
          {personal.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            {t.nav.hire}
          </a>
        </div>
      </div>
    </header>
  );
}

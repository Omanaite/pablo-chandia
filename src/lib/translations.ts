export type Lang = "es" | "en" | "de";

export interface LangTranslations {
  nav: {
    work: string;
    about: string;
    contact: string;
    hire: string;
  };
  hero: {
    available: string;
    headline1: string;
    headline2: string;
    subtitle: string;
    seeWork: string;
    getInTouch: string;
  };
  projects: {
    label: string;
    title: string;
    description: string;
    outcome: string;
    liveDemo: string;
    caseStudy: string;
    designProcess: string;
    theProblem: string;
    theSolution: string;
    openFigma: string;
    loadingPrototype: string;
  };
  about: {
    label: string;
    title: string;
    bio1: string;
    bio2: string;
    bio3prefix: string;
    bio3suffix: string;
    experience: string;
    techStack: string;
    languages: string;
    education: string;
    view: string;
    languagesList: { lang: string; level: string }[];
  };
  contact: {
    label: string;
    headline1: string;
    headline2: string;
    description: string;
  };
  footer: {
    builtWith: string;
  };
}

export const translations: Record<Lang, LangTranslations> = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
      hire: "Hire me",
    },
    hero: {
      available: "Available for new opportunities",
      headline1: "I build web apps",
      headline2: "that ship.",
      subtitle:
        "Frontend developer with 5+ years of production experience in Development Environments. Currently building a SaaS Open-Source product from Leipzig, Germany.",
      seeWork: "See my work",
      getInTouch: "Get in touch",
    },
    projects: {
      label: "Featured Work",
      title: "Projects that ship",
      description:
        "Each project solves a real problem. Expand the case study to understand the thinking behind it — not just the tech used.",
      outcome: "Outcome:",
      liveDemo: "Live demo",
      caseStudy: "Case study",
      designProcess: "Design process",
      theProblem: "The Problem",
      theSolution: "The Solution",
      openFigma: "Open full Figma file",
      loadingPrototype: "Loading prototype…",
    },
    about: {
      label: "About",
      title: "The person behind the code",
      bio1: "I'm Pablo, a frontend developer from Chile, now based in Leipzig, Germany. With over 5 years of production experience, I've shipped everything from mobile-first consumer apps to multi-tenant SaaS platforms.",
      bio2: "I care about the details that users feel but don't notice — fast load times, smooth transitions, accessible components, and UIs that just work. I build with an AI-assisted, Spec-Driven Development workflow that lets me ship cleaner and faster without cutting corners.",
      bio3prefix: "Right now I'm building ",
      bio3suffix:
        ", a multi-tenant SaaS for artists, and looking for a frontend role in Leipzig or remote across Europe.",
      experience: "Experience",
      techStack: "Tech Stack",
      languages: "Languages",
      education: "Education",
      view: "View",
      languagesList: [
        { lang: "Spanish", level: "Native" },
        { lang: "English", level: "Professional (B2)" },
        { lang: "German", level: "Conversational (B1)" },
      ],
    },
    contact: {
      label: "Contact",
      headline1: "Let's build something",
      headline2: "together.",
      description:
        "I'm currently open to frontend developer positions in Leipzig and remote opportunities across Europe. If you're building something interesting and want a developer who ships — let's talk.",
    },
    footer: {
      builtWith: "Built with Next.js, TypeScript & Tailwind CSS.",
    },
  },

  es: {
    nav: {
      work: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      hire: "Contrátame",
    },
    hero: {
      available: "Disponible para nuevas oportunidades",
      headline1: "Construyo apps web",
      headline2: "que funcionan.",
      subtitle:
        "Desarrollador frontend con más de 5 años de experiencia en producción. Actualmente construyendo un producto SaaS Open-Source desde Leipzig, Alemania.",
      seeWork: "Ver mi trabajo",
      getInTouch: "Contáctame",
    },
    projects: {
      label: "Trabajo Destacado",
      title: "Proyectos que funcionan",
      description:
        "Cada proyecto resuelve un problema real. Expande el caso de estudio para entender el razonamiento detrás — no solo la tecnología utilizada.",
      outcome: "Resultado:",
      liveDemo: "Demo en vivo",
      caseStudy: "Caso de estudio",
      designProcess: "Proceso de diseño",
      theProblem: "El Problema",
      theSolution: "La Solución",
      openFigma: "Abrir archivo Figma completo",
      loadingPrototype: "Cargando prototipo…",
    },
    about: {
      label: "Sobre mí",
      title: "La persona detrás del código",
      bio1: "Soy Pablo, un desarrollador frontend de Chile, actualmente radicado en Leipzig, Alemania. Con más de 5 años de experiencia en producción, he lanzado desde apps móviles hasta plataformas SaaS multi-tenant.",
      bio2: "Me importan los detalles que los usuarios sienten pero no notan — tiempos de carga rápidos, transiciones suaves, componentes accesibles e interfaces que simplemente funcionan. Trabajo con un flujo Spec-Driven Development asistido por IA que me permite entregar más limpio y rápido.",
      bio3prefix: "Ahora mismo estoy construyendo ",
      bio3suffix:
        ", un SaaS multi-tenant para artistas, y buscando un rol de frontend en Leipzig o remoto en Europa.",
      experience: "Experiencia",
      techStack: "Stack Tecnológico",
      languages: "Idiomas",
      education: "Educación",
      view: "Ver",
      languagesList: [
        { lang: "Español", level: "Nativo" },
        { lang: "Inglés", level: "Profesional (B2)" },
        { lang: "Alemán", level: "Conversacional (B1)" },
      ],
    },
    contact: {
      label: "Contacto",
      headline1: "Construyamos algo",
      headline2: "juntos.",
      description:
        "Estoy abierto a posiciones de desarrollador frontend en Leipzig y oportunidades remotas en Europa. Si estás construyendo algo interesante y quieres un desarrollador que entrega — hablemos.",
    },
    footer: {
      builtWith: "Construido con Next.js, TypeScript y Tailwind CSS.",
    },
  },

  de: {
    nav: {
      work: "Projekte",
      about: "Über mich",
      contact: "Kontakt",
      hire: "Einstellen",
    },
    hero: {
      available: "Verfügbar für neue Möglichkeiten",
      headline1: "Ich baue Web-Apps,",
      headline2: "die ankommen.",
      subtitle:
        "Frontend-Entwickler mit über 5 Jahren Produktionserfahrung. Aktuell entwickle ich ein Open-Source SaaS-Produkt aus Leipzig.",
      seeWork: "Meine Arbeit ansehen",
      getInTouch: "Kontakt aufnehmen",
    },
    projects: {
      label: "Ausgewählte Arbeiten",
      title: "Projekte, die ankommen",
      description:
        "Jedes Projekt löst ein echtes Problem. Öffne die Fallstudie, um das Denken dahinter zu verstehen — nicht nur die verwendeten Technologien.",
      outcome: "Ergebnis:",
      liveDemo: "Live-Demo",
      caseStudy: "Fallstudie",
      designProcess: "Designprozess",
      theProblem: "Das Problem",
      theSolution: "Die Lösung",
      openFigma: "Vollständige Figma-Datei öffnen",
      loadingPrototype: "Prototyp wird geladen…",
    },
    about: {
      label: "Über mich",
      title: "Die Person hinter dem Code",
      bio1: "Ich bin Pablo, ein Frontend-Entwickler aus Chile, jetzt wohnhaft in Leipzig. Mit über 5 Jahren Produktionserfahrung habe ich alles entwickelt — von mobile-first Consumer-Apps bis hin zu Multi-Tenant SaaS-Plattformen.",
      bio2: "Ich achte auf Details, die Nutzer spüren, aber nicht bemerken — schnelle Ladezeiten, flüssige Übergänge, zugängliche Komponenten und UIs, die einfach funktionieren. Ich arbeite mit einem KI-unterstützten Spec-Driven Development-Workflow.",
      bio3prefix: "Gerade baue ich ",
      bio3suffix:
        ", ein Multi-Tenant SaaS für Künstler, und suche eine Frontend-Stelle in Leipzig oder remote in Europa.",
      experience: "Erfahrung",
      techStack: "Tech-Stack",
      languages: "Sprachen",
      education: "Ausbildung",
      view: "Ansehen",
      languagesList: [
        { lang: "Spanisch", level: "Muttersprache" },
        { lang: "Englisch", level: "Professionell (B2)" },
        { lang: "Deutsch", level: "Konversationsniveau (B1)" },
      ],
    },
    contact: {
      label: "Kontakt",
      headline1: "Lass uns etwas",
      headline2: "gemeinsam bauen.",
      description:
        "Ich bin offen für Frontend-Entwickler-Stellen in Leipzig und Remote-Möglichkeiten in Europa. Wenn du etwas Interessantes baust und einen Entwickler suchst, der liefert — lass uns reden.",
    },
    footer: {
      builtWith: "Gebaut mit Next.js, TypeScript & Tailwind CSS.",
    },
  },
};

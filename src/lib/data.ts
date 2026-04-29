// Portfolio data — single source of truth

export const personal = {
  name: "Pablo Chandía",
  title: "Frontend Developer",
  location: "Leipzig, Germany",
  email: "chandiapablo@outlook.com",
  github: "https://github.com/Omanaite",
  linkedin: "https://linkedin.com/in/pchandia",
  available: true,
};

// Design process tabs for projects that have Figma documentation
export interface DesignTab {
  label: string;
  embedUrl: string;
}

export interface DesignProcess {
  tabs: DesignTab[];
  figmaUrl: string;
}

export interface ProjectTranslation {
  tagline: string;
  type: string;
  problem: string;
  solution: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  type: string;
  date: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  design?: DesignProcess; // optional — only projects with Figma docs
  translations?: {
    es: ProjectTranslation;
    de: ProjectTranslation;
  };
}

export const projects: Project[] = [
  {
    id: "agitprop-studio",
    title: "Agitprop Studio",
    tagline: "Multi-tenant SaaS & CMS platform for artists",
    type: "SaaS Platform",
    date: "March 2026 — Present",
    problem:
      "Artists need complete digital infrastructure — portfolio galleries, payment processing, and client management — but can't afford custom development or the complexity of stitching together 5 different third-party services.",
    solution:
      "Built a multi-tenant SaaS where each artist gets their own CMS, dual payment gateway (Stripe + PayPal), gallery management system, and custom subdomain — all from a single codebase with strict data isolation via Supabase Row Level Security policies.",
    outcome:
      "Production-ready platform, currently working in testing payments with full webhook processing for Stripe and PayPal events. Built with an AI-assisted Spec-Driven Development workflow and zero data leaks between tenants.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Stripe",
      "PayPal SDK",
      "Tailwind CSS v4",
      "Vercel",
    ],
    liveUrl: "https://agitpropstudio.vercel.app",
    repoUrl: "https://github.com/Omanaite/Agitprop",
    featured: true,
    translations: {
      es: {
        tagline: "Plataforma SaaS multi-tenant y CMS para artistas",
        type: "Plataforma SaaS",
        problem:
          "Los artistas necesitan infraestructura digital completa — galerías, procesamiento de pagos y gestión de clientes — pero no pueden permitirse el desarrollo personalizado ni combinar 5 servicios de terceros.",
        solution:
          "Construí un SaaS multi-tenant donde cada artista obtiene su propio CMS, pasarela de pago dual (Stripe + PayPal), sistema de galería y subdominio personalizado — todo desde una única base de código con aislamiento de datos mediante Row Level Security de Supabase.",
        outcome:
          "Plataforma lista para producción con procesamiento completo de webhooks para Stripe y PayPal. Construida con un flujo Spec-Driven Development asistido por IA y cero fugas de datos entre inquilinos.",
      },
      de: {
        tagline: "Multi-Tenant SaaS- & CMS-Plattform für Künstler",
        type: "SaaS-Plattform",
        problem:
          "Künstler benötigen vollständige digitale Infrastruktur — Portfolio-Galerien, Zahlungsabwicklung und Kundenverwaltung — können sich aber keine individuelle Entwicklung oder die Komplexität von 5 Drittanbieterdiensten leisten.",
        solution:
          "Ich entwickelte ein Multi-Tenant SaaS, bei dem jeder Künstler sein eigenes CMS, eine duale Zahlungs-Gateway (Stripe + PayPal), Galerie-Verwaltung und Subdomain erhält — aus einer einzigen Codebasis mit strikter Datenisolierung via Supabase RLS.",
        outcome:
          "Produktionsreife Plattform mit vollständiger Webhook-Verarbeitung für Stripe und PayPal. Entwickelt mit KI-unterstütztem Spec-Driven Development-Workflow und null Datenlecks zwischen Mandanten.",
      },
    },
  },
  {
    id: "daccord",
    title: "D'accord",
    tagline: "Collaborative real-time web application",
    type: "Team Project",
    date: "2023",
    problem:
      "Small teams in fast-paced sprints needed a lightweight collaborative tool to coordinate decisions without the overhead of enterprise software.",
    solution:
      "Built with a 4-person cross-functional Agile team at Devhaus Leipzig — daily standups, Scrum ceremonies, and a tight 3-week sprint cycle with continuous feedback loops.",
    outcome:
      "Shipped a fully functional collaborative app to production on time. Demonstrated ability to work in a team, adapt to feedback fast, and deliver under real deadlines.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Figma Design", "Prisma ORM", "PostgreSQL"],
    liveUrl: "https://camp9-final-project-three.vercel.app",
    repoUrl: "https://github.com/Omanaite/camp9-final-project",
    featured: false,
    translations: {
      es: {
        tagline: "Aplicación web colaborativa en tiempo real",
        type: "Proyecto de equipo",
        problem:
          "Los equipos pequeños en sprints de ritmo acelerado necesitaban una herramienta colaborativa liviana para coordinar decisiones sin la sobrecarga del software empresarial.",
        solution:
          "Construido con un equipo interfuncional de 4 personas en Devhaus Leipzig — standups diarios, ceremonias Scrum y un sprint de 3 semanas con bucles de retroalimentación continua.",
        outcome:
          "Entregamos una app colaborativa completamente funcional en producción a tiempo. Demostré capacidad para trabajar en equipo y entregar bajo plazos reales.",
      },
      de: {
        tagline: "Kollaborative Echtzeit-Webanwendung",
        type: "Teamprojekt",
        problem:
          "Kleine Teams in schnellen Sprints benötigten ein leichtgewichtiges Kollaborationstool ohne den Overhead von Enterprise-Software.",
        solution:
          "Entwickelt mit einem 4-Personen-Agile-Team bei Devhaus Leipzig — tägliche Standups, Scrum-Zeremonien und ein straffer 3-Wochen-Sprint mit kontinuierlichen Feedback-Schleifen.",
        outcome:
          "Lieferte eine vollständig funktionale kollaborative App rechtzeitig in die Produktion. Demonstrierte Teamarbeit und Lieferfähigkeit unter echten Deadlines.",
      },
    },
    design: {
      tabs: [
        {
          label: "Wireframe",
          embedUrl:
            "https://embed.figma.com/proto/mq0mc8Y4KdJFgr3Z0BlPhJ/Consensus-App--Copy-?node-id=226-1389&p=f&scaling=scale-down&content-scaling=fixed&page-id=126%3A2&embed-host=share",
        },
        {
          label: "Mockup",
          embedUrl:
            "https://embed.figma.com/proto/mq0mc8Y4KdJFgr3Z0BlPhJ/Consensus-App--Copy-?node-id=611-4742&p=f&scaling=scale-down&content-scaling=fixed&page-id=290%3A14705&embed-host=share",
        },
      ],
      figmaUrl:
        "https://www.figma.com/design/mq0mc8Y4KdJFgr3Z0BlPhJ/Consensus-App--Copy-?node-id=290-14705",
    },
  },
    {
    id: "tcg-chile",
    title: "Trading Card Game Chile",
    tagline: "Trading Card Marketplace",
    type: "Marketplace Platform",
    date: "March 2023",
    problem:
      "Trading card enthusiasts need a reliable hub to trade cards, both new and used.",
    solution:
      "Developed a full-featured marketplace enabling users to launch their own stores, manage inventory, and list cards for sale. The platform also supports peer-to-peer purchasing and comprehensive order management.",
    outcome:
      "Delivered a full-cycle marketplace with secure payment processing, inventory tracking, and order management.",
    tech: [
      "C#",
      ".NET Framework",
      ".NET Core",
      "Entity Framework",
      "PostgreSQL",
      "JavaScript",
      "SCSS",
      "Bootstrap",
    ],
    liveUrl: "https://tcgchile.cl",
    featured: true,
    translations: {
      es: {
        tagline: "Marketplace de Cartas Coleccionables",
        type: "Plataforma Marketplace",
        problem:
          "Los entusiastas de las cartas coleccionables necesitan un hub confiable para intercambiar cartas, tanto nuevas como usadas.",
        solution:
          "Desarrollé un marketplace completo que permite abrir tiendas propias, gestionar inventario y publicar cartas en venta, con soporte de compras peer-to-peer y gestión de pedidos.",
        outcome:
          "Entregué un marketplace de ciclo completo con procesamiento de pagos seguro, seguimiento de inventario y gestión de pedidos.",
      },
      de: {
        tagline: "Sammelkarten-Marktplatz",
        type: "Marktplatz-Plattform",
        problem:
          "Sammelkarten-Enthusiasten benötigen eine zuverlässige Plattform zum Handeln von Karten, sowohl neu als auch gebraucht.",
        solution:
          "Entwickelte einen vollständigen Marktplatz zum Eröffnen eigener Shops, Inventarverwaltung und Kartenangeboten, mit Peer-to-Peer-Käufen und umfassendem Bestellmanagement.",
        outcome:
          "Lieferte einen Full-Cycle-Marktplatz mit sicherer Zahlungsabwicklung, Inventarverfolgung und Bestellverwaltung.",
      },
    },
  },
];

export const techStack: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "Bootstrap", "Figma(UI Design - Wireframes & Mockups)", "Framer Motion"],
  "Backend & Data": [
    "Node.js",
    "Next.js API Routes",
    "Supabase (PostgreSQL)",
    "Prisma ORM",
    "MongoDB",
    "SQL",
  ],
  Payments: ["Stripe", "PayPal Server SDK", "Webhook Processing"],
  "Tools & Deploy": ["Vercel", "Git", "GitHub", "ESLint", "Resend"],
};

export interface CertificateTranslation {
  degree: string;
  description: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  description: string;
  certificates?: string[]; // paths relative to /public
  translations?: {
    en: CertificateTranslation;
    de: CertificateTranslation;
    es: CertificateTranslation;
  };
}

export const education: EducationEntry[] = [
  {
    degree: "Ingeniero en Informática",
    institution: "Universidad Tecnológica de Chile INACAP",
    period: "2008 — 2014",
    description: "Computer Engineering with specialization in IT Project Management.",
    certificates: ["/certificates/inacap-diploma.jpg"],
    translations: {
      en: {
        degree: "Computer Engineer",
        description: "Whereas Pablo Horacio Chandía Cornejo has fulfilled the requirements set by Universidad Tecnológica de Chile INACAP, the degree of Computer Engineer is hereby awarded. Granted in Santiago, July 11, 2014. Signed by: Secretary General · Rector",
      },
      de: {
        degree: "Informatikingenieur",
        description: "Da Pablo Horacio Chandía Cornejo die Anforderungen der Universidad Tecnológica de Chile INACAP erfüllt hat, wird ihm der akademische Titel Informatikingenieur verliehen. Ausgestellt in Santiago, 11. Juli 2014. Unterzeichnet von: Generalsekretär · Rektor",
      },
      es: {
        degree: "Ingeniero en Informática",
        description: "Pablo Horacio Chandía Cornejo ha cumplido con los requisitos establecidos por la Universidad Tecnológica de Chile INACAP, por lo que se le otorga el título de Ingeniero en Informática. Otorgado en Santiago, 11 de julio de 2014. Firmado por: Secretario General · Rector",
      },
    },
  },
  {
    degree: "Junior Web Development Bootcamp",
    institution: "Devhaus Leipzig",
    period: "2023",
    description: "Intensive full-stack program — 660 hours. Built D'accord in a 4-person Agile team, shipped to production in 3 weeks.",
    certificates: ["/certificates/devhaus-certificate.jpg", "/certificates/devhaus-curriculum.jpg"],
    translations: {
      en: {
        degree: "Junior Web Development Bootcamp",
        description: "Intensive full-stack web development program — 660 hours of hands-on training. Built D'accord collaboratively in a 4-person Agile team and shipped to production within 3 weeks.",
      },
      de: {
        degree: "Junior Web-Entwicklung Bootcamp",
        description: "Intensives Vollstack-Webentwicklungsprogramm — 660 Stunden praxisnahes Training. Entwicklung der App D'accord in einem 4-köpfigen Agile-Team, innerhalb von 3 Wochen in Produktion gebracht.",
      },
      es: {
        degree: "Bootcamp de Desarrollo Web Junior",
        description: "Programa intensivo de desarrollo web full-stack — 660 horas de entrenamiento práctico. Construcción de D'accord en colaboración con un equipo Agile de 4 personas, lanzado a producción en 3 semanas.",
      },
    },
  },
  {
    degree: "Desarrollo con IA: de 0 a producción",
    institution: "BIG School",
    period: "March 2026",
    description: "Introduction to AI development, from the conception of the idea to deployment in production, with a practical and results-oriented focus.",
    certificates: ["/certificates/Certificado-PCHC-BIGschool.jpg"],
    translations: {
      en: {
        degree: "Introduction to AI Development: From Idea to Production",
        description: "Online course on AI development fundamentals, from ideation to production deployment, with a practical and results-oriented approach, taught by BIG School.",
      },
      de: {
        degree: "Einführung in die KI-Entwicklung: Von der Idee bis zur Produktion",
        description: "Online-Kurs zu den Grundlagen der KI-Entwicklung, von der Ideenfindung bis zum Produktions-Deployment, mit einem praktischen und ergebnisorientierten Ansatz, unterrichtet von BIG School.",
      },
      es: {
        degree: "Introducción ala Desarrollo con IA: de 0 a Producción",
        description: "Introducción a la Desarrollo con IA, desde la concepción de la idea hasta el despliegue en producción, con un enfoque práctico y orientado a resultados.",
      },
    },
  },
  {
    degree: "Frontend Development Industry Training",
    institution: "Brainnest",
    period: "Jun — Jul 2022",
    description: "24-hour industry training in frontend development fundamentals.",
    certificates: ["/certificates/brainnest-certificate.jpg"],
    translations: {
      en: {
        degree: "Frontend Development Industry Training",
        description: "24-hour industry training program covering frontend development fundamentals, including HTML, CSS, and JavaScript.",
      },
      de: {
        degree: "Frontend-Entwicklung Branchentraining",
        description: "24-stündiges Branchentrainingsprogramm zu Frontend-Entwicklungsgrundlagen, einschließlich HTML, CSS und JavaScript.",
      },
      es: {
        degree: "Entrenamiento Industrial de Desarrollo Frontend",
        description: "Programa de capacitación industrial de 24 horas que cubre las bases del desarrollo frontend, incluyendo HTML, CSS y JavaScript.",
      },
    },
  },
  {
    degree: "Introducción a la programación en JavaScript",
    institution: "Domestika",
    period: "Aug 2023",
    description: "Online course on JavaScript programming by Javier Usobiaga.",
    certificates: ["/certificates/domestika-certificate.jpg"],
    translations: {
      en: {
        degree: "Introduction to JavaScript Programming",
        description: "Online course on JavaScript programming fundamentals taught by Javier Usobiaga on the Domestika platform.",
      },
      de: {
        degree: "Einführung in die JavaScript-Programmierung",
        description: "Online-Kurs zu den Grundlagen der JavaScript-Programmierung von Javier Usobiaga auf der Domestika-Plattform.",
      },
      es: {
        degree: "Introducción a la programación en JavaScript",
        description: "Curso online sobre fundamentos de programación en JavaScript dictado por Javier Usobiaga en la plataforma Domestika.",
      },
    },
  },
];

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  translations?: {
    es: { role: string; description: string };
    de: { role: string; description: string };
  };
}

export const experience: ExperienceEntry[] = [
  {
    role: "Building Agitprop Studio",
    company: "Side Project → Production SaaS",
    period: "Mar 2026 — Present",
    description:
      "Multi-tenant SaaS platform for artists — from concept to production with real users and payments.",
    translations: {
      es: {
        role: "Construyendo Agitprop Studio",
        description:
          "Plataforma SaaS multi-tenant para artistas — desde el concepto hasta producción con usuarios reales y pagos.",
      },
      de: {
        role: "Aufbau von Agitprop Studio",
        description:
          "Multi-Tenant SaaS-Plattform für Künstler — vom Konzept bis zur Produktion mit echten Nutzern und Zahlungen.",
      },
    },
  },
  {
    role: "Parental Leave & Specialization",
    company: "Leipzig, Germany",
    period: "Jul 2023 — Dec 2024",
    description:
      "Deepened expertise in Spec-Driven Development and AI-assisted engineering workflows while on parental leave.",
    translations: {
      es: {
        role: "Licencia Parental y Especialización",
        description:
          "Profundicé experiencia en Spec-Driven Development y flujos de trabajo de ingeniería asistidos por IA durante la licencia parental.",
      },
      de: {
        role: "Elternzeit & Spezialisierung",
        description:
          "Vertiefte Expertise in Spec-Driven Development und KI-unterstützten Engineering-Workflows während der Elternzeit.",
      },
    },
  },
  {
    role: "Frontend Developer",
    company: "TCG Chile — Santiago",
    period: "Aug 2021 — Jul 2023",
    description:
      "Sole frontend developer. Built entire web and mobile frontend infrastructure from scratch to production.",
    translations: {
      es: {
        role: "Desarrollador Frontend",
        description:
          "Único desarrollador frontend. Construí toda la infraestructura web y móvil desde cero hasta producción.",
      },
      de: {
        role: "Frontend-Entwickler",
        description:
          "Alleiniger Frontend-Entwickler. Aufbau der gesamten Web- und Mobile-Frontend-Infrastruktur von Grund auf bis zur Produktion.",
      },
    },
  },
  {
    role: "Second-Level Support Engineer",
    company: "ICONSTRUYE — Santiago",
    period: "Jan 2018 — Sep 2019",
    description:
      "Production support for Electronic Tax Document and Marketplace integrations using SQL and C#.",
    translations: {
      es: {
        role: "Ingeniero de Soporte de Segundo Nivel",
        description:
          "Soporte en producción para integraciones de Documentos Tributarios Electrónicos y Marketplace usando SQL y C#.",
      },
      de: {
        role: "Second-Level Support Engineer",
        description:
          "Produktionssupport für Integrationen von elektronischen Steuerdokumenten und Marktplatz mit SQL und C#.",
      },
    },
  },
  {
    role: "Second-Level Support Engineer",
    company: "ICONSTRUYE — Chile",
    period: "Feb 2016 — Jan 2017",
    description:
      "Bug fixes and stored procedures in production web apps using SQL, ASP.NET and C#. SLA compliance.",
    translations: {
      es: {
        role: "Ingeniero de Soporte de Segundo Nivel",
        description:
          "Corrección de errores y procedimientos almacenados en apps web de producción con SQL, ASP.NET y C#. Cumplimiento de SLA.",
      },
      de: {
        role: "Second-Level Support Engineer",
        description:
          "Fehlerbehebung und gespeicherte Prozeduren in Produktions-Webanwendungen mit SQL, ASP.NET und C#. SLA-Einhaltung.",
      },
    },
  },
  {
    role: "Junior Software Developer",
    company: "ICONSTRUYE — Chile",
    period: "Oct 2015 — Jan 2016",
    description:
      "Code maintenance and bug fixes for production apps. Reports and documentation using ASP.NET and SQL.",
    translations: {
      es: {
        role: "Desarrollador de Software Junior",
        description:
          "Mantenimiento de código y corrección de errores en apps de producción. Reportes y documentación con ASP.NET y SQL.",
      },
      de: {
        role: "Junior Software-Entwickler",
        description:
          "Code-Wartung und Fehlerbehebung für Produktionsanwendungen. Berichte und Dokumentation mit ASP.NET und SQL.",
      },
    },
  },
  {
    role: "Project Assistant",
    company: "Zed — Santiago",
    period: "Jan 2015 — Oct 2015",
    description:
      "Analysed projects, managed customer incidents and coordinated cross-country department requests.",
    translations: {
      es: {
        role: "Asistente de Proyectos",
        description:
          "Análisis de proyectos, gestión de incidentes de clientes y coordinación de solicitudes entre departamentos de distintos países.",
      },
      de: {
        role: "Projektassistent",
        description:
          "Projektanalyse, Verwaltung von Kundenincidents und Koordination länderübergreifender Abteilungsanfragen.",
      },
    },
  },
];

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
  },
];

export const techStack: Record<string, string[]> = {
  Frontend: ["React 19", "Next.js 16", "TypeScript", "JavaScript", "Tailwind CSS v4", "Bootstrap", "Figma(UI Design - Wireframes & Mockups)", "Framer Motion"],
  "Backend & Data": [
    "Node.js",
    "Next.js API Routes",
    "Supabase (PostgreSQL)",
    "Prisma ORM",
    "MongoDB",
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
        description: "4-year university degree in Computer Engineering with specialization in IT Project Management, awarded by Universidad Tecnológica de Chile INACAP.",
      },
      de: {
        degree: "Informatikingenieur",
        description: "4-jähriger Universitätsabschluss in Informatik-Ingenieurwesen mit Spezialisierung in IT-Projektmanagement, verliehen von der Universidad Tecnológica de Chile INACAP.",
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
    },
  },
  {
    degree: "Frontend Development Industry Training",
    institution: "Brainnest",
    period: "Jun — Jul 2022",
    description: "24-hour industry training in frontend development fundamentals.",
    certificates: ["/certificates/brainnest-certificate.pdf"],
    translations: {
      en: {
        degree: "Frontend Development Industry Training",
        description: "24-hour industry training program covering frontend development fundamentals, including HTML, CSS, and JavaScript.",
      },
      de: {
        degree: "Frontend-Entwicklung Branchentraining",
        description: "24-stündiges Branchentrainingsprogramm zu Frontend-Entwicklungsgrundlagen, einschließlich HTML, CSS und JavaScript.",
      },
    },
  },
  {
    degree: "Introducción a la programación en JavaScript",
    institution: "Domestika",
    period: "Aug 2023",
    description: "Online course on JavaScript programming by Javier Usobiaga.",
    certificates: ["/certificates/domestika-certificate.pdf"],
    translations: {
      en: {
        degree: "Introduction to JavaScript Programming",
        description: "Online course on JavaScript programming fundamentals taught by Javier Usobiaga on the Domestika platform.",
      },
      de: {
        degree: "Einführung in die JavaScript-Programmierung",
        description: "Online-Kurs zu den Grundlagen der JavaScript-Programmierung von Javier Usobiaga auf der Domestika-Plattform.",
      },
    },
  },
];

export const experience = [
  {
    role: "Building Agitprop Studio",
    company: "Side Project → Production SaaS",
    period: "Mar 2026 — Present",
    description:
      "Multi-tenant SaaS platform for artists — from concept to production with real users and payments.",
  },
  {
    role: "Parental Leave & Specialization",
    company: "Leipzig, Germany",
    period: "Jul 2023 — Dec 2024",
    description:
      "Deepened expertise in Spec-Driven Development and AI-assisted engineering workflows while on parental leave.",
  },
  {
    role: "Frontend Developer",
    company: "TCG Chile — Santiago",
    period: "Aug 2021 — Jul 2023",
    description:
      "Sole frontend developer. Built entire web and mobile frontend infrastructure from scratch to production.",
  },
  {
    role: "Second-Level Support Engineer",
    company: "ICONSTRUYE — Santiago",
    period: "Jan 2018 — Sep 2019",
    description:
      "Production support for Electronic Tax Document and Marketplace integrations using SQL and C#.",
  },
  {
    role: "Second-Level Support Engineer",
    company: "ICONSTRUYE — Chile",
    period: "Feb 2016 — Jan 2017",
    description:
      "Bug fixes and stored procedures in production web apps using SQL, ASP.NET and C#. SLA compliance.",
  },
  {
    role: "Junior Software Developer",
    company: "ICONSTRUYE — Chile",
    period: "Oct 2015 — Jan 2016",
    description:
      "Code maintenance and bug fixes for production apps. Reports and documentation using ASP.NET and SQL.",
  },
  {
    role: "Project Assistant",
    company: "Zed — Santiago",
    period: "Jan 2015 — Oct 2015",
    description:
      "Analysed projects, managed customer incidents and coordinated cross-country department requests.",
  },
];

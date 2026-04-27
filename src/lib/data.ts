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
}

export const projects: Project[] = [
  {
    id: "agitprop-studio",
    title: "Agitprop Studio",
    tagline: "Multi-tenant SaaS & CMS platform for tattoo artists",
    type: "SaaS Platform",
    date: "March 2026 — Present",
    problem:
      "Tattoo artists need complete digital infrastructure — portfolio galleries, payment processing, and client management — but can't afford custom development or the complexity of stitching together 5 different third-party services.",
    solution:
      "Built a multi-tenant SaaS where each artist gets their own CMS, dual payment gateway (Stripe + PayPal), gallery management system, and custom subdomain — all from a single codebase with strict data isolation via Supabase Row Level Security policies.",
    outcome:
      "Production-ready platform handling real payments with full webhook processing for Stripe and PayPal events. Built with an AI-assisted Spec-Driven Development workflow and zero data leaks between tenants.",
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
    tech: ["TypeScript", "React"],
    liveUrl: "https://camp9-final-project-sooty.vercel.app",
    repoUrl: "https://github.com/Omanaite/camp9-final-project",
    featured: false,
  },
];

export const techStack: Record<string, string[]> = {
  Frontend: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
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

export const experience = [
  {
    role: "Building Agitprop Studio",
    company: "Side Project → Production SaaS",
    period: "Mar 2026 — Present",
    description:
      "Multi-tenant SaaS platform for tattoo artists — from concept to production with real users and payments.",
  },
  {
    role: "Parental Leave & Specialization",
    company: "Leipzig, Germany",
    period: "Jul 2023 — Dec 2024",
    description:
      "Deepened expertise in Spec-Driven Development and AI-assisted engineering workflows while on parental leave.",
  },
  {
    role: "Junior Web Development Bootcamp",
    company: "Devhaus Leipzig",
    period: "2023",
    description:
      "Intensive full-stack program. Built D'accord in a 4-person Agile team, shipped to production in 3 weeks.",
  },
  {
    role: "Frontend Developer",
    company: "TCG Chile — Santiago",
    period: "Aug 2021 — Jul 2023",
    description:
      "Sole frontend developer. Built entire web and mobile frontend infrastructure from scratch to production.",
  },
];

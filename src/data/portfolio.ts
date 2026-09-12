export const profile = {
  email: "luisfernando.alarcon.dev@gmail.com",
  github: "https://github.com/luisalarcon-dev",
  // International digits only, e.g. country code + professional number. Empty = hidden.
  whatsapp: "59167671435",
};
export type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  stack: string[];
  kind: "dental" | "marketplace";
  repoUrl?: string;
  demoUrl?: string;
};
export const projects: Project[] = [
  {
    title: "Dental Clinic Website",
    category: "WEB EXPERIENCE / HEALTHCARE",
    status: "Concept Project",
    description:
      "A public-facing website concept for the healthcare sector, focused on clear service information and a welcoming patient experience. An independent concept, not client work.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    kind: "dental",
    repoUrl: "",
    demoUrl: "",
  },
  {
    title: "EncuentraPro",
    category: "FULL STACK / MARKETPLACE",
    status: "Private / In Development",
    description:
      "A marketplace in development to connect people with professional services. Bringing the interface, API and data layer together in one full stack product.",
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    kind: "marketplace",
  },
];
export const stack = [
  {
    name: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "PHP", "SQL"],
  },
  { name: "Frontend", items: ["HTML5", "CSS3", "React", "Tailwind CSS"] },
  { name: "Backend", items: ["Node.js", "NestJS", "REST APIs"] },
  { name: "Databases", items: ["PostgreSQL", "MySQL", "SQL Server", "Prisma"] },
  { name: "Mobile", items: ["React Native", "Expo"] },
  {
    name: "Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "npm",
      "pnpm",
      "Turborepo",
      "VS Code",
      "Visual Studio",
    ],
  },
];
export const aiTasks = [
  "AI coding agents",
  "Requirements analysis",
  "Debugging",
  "Refactoring",
  "Code review",
  "Documentation",
  "Testing support",
  "Automation",
];

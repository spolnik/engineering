export type Project = {
  name: string;
  status: "Active" | "Incubating" | "Planned";
  description: string;
  focus: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    name: "World Cup 2026",
    status: "Active",
    description:
      "An interactive World Cup 2026 project for exploring tournament structure, teams, matches, and the event experience.",
    focus: ["World Cup 2026", "Interactive app", "Sports data"],
    url: "https://spolnik.github.io/world-cup-2026/",
  },
  {
    name: "spolnik/engineering",
    status: "Active",
    description:
      "The source repository for this engineering blog, including the Next.js site, MDX articles, diagrams, and project notes.",
    focus: ["Next.js", "MDX", "Technical writing", "Open source"],
    url: "https://github.com/spolnik/engineering",
  },
  {
    name: "Market Data Cache Lab",
    status: "Active",
    description:
      "A practical exploration of price chart caching, invalidation, and read-path design across PostgreSQL, Redis, and edge caches.",
    focus: ["PostgreSQL", "Redis", "Caching", "Finance systems"],
  },
  {
    name: "Local Agent Workbench",
    status: "Incubating",
    description:
      "Notes and experiments around local LLM coding agents that can inspect code, run tests, and make bounded changes without cloud-first workflow lock-in.",
    focus: ["Local LLMs", "Coding agents", "Developer tools"],
  },
  {
    name: "Failure Mode Playbook",
    status: "Planned",
    description:
      "A collection of backend patterns for designing systems that degrade plainly, recover predictably, and avoid dramatic outage behavior.",
    focus: ["Reliability", "System design", "Team practices"],
  },
];

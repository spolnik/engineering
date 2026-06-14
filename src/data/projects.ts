export type Project = {
  name: string;
  status: "Active" | "Incubating" | "Planned";
  description: string;
  focus: string[];
};

export const projects: Project[] = [
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

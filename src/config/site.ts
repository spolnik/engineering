export const siteConfig = {
  name: "Engineering Lab",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://engineering-lab.vercel.app",
  description:
    "Engineering systems, tools, and ideas from the edge of backend, platform, and AI-assisted software development.",
  author: "Jacek",
  handle: "@engineeringlab",
  nav: [
    { href: "/blog", label: "Blog" },
    { href: "/notes", label: "Notes" },
    { href: "/projects", label: "Projects" },
    { href: "/videos", label: "Videos" },
    { href: "/about", label: "About" },
  ],
  topics: [
    "Java",
    "Spring Boot",
    "Platform engineering",
    "Low latency",
    "PostgreSQL",
    "Redis",
    "Local LLM agents",
    "Engineering leadership",
  ],
} as const;

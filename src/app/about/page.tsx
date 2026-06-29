import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Engineering Lab by Jacek Spolnik, a software engineering media site focused on backend systems, platform engineering, and AI-assisted development.",
  alternates: {
    canonical: "/about",
  },
};

const principles = [
  "Prefer explicit trade-offs over vague best practices.",
  "Treat operations, debugging, and recovery as part of design.",
  "Keep tools accountable to working software, tests, and reviewable diffs.",
  "Write for engineers who need to make decisions under real constraints.",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title={`${siteConfig.name} is a home base for practical engineering media by ${siteConfig.author}.`}
        description="The site is built for long-form writing now, and for a future YouTube channel without changing the underlying content model."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-6">
          <div className="rounded-lg border border-white/10 bg-card/65 p-6">
            <Badge variant="outline" className="border-primary/30 text-primary">
              Author
            </Badge>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight">{siteConfig.author}</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              I write about backend systems, platform engineering, Java and Spring
              Boot services, data stores, reliability work, and AI-assisted
              engineering from the perspective of production software.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/spolnik"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/spolnik/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-card/65 p-6">
            <Badge variant="outline" className="border-primary/30 text-primary">
              Focus
            </Badge>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight">Backend and platform judgment</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              The perspective is senior, pragmatic, and technical: Java and Spring
              services, data stores, low-latency read paths, internal platforms,
              reliability work, and local AI tools evaluated by whether they improve
              real engineering outcomes.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Editorial principles</h2>
          <div className="mt-6 grid gap-3">
            {principles.map((principle) => (
              <div key={principle} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm leading-7 text-muted-foreground">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

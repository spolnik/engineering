import type { Metadata } from "next";
import { Clapperboard, Mic2, MonitorPlay } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "A placeholder for future YouTube episodes on backend architecture, platform engineering, and AI-assisted software development.",
  alternates: {
    canonical: "/videos",
  },
};

const series = [
  {
    title: "Architecture teardown",
    description: "One real system design problem, the trade-offs, and the production failure modes to watch.",
    icon: MonitorPlay,
  },
  {
    title: "Agent workflow lab",
    description: "Local coding agents working through repo inspection, edits, tests, browser checks, and reviewable diffs.",
    icon: Clapperboard,
  },
  {
    title: "Engineering leadership notes",
    description: "Short episodes on team practices, technical standards, incident learning, and pragmatic decision-making.",
    icon: Mic2,
  },
];

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Videos"
        title="YouTube will grow from the writing"
        description="This page is ready to become the channel hub once episodes are published."
      />

      <div className="mt-10 overflow-hidden rounded-lg border border-white/10 bg-card/70">
        <div className="grid min-h-[18rem] place-items-center bg-[radial-gradient(circle_at_50%_0%,oklch(0.79_0.13_174/0.18),transparent_32rem)] p-8 text-center">
          <div>
            <Badge variant="outline" className="border-accent/30 text-accent">
              Coming soon
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance">
              Backend systems, explained with the code and constraints still attached.
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {series.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="rounded-lg border border-white/10 bg-card/60 p-6">
              <Icon className="size-5 text-primary" />
              <h2 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

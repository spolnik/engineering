import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, ListChecks, Wrench } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Shorter engineering notes, checklists, patterns, and implementation sketches.",
  alternates: {
    canonical: "/notes",
  },
};

const noteFormats = [
  {
    title: "Implementation sketches",
    description: "Small design notes for APIs, cache keys, queues, deployment flows, and agent workflows.",
    icon: Wrench,
  },
  {
    title: "Review checklists",
    description: "Practical prompts for architecture reviews, incident prep, and production readiness.",
    icon: ListChecks,
  },
  {
    title: "Reading notes",
    description: "Condensed takeaways from docs, papers, production failures, and tool experiments.",
    icon: FileText,
  },
];

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Notes"
        title="Short-form engineering memory"
        description="This route is reserved for shorter technical notes that do not need the full article treatment."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {noteFormats.map((format) => {
          const Icon = format.icon;

          return (
            <div key={format.title} className="rounded-lg border border-white/10 bg-card/60 p-6">
              <Icon className="size-5 text-primary" />
              <h2 className="mt-5 text-xl font-semibold tracking-tight">{format.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{format.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 rounded-lg border border-primary/25 bg-primary/10 p-6">
        <Badge variant="outline" className="border-primary/30 text-primary">
          Coming next
        </Badge>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight">Notes will share the same repo-first model</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
          Blog posts already live as MDX files. Notes can use the same approach later,
          either in a separate content directory or as a lighter post type.
        </p>
        <Link href="/blog" className={cn(buttonVariants({ size: "lg" }), "mt-6 h-11 px-4")}>
          Read current writing
          <ArrowRight data-icon="inline-end" className="size-4" />
        </Link>
      </div>
    </div>
  );
}

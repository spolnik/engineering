import type { Metadata } from "next";
import { Code, DatabaseZap, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects and labs around caching, local coding agents, reliability, and platform systems.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Engineering labs with practical edges"
        description="Small enough to stay focused, concrete enough to produce useful lessons, and aligned with future article and video series."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="rounded-lg border border-white/10 bg-card/65 p-6">
            <div className="flex items-center justify-between gap-3">
              <Badge variant="outline" className="border-primary/30 text-primary">
                {project.status}
              </Badge>
              <DatabaseZap className="size-5 text-muted-foreground" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-primary"
                >
                  {project.name}
                  <ExternalLink className="size-4" />
                </a>
              ) : (
                project.name
              )}
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.focus.map((item) => (
                <Badge key={item} variant="secondary" className="bg-white/5 text-muted-foreground">
                  {item}
                </Badge>
              ))}
            </div>
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "mt-6",
                })}
              >
                <Code className="size-4" />
                Source
                <ExternalLink className="size-3.5" />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}

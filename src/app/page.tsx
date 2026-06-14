import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Braces,
  Database,
  Gauge,
  Radio,
  TerminalSquare,
} from "lucide-react";

import { ArticleCard } from "@/components/article-card";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { getFeaturedPosts } from "@/lib/posts";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Backend architecture",
    description:
      "Java, Spring Boot, service boundaries, data ownership, queueing, and the tradeoffs that show up after launch.",
    icon: Blocks,
  },
  {
    title: "Platform systems",
    description:
      "Internal developer platforms, deployment surfaces, observability, build pipelines, and operational leverage.",
    icon: TerminalSquare,
  },
  {
    title: "Finance-grade paths",
    description:
      "Low-latency reads, cache correctness, market data shapes, idempotency, and boring failure behavior.",
    icon: Gauge,
  },
  {
    title: "AI-assisted engineering",
    description:
      "Local agents, repo-aware workflows, test loops, guardrails, and where AI tools actually earn trust.",
    icon: Braces,
  },
];

const signals = [
  { label: "Primary stack", value: "Java / Spring / Postgres" },
  { label: "Operating mode", value: "Pragmatic systems work" },
  { label: "Media direction", value: "Writing now, video next" },
];

export default function Home() {
  const featuredPosts = getFeaturedPosts().slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/media/engineering-lab-hero.png"
            alt="Dark engineering lab environment with backend system architecture visuals"
            fill
            priority
            className="object-cover object-center opacity-70"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,oklch(0.095_0.012_250)_0%,oklch(0.095_0.012_250/0.94)_34%,oklch(0.095_0.012_250/0.58)_72%,oklch(0.095_0.012_250/0.86)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="mx-auto flex min-h-[64svh] max-w-7xl flex-col justify-end px-4 py-12 sm:min-h-[78svh] sm:px-6 sm:py-16 lg:px-8">
          <MotionReveal className="max-w-4xl">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              Senior backend systems, platform work, and local AI tools
            </Badge>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl lg:text-8xl">
              Engineering Lab
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground sm:text-2xl sm:leading-9">
              {siteConfig.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blog"
                className={cn(buttonVariants({ size: "lg" }), "h-11 px-4")}
              >
                Read the field notes
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
              <Link
                href="/videos"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 border-white/15 bg-background/50 px-4"
                )}
              >
                YouTube roadmap
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal
            delay={0.12}
            className="mt-14 hidden gap-3 border-t border-white/10 pt-6 sm:grid sm:grid-cols-3"
          >
            {signals.map((signal) => (
              <div key={signal.label}>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {signal.label}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{signal.value}</p>
              </div>
            ))}
          </MotionReveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <MotionReveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Positioning
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Practical writing from the systems layer.
          </h2>
        </MotionReveal>
        <MotionReveal delay={0.1} className="space-y-6 text-lg leading-8 text-muted-foreground">
          <p>
            This site is written from the perspective of a backend and platform engineer
            who cares about the unglamorous details: data models, latency budgets,
            deployability, failure modes, caches, and team practices that survive contact
            with production.
          </p>
          <p>
            The goal is not hot takes. It is useful engineering judgment: what to build,
            what to avoid, and how to reason about systems when the requirements are
            incomplete and the stakes are real.
          </p>
        </MotionReveal>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured articles"
            title="Current field notes"
            description="Deep, concrete writing on backend architecture, data stores, local agents, and reliability."
            action={
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                All posts <ArrowRight className="size-4" />
              </Link>
            }
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} featured />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Content pillars"
          title="The territory"
          description="The site is organized around the kinds of engineering decisions that compound over years."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <MotionReveal
                key={pillar.title}
                className="rounded-lg border border-white/10 bg-card/55 p-6 transition hover:border-primary/35 hover:bg-card/80"
              >
                <Icon className="size-5 text-primary" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Labs that can turn into series"
            description="Small, practical projects that create repeatable material for articles and future videos."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-lg border border-white/10 bg-card/60 p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    {project.status}
                  </Badge>
                  <Database className="size-4 text-muted-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.focus.map((item) => (
                    <Badge key={item} variant="secondary" className="bg-white/5 text-muted-foreground">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Video"
            title="YouTube is the next distribution channel"
            description="The writing will become the source material for concise engineering episodes: architecture breakdowns, tooling workflows, and production lessons."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {["System design breakdowns", "Local agent workflows", "Backend architecture reviews"].map(
              (item) => (
                <Badge key={item} variant="outline" className="border-white/15">
                  {item}
                </Badge>
              )
            )}
          </div>
        </div>
        <div className="rounded-lg border border-primary/25 bg-primary/10 p-6">
          <Radio className="size-5 text-primary" />
          <h3 className="mt-5 text-2xl font-semibold tracking-tight">Follow the buildout</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Subscribe through RSS now. The newsletter and YouTube channel can plug into
            this site later without changing the content model.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="/rss.xml" className={cn(buttonVariants({ size: "lg" }), "h-11 px-4")}>
              RSS feed
            </a>
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-4")}
            >
              About the site
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

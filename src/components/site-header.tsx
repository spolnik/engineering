import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const linkClass =
  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="relative flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <span className="absolute inset-1 rounded-md border border-primary/25" />
              <span className="size-2 rounded-full bg-primary shadow-[0_0_22px_var(--primary)]" />
            </span>
            <span className="leading-none">
              <span className="block text-sm font-semibold tracking-wide text-foreground">
                {siteConfig.name}
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                Backend / Platform / AI
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
            <a href="/rss.xml" className={cn(linkClass, "font-mono")}>
              RSS
            </a>
          </nav>
        </div>
        <nav className="scrollbar-none mt-3 flex gap-1 overflow-x-auto pb-1 md:hidden" aria-label="Mobile navigation">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className={cn(linkClass, "shrink-0")}>
              {item.label}
            </Link>
          ))}
          <a href="/rss.xml" className={cn(linkClass, "shrink-0 font-mono")}>
            RSS
          </a>
        </nav>
      </div>
    </header>
  );
}

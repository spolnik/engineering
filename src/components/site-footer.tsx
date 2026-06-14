import Link from "next/link";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <Link href="/" className="text-sm font-semibold tracking-wide text-foreground">
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            A technical media home for backend architecture, platform engineering,
            finance-grade systems, local coding agents, and the practices that make
            engineering teams more reliable.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:justify-self-end">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Navigate
            </h2>
            <div className="mt-4 grid gap-2">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Follow
            </h2>
            <div className="mt-4 grid gap-2">
              <a className="text-sm text-muted-foreground transition hover:text-foreground" href="/rss.xml">
                RSS feed
              </a>
              <Link className="text-sm text-muted-foreground transition hover:text-foreground" href="/videos">
                YouTube soon
              </Link>
              <Link className="text-sm text-muted-foreground transition hover:text-foreground" href="/blog">
                Latest writing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import type { PropsWithChildren } from "react";
import type { MDXComponents } from "mdx/types";

import { cn } from "@/lib/utils";

type CalloutProps = PropsWithChildren<{
  title?: string;
  tone?: "default" | "warning";
}>;

function Callout({ title = "Field note", tone = "default", children }: CalloutProps) {
  return (
    <aside
      className={cn(
        "my-8 rounded-lg border p-5 text-sm leading-7",
        tone === "warning"
          ? "border-accent/30 bg-accent/10 text-accent"
          : "border-primary/25 bg-primary/10 text-foreground"
      )}
    >
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em]">
        {title}
      </p>
      <div className="mt-3 text-muted-foreground [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}

export const mdxComponents: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2
      className={cn("mt-12 scroll-m-24 text-3xl font-semibold tracking-tight text-balance", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn("mt-9 scroll-m-24 text-2xl font-semibold tracking-tight text-balance", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p className={cn("mt-6 text-pretty leading-8 text-muted-foreground", className)} {...props} />
  ),
  a: ({ className, href, ...props }) => {
    const linkClass = cn(
      "font-medium text-primary underline underline-offset-4 transition hover:text-foreground",
      className
    );

    if (typeof href === "string" && href.startsWith("/")) {
      return <Link href={href} className={linkClass} {...props} />;
    }

    return <a href={href} className={linkClass} rel="noreferrer" target="_blank" {...props} />;
  },
  ul: ({ className, ...props }) => (
    <ul className={cn("mt-6 list-disc space-y-3 pl-6 text-muted-foreground", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("mt-6 list-decimal space-y-3 pl-6 text-muted-foreground", className)} {...props} />
  ),
  li: ({ className, ...props }) => <li className={cn("pl-2 leading-8", className)} {...props} />,
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "my-8 border-l-2 border-primary/70 pl-6 text-lg leading-8 text-foreground",
        className
      )}
      {...props}
    />
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn("my-12 border-white/10", className)} {...props} />
  ),
  table: ({ className, ...props }) => (
    <div className="my-8 overflow-x-auto rounded-lg border border-white/10">
      <table className={cn("w-full min-w-[42rem] text-sm", className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }) => (
    <th className={cn("bg-white/5 px-4 py-3 text-left font-semibold", className)} {...props} />
  ),
  td: ({ className, ...props }) => (
    <td className={cn("border-t border-white/10 px-4 py-3 text-muted-foreground", className)} {...props} />
  ),
  Callout,
};

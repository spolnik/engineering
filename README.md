# Engineering Lab

A premium software engineering media site built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui primitives, MDX, Framer Motion, and `rehype-pretty-code`.

The site is intentionally repo-first: posts live as MDX files under `content/blog`, there is no database, and it is ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Add a blog post

Create a new `.mdx` file in `content/blog`.

Example:

```mdx
---
title: "Designing a Cache Invalidation Boundary"
description: "How to keep cache invalidation explicit enough to debug."
date: "2026-06-20"
tags:
  - Redis
  - PostgreSQL
  - System design
category: "Data systems"
featured: false
hero: "teal"
---

Write the post here.
```

The slug is derived from the filename. Code fences support titles:

````mdx
```ts title="cache-key.ts"
export function key(symbol: string) {
  return `price:${symbol}`;
}
```
````

Frontmatter is validated by `src/lib/posts.ts`. Required fields are `title`, `description`, `date`, `tags`, `category`, and `featured`. Reading time is computed automatically unless `readingTime` is provided.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Keep the default build command: `npm run build`.
4. Set `NEXT_PUBLIC_SITE_URL` to the production URL, for example `https://your-domain.com`.
5. Deploy.

The app includes route metadata, Open Graph defaults, `/rss.xml`, `/sitemap.xml`, and `/robots.txt`.

## Structure

```text
content/blog/            MDX articles
public/media/            Generated site imagery
src/app/                 App Router pages and route handlers
src/components/          Reusable UI and MDX components
src/config/site.ts       Site name, URL, nav, and topic config
src/lib/posts.ts         Typed MDX loading and post helpers
src/data/projects.ts     Project cards used across routes
```

## Future improvements

- Add a newsletter provider and a real subscribe form.
- Add YouTube embeds once the channel has published episodes.
- Add tag archive routes such as `/blog/tags/postgresql`.
- Generate per-post Open Graph images.
- Add MDX notes under `content/notes`.
- Add basic analytics and Web Vitals reporting.

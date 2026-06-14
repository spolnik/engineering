import type { Metadata } from "next";

import { ArticleCard } from "@/components/article-card";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { getAllCategories, getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Deep technical posts on backend architecture, platform engineering, finance-grade systems, and AI-assisted software development.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Blog"
        title="Field notes for serious backend systems"
        description="Concrete writing about the systems, tools, and engineering decisions that shape production software."
      />

      <div className="mt-10 grid gap-4 border-y border-white/10 py-6 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Categories
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="border-accent/30 text-accent">
                {category}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Tags
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/5 text-muted-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} featured={post.featured} />
        ))}
      </div>
    </div>
  );
}

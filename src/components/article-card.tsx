import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPostDate, type Post } from "@/lib/posts";
import { cn } from "@/lib/utils";

type ArticleCardProps = {
  post: Post;
  featured?: boolean;
  className?: string;
};

export function ArticleCard({ post, featured = false, className }: ArticleCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn("group block focus-visible:outline-none", className)}
    >
      <Card
        className={cn(
          "h-full border-white/10 bg-card/70 transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card/90 hover:shadow-[0_24px_80px_oklch(0_0_0/0.35)] group-focus-visible:ring-2 group-focus-visible:ring-ring",
          featured && "bg-gradient-to-b from-primary/10 to-card/80"
        )}
      >
        <CardHeader className="gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span>{formatPostDate(post.date)}</span>
            <span aria-hidden="true">/</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-xl leading-tight text-balance transition group-hover:text-primary">
              {post.title}
            </CardTitle>
            <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>
          <CardDescription className="text-pretty text-base leading-7">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto flex flex-wrap gap-2">
          <Badge variant="outline" className="border-accent/30 text-accent">
            {post.category}
          </Badge>
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/5 text-muted-foreground">
              {tag}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </Link>
  );
}

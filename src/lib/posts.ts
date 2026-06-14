import "server-only";

import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  featured: boolean;
  readingTime?: string;
  cover?: string;
  hero?: "teal" | "amber" | "graphite";
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
};

type MatterData = Record<string, unknown>;

function asString(data: MatterData, key: keyof PostFrontmatter, slug: string) {
  const value = data[key];

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Post "${slug}" is missing a valid "${key}" field.`);
  }

  return value;
}

function asStringArray(data: MatterData, key: keyof PostFrontmatter, slug: string) {
  const value = data[key];

  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    value.some((item) => typeof item !== "string" || item.trim().length === 0)
  ) {
    throw new Error(`Post "${slug}" is missing a valid "${key}" array.`);
  }

  return value as string[];
}

function asBoolean(data: MatterData, key: keyof PostFrontmatter) {
  return typeof data[key] === "boolean" ? data[key] : false;
}

function parseFrontmatter(data: MatterData, slug: string, content: string): PostFrontmatter {
  const hero = data.hero;

  return {
    title: asString(data, "title", slug),
    description: asString(data, "description", slug),
    date: asString(data, "date", slug),
    tags: asStringArray(data, "tags", slug),
    category: asString(data, "category", slug),
    featured: asBoolean(data, "featured"),
    readingTime:
      typeof data.readingTime === "string" && data.readingTime.trim().length > 0
        ? data.readingTime
        : readingTime(content).text,
    cover:
      typeof data.cover === "string" && data.cover.trim().length > 0
        ? data.cover
        : undefined,
    hero:
      hero === "teal" || hero === "amber" || hero === "graphite"
        ? hero
        : "graphite",
  };
}

function getPostFileNames() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .sort();
}

function readPost(fileName: string): Post {
  const slug = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const file = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(file);
  const frontmatter = parseFrontmatter(data, slug, content);

  return {
    slug,
    content,
    ...frontmatter,
    readingTime: frontmatter.readingTime ?? readingTime(content).text,
  };
}

export function getAllPosts() {
  return getPostFileNames()
    .map(readPost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.featured);
}

export function getPostBySlug(slug: string) {
  const fileName = `${slug}.mdx`;

  if (!getPostFileNames().includes(fileName)) {
    return null;
  }

  return readPost(fileName);
}

export function getAllTags() {
  return Array.from(new Set(getAllPosts().flatMap((post) => post.tags))).sort();
}

export function getAllCategories() {
  return Array.from(new Set(getAllPosts().map((post) => post.category))).sort();
}

export function getRelatedPosts(post: Post, count = 2) {
  const postTags = new Set(post.tags);

  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      post: candidate,
      score: candidate.tags.filter((tag) => postTags.has(tag)).length,
    }))
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
    .slice(0, count)
    .map(({ post: relatedPost }) => relatedPost);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

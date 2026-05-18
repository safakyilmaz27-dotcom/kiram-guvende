import Link from "next/link";
import type { Metadata } from "next";
import { Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS, type BlogPost } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog | Kiram Güvende",
  description:
    "Ev sahipleri için kira hukuku, mülk yönetimi, gurbetçi rehberleri ve pasif gelir stratejileri.",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article
      className={
        featured
          ? "group grid overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg md:grid-cols-2"
          : "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
      }
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative flex items-center justify-center bg-gradient-to-br ${post.cover.gradient} ${
          featured ? "min-h-[280px] md:min-h-full" : "aspect-[16/10]"
        }`}
        aria-label={post.title}
      >
        <span
          aria-hidden
          className={featured ? "text-7xl drop-shadow-lg" : "text-5xl drop-shadow"}
        >
          {post.cover.emoji}
        </span>
      </Link>

      <div className={featured ? "flex flex-col justify-center p-8 lg:p-10" : "flex flex-1 flex-col p-6"}>
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
            {post.category}
          </span>
          <span className="text-muted-foreground">{formatDate(post.publishedAt)}</span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Clock className="size-3" />
            {post.readMinutes} dk
          </span>
        </div>

        <h2
          className={
            featured
              ? "mt-4 text-2xl font-bold leading-tight text-foreground group-hover:text-primary sm:text-3xl"
              : "mt-4 text-lg font-bold leading-snug text-foreground group-hover:text-primary"
          }
        >
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p
          className={
            featured
              ? "mt-4 text-base leading-relaxed text-muted-foreground"
              : "mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground"
          }
        >
          {post.excerpt}
        </p>

        <div className={featured ? "mt-6" : "mt-auto pt-5"}>
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="font-medium text-foreground">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.author.role}</p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 font-medium text-primary"
              aria-label={`${post.title} yazısını oku`}
            >
              Oku
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
  const [featured, ...rest] = sorted;

  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Blog
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Ev sahibinin rehberi
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Kira hukuku, mülk yönetimi, gurbetçi rehberleri ve pasif gelir
              stratejileri. Sahaya çıkmış uzmanlardan, ev sahibinin diliyle.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <PostCard post={featured} featured />
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-8 text-2xl font-bold text-foreground">Tüm yazılar</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}

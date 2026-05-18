import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/content/blog";

type Params = { slug: string };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Yazı bulunamadı | Kiram Güvende" };

  const url = `/blog/${post.slug}`;

  return {
    title: `${post.title} | Kiram Güvende Blog`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const sameCat = (x: typeof a) => (x.category === post.category ? 0 : 1);
      return sameCat(a) - sameCat(b);
    })
    .slice(0, 3);

  const markdown = post.body.join("\n\n");

  // Article JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Kiram Güvende",
      logo: {
        "@type": "ImageObject",
        url: "https://kiramguvende.com/icon",
      },
    },
    mainEntityOfPage: `https://kiramguvende.com/blog/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Cover */}
      <section className={`relative bg-gradient-to-br ${post.cover.gradient}`}>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Tüm yazılar
          </Link>

          <div className="mt-8 max-w-3xl text-white">
            <div className="mb-5 text-6xl drop-shadow-lg" aria-hidden>
              {post.cover.emoji}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/80">
              <span className="rounded-full bg-white/15 px-3 py-1 font-semibold uppercase tracking-wider ring-1 ring-white/20 backdrop-blur">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="size-3" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-3" />
                {post.readMinutes} dk okuma
              </span>
            </div>
            <h1 className="mt-5 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-base text-white/85 sm:text-lg">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Body + Sidebar */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
          <article className="min-w-0">
            <div className="mb-8 flex items-center gap-3 border-b border-border pb-6">
              <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary">
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {post.author.name}
                </p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            <div
              className="
                prose-content
                space-y-5
                text-base leading-relaxed text-foreground/90 sm:text-lg sm:leading-[1.75]
                [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground
                [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground
                [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary/80
                [&_strong]:font-semibold [&_strong]:text-foreground
                [&_em]:italic
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2
                [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-primary/30 [&_blockquote]:bg-muted/40 [&_blockquote]:px-5 [&_blockquote]:py-3 [&_blockquote]:italic [&_blockquote]:text-muted-foreground
                [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono
                [&_hr]:my-10 [&_hr]:border-border
                [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse
                [&_th]:border [&_th]:border-border [&_th]:bg-muted/50 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold
                [&_td]:border [&_td]:border-border [&_td]:px-4 [&_td]:py-2 [&_td]:text-sm
              "
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
            </div>

            {/* Inline CTA */}
            <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground">
                Bu kâbusu hiç yaşamayın.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Kiranızı garanti altına alın. Kiracı ne yaparsa yapsın, her ayın
                1’i hesabınızda.
              </p>
              <div className="mt-4">
                <Button
                  render={<Link href="/#hesaplayici" />}
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Garantili Kiramı Hesapla
                  <ArrowRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="border-b border-border bg-muted/40 px-5 py-4">
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  <Sparkles className="size-4 text-primary" />
                  İlgili Yazılar
                </h2>
              </div>
              <ul className="divide-y divide-border">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group flex gap-3 p-4 transition-colors hover:bg-muted/40"
                    >
                      <div
                        className={`flex size-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.cover.gradient} text-2xl`}
                        aria-hidden
                      >
                        {p.cover.emoji}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                          {p.category}
                        </p>
                        <h3 className="mt-0.5 line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                          {p.title}
                        </h3>
                        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="size-3" />
                          {p.readMinutes} dk
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1B5286] via-[#2E8FD9] to-[#54AEF5] p-6 text-white">
              <div
                aria-hidden
                className="absolute -top-12 -right-12 size-32 rounded-full bg-accent/20 blur-2xl"
              />
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-2.5 py-0.5 text-[11px] font-semibold text-accent ring-1 ring-accent/30">
                  ÜCRETSİZ
                </div>
                <h3 className="mt-3 text-xl font-bold leading-tight">
                  Mülkünüz ne kadar kazanır?
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  10 dakikada ücretsiz ekspertiz, 48 saatte size özel teklif.
                  Hiçbir yükümlülüğünüz yok.
                </p>
                <Button
                  render={<Link href="/iletisim" />}
                  size="lg"
                  className="mt-5 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Ücretsiz Değerleme Al
                  <ArrowRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

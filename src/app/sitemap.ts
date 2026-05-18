import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/content/blog";

const SITE_URL = "https://kiramguvende.com";

const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/nasil-calisir", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  { path: "/iletisim", changeFrequency: "monthly", priority: 0.7 },
  { path: "/hakkimizda", changeFrequency: "monthly", priority: 0.6 },
  { path: "/kariyer", changeFrequency: "weekly", priority: 0.5 },
  { path: "/sss", changeFrequency: "monthly", priority: 0.6 },
  { path: "/gizlilik", changeFrequency: "yearly", priority: 0.3 },
  { path: "/kosullar", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}

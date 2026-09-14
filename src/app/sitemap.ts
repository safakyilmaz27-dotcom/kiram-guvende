import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/content/blog";

const SITE_URL = "https://kiramguvende.com";

// next.config.mjs'te trailingSlash: true olduğu için kanonik URL'ler sonda "/" taşır.
// Sitemap'e slash'sız yazarsak Google her URL için 301 yer, tarama bütçesi boşa gider.
const canonical = (path: string) =>
  `${SITE_URL}${path.endsWith("/") ? path : `${path}/`}`;

const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/nasil-calisir", changeFrequency: "monthly", priority: 0.9 },
  { path: "/basvuru", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  { path: "/iletisim", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: canonical(r.path),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: canonical(`/blog/${p.slug}`),
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}

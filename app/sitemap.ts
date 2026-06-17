import type { MetadataRoute } from "next";
import { siteUrl, projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { url: siteUrl, priority: 1, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/projects`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/blogs`, priority: 0.7, changeFrequency: "monthly" as const },
    ...projects.map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];
  return routes.map((r) => ({ ...r, lastModified: now }));
}

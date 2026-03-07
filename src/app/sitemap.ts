import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://fresnopoolcare.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/commercial`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/residential`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/repair`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/water-treatment`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/wastewater`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}

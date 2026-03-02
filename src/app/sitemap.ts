import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005";
  const routes = [
    "",
    "/commercial",
    "/residential",
    "/repair",
    "/water-treatment",
    "/wastewater",
    "/service-areas",
    "/contact",
    "/signup",
    "/login",
    "/dashboard",
    "/schedule",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.6,
  }));
}

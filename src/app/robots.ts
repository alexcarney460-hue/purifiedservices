import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://fresnopoolcare.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login", "/signup", "/dashboard", "/schedule", "/admin", "/admin/*", "/auth", "/api/*", "/thanks-commercial", "/thanks-residential"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}

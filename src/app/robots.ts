import type { MetadataRoute } from "next";
import { SITE } from "@/src/lib/data";

// Qidiruv robotlariga barcha sahifalarni indekslashga ruxsat + sitemap manzili
export default function robots(): MetadataRoute.Robots {
  const base = SITE.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * Every indexable page on the site.
 *
 * `lastModified` must reflect a real content change, not the build time:
 * Google ignores lastmod when it is "always now". Bump a page's date when
 * its content is meaningfully edited. `priority` and `changefreq` are
 * intentionally omitted — Google ignores both.
 *
 * `/thank-you` is noindex and deliberately excluded.
 */
const pages: {
  path: string;
  lastModified: string;
  images?: string[];
}[] = [
  {
    path: "/",
    lastModified: "2026-10-06",
    images: ["/images/hero.jpg", "/images/domestic-family.jpg"],
  },
  {
    path: "/domestic-moves",
    lastModified: "2026-10-06",
    images: ["/images/domestic-family.jpg"],
  },
  {
    path: "/international-moves",
    lastModified: "2026-10-06",
    images: ["/images/international.jpg"],
  },
  {
    path: "/commercial-moves",
    lastModified: "2026-10-06",
    images: ["/images/office-move.jpg"],
  },
  {
    path: "/storage-solutions",
    lastModified: "2026-10-06",
    images: ["/images/storage-1.jpg"],
  },
  {
    path: "/white-glove-service",
    lastModified: "2026-10-06",
    images: ["/images/white-glove.jpg"],
  },
  { path: "/about-us", lastModified: "2026-10-06" },
  { path: "/reviews", lastModified: "2026-10-06" },
  {
    path: "/awards",
    lastModified: "2026-10-06",
    images: ["/images/award-2024.jpg", "/images/award-2023.jpg"],
  },
  { path: "/contact-us", lastModified: "2026-10-06" },
  { path: "/privacy-policy", lastModified: "2026-10-06" },
  { path: "/cookie-policy", lastModified: "2026-10-06" },
  { path: "/terms-of-service", lastModified: "2026-10-06" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: page.lastModified,
    images: page.images?.map((src) => `${siteUrl}${src}`),
  }));
}

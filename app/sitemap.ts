import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { areas } from "@/lib/areas";

/**
 * Every indexable page on the site.
 *
 * `lastModified` is the date the page's *visible content* last changed in a
 * way a visitor would notice — new copy, new sections, a retitle. It is NOT
 * the deploy date and must not be bumped for code-only changes (schema,
 * styling, refactors): Google only trusts lastmod while it stays verifiably
 * accurate, and ignores it site-wide once every URL is "always today".
 * When you edit a page's content, update its date here in the same commit.
 * `priority` and `changefreq` are intentionally omitted — Google ignores both.
 *
 * `/thank-you` is noindex and deliberately excluded.
 */
const LAUNCH = "2026-08-26"; // original content written for the rebuild
const LOCAL_SEO = "2026-10-06"; // area pages, new services, retitles

const pages: {
  path: string;
  lastModified: string;
  images?: string[];
}[] = [
  {
    path: "/",
    lastModified: LOCAL_SEO, // new services + areas sections, retitle
    images: ["/images/hero.jpg", "/images/domestic-family.jpg"],
  },
  {
    path: "/domestic-moves",
    lastModified: LAUNCH,
    images: ["/images/domestic-family.jpg"],
  },
  {
    path: "/international-moves",
    lastModified: LOCAL_SEO, // retitled "International Removals London"
    images: ["/images/international.jpg"],
  },
  {
    path: "/commercial-moves",
    lastModified: LOCAL_SEO, // retitled "Office Removals London"
    images: ["/images/office-move.jpg"],
  },
  {
    path: "/storage-solutions",
    lastModified: LOCAL_SEO, // Harrow/Pinner copy
    images: ["/images/storage-1.jpg"],
  },
  {
    path: "/white-glove-service",
    lastModified: LAUNCH,
    images: ["/images/white-glove.jpg"],
  },
  {
    path: "/packing-service",
    lastModified: LOCAL_SEO, // page created
    images: ["/images/moving-team.jpg"],
  },
  {
    path: "/piano-removals",
    lastModified: LOCAL_SEO, // page created
    images: ["/images/white-glove.jpg"],
  },
  { path: "/areas", lastModified: LOCAL_SEO }, // page created
  ...areas.map((a) => ({
    path: `/areas/${a.slug}`,
    lastModified: LOCAL_SEO, // pages created
    images: [a.image],
  })),
  { path: "/about-us", lastModified: LAUNCH },
  { path: "/reviews", lastModified: LAUNCH },
  {
    path: "/awards",
    lastModified: LAUNCH,
    images: ["/images/award-2024.jpg", "/images/award-2023.jpg"],
  },
  { path: "/contact-us", lastModified: LOCAL_SEO }, // WhatsApp + badges
  { path: "/privacy-policy", lastModified: LAUNCH },
  { path: "/cookie-policy", lastModified: LOCAL_SEO }, // analytics wording
  { path: "/terms-of-service", lastModified: LAUNCH },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: page.lastModified,
    images: page.images?.map((src) => `${siteUrl}${src}`),
  }));
}

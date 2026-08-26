import type { MetadataRoute } from "next";

const siteUrl = "https://www.northstar-removals.com";

const routes = [
  { path: "/", priority: 1.0 },
  { path: "/domestic-moves", priority: 0.9 },
  { path: "/international-moves", priority: 0.9 },
  { path: "/commercial-moves", priority: 0.9 },
  { path: "/storage-solutions", priority: 0.9 },
  { path: "/white-glove-service", priority: 0.8 },
  { path: "/about-us", priority: 0.7 },
  { path: "/reviews", priority: 0.7 },
  { path: "/awards", priority: 0.6 },
  { path: "/contact-us", priority: 0.9 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/cookie-policy", priority: 0.3 },
  { path: "/terms-of-service", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}

import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  // Next.js requires inline scripts for hydration; eval only in dev (HMR)
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  // Embedded Google Map in the footer
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

/**
 * 301s for URLs from the previous WordPress site (taken from its Yoast
 * sitemap) that have no direct equivalent here, so existing search
 * rankings and backlinks carry over to the closest relevant page.
 *
 * Old area-specific URLs point at the matching /areas/ page where one
 * exists (Hampstead, Belsize Park, Kensington, North London); the rest go
 * to the closest service page.
 */
const legacyRedirects = [
  { source: "/removals-hints-tips-and-guidance", destination: "/" },
  { source: "/styleguide", destination: "/" },
  { source: "/sitemap", destination: "/" },
  {
    source: "/environmentally-friendly-recycling-responsible-disposal-services",
    destination: "/about-us",
  },
  { source: "/commercial-removals-holborn", destination: "/commercial-moves" },
  {
    source: "/office-move-management-london",
    destination: "/commercial-moves",
  },
  {
    source: "/office-relocation-removals-north-london",
    destination: "/areas/north-london",
  },
  { source: "/workplace-removals-hampstead", destination: "/areas/hampstead" },
  { source: "/furniture-storage-victoria", destination: "/storage-solutions" },
  { source: "/high-value-storage-victoria", destination: "/storage-solutions" },
  {
    source: "/long-term-storage-kensington",
    destination: "/areas/kensington",
  },
  {
    source: "/secure-furniture-storage-belsize-park",
    destination: "/areas/hampstead",
  },
  { source: "/premium-removals-london", destination: "/white-glove-service" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;

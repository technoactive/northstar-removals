import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import MobileActionBar from "@/components/MobileActionBar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JsonLd, { ORG_ID, WEBSITE_ID } from "@/components/JsonLd";
import { serviceCards, site, siteUrl } from "@/lib/site";
import { areas } from "@/lib/areas";

// Fonts are self-hosted (variable woff2, latin subset) so the build never
// depends on Google Fonts. This avoids a Turbopack build failure on Vercel
// (vercel/next.js#99114) and removes a third-party request for visitors.
const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-sans",
  display: "swap",
});

const archivo = localFont({
  src: [
    { path: "./fonts/archivo-latin.woff2", weight: "500 900", style: "normal" },
    {
      path: "./fonts/archivo-italic-latin.woff2",
      weight: "500 900",
      style: "italic",
    },
  ],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Northstar Removals | Removal Company London, Pinner & Harrow",
    template: "%s | Northstar Removals",
  },
  description:
    "Award-winning removal company based in Pinner, serving Harrow, North West London and the whole of London since 2006. House and office removals, packing, piano moves, international relocation and secure storage.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Northstar Removals",
    title: "Northstar Removals | Removal Company London, Pinner & Harrow",
    description:
      "Award-winning removals and storage across London, the UK and worldwide. For a Brilliant Move!",
    images: [
      {
        url: "/images/hero.jpg",
        width: 2048,
        height: 892,
        alt: "The Northstar Removals fleet of branded trucks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northstar Removals | Removal Company London, Pinner & Harrow",
    description:
      "Award-winning removals and storage across London, the UK and worldwide. For a Brilliant Move!",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Site-wide entity graph. Every other schema block (Service, BreadcrumbList,
 * FAQPage) links back to ORG_ID so search engines and AI assistants see one
 * consistent business entity rather than several disconnected ones.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MovingCompany", "LocalBusiness", "Organization"],
      "@id": ORG_ID,
      name: site.legalName,
      alternateName: site.name,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/icon.png`,
      },
      image: `${siteUrl}/images/hero.jpg`,
      description: site.description,
      slogan: site.slogan,
      foundingDate: site.foundingDate,
      founder: { "@type": "Person", name: "Denis" },
      email: site.email,
      telephone: "+442088689414",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 1, Leeway House, Leeway Close",
        addressLocality: "Pinner",
        addressRegion: "Greater London",
        postalCode: "HA5 4SE",
        addressCountry: "GB",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+442088689414",
          email: site.email,
          areaServed: "GB",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+448001701188",
          areaServed: "GB",
          availableLanguage: "English",
        },
      ],
      areaServed: [
        ...areas.map((a) => ({
          "@type": "Place",
          name: a.name,
          url: `${siteUrl}/areas/${a.slug}`,
        })),
        { "@type": "City", name: "London" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Place", name: "Worldwide" },
      ],
      memberOf: [
        { "@type": "Organization", name: "National Guild of Removers" },
        {
          "@type": "Organization",
          name: "Removals Industry Ombudsman Scheme",
        },
      ],
      award: [
        "Super Elite Remover 2024",
        "Super Elite Remover 2023",
        "Ombudsman's Perfect Record Award 2022",
        "Elite Honours Remover 2022",
      ],
      knowsAbout: [
        "House removals",
        "Office relocation",
        "International removals",
        "Containerised storage",
        "Export packing",
        "Professional packing",
        "Piano removals",
        "Fine art and antiques moving",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Removals and storage services",
        itemListElement: serviceCards.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${siteUrl}${s.href}#service`,
            name: s.title,
            description: s.description,
            url: `${siteUrl}${s.href}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: siteUrl,
      name: site.name,
      description: site.description,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-GB",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={jsonLd} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy-950 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <PreFooter />
        <Footer />
        <MobileActionBar />
        <CookieBanner />
        {/* Cookieless, first-party (/_vercel/*) — no consent required */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

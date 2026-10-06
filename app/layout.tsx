import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import MobileActionBar from "@/components/MobileActionBar";

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

const siteUrl = "https://www.northstar-removals.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Northstar Removals | Award-Winning Removals & Storage Company",
    template: "%s | Northstar Removals",
  },
  description:
    "Award-winning removals and storage company based in Pinner, London. Domestic, international and commercial moves plus secure storage solutions across the UK and worldwide.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Northstar Removals",
    title: "Northstar Removals | Award-Winning Removals & Storage Company",
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
    title: "Northstar Removals | Award-Winning Removals & Storage Company",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Northstar Removals & Storage",
  url: siteUrl,
  logo: `${siteUrl}/images/icon.png`,
  image: `${siteUrl}/images/hero.jpg`,
  slogan: "For a Brilliant Move!",
  foundingDate: "2006",
  email: "info@northstar-removals.com",
  telephone: "+442088689414",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 1, Leeway House, Leeway Close",
    addressLocality: "Pinner",
    addressRegion: "Greater London",
    postalCode: "HA5 4SE",
    addressCountry: "GB",
  },
  areaServed: ["London", "United Kingdom", "Worldwide"],
  memberOf: {
    "@type": "Organization",
    name: "National Guild of Removers",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
      </body>
    </html>
  );
}

import { site, siteUrl } from "@/lib/site";

/** Stable @id values so every schema block on the site links to one entity. */
export const ORG_ID = `${siteUrl}/#organization`;
export const WEBSITE_ID = `${siteUrl}/#website`;

/**
 * Renders a JSON-LD block. `<` is escaped so user-facing text can never
 * close the script tag early (Google's recommended serialisation).
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/**
 * Service schema for an individual service page, linked back to the
 * organisation entity declared in the root layout.
 */
export function ServiceJsonLd({
  name,
  description,
  path,
  serviceType,
  image,
  areaServed = ["London", "United Kingdom"],
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  image?: string;
  areaServed?: string[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${siteUrl}${path}#service`,
        name,
        description,
        serviceType,
        url: `${siteUrl}${path}`,
        ...(image ? { image: `${siteUrl}${image}` } : {}),
        provider: { "@id": ORG_ID },
        areaServed: areaServed.map((name) => ({ "@type": "Place", name })),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${siteUrl}/contact-us`,
          servicePhone: site.phones[0].href.replace("tel:", ""),
        },
      }}
    />
  );
}

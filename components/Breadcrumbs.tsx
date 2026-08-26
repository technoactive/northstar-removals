import Link from "next/link";

const siteUrl = "https://www.northstar-removals.com";

export default function Breadcrumbs({
  items,
}: {
  items: { title: string; href: string }[];
}) {
  const trail = [{ title: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.title,
      item: `${siteUrl}${item.href}`,
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-navy-900/5 bg-slate-50"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 overflow-x-auto px-4 py-3 text-sm">
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={item.href} className="flex shrink-0 items-center gap-2">
              {i > 0 && (
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-slate-300"
                >
                  <path d="M7.3 14.7a1 1 0 010-1.4L10.6 10 7.3 6.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4 0z" />
                </svg>
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-semibold text-navy-950"
                >
                  {item.title}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-500 transition hover:text-navy-950"
                >
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

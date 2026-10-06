import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { ORG_ID } from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import Star, { FiveStars } from "@/components/Star";
import { areaBySlug, areas } from "@/lib/areas";
import { site, siteUrl } from "@/lib/site";

/** Only the areas defined in lib/areas.ts exist; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/areas/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const area = areaBySlug(slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      title: `${area.title} | ${site.name}`,
      description: area.description,
      images: [{ url: area.image, alt: area.imageAlt }],
    },
  };
}

/* Genuine customer reviews (also shown on /reviews), rotated across areas. */
const reviews = [
  {
    name: "Lani Carstens",
    source: "Google",
    text: "Best move ever! Our move with Northstar was absolutely brilliant. The service, starting with the initial in-person consultation, was extremely professional, and whilst they may not be the cheapest, I felt as though we were in a safe pair of hands.",
  },
  {
    name: "Nadia McLeod & Mal Magure",
    source: "Removal Approval",
    text: "The moving guys & packers were fabulous - very courteous, friendly, quick, but diligent. I would use Northstar again definitely. This was my 3rd time using them, and they are still as amazing as 13 years ago.",
  },
  {
    name: "Mina Om",
    source: "Google",
    text: "We moved the entire furniture from a 6 bedroom house, to a location near by. The way they handled all our furniture and belongings was with great care, the items were carefully wrapped and secured. Thank you so much for making our move stress free.",
  },
  {
    name: "Aran King",
    source: "Removal Approval",
    text: "Very helpful & friendly removal team, worked very hard and got everything done on the same day. Greg the survey/salesman also knew exactly what was required to get the job done. The team were very punctual.",
  },
  {
    name: "Laura Hubbard",
    source: "Google",
    text: "The crew were absolutely fantastic. John & Alex were so fast and efficient and made me feel completely confident in the move. Thank you for making a stressful time easy.",
  },
  {
    name: "Luke & Katie Kenny",
    source: "Removal Approval",
    text: "Unbelievably good. 6 bed house emptied in double quick time - outstanding 5*****.",
  },
];

export default async function AreaPage(props: PageProps<"/areas/[slug]">) {
  const { slug } = await props.params;
  const area = areaBySlug(slug);
  if (!area) notFound();

  const index = areas.findIndex((a) => a.slug === area.slug);
  const areaReviews = [
    reviews[index % reviews.length],
    reviews[(index + 3) % reviews.length],
  ];
  const nearby = area.nearby
    .map((s) => areaBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const services = [
    {
      title: `House removals in ${area.name}`,
      href: "/domestic-moves",
      body: "Fixed-price home moves with full packing, dismantling and reassembly, and comprehensive insurance.",
    },
    {
      title: `Office removals in ${area.name}`,
      href: "/commercial-moves",
      body: "Planned, out-of-hours business moves with IT decommissioning, crates and secure records storage.",
    },
    {
      title: `Storage near ${area.name}`,
      href: "/storage-solutions",
      body: "Containerised storage collected from your door and held in monitored warehouses, from one week upwards.",
    },
    {
      title: `International moves from ${area.name}`,
      href: "/international-moves",
      body: "Export packing, shipping by road, sea and air, and customs paperwork handled door to door.",
    },
    {
      title: `White glove service in ${area.name}`,
      href: "/white-glove-service",
      body: "A dedicated move manager, bespoke crating for art and antiques, and fully managed moves.",
    },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/areas/${area.slug}#service`,
    name: `Removals in ${area.name}`,
    serviceType: "Removals and storage",
    description: area.description,
    url: `${siteUrl}/areas/${area.slug}`,
    image: `${siteUrl}${area.image}`,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "Place",
      name: area.name,
      containedInPlace: [
        { "@type": "AdministrativeArea", name: area.borough },
        { "@type": "AdministrativeArea", name: area.region },
      ],
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteUrl}/contact-us`,
      servicePhone: site.phones[0].href.replace("tel:", ""),
    },
  };

  return (
    <>
      <PageHero
        title={`Removals in ${area.name}`}
        subtitle={area.heroSubtitle}
        image={area.image}
        imageAlt={area.imageAlt}
      />
      <JsonLd data={serviceJsonLd} />
      <Breadcrumbs
        items={[
          { title: "Areas We Cover", href: "/areas" },
          { title: area.name, href: `/areas/${area.slug}` },
        ]}
      />

      {/* Quick facts */}
      <section className="border-b border-navy-900/5 bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 text-center sm:grid-cols-4">
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              From our depot
            </dt>
            <dd className="mt-1 font-display text-2xl font-black italic text-navy-950">
              ~{area.driveMinutes} min
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Postcodes
            </dt>
            <dd className="mt-1 font-display text-2xl font-black italic text-navy-950">
              {area.postcodes.slice(0, 3).join(" · ")}
              {area.postcodes.length > 3 && " +"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Moving locally since
            </dt>
            <dd className="mt-1 font-display text-2xl font-black italic text-navy-950">
              2006
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Quotes
            </dt>
            <dd className="mt-1 font-display text-2xl font-black italic text-navy-950">
              Free &amp; fixed
            </dd>
          </div>
        </dl>
      </section>

      <article className="mx-auto max-w-6xl px-4 py-16">
        {/* Intro */}
        <div className="grid items-start gap-12 lg:grid-cols-[3fr_2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
              {area.region}
            </p>
            <h2 className="mt-2 font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
              Your local removal company for {area.name}
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-slate-700">
              {area.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={area.image}
                alt={area.imageAlt}
                width={900}
                height={620}
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-2xl bg-navy-950 p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-ice-200/80">
                Talk to a local mover
              </p>
              <a
                href={site.phones[0].href}
                className="mt-2 block font-display text-2xl font-black italic hover:text-ice-200"
              >
                {site.phones[0].label}
              </a>
              <p className="mt-3 text-sm text-white/75">
                {`${site.address.join(", ")} — around ${area.driveMinutes} minutes from ${area.name}.`}
              </p>
              <Link
                href="/contact-us"
                className="mt-5 inline-block rounded-full bg-brand-600 px-6 py-3 text-sm font-bold shadow-lg shadow-brand-600/30 transition hover:bg-brand-500"
              >
                Get a free {area.name} quote
              </Link>
            </div>
          </div>
        </div>

        {/* Local knowledge */}
        <section className="mt-20" aria-labelledby="local-heading">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
            Local knowledge
          </p>
          <h2
            id="local-heading"
            className="mt-2 font-display text-2xl font-black italic text-navy-950 sm:text-3xl"
          >
            What moving in {area.name} actually involves
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {area.localKnowledge.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-slate-50 p-7 ring-1 ring-navy-900/5"
              >
                <Star className="mb-4 h-6 w-6 text-brand-600" />
                <h3 className="font-display text-lg font-extrabold text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mt-20" aria-labelledby="services-heading">
          <h2
            id="services-heading"
            className="font-display text-2xl font-black italic text-navy-950 sm:text-3xl"
          >
            Removal services we offer in {area.name}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-navy-950 hover:shadow-xl"
                >
                  <h3 className="font-display text-lg font-extrabold text-navy-950">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {s.body}
                  </p>
                  <span className="mt-4 text-sm font-bold text-brand-600 transition group-hover:translate-x-1">
                    Learn more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Reviews */}
        <section className="mt-20" aria-labelledby="reviews-heading">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="reviews-heading"
              className="font-display text-2xl font-black italic text-navy-950 sm:text-3xl"
            >
              What customers say
            </h2>
            <Link
              href="/reviews"
              className="text-sm font-bold text-brand-600 underline-offset-4 hover:underline"
            >
              1,200+ reviews →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {areaReviews.map((review) => (
              <figure
                key={review.name}
                className="flex flex-col rounded-3xl bg-slate-50 p-7 ring-1 ring-navy-900/5"
              >
                <FiveStars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-bold text-navy-950">{review.name}</span>
                  <span className="text-slate-500"> · {review.source}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <div className="mt-20">
          <FaqAccordion
            heading={`${area.name} removals — frequently asked questions`}
            items={area.faqs}
          />
        </div>

        <CtaBanner label={`Get your free ${area.name} quote`} />

        {/* Nearby */}
        {nearby.length > 0 && (
          <nav aria-labelledby="nearby-heading" className="mt-6">
            <h2
              id="nearby-heading"
              className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500"
            >
              Nearby areas we also cover
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {nearby.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/areas/${n.slug}`}
                    className="inline-block rounded-full border border-navy-900/15 px-4 py-2 text-sm font-semibold text-navy-950 transition hover:border-navy-950 hover:bg-navy-950 hover:text-white"
                  >
                    Removals {n.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="inline-block rounded-full px-4 py-2 text-sm font-bold text-brand-600 underline-offset-4 hover:underline"
                >
                  All areas →
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import Star from "@/components/Star";
import { areaBySlug, areaGroups } from "@/lib/areas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Areas We Cover | Removals Across North West London & Hertfordshire",
  description:
    "Northstar Removals is based in Pinner and covers Harrow, Ruislip, Northwood, Watford, Uxbridge, Wembley, Ealing, Hampstead, Kensington, St Albans and all of London. Local removal pages for each area.",
  alternates: { canonical: "/areas" },
};

export default function Areas() {
  return (
    <>
      <PageHero
        title="Areas We Cover"
        subtitle="Based in Pinner since 2006, we move homes and offices across North West London, Hertfordshire and the whole of London — and nationwide and worldwide from there."
        image="/images/hero.jpg"
        imageAlt="The Northstar Removals fleet"
      />
      <Breadcrumbs items={[{ title: "Areas We Cover", href: "/areas" }]} />

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl space-y-5 leading-relaxed text-slate-700">
          <p>
            Our depot is at {`${site.address.join(", ")}.`} Everything within about
            half an hour of Pinner is local work for us, and the pages below
            explain what moving in each area actually involves — property
            types, parking and access, lift bookings, and the kind of moves we
            do there most often.
          </p>
          <p>
            Not listed? We cover every London borough and carry out
            long-distance moves to the whole of the UK, so{" "}
            <Link
              href="/contact-us"
              className="font-semibold text-brand-600 underline-offset-4 hover:underline"
            >
              get in touch
            </Link>{" "}
            wherever you are moving from or to.
          </p>
        </div>

        {areaGroups.map((group) => (
          <section key={group.title} className="mt-14">
            <h2 className="font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
              {group.title}
            </h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.slugs.map((slug) => {
                const area = areaBySlug(slug);
                if (!area) return null;
                return (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-navy-950 hover:shadow-xl"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-lg font-extrabold text-navy-950">
                          Removals {area.name}
                        </h3>
                        <Star className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                      </div>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {`${area.postcodes.slice(0, 4).join(" · ")}${area.postcodes.length > 4 ? " +" : ""} · ~${area.driveMinutes} min from Pinner`}
                      </p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                        {area.heroSubtitle}
                      </p>
                      <span className="mt-4 text-sm font-bold text-brand-600 transition group-hover:translate-x-1">
                        Moving in {area.name} →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}

        <CtaBanner label="Get your free quote" />
      </div>
    </>
  );
}

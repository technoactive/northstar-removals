import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export type LegalSection = {
  heading: string;
  body: React.ReactNode;
};

export default function LegalPage({
  title,
  intro,
  lastUpdated,
  sections,
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero title={title} subtitle={intro} />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Last updated: {lastUpdated}
        </p>

        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-2xl border border-navy-900/10 bg-slate-50 p-6"
        >
          <p className="font-display text-sm font-extrabold uppercase tracking-wide text-navy-950">
            On this page
          </p>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.heading}>
                <a
                  href={`#section-${i + 1}`}
                  className="text-sm text-navy-700 underline-offset-4 hover:underline"
                >
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 space-y-12">
          {sections.map((s, i) => (
            <section key={s.heading} id={`section-${i + 1}`} className="scroll-mt-28">
              <h2 className="font-display text-2xl font-extrabold text-navy-950">
                {i + 1}. {s.heading}
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600 [&_a]:font-semibold [&_a]:text-brand-600 [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-navy-950 [&_ul]:space-y-2">
                {s.body}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-navy-950 p-8 text-white">
          <h2 className="font-display text-xl font-extrabold">
            Questions about this policy?
          </h2>
          <p className="mt-2 text-sm text-white/75">
            Contact {site.legalName}, {site.address.join(", ")} — or email us
            and we&rsquo;ll be happy to help.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-brand-600 px-5 py-2.5 transition hover:bg-brand-500"
            >
              {site.email}
            </a>
            <Link
              href="/contact-us"
              className="rounded-full border border-white/25 px-5 py-2.5 transition hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

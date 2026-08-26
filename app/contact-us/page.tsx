import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Northstar Removals for home removals, office removals, international relocation or storage services. Get your free, bespoke quotation today.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUs() {
  return (
    <>
      <PageHero
        title="Contact Us"
        image="/images/hero.png"
        imageAlt="The Northstar Removals fleet"
        subtitle="For more information on our home removals, office removals, international relocation or storage services please contact us using the details provided."
      />
      <Breadcrumbs items={[{ title: "Contact Us", href: "/contact-us" }]} />
      <div className="mx-auto max-w-5xl px-4 py-14">
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-6 text-center ring-1 ring-navy-900/5">
            <h2 className="font-bold text-navy-950">Email</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-sm font-semibold text-brand-600 hover:text-brand-500"
            >
              {site.email}
            </a>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6 text-center ring-1 ring-navy-900/5">
            <h2 className="font-bold text-navy-950">Phone</h2>
            {site.phones.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="mt-2 block text-sm font-semibold text-brand-600 hover:text-brand-500"
              >
                {p.label}
              </a>
            ))}
          </div>
          <div className="rounded-2xl bg-slate-50 p-6 text-center ring-1 ring-navy-900/5">
            <h2 className="font-bold text-navy-950">Mobile</h2>
            <a
              href={site.mobile.href}
              className="mt-2 block text-sm font-semibold text-brand-600 hover:text-brand-500"
            >
              {site.mobile.label}
            </a>
          </div>
        </div>

        <p className="mb-8 text-center leading-relaxed text-slate-600">
          Please complete the form below and we will contact you shortly to
          discuss and evaluate your requirements, providing you with a bespoke
          quotation.
        </p>

        <QuoteForm />
      </div>
    </>
  );
}

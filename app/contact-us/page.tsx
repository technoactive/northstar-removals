import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        image="/images/hero.jpg"
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
            <h2 className="font-bold text-navy-950">Mobile &amp; WhatsApp</h2>
            <a
              href={site.mobile.href}
              className="mt-2 block text-sm font-semibold text-brand-600 hover:text-brand-500"
            >
              {site.mobile.label}
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm font-semibold text-brand-600 hover:text-brand-500"
            >
              Message us on WhatsApp — send photos for a quick quote
            </a>
          </div>
        </div>

        <p className="mb-8 text-center leading-relaxed text-slate-600">
          Please complete the form below and we will contact you shortly to
          discuss and evaluate your requirements, providing you with a bespoke
          quotation.
        </p>

        <ul
          aria-label="Accreditations and reviews"
          className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {[
            { src: "/images/badge-guild.png", alt: "National Guild of Removers member", href: "/awards" },
            { src: "/images/badge-ombudsman.png", alt: "Removals Industry Ombudsman scheme", href: "/awards" },
            { src: "/images/badge-removal-approval.png", alt: "1,200+ reviews on Removal Approval", href: "/reviews" },
            { src: "/images/badge-google.jpg", alt: "Google reviews", href: "/reviews" },
          ].map((badge) => (
            <li key={badge.src}>
              <Link href={badge.href} title={badge.alt}>
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={64}
                  height={64}
                  className="h-14 w-auto object-contain opacity-80 transition hover:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ul>

        <QuoteForm />
      </div>
    </>
  );
}

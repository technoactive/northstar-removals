import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import JsonLd, { ORG_ID } from "@/components/JsonLd";
import { FiveStars } from "@/components/Star";
import { site, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Removals Quote",
  description:
    "Get a free, fixed-price removals quote from Northstar. Call, WhatsApp or fill in our quick form — we usually reply the same working day.",
  alternates: { canonical: "/contact-us" },
};

const badges = [
  { src: "/images/badge-guild.png", alt: "National Guild of Removers member", href: "/awards" },
  { src: "/images/badge-ombudsman.png", alt: "Removals Industry Ombudsman scheme", href: "/awards" },
  { src: "/images/badge-removal-approval.png", alt: "1,200+ reviews on Removal Approval", href: "/reviews" },
  { src: "/images/badge-google.jpg", alt: "Google reviews", href: "/reviews" },
];

const steps = [
  { title: "We read your details", body: "Usually the same working day." },
  { title: "We call or email you", body: "To confirm the finer points and, if useful, book a free video or home survey." },
  { title: "You get a fixed price", body: "Personalised, in writing, with no hidden extras." },
];

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.5 14.4c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.04-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.8 9.8 0 01-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37A9.8 9.8 0 1112.05 21.8zm8.34-18.15A11.76 11.76 0 0012.05 0C5.5 0 .17 5.33.17 11.88c0 2.1.55 4.14 1.59 5.94L0 24l6.33-1.66a11.87 11.87 0 005.72 1.46h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.16-3.55-8.27z" />
    </svg>
  );
}

export default function ContactUs() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${siteUrl}/contact-us#webpage`,
          url: `${siteUrl}/contact-us`,
          name: "Contact Northstar Removals",
          about: { "@id": ORG_ID },
          mainEntity: { "@id": ORG_ID },
        }}
      />
      <PageHero
        compact
        title="Get your free quote"
        image="/images/hero.jpg"
        imageAlt="The Northstar Removals fleet"
        subtitle="Tell us about your move and we'll come back with a fixed price — no obligation."
      />
      <Breadcrumbs items={[{ title: "Contact Us", href: "/contact-us" }]} />

      <div className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
          {/* Mobile: one-tap ways to reach us, kept to a single row so the form stays in view */}
          <div className="mb-5 grid grid-cols-2 gap-3 lg:hidden">
            <a
              href={site.phones[0].href}
              className="flex items-center justify-center gap-2 rounded-2xl bg-navy-950 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-navy-950/15 transition active:bg-navy-900"
            >
              <PhoneIcon className="h-4.5 w-4.5" />
              Call us
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition active:brightness-95"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              WhatsApp
            </a>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
            {/* The form is first in the DOM so it is first on mobile and for screen readers */}
            <QuoteForm />

            <aside className="space-y-5 lg:sticky lg:top-28" aria-label="Other ways to get in touch">
              {/* Talk to us */}
              <section className="overflow-hidden rounded-3xl bg-navy-950 text-white shadow-xl shadow-navy-950/20">
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500">Prefer to talk?</p>
                  <h2 className="mt-2 font-display text-2xl font-black italic">We&rsquo;re a real office in Pinner</h2>
                  <p className="mt-2 text-sm text-white/75">
                    Call during office hours and you&rsquo;ll speak to someone who actually plans the moves.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    <li>
                      <a
                        href={site.phones[0].href}
                        className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/15"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                          <PhoneIcon />
                        </span>
                        <span>
                          <span className="block text-base font-extrabold">{site.phones[0].label}</span>
                          <span className="block text-xs text-white/65">Office — local rate</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={site.phones[1].href}
                        className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/15"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                          <PhoneIcon />
                        </span>
                        <span>
                          <span className="block text-base font-extrabold">{site.phones[1].label}</span>
                          <span className="block text-xs text-white/65">Freephone</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={site.whatsapp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-4 py-3 text-white transition hover:brightness-110"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                          <WhatsAppIcon />
                        </span>
                        <span>
                          <span className="block text-base font-extrabold">WhatsApp {site.mobile.label}</span>
                          <span className="block text-xs text-white/85">Send photos or a video for a quick estimate</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-4 block text-center text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              </section>

              {/* What happens next */}
              <section className="rounded-3xl bg-white p-6 ring-1 ring-navy-900/5">
                <h2 className="text-base font-extrabold text-navy-950">What happens next</h2>
                <ol className="mt-4 space-y-4">
                  {steps.map((s, i) => (
                    <li key={s.title} className="flex gap-3.5">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 font-display text-xs font-black italic text-navy-950"
                      >
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-navy-950">{s.title}</p>
                        <p className="mt-0.5 text-sm text-slate-600">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Trust */}
              <section className="rounded-3xl bg-white p-6 ring-1 ring-navy-900/5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <FiveStars className="h-4 w-4" />
                    <p className="mt-1.5 text-sm font-bold text-navy-950">1,200+ verified reviews</p>
                  </div>
                  <Link href="/reviews" className="text-sm font-semibold text-brand-600 underline-offset-4 hover:underline">
                    Read them →
                  </Link>
                </div>
                <figure className="mt-4 border-l-2 border-brand-500 pl-3.5">
                  <blockquote className="text-sm italic leading-relaxed text-slate-600">
                    &ldquo;Absolutely brilliant service. Great team. Nothing was too much trouble. Could not have asked for more.&rdquo;
                  </blockquote>
                  <figcaption className="mt-1.5 text-xs font-semibold text-slate-500">
                    Chris &amp; Eleanor K. · Removal Approval
                  </figcaption>
                </figure>
                <ul aria-label="Accreditations" className="mt-5 grid grid-cols-4 gap-3 border-t border-navy-900/5 pt-5">
                  {badges.map((b) => (
                    <li key={b.src} className="flex justify-center">
                      <Link href={b.href} title={b.alt}>
                        <Image
                          src={b.src}
                          alt={b.alt}
                          width={64}
                          height={64}
                          className="h-12 w-auto object-contain transition hover:scale-105"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Where we are */}
              <section className="rounded-3xl bg-white p-6 ring-1 ring-navy-900/5">
                <h2 className="text-base font-extrabold text-navy-950">Our depot</h2>
                <address className="mt-2 text-sm not-italic leading-relaxed text-slate-600">
                  {site.legalName}
                  <br />
                  {site.address.join(", ")}
                </address>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.legalName}, ${site.address.join(", ")}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-brand-600 underline-offset-4 hover:underline"
                >
                  Open in Google Maps →
                </a>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

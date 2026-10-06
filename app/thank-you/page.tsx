import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Star from "@/components/Star";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You — Enquiry Received",
  description:
    "Thank you for contacting Northstar Removals. We have received your enquiry and will be in touch shortly with your free, bespoke quotation.",
  robots: { index: false, follow: true },
};

const steps = [
  {
    title: "We review your details",
    body: "A member of our team reads every enquiry personally — no automated quotes.",
  },
  {
    title: "We get in touch",
    body: "We’ll call or email you within one working day to talk through your move.",
  },
  {
    title: "Free survey & fixed quote",
    body: "A free video or home survey, then a personalised fixed-price quotation with no hidden fees.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:py-28">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 shadow-xl shadow-brand-600/40">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path d="M5 12.5l4.5 4.5L19 7" />
            </svg>
          </span>
          <p className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-white/70">
            <Star className="star-glow h-3.5 w-3.5" /> ENQUIRY RECEIVED
          </p>
          <h1 className="mt-4 font-display text-4xl font-black italic tracking-tight sm:text-6xl">
            Thank you!
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Your quote request is on its way to our team. We&rsquo;ll be in
            touch within one working day to discuss your move and arrange your
            free, no-obligation survey.
          </p>
          <p className="mt-6 text-sm text-white/60">
            Need us sooner? Call{" "}
            <a
              href={site.phones[0].href}
              className="font-bold text-white underline-offset-4 hover:underline"
            >
              {site.phones[0].label}
            </a>{" "}
            — we&rsquo;re happy to help.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
            What happens next
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-black italic text-navy-950 sm:text-4xl">
            Three simple steps to a Brilliant Move
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="relative text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 font-display text-xl font-black italic text-white shadow-lg">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-navy-950 px-8 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-navy-900"
            >
              Back to homepage
            </Link>
            <Link
              href="/reviews"
              className="rounded-full border-2 border-navy-950/15 px-8 py-3.5 font-bold text-navy-950 transition hover:border-navy-950"
            >
              Read customer reviews
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Star from "@/components/Star";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "Sorry, we couldn't find that page. Explore Northstar Removals' moving and storage services or get in touch for a free quote.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { title: "Domestic Moves", href: "/domestic-moves" },
  { title: "International Moves", href: "/international-moves" },
  { title: "Commercial Moves", href: "/commercial-moves" },
  { title: "Storage Solutions", href: "/storage-solutions" },
];

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[70%_center] opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center">
        <Star className="star-glow star-pulse h-10 w-10 text-white" />
        <p className="mt-6 font-display text-7xl font-black italic tracking-tight sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-extrabold italic sm:text-3xl">
          Looks like this page has moved…
        </h1>
        <p className="mt-4 max-w-xl text-white/80">
          …and unlike our customers&rsquo; belongings, we couldn&rsquo;t track
          it down. The page you&rsquo;re looking for doesn&rsquo;t exist or has
          been relocated.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-brand-600 px-8 py-3.5 font-bold shadow-xl shadow-brand-600/40 transition hover:-translate-y-0.5 hover:bg-brand-500"
          >
            Back to homepage
          </Link>
          <Link
            href="/contact-us"
            className="rounded-full border border-white/30 bg-white/5 px-8 py-3.5 font-semibold backdrop-blur transition hover:bg-white/15"
          >
            Get a free quote
          </Link>
        </div>
        <nav aria-label="Popular pages" className="mt-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
            Popular pages
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-ice-200 underline-offset-4 hover:underline"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { footerHelpLinks, legalLinks, site } from "@/lib/site";
import Star from "@/components/Star";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Star className="star-glow h-7 w-7 text-white" />
            <span className="font-display text-xl font-black italic">
              NORTHSTAR
            </span>
          </Link>
          <p className="mt-1 text-[10px] font-bold tracking-[0.2em] text-brand-500">
            PACKING · MOVING · STORAGE
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Award-winning removals &amp; storage across London, the UK and
            worldwide. For a Brilliant Move!
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Image
              src="/images/badge-guild.png"
              alt="National Guild of Removers"
              width={56}
              height={56}
              className="h-12 w-auto rounded bg-white/95 p-1 object-contain"
            />
            <Image
              src="/images/badge-ombudsman.png"
              alt="Removals Industry Ombudsman"
              width={56}
              height={56}
              className="h-12 w-auto rounded bg-white/95 p-1 object-contain"
            />
            <Image
              src="/images/badge-recycle.png"
              alt="We reuse, we recycle"
              width={56}
              height={56}
              className="h-12 w-auto rounded bg-white/95 p-1 object-contain"
            />
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-display text-lg font-bold">Can we help?</h4>
          <ul className="space-y-2.5">
            {footerHelpLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-lg font-bold">Find us here</h4>
          <iframe
            title="Northstar Removals location map"
            src="https://www.google.com/maps?q=Leeway%20Close%2C%20Pinner%20HA5%204SE&output=embed"
            className="h-44 w-full rounded-xl border-0"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="mb-4 font-display text-lg font-bold">Contact us</h4>
          <p className="text-sm font-semibold">{site.legalName}</p>
          {site.address.map((line) => (
            <p key={line} className="text-sm text-white/70">
              {line}
            </p>
          ))}
          <div className="mt-4 space-y-1.5">
            {site.phones.map((p) => (
              <p key={p.href}>
                <a
                  href={p.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {p.label}
                </a>
              </p>
            ))}
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {site.email}
              </a>
            </p>
          </div>
          <Link
            href="/contact-us"
            className="mt-5 inline-block rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-500"
          >
            » Send us a message
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            Copyright © {new Date().getFullYear()} Northstar Removals · All
            rights reserved
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition hover:text-white"
                  >
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";
import Star from "@/components/Star";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 text-white backdrop-blur">
      <div className="border-b border-white/10 bg-navy-900/60 text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5">
          <p className="hidden font-medium tracking-wide text-ice-200/80 sm:block">
            For a Brilliant Move! — London · UK · Worldwide
          </p>
          <div className="flex items-center gap-5">
            <a
              href={site.phones[0].href}
              className="font-bold tracking-wide text-white transition hover:text-ice-200"
            >
              {site.phones[0].label}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden text-white/70 transition hover:text-white md:block"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="group flex items-center gap-2.5">
          <Star className="star-glow h-8 w-8 text-white transition group-hover:rotate-45 group-hover:duration-500" />
          <span className="font-display text-xl font-black italic tracking-tight sm:text-2xl">
            NORTHSTAR
            <span className="ml-2 hidden align-middle font-sans text-[10px] font-bold not-italic tracking-[0.2em] text-brand-500 sm:inline">
              PACKING · MOVING · STORAGE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.title} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-semibold transition hover:bg-white/10"
                >
                  {link.title}
                  <svg
                    className="h-4 w-4 transition group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full w-60 translate-y-2 rounded-xl border border-white/10 bg-navy-900 p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-white/10"
                    >
                      <Star className="h-3 w-3 text-brand-500" />
                      {child.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-semibold transition hover:bg-white/10"
              >
                {link.title}
              </Link>
            ),
          )}
          <Link
            href="/contact-us"
            className="ml-3 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:shadow-brand-500/40"
          >
            GET A FREE QUOTE
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-lg p-2 transition hover:bg-white/10 lg:hidden"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-navy-950 px-4 pb-5 lg:hidden">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 font-semibold"
          >
            Home
          </Link>
          <button
            type="button"
            onClick={() => setServicesOpen((v) => !v)}
            className="flex w-full items-center justify-between py-2.5 font-semibold"
          >
            Moving Services
            <span className="text-brand-500">{servicesOpen ? "−" : "+"}</span>
          </button>
          {servicesOpen &&
            services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 pl-5 text-white/80"
              >
                {s.title}
              </Link>
            ))}
          <Link
            href="/white-glove-service"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 font-semibold"
          >
            White Glove Service
          </Link>
          <Link
            href="/about-us"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 font-semibold"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 font-semibold"
          >
            Contact Us
          </Link>
          <Link
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-full bg-brand-600 px-5 py-3 text-center font-bold text-white"
          >
            GET A FREE QUOTE
          </Link>
        </nav>
      )}
    </header>
  );
}

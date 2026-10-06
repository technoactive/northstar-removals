"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/** Pages where a "Get a free quote" bar would just point at itself. */
const HIDDEN_ON = ["/contact-us", "/thank-you"];

export default function MobileActionBar() {
  const pathname = usePathname();
  // On the quote form itself the orange bar sat directly under the submit
  // button and linked back to the same page — easy to tap by mistake and
  // "nothing happens". Hide it there and on the confirmation page.
  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <>
      {/* Spacer so page content isn't hidden behind the fixed bar */}
      <div aria-hidden="true" className="h-16 md:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-navy-950/95 backdrop-blur md:hidden">
        <a
          href={site.phones[0].href}
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-white transition active:bg-navy-900"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          Call us now
        </a>
        <Link
          href="/contact-us"
          className="flex items-center justify-center gap-2 bg-brand-600 py-4 text-sm font-bold text-white transition active:bg-brand-500"
        >
          Get a free quote
        </Link>
      </div>
    </>
  );
}

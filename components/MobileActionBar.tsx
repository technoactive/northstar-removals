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
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-navy-950/95 backdrop-blur md:hidden">
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
          Call us
        </a>
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border-x border-white/10 py-4 text-sm font-bold text-white transition active:bg-navy-900"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path d="M17.5 14.4c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.04-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.8 9.8 0 01-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37A9.8 9.8 0 1112.05 21.8zm8.34-18.15A11.76 11.76 0 0012.05 0C5.5 0 .17 5.33.17 11.88c0 2.1.55 4.14 1.59 5.94L0 24l6.33-1.66a11.87 11.87 0 005.72 1.46h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.16-3.55-8.27z" />
          </svg>
          WhatsApp
        </a>
        <Link
          href="/contact-us"
          className="flex items-center justify-center gap-2 bg-brand-600 py-4 text-sm font-bold text-white transition active:bg-brand-500"
        >
          Free quote
        </Link>
      </div>
    </>
  );
}

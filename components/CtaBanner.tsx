import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBanner({
  label = "Request a No obligation Consultation & Survey",
}: {
  label?: string;
}) {
  return (
    <div className="my-12 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/contact-us"
          className="inline-block rounded-full bg-brand-600 px-9 py-4 text-center text-base font-bold text-white shadow-xl shadow-brand-600/30 transition hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-2xl hover:shadow-brand-500/40"
        >
          {label}
        </Link>
        <a
          href={site.phones[0].href}
          className="inline-flex items-center gap-2 rounded-full border-2 border-navy-950/15 px-8 py-3.5 text-base font-bold text-navy-950 transition hover:border-navy-950 hover:bg-navy-950 hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-4.5 w-4.5"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          {site.phones[0].label}
        </a>
      </div>
      <p className="text-sm text-slate-500">
        Free video or home survey · No hidden fees · Fully insured
      </p>
    </div>
  );
}

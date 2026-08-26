import Image from "next/image";
import Link from "next/link";
import { FiveStars } from "@/components/Star";
import TrustBar from "@/components/TrustBar";

export default function PreFooter() {
  return (
    <section className="border-t border-navy-900/10 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-2">
        <Link
          href="/reviews"
          className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <FiveStars className="h-5 w-5" />
            <Image
              src="/images/badge-removal-approval.png"
              alt="Removal Approval"
              width={64}
              height={64}
              className="h-12 w-auto object-contain opacity-80"
            />
          </div>
          <h3 className="font-display text-2xl font-extrabold text-navy-950">
            Reviews
          </h3>
          <p className="mt-2 text-slate-600">
            Our reviews &amp; referrals from our happy customers — 1,200+ on
            Removal Approval alone.
          </p>
          <span className="mt-4 inline-block font-bold text-brand-600 transition group-hover:translate-x-1">
            See our reviews →
          </span>
        </Link>
        <Link
          href="/awards"
          className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex -space-x-3">
              {["/images/award-2024.jpg", "/images/award-2023.jpg", "/images/award-2022a.jpg"].map(
                (src) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Award certificate"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border-2 border-white object-cover shadow"
                  />
                ),
              )}
            </div>
            <span className="rounded-full bg-navy-950 px-3 py-1 text-xs font-bold text-white">
              14+ AWARDS
            </span>
          </div>
          <h3 className="font-display text-2xl font-extrabold text-navy-950">
            Awards
          </h3>
          <p className="mt-2 text-slate-600">
            The awards we are proud &amp; honoured to have won.
          </p>
          <span className="mt-4 inline-block font-bold text-brand-600 transition group-hover:translate-x-1">
            See our awards →
          </span>
        </Link>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-14">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
          Affiliations &amp; Accreditations
        </p>
        <TrustBar />
      </div>
    </section>
  );
}

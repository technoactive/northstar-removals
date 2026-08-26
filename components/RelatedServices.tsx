import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "@/lib/site";

export default function RelatedServices({ current }: { current: string }) {
  const related = serviceCards.filter((s) => s.href !== current);

  return (
    <section
      aria-labelledby="related-services-heading"
      className="border-t border-navy-900/5 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
          More ways we can help
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2
            id="related-services-heading"
            className="font-display text-3xl font-black italic text-navy-950"
          >
            Explore our other services
          </h2>
          <Link
            href="/contact-us"
            className="text-sm font-bold text-brand-600 underline-offset-4 hover:underline"
          >
            Not sure what you need? Ask us →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-extrabold text-navy-950">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <span className="mt-3 inline-block text-sm font-bold text-brand-600">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

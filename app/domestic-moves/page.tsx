import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Star from "@/components/Star";

export const metadata: Metadata = {
  title: "Domestic Moves",
  description:
    "Household removals in London and across the UK. Friendly, professional moving services tailored to your needs with transparent, fixed-price quotes.",
  alternates: { canonical: "/domestic-moves" },
};

const included = [
  "Free fixed price quotations",
  "Competitive hourly rates for your smaller move",
  "Experienced and trained removal men",
  "A comprehensive range of packing materials and equipment",
  "Full packing service",
  "Local and nationwide coverage",
  "Modern and secure storage facilities, available in self storage or containerised options",
  "Comprehensive insurance for added peace of mind",
];

export default function DomesticMoves() {
  return (
    <>
      <PageHero
        title="Domestic Moves"
        subtitle="Household removals London and the UK"
        image="/images/domestic-family.jpg"
        imageAlt="A family beside their removals van after moving home"
      />
      <article className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-slate-700">
            <p>
              Whether you are moving just down the road in London, or anywhere
              in the UK, Northstar can help you.
            </p>
            <p>
              We pride ourselves on providing a friendly and professional
              service tailored to meet your specific needs, however large, or
              small. From your first call until the final van departs from your
              new home, you can rest assured that you&rsquo;ll be in
              experienced and dependable hands.
            </p>
            <p>
              At Northstar, transparency is key. Our quotes are free from
              hidden fees, reflecting our commitment to honesty and fairness.
            </p>
            <p>
              Our comprehensive range of services includes wrapping and
              packing, dismantling and reassembling, and secure storage options
              in various locations to suit you best.
            </p>
            <p>
              To get your move started, we offer a free video or home survey to
              better understand your requirements and provide you with a
              personalised quote.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/domestic-family.jpg"
              alt="A happy family with the keys to their new home"
              width={900}
              height={620}
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-navy-950 px-5 py-3 text-white shadow-xl">
              <p className="font-display font-black italic">
                No hidden fees — ever
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-5 leading-relaxed text-slate-700">
          <p>
            We understand that every move is unique, which is why our
            professional office staff and moving teams work diligently to
            deliver a service that best suits your needs. Whether you are
            moving in London, or across the country, we will ensure a hassle
            free move and take care of your belongings as if it was our own.
          </p>
          <p>
            With collective experience and extensive training, even the most
            delicate items such as pianos, grandfather clocks, or safes are no
            challenge to us.
          </p>
        </div>

        <div className="mt-14 rounded-3xl bg-slate-50 p-8 ring-1 ring-navy-900/5 sm:p-10">
          <h2 className="font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
            Northstar removals service include:
          </h2>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Star className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-center leading-relaxed text-slate-700">
          Our staff will be delighted to help you with a smooth transition to
          your new home, with care, understanding and professionalism every
          step of the way. You can rely on Northstar&rsquo;s proven experience
          for your London and UK moves.
        </p>

        <CtaBanner label="Get your Free Quotation today!" />
      </article>
    </>
  );
}

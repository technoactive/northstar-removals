import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ServiceJsonLd } from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import RelatedServices from "@/components/RelatedServices";
import CtaBanner from "@/components/CtaBanner";
import Star from "@/components/Star";

export const metadata: Metadata = {
  title: "Packing Service London | Professional Packers & Materials",
  description:
    "Professional packing service across London and the UK. Full, part, fragile-only and export packing, with materials delivered and unpacking on request.",
  alternates: { canonical: "/packing-service" },
};

const options = [
  {
    title: "Full packing service",
    body: "Our team packs the entire home the day before the move — kitchen, wardrobes, books, pictures, the lot — so that moving day is about moving, not boxes. Everything is labelled by room with our residue-free labels.",
  },
  {
    title: "Fragile-only packing",
    body: "You pack the straightforward items and we take care of china, glassware, pictures, mirrors, lamps and electronics with the right materials and techniques.",
  },
  {
    title: "Unpacking service",
    body: "At the other end we unpack to surfaces, position furniture to your plan, reassemble beds and wardrobes, and take away the empty boxes and paper.",
  },
  {
    title: "Export packing",
    body: "For international moves everything is wrapped and packed to withstand weeks at sea or in the air, with custom crates for anything that needs them and an inventory for customs.",
  },
];

const materials = [
  "Double-walled cartons in book, standard, large and wardrobe sizes",
  "Acid-free tissue and white packing paper (no newsprint ink on your crockery)",
  "Bubble wrap, foam sheet and corner protectors",
  "Picture and mirror cartons, mattress bags and sofa covers",
  "Dish-pack cartons with cell dividers for glassware",
  "Lidded crates for office moves, archives and IT",
  "Labels, tape and inventory sheets",
  "Boxes collected and reused after your move",
];

const faqs = [
  {
    question: "How much does a packing service cost?",
    answer:
      "It depends on the size of the home and how much needs packing. Packing is quoted as part of your fixed-price removal after a video or home survey, so you can compare the cost of full, part or fragile-only packing before you decide.",
  },
  {
    question: "How long does packing take?",
    answer:
      "A typical three-bedroom house is packed by a team in one day, normally the day before the move. Larger homes are packed over two or more days.",
  },
  {
    question: "Can I just buy boxes and materials from you?",
    answer:
      "Yes. We deliver packing materials to your door ahead of your move with Northstar, and advise on quantities so you are not left short or paying for boxes you do not use.",
  },
  {
    question: "Is professional packing covered by your insurance?",
    answer:
      "Yes. Items packed by our team are covered under our comprehensive insurance. If you pack yourself, cover for the contents of owner-packed boxes is more limited — as it is with every removal company — and we will explain exactly what is and is not covered when we quote.",
  },
  {
    question: "Do you pack for office moves?",
    answer:
      "Yes. Office packing uses lidded crates for desks, filing and IT, with a labelling system so everything goes to the right desk at the new premises. See our Commercial Moves page for the full service.",
  },
];

export default function PackingService() {
  return (
    <>
      <PageHero
        title="Packing Service"
        subtitle="Professional packers, proper materials and a labelling system that puts everything in the right room"
        image="/images/office-move.jpg"
        imageAlt="Furniture wrapped and boxes packed ready for a move"
      />
      <ServiceJsonLd
        name="Packing Service"
        serviceType="Professional packing and unpacking"
        description="Professional packing and unpacking service across London and the UK. Full or part packing, fragile-only packing, export packing and packing materials delivered to your door."
        path="/packing-service"
        image="/images/office-move.jpg"
      />
      <Breadcrumbs
        items={[{ title: "Packing Service", href: "/packing-service" }]}
      />
      <article className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-slate-700">
            <h2 className="font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
              Packing is where most moves go wrong — and most breakages happen
            </h2>
            <p>
              A good pack is the difference between a move that takes a day
              and one that drags on, and between crockery that arrives intact
              and crockery that does not. Our packers do this every working
              day: they know how to wrap a lamp, how to fill a book box so it
              can still be lifted, and how to label so the crew at the other
              end never has to ask.
            </p>
            <p>
              Choose a full pack, a part pack or fragile items only. We bring
              all the materials, pack the day before the move, and can unpack
              and take the boxes away at the other end. For international moves
              we export-pack to survive a long journey.
            </p>
            <p>
              Packing is included in your fixed-price quotation, so there is
              nothing to add up on the day.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/domestic-family.jpg"
              alt="A family ready to move after a professional pack"
              width={900}
              height={620}
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
            <Image
              src="/images/packing-label.png"
              alt="Northstar professional packing label"
              width={220}
              height={158}
              className="absolute -bottom-8 -left-4 hidden w-44 rotate-[-6deg] rounded-xl shadow-2xl ring-1 ring-navy-900/10 sm:block"
            />
          </div>
        </div>

        <h2 className="mt-20 font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
          Packing options
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {options.map((o) => (
            <div
              key={o.title}
              className="rounded-3xl bg-slate-50 p-7 ring-1 ring-navy-900/5"
            >
              <Star className="mb-4 h-6 w-6 text-brand-600" />
              <h3 className="font-display text-lg font-extrabold text-navy-950">
                {o.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {o.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
          <h2 className="font-display text-2xl font-black italic">
            Materials we use
          </h2>
          <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
            {materials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Star className="mt-1 h-4 w-4 shrink-0 text-ice-300" />
                <span className="text-sm text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <FaqAccordion heading="Packing service — frequently asked questions" items={faqs} />
        </div>

        <CtaBanner label="Add packing to your free quote" />
      </article>
      <RelatedServices current="/packing-service" />
    </>
  );
}

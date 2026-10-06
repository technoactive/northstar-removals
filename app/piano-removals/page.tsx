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
  title: "Piano Removals London | Upright & Grand Piano Movers",
  description:
    "Specialist piano removals across London, the UK and worldwide from Northstar. Upright and grand pianos moved by trained crews with purpose-built equipment, full insurance and storage if needed.",
  alternates: { canonical: "/piano-removals" },
};

const pianoTypes = [
  {
    title: "Upright pianos",
    body: "Moved on a piano trolley with the instrument wrapped and strapped. Stairs, basements and tight hallways are planned on the survey, with extra crew allocated where the carry is awkward.",
  },
  {
    title: "Baby grand and grand pianos",
    body: "The lid, lyre and legs are removed and padded, the body is tipped onto a purpose-built piano skid (shoe) and the whole instrument is wrapped before it is moved. Reassembly is included.",
  },
  {
    title: "Digital pianos and organs",
    body: "Lighter but easily damaged. We wrap and transport them upright, and can supply crates for export or long-term storage.",
  },
  {
    title: "Antique and high-value instruments",
    body: "Handled under our White Glove Service, with bespoke timber crating where appropriate and a dedicated move manager for the day.",
  },
];

const included = [
  "In-person or video survey to plan the route, stairs and vehicle access",
  "Trained piano crew — never a general crew making it up on the day",
  "Piano trolleys, skids, straps, ramps and tail-lift vehicles",
  "Full wrapping and protection of the instrument, floors and door frames",
  "Removal and reassembly of grand piano legs, lyre and lid",
  "Comprehensive insurance included",
  "Short- or long-term piano storage in monitored warehouses",
  "Local, nationwide and international piano shipping",
];

const faqs = [
  {
    question: "How much does it cost to move a piano in London?",
    answer:
      "It depends on the type of piano, the number of stairs or steps at each end and the distance. A short local upright move is the simplest case; a grand piano out of a first-floor flat is more involved. We quote a fixed price after a quick survey, with no extras added on the day.",
  },
  {
    question: "Can you move a piano as part of a house move?",
    answer:
      "Yes, and it is the most common way we move them. The piano is surveyed with the rest of your contents and the right equipment and crew are included in your removal quote.",
  },
  {
    question: "Can you move a piano up or down stairs?",
    answer:
      "Yes. Stairs are planned on the survey — we measure turns and headroom, add crew as needed and use ramps and skids rather than lifting where possible. If an instrument genuinely will not fit, we will tell you before the day rather than damage it or your home.",
  },
  {
    question: "Does my piano need tuning after the move?",
    answer:
      "Usually yes. Pianos react to changes in temperature and humidity, so most tuners recommend waiting two to three weeks after the move for the instrument to settle in its new room before tuning.",
  },
  {
    question: "Can you store a piano?",
    answer:
      "Yes. Pianos are wrapped and stored upright in our monitored warehouses, for anything from a week to several years, and delivered back when you are ready.",
  },
];

export default function PianoRemovals() {
  return (
    <>
      <PageHero
        title="Piano Removals"
        subtitle="Upright and grand pianos moved across London, the UK and worldwide by a crew trained for exactly this"
        image="/images/white-glove.jpg"
        imageAlt="Northstar crew moving fine furniture with care"
      />
      <ServiceJsonLd
        name="Piano Removals"
        serviceType="Piano moving"
        description="Specialist piano removals across London, the UK and worldwide. Upright and grand pianos moved by trained crews with purpose-built equipment, full insurance and storage if needed."
        path="/piano-removals"
        image="/images/white-glove.jpg"
      />
      <Breadcrumbs
        items={[{ title: "Piano Removals", href: "/piano-removals" }]}
      />
      <article className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-slate-700">
            <h2 className="font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
              A piano is the one item you cannot afford to get wrong
            </h2>
            <p>
              An upright piano weighs 200–300 kg and a grand can be twice
              that, concentrated on castors and a frame that is easily damaged
              if it is tipped or dragged the wrong way. Moving one safely is a
              matter of the right equipment, enough people and a crew who have
              done it many times before.
            </p>
            <p>
              Northstar has been moving pianos across London and the UK since
              2006, both as part of house moves and as stand-alone jobs. From
              our depot in Pinner we cover Harrow, Watford, North West London
              and the whole of the capital at local rates, and we ship pianos
              nationwide and abroad with the rest of a household or on their
              own.
            </p>
            <p>
              Every piano move starts with a survey — usually a few photos and
              a short video call are enough — so that stairs, doorways and
              vehicle access are planned before the day and the quote is fixed.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/moving-team.jpg"
              alt="The Northstar moving team"
              width={900}
              height={620}
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-navy-950 px-5 py-3 text-white shadow-xl">
              <p className="font-display font-black italic">
                Fully insured · Fixed price
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-20 font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
          Pianos we move
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {pianoTypes.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl bg-slate-50 p-7 ring-1 ring-navy-900/5"
            >
              <Star className="mb-4 h-6 w-6 text-brand-600" />
              <h3 className="font-display text-lg font-extrabold text-navy-950">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
          <h2 className="font-display text-2xl font-black italic">
            What our piano removal service includes
          </h2>
          <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Star className="mt-1 h-4 w-4 shrink-0 text-ice-300" />
                <span className="text-sm text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <FaqAccordion heading="Piano removals — frequently asked questions" items={faqs} />
        </div>

        <CtaBanner label="Get a fixed-price piano removal quote" />
      </article>
      <RelatedServices current="/piano-removals" />
    </>
  );
}

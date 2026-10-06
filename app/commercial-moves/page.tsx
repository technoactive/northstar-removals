import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ServiceJsonLd } from "@/components/JsonLd";
import RelatedServices from "@/components/RelatedServices";
import CtaBanner from "@/components/CtaBanner";
import Star from "@/components/Star";

export const metadata: Metadata = {
  title: "Office Removals London | Commercial Moves & Move Management",
  description:
    "Office removals in London from an award-winning Pinner-based mover. Move management, IT relocation, packing and storage, carried out of hours to cut downtime.",
  alternates: { canonical: "/commercial-moves" },
};

const ourServices = [
  {
    title: "Office Removals and Move Management",
    body: "Relocating an office or reorganising an internal environment can be a daunting prospect. At Northstar, we make it simple with a diverse fleet of specialised vehicles and highly trained, skilled operatives, equipped for any scale of project. We begin with a thorough appraisal and provide a free, no-obligation proposal that outlines the scope, resources, and plan for your move - so you know exactly what to expect.",
  },
  {
    title: "IT Removal Specialists",
    body: "Today's businesses are technology-driven, making IT relocation a crucial aspect of any move. Our technical team is skilled in handling sensitive equipment with precision, ensuring your IT infrastructure is carefully prepared, transported, and reinstalled within the agreed timescale.",
  },
  {
    title: "Move Planning",
    body: "Every successful move starts with meticulous planning. Our experienced team works closely with you to develop a custom moving plan, addressing every detail to guarantee a smooth transition.",
  },
  {
    title: "Professional Packing and Packaging",
    body: "We offer comprehensive packing services using high-quality materials and specialised techniques to secure office equipment, furniture, and documents. We provide proper labels that are easily removed without leaving any annoying residue behind on your office furniture.",
  },
  {
    title: "Storage Services",
    body: "Need flexible storage solutions? We provide secure, state-of-the-art storage facilities for your office furniture, equipment, and documents. Whether you need short-term or long-term options, our storage solutions adapt to your timeline.",
  },
  {
    title: "Furniture & WEEE Recycling",
    body: "At Northstar, we prioritise environmentally responsible disposal practices. Our furniture and WEEE recycling services bridge the gap between businesses with surplus furniture and organisations that can put it to good use—such as charities, educational institutions, and community projects. Together, we keep useful items out of landfills and give back to the community.",
  },
];

const additionalServices = [
  "Accurate surveying & move assessment",
  "Detailed quotations & proposals",
  "On-site Project Managers supervision",
  "Comprehensive move planning, strategy and evaluation",
  "Full range of removal equipment from IT lidded crates to professional labels",
  "Packing and unpacking services for sequence filing, IT, storage and library material",
  "System (flatpack) and freestanding furniture dismantling and reassembly service",
  "Fully equipped specialist removal vehicles",
  "Waste management & recycling solutions",
  "Surplus, redundant and IT furniture and computer clearance, reclamation and recycling",
];

const processSteps = [
  {
    title: "Consultation & Appraisal",
    body: "We start by discussing your moving requirements in detail, assessing the size and complexity of your move.",
  },
  {
    title: "Customised Moving Plan & Proposal",
    body: "Next, we provide a clear proposal with an itemised quote, including scope, timeline, and resource allocation for your move.",
  },
  {
    title: "Packing & Transportation",
    body: "Our skilled, security-cleared operatives handle packing, loading, and transporting every item with the utmost care.",
  },
  {
    title: "Setup & Installation",
    body: "Upon arrival, we ensure your office is set up according to your specifications, so your team can get back to work quickly.",
  },
];

const whyChoose = [
  {
    title: "Hands-On Service",
    body: "The consultant you meet at the start will be on-site to oversee your move.",
  },
  {
    title: "Experienced Professionals",
    body: "Our teams are fully trained and equipped for commercial moves.",
  },
  {
    title: "Dedicated Fleet & Equipment",
    body: "Our specialised vehicles and tools ensure safe, efficient transport.",
  },
  {
    title: "Environmental Responsibility",
    body: "Our recycling services provide sustainable disposal options.",
  },
];

const clientLogos = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/images/client-${n}.png`,
  alt: `Commercial client logo ${n}`,
}));

export default function CommercialMoves() {
  return (
    <>
      <PageHero
        title="Office Removals London"
        subtitle="Commercial moves and move management across London and the home counties — planned in detail, carried out of hours, with the same consultant on site from survey to setup"
        image="/images/office-move.jpg"
        imageAlt="An office relocation in progress"
      />
      <ServiceJsonLd
        name="Office Removals London"
        serviceType="Office and commercial removals"
        description="Office removals in London and the home counties. Move management, IT relocation, professional packing, storage and recycling, carried out of hours to minimise downtime."
        path="/commercial-moves"
        image="/images/office-move.jpg"
      />
      <Breadcrumbs
        items={[{ title: "Commercial Moves", href: "/commercial-moves" }]}
      />
      <article className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
              Office removals in London without the downtime
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-slate-700">
              <p>
                Whether you&rsquo;re moving to a new office or reorganising
                your existing one, Northstar is your partner for office
                removals throughout London and the home counties. Based in
                Pinner, Harrow, we specialise in office removals, move
                management and secure storage, from small practices to
                multi-floor relocations. Most of our commercial moves are
                carried out in the evening or at the weekend, so your team
                leaves on Friday and starts work in the new premises on Monday.
              </p>
              <p>
                A unique feature of our service: the same expert you meet at
                the initial consultation can be on-site to oversee your move if
                required, ensuring consistency and personal attention every
                step of the way.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/office-move.jpg"
              alt="Movers relocating office equipment"
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

        <CtaBanner />

        <h2 className="font-display text-2xl font-black italic text-navy-950 sm:text-4xl">
          Our Services
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ourServices.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl bg-slate-50 p-7 ring-1 ring-navy-900/5 transition hover:shadow-lg"
            >
              <Star className="mb-4 h-6 w-6 text-brand-600" />
              <h3 className="mb-3 font-display text-lg font-extrabold text-navy-950">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
          <h2 className="font-display text-2xl font-black italic">
            Additional Office &amp; Business Services
          </h2>
          <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
            {additionalServices.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Star className="mt-1 h-4 w-4 shrink-0 text-ice-300" />
                <span className="text-sm text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="mt-20 text-center font-display text-2xl font-black italic text-navy-950 sm:text-4xl">
          Our Moving Process: Seamless from Start to Finish
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <div key={step.title} className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 font-display text-xl font-black italic text-white shadow-lg">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display font-extrabold text-navy-950">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mt-20 font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
          Why Choose Northstar
        </h2>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {whyChoose.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <Star className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
              <p className="text-slate-700">
                <strong className="text-navy-950">{item.title}:</strong>{" "}
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mt-20 text-center font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
          Some Clients we have moved
        </h2>
        <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={90}
              className="mx-auto h-14 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-navy-950 p-8 text-center text-white sm:p-12">
          <h2 className="font-display text-2xl font-black italic sm:text-4xl">
            Ready to Relocate? Contact Us Today!
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-white/85">
            Take the first step toward a seamless commercial business/office
            move, by contacting us for a free consultation. At Northstar, we
            make your move our mission. As a well-established commercial mover,
            Northstar provides a &ldquo;brilliant&rdquo; service. We would like
            you to be a future satisfied customer soon.
          </p>
          <p className="mt-4 font-display text-lg font-extrabold italic text-ice-300">
            Choose Northstar for a constellation of brilliant qualities!
          </p>
          <CtaBanner />
        </div>
      </article>
      <RelatedServices current="/commercial-moves" />
    </>
  );
}

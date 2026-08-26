import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import CtaBanner from "@/components/CtaBanner";
import Star from "@/components/Star";

export const metadata: Metadata = {
  title: "White Glove Service",
  description:
    "Northstar's bespoke White Glove moving service: a fully managed, premium relocation experience with personalised planning, expert packing and full home setup.",
  alternates: { canonical: "/white-glove-service" },
};

const beforeMove = [
  {
    title: "Personalised Moving Plan",
    body: "Our bespoke service begins with a full consultation and comprehensive on-site survey. A dedicated On-Site Move Manager creates a tailored moving plan, from fragile item packing to optimised room layouts.",
  },
  {
    title: "Room Layout Planning",
    body: "For a seamless setup, we offer custom room layouts to plan furniture placement and organise the space.",
  },
  {
    title: "Crating for Fragile and High-Value Items",
    body: "For delicate and valuable possessions, we provide bespoke crates, custom-built to size. Our timber cases, foam-lined for additional protection, meet the highest standards for safe transport.",
  },
  {
    title: "Recycling, Re-use, and Disposal",
    body: "We promote sustainable practices by responsibly rehoming, donating, or recycling unwanted items. As licensed waste carriers, we ensure ethical disposal.",
  },
  {
    title: "Confidential Document Shredding",
    body: "Securely dispose of unwanted confidential paperwork with our document shredding service.",
  },
  {
    title: "Concierge Utility and Service Transfers",
    body: "Let us handle your utilities, phone, and internet transfers for a smooth transition to your new home.",
  },
  {
    title: "Curtain Cleaning and Installation",
    body: "We manage curtain cleaning and installation, ensuring a fresh, polished finish.",
  },
  {
    title: "Confidential (Incognito) Moving Services",
    body: "For clients requiring discretion, we offer non-branded vehicles and incognito moves, with our staff instructed to maintain full confidentiality regarding your destination.",
  },
];

const movingDays = [
  {
    title: "On-Site Move Manager",
    body: "Our dedicated Move Manager coordinates every step, ensuring efficiency and quality, allowing you the option of not being on-site during moving day.",
  },
  {
    title: "Expert Packing Services",
    body: "We use top-quality packing materials and innovative techniques to secure fragile items, such as antiques, artwork, and glassware, with each box carefully labelled for effortless unpacking.",
  },
  {
    title: "Specialist Services for Heavy and Delicate Items",
    body: "Our expert movers employ specialised equipment and techniques for bulky and fragile items, safeguarding both your possessions and your property.",
  },
  {
    title: "Furniture Dismantling and Reassembly",
    body: "Our skilled fitters expertly dismantle, transport, and reassemble all types of furniture, including complex flatpack pieces.",
  },
  {
    title: "Full Home Setup Service",
    body: "Settle in immediately with our full setup services, including bed-making, cupboard organisation, and kitchen setup.",
  },
  {
    title: "Unpacking Service and Debris Removal",
    body: "We offer a complete unpacking service, removing and recycling all packing materials in an environmentally friendly manner.",
  },
  {
    title: "Comprehensive Cleaning Services",
    body: "Integrated cleaning is provided at both your old and new properties, giving a spotless finish for moving day.",
  },
];

const postMove = [
  {
    title: "Electronics and Audio-Visual Setup",
    body: "We manage the installation of Wi-Fi, audio-visual equipment, and smart home automation systems, setting up every detail of your tech requirements.",
  },
  {
    title: "Lock Changing Services",
    body: "Enhance security in your new home with professional lock-changing services.",
  },
  {
    title: "Artwork and Mirror Hanging",
    body: "An experienced team can provide expert installation of paintings, mirrors, and artwork to make your home feel complete from day one.",
  },
];

const benefits = [
  {
    title: "Peace of Mind",
    body: "Northstar's white glove moving service offers complete reassurance, handling every stage of the move so you can focus on settling into your new surroundings.",
  },
  {
    title: "Time Efficiency",
    body: "With our experienced team, moves are completed swiftly and professionally, saving you valuable time and energy.",
  },
  {
    title: "Protection for Valuables and Fragile Items",
    body: "Our expert packing and handling techniques minimise risk, ensuring that valuable or delicate items arrive in pristine condition.",
  },
  {
    title: "Customised Moving Solutions",
    body: "Every move is unique, and our bespoke 'white glove' service tailors every detail to your specific requirements, whether you are relocating locally, long-distance, or internationally.",
  },
];

function ServiceStage({
  step,
  heading,
  items,
}: {
  step: string;
  heading: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="mt-14">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 font-display text-sm font-black italic text-white">
          {step}
        </span>
        <h2 className="font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
          {heading}
        </h2>
      </div>
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-slate-50 p-6 ring-1 ring-navy-900/5"
          >
            <div className="flex items-start gap-3">
              <Star className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
              <div>
                <h3 className="font-bold text-navy-950">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function WhiteGloveService() {
  return (
    <>
      <PageHero
        title="White Glove Service"
        subtitle="Northstar Bespoke 'White Glove' Moving Service"
        image="/images/white-glove.jpg"
        imageAlt="White glove premium moving service"
      />
      <Breadcrumbs
        items={[
          { title: "White Glove Service", href: "/white-glove-service" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Image
            src="/images/white-glove.jpg"
            alt="A mover wearing white gloves handling premium furniture"
            width={900}
            height={620}
            className="w-full rounded-3xl object-cover shadow-2xl"
          />
          <p className="leading-relaxed text-slate-700">
            Moving can be one of life&rsquo;s most demanding events. With
            Northstar&rsquo;s Bespoke White Glove Moving Service, every detail
            is expertly managed with precision, allowing you to focus on what
            truly matters. Designed for discerning clients who expect the
            utmost care, our premium white glove removals service provides a
            fully bespoke relocation experience. Every item, from fragile
            valuables to large furnishings, is handled with respect and
            professionalism. Whether you&rsquo;re relocating to a new home,
            expanding your property portfolio, or overseeing an office
            relocation, our expert team will oversee each detail, setting the
            highest standards in premium moving.
          </p>
        </div>

        <ServiceStage step="01" heading="Before Your Move" items={beforeMove} />
        <ServiceStage
          step="02"
          heading="On Packing and Moving Days"
          items={movingDays}
        />
        <ServiceStage
          step="03"
          heading="Post-Moving Services"
          items={postMove}
        />

        <section className="mt-16 rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
          <h2 className="font-display text-2xl font-black italic sm:text-3xl">
            Benefits
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title}>
                <h3 className="flex items-center gap-2.5 font-bold text-ice-200">
                  <Star className="h-4 w-4 text-ice-300" />
                  {b.title}
                </h3>
                <p className="mt-2 pl-6.5 text-sm leading-relaxed text-white/80">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-10 rounded-2xl border-l-4 border-brand-600 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
          <strong className="text-navy-950">Note:</strong> Northstar&rsquo;s
          Bespoke White Glove Moving Service is a premium offering, meticulously
          designed for clients who expect the highest standards of service.
          Additional charges apply for selected premium options.
        </p>

        <CtaBanner />
      </article>
      <RelatedServices current="/white-glove-service" />
    </>
  );
}

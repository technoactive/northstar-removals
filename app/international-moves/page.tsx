import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ServiceJsonLd } from "@/components/JsonLd";
import RelatedServices from "@/components/RelatedServices";
import CtaBanner from "@/components/CtaBanner";
import Star from "@/components/Star";

export const metadata: Metadata = {
  title: "International Removals London | Worldwide Moves by Road, Sea & Air",
  description:
    "International removals from London with 20 years' experience. Export packing, sea and air freight, customs clearance and documentation, managed door to door.",
  alternates: { canonical: "/international-moves" },
};

const included = [
  "Part load or full container shipping worldwide",
  "Road freight shipping to Europe",
  "Airfreight services for small items and priority",
  "Export packing and comprehensive range of packing materials",
  "Experienced and skilled international estimators",
  "Customs clearance and full documentation",
  "Storage both in the UK and at destination",
  "Comprehensive insurance",
  "Cars, boats and motorcycles",
  "Complete tracking service",
];

export default function InternationalMoves() {
  return (
    <>
      <PageHero
        title="International Removals London"
        subtitle="Worldwide relocation from London and the UK by road, sea and air — export packing, shipping, customs and delivery, managed door to door"
        image="/images/international.jpg"
        imageAlt="Shipping containers ready for international removals"
      />
      <ServiceJsonLd
        name="International Removals London"
        serviceType="International removals and relocation"
        description="International removals from London and the UK with 20 years of experience. Export packing, container shipping, airfreight, customs clearance and full documentation, managed door to door."
        path="/international-moves"
        image="/images/international.jpg"
        areaServed={["United Kingdom", "Worldwide"]}
      />
      <Breadcrumbs
        items={[
          { title: "International Moves", href: "/international-moves" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/images/international.jpg"
              alt="Container shipping for international moves"
              width={900}
              height={620}
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 right-6 rounded-2xl bg-navy-950 px-5 py-3 text-white shadow-xl">
              <p className="font-display font-black italic">
                20 years worldwide
              </p>
            </div>
          </div>
          <div className="order-1 space-y-5 leading-relaxed text-slate-700 lg:order-2">
            <p>
              International removals from London require special skills:
              export packing, container loading, documentation for export,
              shipping and a detailed knowledge of local conditions at the
              other end. From our base in Pinner we handle moves abroad for
              families and businesses across London, the home counties and the
              rest of the UK.
            </p>
            <p>
              Moving abroad is a big step and can be a stressful experience,
              whether you&rsquo;re moving for work, personal reasons or to
              explore a new country.
            </p>
            <p>
              Here at Northstar Removals, with 20 years&rsquo; experience, we will
              ensure a smooth stress free transition. With a wide partner
              network of established agents in many overseas destinations, we
              assure that everything is handled at your destination with the
              same care and attention as in the UK.
            </p>
            <p>
              We take the safety of your goods as our top priority, which is
              why our export packing is completed to the highest standard. We
              use a wide variety of materials and well-tested methods to ensure
              that your belongings are securely protected throughout the entire
              journey.
            </p>
            <p>
              Our trained and experienced staff will guide you through the maze
              of customs paperwork and documentation with friendly advice.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-slate-50 p-8 ring-1 ring-navy-900/5 sm:p-10">
          <h2 className="font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
            Northstar worldwide services include:
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

        <div className="mt-14 flex flex-col items-center gap-6 rounded-3xl bg-navy-950 p-8 text-white sm:flex-row sm:p-10">
          <div className="flex shrink-0 gap-3">
            <Image
              src="/images/badge-guild.png"
              alt="National Guild of Removers member"
              width={72}
              height={72}
              className="h-16 w-auto rounded-lg bg-white/95 p-1.5 object-contain"
            />
            <Image
              src="/images/badge-ombudsman.png"
              alt="Removals Industry Ombudsman"
              width={72}
              height={72}
              className="h-16 w-auto rounded-lg bg-white/95 p-1.5 object-contain"
            />
          </div>
          <p className="leading-relaxed text-white/85">
            Northstar is proud to be a member of the National Guild of Removals
            and voluntarily registered with the Industry Ombudsmen. Our
            dedication to upholding the highest standards of service has been
            recognised through numerous accolades, with over 14 awards
            underlining our commitment to excellence.
          </p>
        </div>

        <CtaBanner label="Plan your international move today!" />
      </article>
      <RelatedServices current="/international-moves" />
    </>
  );
}

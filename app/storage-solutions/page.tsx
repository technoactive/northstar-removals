import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ServiceJsonLd } from "@/components/JsonLd";
import RelatedServices from "@/components/RelatedServices";
import CtaBanner from "@/components/CtaBanner";
import Star from "@/components/Star";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Storage Solutions | Secure Storage for Harrow, Pinner & London",
  description:
    "Secure containerised storage for Harrow, Pinner and North West London across 7+ locations including Park Royal. Collected from your door, from one week upwards.",
  alternates: { canonical: "/storage-solutions" },
};

const storageReasons = [
  "Temporary storage when moving home",
  "Having your home renovated or extended – building work",
  "Storage of sentimental inherited items and heirlooms",
  "Decluttering to sell your property",
  "Insurance claims for flooding, fire etc",
  "Whilst you are house hunting for a new property",
];

const locations = [
  "Park Royal, London, NW10",
  "Aylesbury",
  "High Wycombe",
  "Hemel Hempstead",
  "Guildford",
  "Thurrock",
];

const highlights = [
  { title: "Secure Storage", body: "Locked warehouse & 24/7 CCTV" },
  { title: "Various Locations", body: "Over 7 locations" },
  { title: "Flexible Terms", body: "One week to many years" },
  { title: "Inventory", body: "Basic, comprehensive or photographic" },
];

const galleryImages = [
  { src: "/images/storage-1.jpg", alt: "Northstar secure storage warehouse" },
  { src: "/images/storage-2.jpg", alt: "Wooden storage containers stacked in the warehouse" },
  { src: "/images/storage-3.jpg", alt: "Containerised storage units" },
  { src: "/images/storage-4.jpg", alt: "Storage containers being managed by forklift" },
];

export default function StorageSolutions() {
  return (
    <>
      <PageHero
        title="Storage Solutions"
        subtitle="Secure, flexible storage for Harrow, Pinner, North West London and beyond — collected from your door, for residential, international, business and commercial clients"
        image="/images/storage-1.jpg"
        imageAlt="Northstar secure storage warehouse"
      />
      <ServiceJsonLd
        name="Storage Solutions"
        serviceType="Containerised and self storage"
        description="Secure containerised storage for Harrow, Pinner, North West London and beyond, across 7+ locations including Park Royal NW10. Collected from your door, flexible terms from one week to many years."
        areaServed={["Harrow", "Pinner", "North West London", "London", "United Kingdom"]}
        path="/storage-solutions"
        image="/images/storage-1.jpg"
      />
      <Breadcrumbs
        items={[{ title: "Storage Solutions", href: "/storage-solutions" }]}
      />
      <article className="mx-auto max-w-6xl px-4 py-16">
        <p className="mx-auto max-w-4xl text-center leading-relaxed text-slate-700">
          Looking for storage in Harrow, Pinner or North West London? Northstar
          offers a fully managed alternative to self storage: we collect from
          your door, seal your belongings into containers and hold them in
          secure warehouses — including Park Royal, NW10, a few minutes from
          most of North West London — for residential, international and all
          business and commercial clients. No van hire, no trips to a unit, and
          usually a lower monthly cost than a self-storage room of the same
          size.
        </p>

        {/* Gallery */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={600}
              height={800}
              className={`w-full rounded-3xl object-cover shadow-lg ${
                i % 2 === 1 ? "lg:translate-y-6" : ""
              } h-72`}
            />
          ))}
        </div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
              250 Cubic Feet Wooden Container Storage Units
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-slate-700">
              <p>
                Northstar&rsquo;s container storage service is designed to keep
                your belongings safe and protected in state-of-the-art storage
                facilities. Your items are stored in bespoke 250 cubic foot
                wooden containers. The containers are housed in highly secure
                warehouses with 24/7 monitored CCTV, ensuring peace of mind for
                both short- and long-term storage needs.
              </p>
              <p>
                Whether you&rsquo;re storing furniture, documents, or other
                valuable items, Northstar&rsquo;s containers provide the ideal
                solution to safeguard your possessions.
              </p>
              <p>
                Containerised storage, being much more economical than self
                storage, is ideal for customers not requiring regular access to
                their possessions. Removals industry-standard sized containers
                (measuring 2.4m high x 1.5m wide x 2.15m long) offer the most
                suitable option — economically ideal for long term storage for
                many years.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/container-1.jpg"
              alt="A 250 cubic feet wooden storage container"
              width={500}
              height={750}
              className="w-full rounded-3xl object-cover shadow-xl"
            />
            <Image
              src="/images/container-2.jpg"
              alt="Inside a Northstar wooden storage container"
              width={500}
              height={480}
              className="mt-8 w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>

        <div className="mt-16 space-y-5 rounded-3xl bg-slate-50 p-8 leading-relaxed text-slate-700 ring-1 ring-navy-900/5 sm:p-10">
          <h2 className="font-display text-2xl font-black italic text-navy-950">
            A fully managed service with flexible terms
          </h2>
          <p>
            The storage service is fully managed, so we keep track of
            everything we put into or remove from store or take out of your
            container. We collect and transport to and from storage for you.
            Free removal blankets, ideal for storage to protect your
            belongings, at all times.
          </p>
          <p>
            A basic inventory can be provided for the contents of your
            individual containers or a comprehensive numbered inventory. For
            valuable items a photographic inventory can be provided.
          </p>
          <p>
            We keep our terms for this service as flexible as possible. You do
            not need to commit to long-term contracts. Should you require any
            of your belongings stored, we simply require about a week&rsquo;s
            notice (subject to availability) when you wish to have your
            consignment delivered from store. If we can release the goods
            earlier, we will do so.
          </p>
          <p>
            For storage inspections and obtaining items, Northstar provides
            removal operatives to assist you with moving, rearranging or
            consolidating your belongings at the store for reasonable rates.
          </p>
        </div>

        <CtaBanner />

        <div className="rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
          <h2 className="font-display text-2xl font-black italic sm:text-3xl">
            Specialist Climate-Controlled Storage
          </h2>
          <p className="mt-2 font-bold text-ice-300">
            Ideal for Fine Art, Wines, Investments &amp; High Value Assets
          </p>
          <p className="mt-5 leading-relaxed text-white/85">
            Northstar can make the necessary arrangements for climate
            controlled high grade storage facilities, for storing all your
            precious items that are sensitive to heat, cold, dust, mould or
            humidity. Whether it is your fine art, paintings by notable or
            famous artists, valuable wine collection or sensitive technology —
            a climate-controlled storage environment satisfies the most
            stringent specifications by maintaining temperature requirements
            along with humidity levels, effectively preventing premature aging
            and heat-related malfunctions.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-black italic text-navy-950">
              We store our clients&rsquo; belongings for many reasons:
            </h2>
            <ul className="mt-6 space-y-3">
              {storageReasons.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Star className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-black italic text-navy-950">
              Locations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Should you require the contents of your home or business premises
              to be stored between their removal from one location and delivery
              to another, or require long-term storage, we have storage
              facilities in:
            </p>
            <ul className="mt-5 space-y-3">
              {locations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Star className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="mt-20 text-center font-display text-2xl font-black italic text-navy-950 sm:text-4xl">
          Why Choose Northstar Storage?
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-3xl bg-slate-50 p-7 text-center ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Star className="mx-auto mb-4 h-7 w-7 text-brand-600" />
              <h3 className="font-display font-extrabold uppercase tracking-wide text-navy-950">
                {h.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{h.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-navy-950 p-8 text-center text-white sm:p-10">
          <h2 className="font-display text-2xl font-black italic sm:text-3xl">
            Interested in Containerised Storage?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/85">
            Just call Northstar{" "}
            <a
              href={site.phones[0].href}
              className="font-bold text-white underline underline-offset-4 hover:text-ice-200"
            >
              {site.phones[0].label}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-bold text-white underline underline-offset-4 hover:text-ice-200"
            >
              {site.email}
            </a>{" "}
            and one of our team will make the necessary arrangements for the
            best storage solution for you.
          </p>
        </div>
      </article>
      <RelatedServices current="/storage-solutions" />
    </>
  );
}

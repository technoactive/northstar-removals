import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Awards",
  description:
    "Over 14 industry awards recognising Northstar Removals' commitment to excellence, including Super Elite Remover and Ombudsman's Perfect Record awards.",
  alternates: { canonical: "/awards" },
};

const awards = [
  { title: "Super Elite Remover 2024", image: "/images/award-2024.jpg" },
  { title: "Super Elite Remover 2023", image: "/images/award-2023.jpg" },
  { title: "Elite Honours Remover 2022", image: "/images/award-2022a.jpg" },
  {
    title: "Ombudsman's Perfect Record Award 2022",
    image: "/images/award-2022b.jpg",
  },
  { title: "Elite Honours Remover 2021", image: "/images/award-2021a.jpg" },
  {
    title: "Ombudsman's Perfect Record Award 2021",
    image: "/images/award-2021b.jpg",
  },
  { title: "Elite Plus Remover 2020", image: "/images/award-2020a.jpg" },
  {
    title: "Ombudsman's Perfect Record Award 2020",
    image: "/images/award-2020b.jpg",
  },
  { title: "Elite Plus Remover 2019", image: "/images/award-2019.jpg" },
  { title: "Excellence Certificate 2017", image: "/images/award-2017a.jpg" },
  { title: "Remover of the Month 2017", image: "/images/award-2017b.jpg" },
  {
    title: "Annual Certification of Excellence 2016",
    image: "/images/award-2016.jpg",
  },
  {
    title: "Annual Certification of Excellence 2015",
    image: "/images/award-2015a.jpg",
  },
  { title: "Remover of the Month 2015", image: "/images/award-2015b.jpg" },
];

export default function Awards() {
  return (
    <>
      <PageHero
        title="Awards"
        subtitle="The awards we are proud & honoured to have won"
        image="/images/moving-team.jpg"
        imageAlt="The award-winning Northstar Removals team"
      />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <figure
              key={award.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy-900/5 transition hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <Image
                  src={award.image}
                  alt={`${award.title} certificate`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5 text-center font-display font-extrabold text-navy-950">
                {award.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}

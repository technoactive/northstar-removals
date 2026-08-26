import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2006, Northstar Removals is a friendly London-based, award-winning removals and storage company with a network of storage facilities.",
  alternates: { canonical: "/about-us" },
};

const team = [
  {
    name: "Denis Loraine-Grews",
    role: "Managing Director",
    image: "/images/team-denis.jpg",
    bio: [
      "Denis is a dual citizen of South Africa and the UK. He completed his schooling and military service in South Africa. He has travelled extensively to over 40 countries worldwide and has a wide range of interests, including genealogical research and associated history. His paternal lineage has a long military background, with grandparents and great-grandparents who served in WW2, the Anglo-Boer War, Crimea, and China in 1860. He commenced his career starting at the back of a removal vehicle and has personally relocated many a satisfied customer in his early years.",
      "Having worked his way up through the ranks in removals operations, eventually transitioning into office roles where he succeeded in both sales and customer relations, he eventually became a department head and senior manager. After working for two major corporate removal companies, Denis decided to start his own business with just a van and a man almost 19 years ago, which is now Northstar Removals & Storage.",
      "Denis is a Freeman of London and also a Liveryman at the Worshipful Company of Carmen.",
    ],
  },
  {
    name: "Paulina Ruszkowska",
    role: "Office Manager",
    image: "/images/team-paulina.jpg",
    bio: [
      "As the Office Manager at Northstar Removals, my primary responsibility is to ensure the smooth operation of the business across all departments, including operations, sales, finance, and most importantly, customer relations. My journey into this role has been diverse and enriching, spanning various facets of business such as marketing and merchandising for a large clothing brand, vehicle finance management, and smaller roles within the customer service industry. This diverse background has equipped me with a broad skill set and a deep understanding of different business functions.",
      "My introduction to the world of removals began with a telesales and administration role. Over the past five years, I have rapidly advanced, learning the intricacies of this challenging industry and growing into my current management position. It has been an exciting and demanding journey, and I have thoroughly enjoyed expanding my skills to support the growth of Northstar Removals.",
      "Outside of work, I immerse myself in the world of motorsport, surrounded by grease, engine oil, and tires, diving into the exhilarating life of motorsport.",
    ],
  },
  {
    name: "Neil St John Paul",
    role: "Commercial Director",
    image: "/images/team-neil.jpg",
    bio: [
      "Neil was educated in schools in both Yorkshire and Kent, before attending university to graduate. He pursued a career working with children, was Chair of Governors for a school in Wembley, and is a Trustee for a Further Education College in Sittingbourne, and a charitable trust, which provides grants to schools or businesses that support children with Social, Emotional Mental Health. Neil entered the moving industry some 30 years ago and has progressed to being on the board of 3 of the larger moving companies. He has considerable experience of all areas of the industry, but now concentrates on commercial and office moving. Northstar have an enviable reputation in this field.",
      "Neil played rugby from his school days, played at a senior level, and has been successful at a representational level. Additionally, he is a keen sailor, sailing everything from dinghies to Thames Barges, where he likes the historical dimension of sailing vessels over a hundred years old. He is a keen rower and is passionate about classic cars. Following his interest in history and associated traditions, Neil is a Livery Man and a Freeman of the City of London.",
    ],
  },
  {
    name: "Belinda Fry",
    role: "Commercial Manager",
    image: "/images/team-belinda.jpg",
    bio: [
      "With over 15 years of experience in the removals and relocation industry, Belinda Fry is the Commercial Manager at Northstar Removals, a trusted family-run business based in London. Belinda brings a wealth of knowledge and a personal touch to every commercial move, ensuring seamless, efficient relocations for businesses of all sizes.",
      "Under her leadership, Northstar Removals has become a go-to partner for international, domestic, and commercial relocations. Whether you're relocating offices across the city or setting up an international operation, Belinda's hands-on approach guarantees that every detail is meticulously managed from start to finish.",
      "Her extensive experience in both the logistical and customer service aspects of removals means that Northstar Removals consistently exceeds expectations, offering tailored solutions to meet the specific needs of each client.",
    ],
  },
  {
    name: "John Morgan",
    role: "Removals Supervisor",
    image: "/images/team-john.png",
    bio: [
      "John is Northstar's most experienced removal operative and is a true Londoner. He began his journey with the company at just 17 years old. Over the past decade, he has worked his way up from a basic porter, mastering essential skills such as packing, export packing, measuring and crating valuable items. He is also highly skilled in compiling inventories for both storage and international consignments.",
      "An expert in vehicle loading and careful driving, John ensures that all goods are transported safely. His dedication and expertise have led him to oversee all Northstar operatives, and he now serves as the Lead Supervisor in the field.",
    ],
  },
];

const timeline = [
  {
    year: "2006",
    text: "Founded by Denis with just a van and a man, built on integrity, expertise and a customer-centric approach.",
  },
  {
    year: "2010s",
    text: "Expanded into commercial, international and long-distance relocations with a growing network of storage facilities.",
  },
  {
    year: "2015+",
    text: "Recognition begins: Annual Certificates of Excellence, Remover of the Month, and Elite Remover awards year after year.",
  },
  {
    year: "Today",
    text: "An award-winning London company — 14+ awards, 90% repeat business, and members of the National Guild of Removals.",
  },
];

export default function AboutUs() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="More than just a moving company — a family business with deep roots in the industry"
        image="/images/moving-team.jpg"
        imageAlt="The Northstar Removals team"
      />
      <Breadcrumbs items={[{ title: "About Us", href: "/about-us" }]} />
      <article className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-slate-700">
            <p>
              Northstar Removals is more than just a moving company —
              originally started as a family-owned and operated business with
              deep roots in the industry. Founded in 2006 by Denis, a seasoned
              professional with years of experience in the removals business,
              Northstar has steadily grown and evolved to meet the diverse
              needs of our valued clients into a friendly London based company
              with a network of storage locations and facilities.
            </p>
            <p>
              Our journey began with Denis&rsquo;s vision to provide
              unparalleled service to those seeking reliable and efficient
              relocation solutions. With a strong foundation built on
              integrity, expertise, and a customer-centric approach, Northstar
              quickly established itself as a trusted name in the industry.
            </p>
            <p>
              Over the years, Northstar has expanded its scope to cater to
              larger-scale moves, including commercial, international, and
              long-distance relocations. Our commitment to excellence remains
              unwavering, whether we&rsquo;re moving a family across town or
              orchestrating a complex international move.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/moving-team.jpg"
              alt="The Northstar Removals crew in front of their truck"
              width={900}
              height={760}
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl ring-1 ring-navy-900/10">
              <Image
                src="/images/badge-recycle.png"
                alt="We reuse, we recycle"
                width={44}
                height={50}
                className="h-11 w-auto object-contain"
              />
              <p className="text-sm font-bold text-navy-950">
                Eco-friendly,
                <br />
                biodegradable packing
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-5 leading-relaxed text-slate-700">
          <p>
            In addition to our dedication to superior service, Northstar
            Removals is committed to environmental sustainability. We actively
            recycle materials and utilise biodegradable packing supplies
            wherever possible, ensuring that our operations have minimal impact
            on the environment. This commitment to eco-friendly practices
            reflects our broader responsibility to the communities we serve and
            the planet we all share.
          </p>
          <p>
            Northstar is proud to be a member of the National Guild of Removals
            and voluntarily registered with the Industry Ombudsmen. Our
            dedication to upholding the highest standards of service has been
            recognised through numerous accolades, with over 14 awards
            underlining our commitment to excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="rounded-3xl bg-slate-50 p-7 ring-1 ring-navy-900/5"
            >
              <p className="font-display text-2xl font-black italic text-brand-600">
                {item.year}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <CtaBanner />

        {/* Awards teaser */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-navy-950 p-8 text-white sm:flex-row sm:p-10">
          <div>
            <h2 className="font-display text-2xl font-black italic">
              Award-Winning Removals &amp; Storage Company
            </h2>
            <p className="mt-2 text-white/80">
              From Super Elite Remover to the Ombudsman&rsquo;s Perfect Record
              Award — see them all.
            </p>
            <Link
              href="/awards"
              className="mt-4 inline-block font-bold text-ice-300 underline-offset-4 hover:underline"
            >
              View our awards →
            </Link>
          </div>
          <div className="flex -space-x-4">
            {["/images/award-2024.jpg", "/images/award-2023.jpg", "/images/award-2022a.jpg", "/images/award-2021a.jpg"].map(
              (src) => (
                <Image
                  key={src}
                  src={src}
                  alt="Award certificate"
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-2xl border-4 border-navy-950 object-cover shadow-lg"
                />
              ),
            )}
          </div>
        </div>

        {/* Team */}
        <h2 className="mt-20 text-center font-display text-3xl font-black italic text-navy-950 sm:text-5xl">
          Meet the Team
        </h2>
        <div className="mt-12 space-y-10">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`flex flex-col gap-8 rounded-3xl bg-slate-50 p-8 ring-1 ring-navy-900/5 sm:p-10 lg:flex-row lg:items-start ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="shrink-0 text-center lg:w-56">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at Northstar Removals`}
                  width={280}
                  height={280}
                  className="mx-auto h-44 w-44 rounded-full object-cover shadow-xl ring-4 ring-white"
                />
                <h3 className="mt-5 font-display text-xl font-extrabold text-navy-950">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-brand-600">
                  {member.role}
                </p>
              </div>
              <div className="flex-1 space-y-4 text-sm leading-relaxed text-slate-600">
                {member.bio.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

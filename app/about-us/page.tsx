import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import JsonLd, { ORG_ID, WEBSITE_ID } from "@/components/JsonLd";
import Star from "@/components/Star";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Family-Run Removals Since 2006",
  description:
    "Family-founded in Pinner in 2006, Northstar Removals is an award-winning London removals and storage company. Meet the team and see how we work.",
  alternates: { canonical: "/about-us" },
};

/* ───────────────────────────── Content ───────────────────────────── */

const stats = [
  { value: "20", label: "Years of experience" },
  { value: "14+", label: "Industry awards" },
  { value: "90%", label: "Repeat customers & referrals" },
  { value: "1,200+", label: "Verified reviews" },
];

const values = [
  {
    title: "Straight-talking prices",
    body: "A personalised, fixed-price quotation in writing after a free video or home survey. What we quote is what you pay — no hidden extras on the day.",
    icon: (
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01" />
    ),
  },
  {
    title: "Trained, permanent crews",
    body: "Our operatives are trained in packing, export packing, crating and inventories, and led on site by supervisors who have been with us for years.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </>
    ),
  },
  {
    title: "Care for what matters",
    body: "From pianos, fine art and antiques to a whole office's IT, we bring the right equipment, materials and people for the job, and comprehensive insurance is included on every move.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Responsibility",
    body: "We recycle materials and use biodegradable packing wherever possible, and we hold ourselves to the standards of the National Guild of Removers and the Removals Industry Ombudsman scheme.",
    icon: (
      <>
        <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </>
    ),
  },
];

const timeline = [
  {
    year: "2006",
    title: "One van and a man",
    text: "Denis founds Northstar in Pinner after a career that began on the back of a removal lorry and progressed through two major corporate movers.",
  },
  {
    year: "2010s",
    title: "Beyond the house move",
    text: "Commercial, international and long-distance relocations join the domestic work, with a growing network of secure storage facilities.",
  },
  {
    year: "2015",
    title: "First industry awards",
    text: "An Annual Certification of Excellence and Remover of the Month, the start of recognition that has arrived every year since.",
  },
  {
    year: "2019–24",
    title: "Elite to Super Elite",
    text: "Elite Plus, Elite Honours and then Super Elite Remover status, alongside the Ombudsman's Perfect Record Award three years running.",
  },
  {
    year: "Today",
    title: "20 years in",
    text: "Still family-run from Pinner, moving homes and businesses across London, the UK and worldwide, with 1,200+ verified reviews behind us.",
  },
];

const accreditations = [
  {
    src: "/images/badge-guild.png",
    alt: "National Guild of Removers member",
    title: "National Guild of Removers",
    text: "Members, working to the Guild's code of practice.",
    href: "/awards",
  },
  {
    src: "/images/badge-ombudsman.png",
    alt: "Removals Industry Ombudsman scheme",
    title: "Removals Industry Ombudsman",
    text: "Voluntarily registered; Perfect Record Award 2020, 2021 and 2022.",
    href: "/awards",
  },
  {
    src: "/images/badge-inspected.png",
    alt: "Inspected and approved",
    title: "Inspected & approved",
    text: "Independently inspected and approved as a professional remover.",
    href: "/awards",
  },
  {
    src: "/images/badge-removal-approval.png",
    alt: "Removal Approval reviews",
    title: "1,200+ verified reviews",
    text: "Collected independently by Removal Approval, plus Google reviews.",
    href: "/reviews",
  },
];

type Member = {
  name: string;
  role: string;
  image: string;
  summary: string;
  bio: string[];
};

const directors: Member[] = [
  {
    name: "Denis Loraine-Grews",
    role: "Managing Director & Founder",
    image: "/images/team-denis.jpg",
    summary:
      "Founded Northstar in 2006 after a career that started on the back of a removal vehicle and progressed through operations, sales and senior management at two major corporate movers. A Freeman of the City of London and Liveryman of the Worshipful Company of Carmen.",
    bio: [
      "Denis is a dual citizen of South Africa and the UK. He completed his schooling and military service in South Africa. He has travelled extensively to over 40 countries worldwide and has a wide range of interests, including genealogical research and associated history. His paternal lineage has a long military background, with grandparents and great-grandparents who served in WW2, the Anglo-Boer War, Crimea, and China in 1860. He commenced his career starting at the back of a removal vehicle and has personally relocated many a satisfied customer in his early years.",
      "Having worked his way up through the ranks in removals operations, eventually transitioning into office roles where he succeeded in both sales and customer relations, he eventually became a department head and senior manager. After working for two major corporate removal companies, Denis decided to start his own business in 2006 with just a van and a man, which is now Northstar Removals & Storage.",
      "Denis is a Freeman of London and also a Liveryman at the Worshipful Company of Carmen.",
    ],
  },
  {
    name: "Neil St John Paul",
    role: "Commercial Director",
    image: "/images/team-neil.jpg",
    summary:
      "Thirty years in the moving industry, including board roles at three of the larger moving companies. Neil now concentrates on commercial and office moves, where Northstar has built an enviable reputation.",
    bio: [
      "Neil was educated in schools in both Yorkshire and Kent, before attending university to graduate. He pursued a career working with children, was Chair of Governors for a school in Wembley, and is a Trustee for a Further Education College in Sittingbourne, and a charitable trust, which provides grants to schools or businesses that support children with Social, Emotional Mental Health. Neil entered the moving industry some 30 years ago and has progressed to being on the board of 3 of the larger moving companies. He has considerable experience of all areas of the industry, but now concentrates on commercial and office moving. Northstar have an enviable reputation in this field.",
      "Neil played rugby from his school days, played at a senior level, and has been successful at a representational level. Additionally, he is a keen sailor, sailing everything from dinghies to Thames Barges, where he likes the historical dimension of sailing vessels over a hundred years old. He is a keen rower and is passionate about classic cars. Following his interest in history and associated traditions, Neil is a Livery Man and a Freeman of the City of London.",
    ],
  },
];

const team: Member[] = [
  {
    name: "Belinda Fry",
    role: "Commercial Manager",
    image: "/images/team-belinda.jpg",
    summary:
      "More than 15 years in removals and relocation. Belinda manages commercial moves end to end, from the first survey to the last desk being set up.",
    bio: [
      "With over 15 years of experience in the removals and relocation industry, Belinda Fry is the Commercial Manager at Northstar Removals, a trusted family-run business based in London. Belinda brings a wealth of knowledge and a personal touch to every commercial move, ensuring seamless, efficient relocations for businesses of all sizes.",
      "Under her leadership, Northstar Removals has become a go-to partner for international, domestic, and commercial relocations. Whether you're relocating offices across the city or setting up an international operation, Belinda's hands-on approach guarantees that every detail is meticulously managed from start to finish.",
      "Her extensive experience in both the logistical and customer service aspects of removals means that Northstar Removals consistently exceeds expectations, offering tailored solutions to meet the specific needs of each client.",
    ],
  },
  {
    name: "Paulina Ruszkowska",
    role: "Office Manager",
    image: "/images/team-paulina.jpg",
    summary:
      "Keeps the business running across operations, sales, finance and customer relations. Started in telesales and administration and has grown into management over the past five years.",
    bio: [
      "As the Office Manager at Northstar Removals, my primary responsibility is to ensure the smooth operation of the business across all departments, including operations, sales, finance, and most importantly, customer relations. My journey into this role has been diverse and enriching, spanning various facets of business such as marketing and merchandising for a large clothing brand, vehicle finance management, and smaller roles within the customer service industry. This diverse background has equipped me with a broad skill set and a deep understanding of different business functions.",
      "My introduction to the world of removals began with a telesales and administration role. Over the past five years, I have rapidly advanced, learning the intricacies of this challenging industry and growing into my current management position. It has been an exciting and demanding journey, and I have thoroughly enjoyed expanding my skills to support the growth of Northstar Removals.",
      "Outside of work, I immerse myself in the world of motorsport, surrounded by grease, engine oil, and tires, diving into the exhilarating life of motorsport.",
    ],
  },
  {
    name: "John Morgan",
    role: "Lead Removals Supervisor",
    image: "/images/team-john.png",
    summary:
      "Northstar's most experienced operative. Joined at 17 and worked up from porter to Lead Supervisor, mastering packing, export packing, crating and inventories along the way.",
    bio: [
      "John is Northstar's most experienced removal operative and is a true Londoner. He began his journey with the company at just 17 years old. Over the past decade, he has worked his way up from a basic porter, mastering essential skills such as packing, export packing, measuring and crating valuable items. He is also highly skilled in compiling inventories for both storage and international consignments.",
      "An expert in vehicle loading and careful driving, John ensures that all goods are transported safely. His dedication and expertise have led him to oversee all Northstar operatives, and he now serves as the Lead Supervisor in the field.",
    ],
  },
];

const awardImages = [
  { src: "/images/award-2024.jpg", alt: "Super Elite Remover 2024" },
  { src: "/images/award-2023.jpg", alt: "Super Elite Remover 2023" },
  { src: "/images/award-2022a.jpg", alt: "Elite Honours Remover 2022" },
  { src: "/images/award-2022b.jpg", alt: "Ombudsman's Perfect Record Award 2022" },
];

/* ───────────────────────────── Pieces ───────────────────────────── */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
      {children}
    </p>
  );
}

function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  const centred = align === "center";
  return (
    <div className={centred ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl font-black italic text-navy-950 sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>}
    </div>
  );
}

function Avatar({
  member,
  size,
}: {
  member: Member;
  size: "lg" | "md";
}) {
  const dims = size === "lg" ? "h-36 w-36" : "h-28 w-28";
  const px = size === "lg" ? 144 : 112;
  return (
    // Team photos are cut-outs on black; a navy disc behind them makes the
    // crop read as deliberate rather than as a black square.
    <div className={`${dims} shrink-0 overflow-hidden rounded-full bg-navy-950 shadow-xl ring-4 ring-white`}>
      <Image
        src={member.image}
        alt={`${member.name}, ${member.role} at Northstar Removals`}
        width={px}
        height={px}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function FullProfile({ member }: { member: Member }) {
  return (
    <details className="group mt-4">
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-bold text-brand-600 underline-offset-4 hover:underline [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">Read full profile</span>
        <span className="hidden group-open:inline">Show less</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4 transition group-open:rotate-180"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </summary>
      <div className="mt-4 space-y-3 border-t border-navy-900/10 pt-4 text-sm leading-relaxed text-slate-600">
        {member.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </details>
  );
}

/* ───────────────────────────── Page ───────────────────────────── */

export default function AboutUs() {
  const everyone = [...directors, ...team];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": `${siteUrl}/about-us#webpage`,
              url: `${siteUrl}/about-us`,
              name: "About Northstar Removals",
              description: metadata.description,
              isPartOf: { "@id": WEBSITE_ID },
              about: { "@id": ORG_ID },
              mainEntity: { "@id": ORG_ID },
            },
            ...everyone.map((m) => ({
              "@type": "Person",
              name: m.name,
              jobTitle: m.role,
              image: `${siteUrl}${m.image}`,
              worksFor: { "@id": ORG_ID },
            })),
          ],
        }}
      />

      <PageHero
        title="About Northstar"
        subtitle="A family-founded removals and storage company in Pinner, moving London, the UK and the world since 2006."
        image="/images/storage-1.jpg"
        imageAlt="Inside the Northstar storage warehouse"
      />
      <Breadcrumbs items={[{ title: "About Us", href: "/about-us" }]} />

      {/* ── Story ── */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-black italic text-navy-950 sm:text-4xl">
              From one van in 2006 to an award-winning team
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
              <p>
                Northstar began in 2006 when Denis Loraine-Grews, after years
                on the back of a removal lorry and in the offices of two major
                corporate movers, set out on his own with a single van and a
                man. The idea was simple: do the job properly, treat
                people&rsquo;s belongings as if they were your own, and say
                what you&rsquo;ll charge before you start.
              </p>
              <p>
                Twenty years on, Northstar Removals &amp; Storage is still run
                from Pinner by the people who built it. We&rsquo;ve grown into
                commercial, international and long-distance relocations and a
                network of secure storage facilities, but the family-business
                way of working hasn&rsquo;t changed &mdash; around 90% of our
                work still comes from repeat customers and their
                recommendations.
              </p>
              <p>
                Whether we&rsquo;re moving a family across Harrow or a business
                across the world, the standard is the same: planned in detail,
                carried out by trained crews, and backed by comprehensive
                insurance.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Fixed-price quotes, no hidden fees",
                "Free video or home survey",
                "National Guild of Removers member",
                "Removals Industry Ombudsman registered",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm font-semibold text-navy-950">
                  <Star className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="The Northstar Removals fleet of vans and lorries"
                width={1900}
                height={828}
                priority
                className="aspect-[4/3] w-full object-cover object-[88%_center]"
              />
            </div>
            <div className="absolute -bottom-6 left-0 rounded-2xl bg-navy-950 px-6 py-4 text-white shadow-2xl sm:-left-6">
              <p className="font-display text-2xl font-black italic">Est. 2006</p>
              <p className="text-xs text-ice-200/80">Family-founded in Pinner</p>
            </div>
            <div className="absolute -right-3 -top-5 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-navy-900/10 sm:flex lg:-right-6">
              <Image
                src="/images/badge-recycle.png"
                alt=""
                width={36}
                height={41}
                className="h-9 w-auto object-contain"
              />
              <p className="text-xs font-bold leading-tight text-navy-950">
                Recycled &amp;
                <br />
                biodegradable packing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-black italic sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-ice-200/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <SectionTitle
            eyebrow="How we work"
            title="What you can expect from us"
            intro="Four things we hold ourselves to on every move, from a one-bedroom flat to a multi-floor office."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    {v.icon}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold text-navy-950">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <SectionTitle eyebrow="Our journey" title="20 years in the making" />
          <ol className="relative mt-12 grid gap-10 lg:grid-cols-5 lg:gap-6">
            {/* connector: vertical on mobile, horizontal on desktop */}
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-[1.0625rem] top-2 w-px bg-gradient-to-b from-brand-600/60 via-navy-900/15 to-transparent lg:bottom-auto lg:left-[1.125rem] lg:right-[calc(20%-2.325rem)] lg:top-[1.0625rem] lg:h-px lg:w-auto lg:bg-gradient-to-r lg:from-brand-600/60 lg:via-navy-900/20 lg:to-navy-900/20"
            />
            {timeline.map((item, i) => (
              <li key={item.year} className="relative flex gap-5 lg:block">
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-950 ring-4 ring-white">
                  <Star className={`h-4 w-4 ${i === timeline.length - 1 ? "star-glow text-white" : "text-ice-300"}`} />
                </span>
                <div className="lg:mt-5">
                  <p className="font-display text-2xl font-black italic text-brand-600">{item.year}</p>
                  <h3 className="mt-1 font-display text-base font-extrabold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Accreditations ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <SectionTitle
            eyebrow="Accreditations"
            title="Independently checked, not just self-declared"
            intro="Anyone can call themselves professional. These are the bodies that hold us to it."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {accreditations.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group flex flex-col items-center rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={96}
                  height={96}
                  className="h-20 w-auto object-contain"
                />
                <h3 className="mt-5 font-display text-base font-extrabold text-navy-950">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
                <span className="mt-4 text-sm font-bold text-brand-600 transition group-hover:translate-x-1">
                  {a.href === "/reviews" ? "Read reviews →" : "See awards →"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <SectionTitle
            eyebrow="The people"
            title="Meet the team"
            intro="The people who plan, price and run your move. Call the office and you'll be speaking to them, not a call centre."
            align="center"
          />

          {/* Directors */}
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
            {directors.map((m) => (
              <article
                key={m.name}
                className="rounded-3xl bg-slate-50 p-7 ring-1 ring-navy-900/5 sm:p-9"
              >
                <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
                  <Avatar member={m} size="lg" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-2xl font-extrabold text-navy-950">{m.name}</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-wide text-brand-600">{m.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{m.summary}</p>
                    <FullProfile member={m} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Team */}
          <div className="mt-6 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article
                key={m.name}
                className="rounded-3xl bg-slate-50 p-7 text-center ring-1 ring-navy-900/5"
              >
                <div className="flex justify-center">
                  <Avatar member={m} size="md" />
                </div>
                <h3 className="mt-5 font-display text-xl font-extrabold text-navy-950">{m.name}</h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-wide text-brand-600">{m.role}</p>
                <p className="mt-4 text-left text-sm leading-relaxed text-slate-600">{m.summary}</p>
                <div className="text-left">
                  <FullProfile member={m} />
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
            Behind them is a crew of trained removal operatives and drivers, many of whom have been
            with Northstar for years.
          </p>
        </div>
      </section>

      {/* ── Awards + CTA ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 p-8 text-white sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(183,171,255,0.22),transparent_60%)]"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-ice-300">Recognition</p>
                <h2 className="mt-3 font-display text-3xl font-black italic sm:text-4xl">
                  14+ awards, and counting
                </h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  From Remover of the Month in 2015 to Super Elite Remover in 2023 and 2024, plus the
                  Ombudsman&rsquo;s Perfect Record Award three years running.
                </p>
                <Link
                  href="/awards"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-navy-950 transition hover:bg-ice-200"
                >
                  See all our awards →
                </Link>
              </div>
              <div className="flex -space-x-5">
                {awardImages.map((img) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={96}
                    height={96}
                    className="h-20 w-20 rounded-2xl border-4 border-navy-950 object-cover shadow-lg sm:h-24 sm:w-24"
                  />
                ))}
              </div>
            </div>
          </div>

          <CtaBanner label="Get your free, fixed-price quote" />
        </div>
      </section>
    </>
  );
}

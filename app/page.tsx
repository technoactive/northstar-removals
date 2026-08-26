import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import Star, { FiveStars } from "@/components/Star";
import TrustBar from "@/components/TrustBar";
import Faq from "@/components/Faq";

const serviceCards = [
  {
    title: "Domestic Moves",
    href: "/domestic-moves",
    image: "/images/domestic-family.jpg",
    description:
      "Moving homes, gardens, garages, and all your personal belongings with care.",
  },
  {
    title: "International Moves",
    href: "/international-moves",
    image: "/images/international.jpg",
    description:
      "Relocating abroad with ease, whether within the EU or overseas.",
  },
  {
    title: "Commercial Moves",
    href: "/commercial-moves",
    image: "/images/office-move.jpg",
    description:
      "Expert solutions for office relocations, equipment moves, and business transitions.",
  },
  {
    title: "Storage Solutions",
    href: "/storage-solutions",
    image: "/images/storage-1.jpg",
    description:
      "Secure, flexible storage options for your possessions, short or long-term.",
  },
];

const stats = [
  { value: "20", label: "Years of experience" },
  { value: "14+", label: "Industry awards" },
  { value: "90%", label: "Repeat customers & referrals" },
  { value: "1,200+", label: "Verified reviews" },
];

const whyChoose = [
  {
    title: "Experience and Expertise",
    body: "With almost 20 years in the industry, Northstar Removals boasts unparalleled experience and expertise in the art of moving. Our dedicated team of specialists, coupled with top-notch equipment and extensive packaging options, ensures the highest quality service at competitive rates.",
  },
  {
    title: "Customer-Centric Approach",
    body: "At Northstar, we don't just move you - we listen, respond, and take the trouble to get it right. Our responsive and attentive team goes above and beyond to ensure every aspect of your move is executed flawlessly.",
  },
  {
    title: "Nationwide and Worldwide Coverage",
    body: "Whether you're relocating within London, across the UK, or even to international destinations, Northstar has you covered. No move is too big or too small for us to handle with precision and care.",
  },
  {
    title: "Established Reputation",
    body: "As a testament to our commitment to excellence, over 90% of our business comes from repeat customers and referrals. Our track record speaks for itself, assuring you that you're in capable hands.",
  },
  {
    title: "Friendly and Professional Staff",
    body: "Our team comprises friendly, experienced, and extensively trained professionals who prioritize making your move as smooth and stress-free as possible. From your initial inquiry to settling into your new home or office, we're with you every step of the way.",
  },
];

const processSteps = [
  {
    title: "Give us a call",
    body: "Get in touch by phone, email or our quote form and tell us about your move.",
  },
  {
    title: "Free quotation",
    body: "We offer a free video or home survey and provide a personalised, fixed-price quote with no hidden fees.",
  },
  {
    title: "Packing",
    body: "Our trained teams wrap, pack, dismantle and protect your belongings with professional materials.",
  },
  {
    title: "Moving",
    body: "On the day, our experienced crew handles everything so you can settle in stress-free.",
  },
];

const testimonials = [
  {
    name: "Lani Carstens",
    text: "Best move ever! Our move with Northstar was absolutely brilliant. The service, starting with the initial in-person consultation, was extremely professional... We have moved several times, internationally and locally, and this is by far our best experience.",
  },
  {
    name: "Roo",
    text: "Having moved on numerous occasions (thanks to our previous military careers), we found the entire team a pleasure to deal with. We were extremely impressed by the whole team from survey to finishing up.",
  },
  {
    name: "Laura Hubbard",
    text: "The crew were absolutely fantastic. John & Alex were so fast and efficient and made me feel completely confident in the move. Thank you for making a stressful time easy. You were great!!",
  },
];

const awardImages = [
  { src: "/images/award-2024.jpg", alt: "Super Elite Remover 2024" },
  { src: "/images/award-2023.jpg", alt: "Super Elite Remover 2023" },
  { src: "/images/award-2022a.jpg", alt: "Elite Honours Remover 2022" },
  { src: "/images/award-2022b.jpg", alt: "Ombudsman's Perfect Record Award 2022" },
  { src: "/images/award-2021a.jpg", alt: "Elite Honours Remover 2021" },
  { src: "/images/award-2021b.jpg", alt: "Ombudsman's Perfect Record Award 2021" },
  { src: "/images/award-2020a.jpg", alt: "Elite Plus Remover 2020" },
  { src: "/images/award-2020b.jpg", alt: "Ombudsman's Perfect Record Award 2020" },
  { src: "/images/award-2019.jpg", alt: "Elite Plus Remover 2019" },
  { src: "/images/award-2017a.jpg", alt: "Excellence Certificate 2017" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <Image
          src="/images/hero.png"
          alt="The Northstar Removals fleet of branded trucks at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/80 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-24 pt-16 sm:pt-24 lg:grid-cols-[1fr_auto] lg:pb-32">
          <Image
            src="/images/award-new.png"
            alt="Northstar Removals 20 Years of Excellence anniversary badge"
            width={420}
            height={420}
            priority
            className="fade-up mx-auto w-44 drop-shadow-[0_10px_35px_rgba(0,0,0,0.55)] sm:w-56 lg:order-2 lg:w-96"
          />
          <div className="max-w-3xl lg:order-1">
            <p className="fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] backdrop-blur">
              <Star className="star-glow h-3.5 w-3.5" /> CELEBRATING 20 YEARS
              OF EXCELLENCE
            </p>
            <h1 className="fade-up fade-up-delay-1 mt-6 font-display text-5xl font-black italic leading-[1.05] tracking-tight sm:text-7xl">
              For a<br />
              Brilliant
              <span className="relative mx-3 inline-block not-italic">
                <Star className="star-glow star-pulse inline h-10 w-10 text-white sm:h-14 sm:w-14" />
              </span>
              Move!
            </h1>
            <p className="fade-up fade-up-delay-2 mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
              Your trusted moving partner for nearly 20 years — packing, moving
              and storage across London, the UK and worldwide.
            </p>
            <div className="fade-up fade-up-delay-3 mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                className="rounded-full bg-brand-600 px-9 py-4 text-center text-base font-bold shadow-xl shadow-brand-600/40 transition hover:-translate-y-0.5 hover:bg-brand-500"
              >
                GET A FREE QUOTE
              </Link>
              <a
                href={site.phones[0].href}
                className="rounded-full border border-white/30 bg-white/5 px-9 py-4 text-center text-base font-semibold backdrop-blur transition hover:bg-white/15"
              >
                {site.phones[0].label}
              </a>
            </div>
            <div className="fade-up fade-up-delay-3 mt-8 flex items-center gap-3">
              <FiveStars className="h-5 w-5" />
              <Link
                href="/reviews"
                className="text-sm font-semibold text-white/85 underline-offset-4 hover:underline"
              >
                1,200+ five-star reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-navy-900/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <TrustBar />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
            What we do
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-black italic text-navy-950 sm:text-5xl">
            Moving Services
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy-900/5 transition hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 font-display text-xl font-extrabold italic text-white">
                    {card.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                  <span className="mt-3 inline-block text-sm font-bold text-brand-600 transition group-hover:translate-x-1">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-black italic text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-ice-200/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/moving-team.jpg"
                  alt="The Northstar moving team"
                  width={900}
                  height={760}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-navy-950 px-6 py-4 text-white shadow-2xl sm:block">
                <p className="font-display text-2xl font-black italic">
                  Est. 2006
                </p>
                <p className="text-xs text-ice-200/80">
                  Family-founded in London
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
                Why choose Northstar?
              </p>
              <h2 className="mt-3 font-display text-3xl font-black italic text-navy-950 sm:text-4xl">
                Nearly two decades of brilliant moves
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                For nearly two decades, Northstar Removals has been the go-to
                choice for individuals and businesses seeking seamless
                relocation solutions. Our commitment to excellence is evident
                in our comprehensive range of professional services tailored to
                meet diverse demands.
              </p>
              <div className="mt-8 space-y-5">
                {whyChoose.map((item) => (
                  <details
                    key={item.title}
                    className="group rounded-2xl bg-slate-50 ring-1 ring-navy-900/5 open:shadow-md"
                  >
                    <summary className="flex cursor-pointer items-center gap-3 px-5 py-4 font-bold text-navy-950 [&::-webkit-details-marker]:hidden">
                      <Star className="h-4 w-4 shrink-0 text-brand-600 transition group-open:rotate-45" />
                      {item.title}
                    </summary>
                    <p className="px-5 pb-5 pl-12 text-sm leading-relaxed text-slate-600">
                      {item.body}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call us band */}
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(183,171,255,0.18),transparent_65%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="font-display text-2xl font-black italic sm:text-3xl">
            Please feel free to call us
          </h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            {site.phones.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="rounded-full border border-white/25 bg-white/10 px-8 py-3.5 font-display text-xl font-extrabold backdrop-blur transition hover:bg-white/20 sm:text-2xl"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
            How it works
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-black italic text-navy-950 sm:text-5xl">
            Planning &amp; Process
          </h2>
          <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-navy-900/20 to-transparent lg:block"
            />
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 font-display text-xl font-black italic text-white shadow-lg ring-4 ring-slate-50">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold uppercase tracking-wide text-navy-950">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <h2 className="font-display text-3xl font-black italic text-navy-950 sm:text-4xl">
              Customers love the move
            </h2>
            <div className="flex items-center gap-3">
              <Image
                src="/images/badge-google.jpg"
                alt="Google reviews"
                width={100}
                height={40}
                className="h-9 w-auto object-contain"
              />
              <Image
                src="/images/badge-removal-approval.png"
                alt="Removal Approval"
                width={44}
                height={44}
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-3xl bg-slate-50 p-7 ring-1 ring-navy-900/5"
              >
                <FiveStars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 font-bold text-navy-950">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/reviews"
              className="font-bold text-brand-600 underline-offset-4 hover:underline"
            >
              Read all reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq />

      {/* Awards marquee */}
      <section className="overflow-hidden border-y border-navy-900/10 bg-slate-50 py-12">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
          14+ industry awards &amp; accolades
        </p>
        <div className="marquee-track flex w-max gap-8">
          {[...awardImages, ...awardImages].map((award, i) => (
            <Link key={i} href="/awards" className="shrink-0">
              <Image
                src={award.src}
                alt={award.alt}
                width={130}
                height={130}
                className="h-28 w-28 rounded-2xl object-cover shadow-md ring-1 ring-navy-900/10 transition hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <Image
          src="/images/domestic-family.jpg"
          alt="A family beside their removals van after moving home"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-black italic sm:text-5xl">
              Discover the Northstar Difference
            </h2>
            <p className="mt-5 text-lg text-white/85">
              Experience the peace of mind that comes with entrusting your move
              to Northstar Removals. Contact us today to discuss your
              relocation needs and let us handle the rest.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-block rounded-full bg-brand-600 px-9 py-4 text-base font-bold shadow-xl shadow-brand-600/40 transition hover:-translate-y-0.5 hover:bg-brand-500"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

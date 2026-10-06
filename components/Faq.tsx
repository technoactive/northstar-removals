import Link from "next/link";
import JsonLd from "@/components/JsonLd";

type FaqItem = {
  question: string;
  /** Plain-text answer used for FAQPage structured data. */
  answer: string;
  /** Rich answer rendered on the page, with internal links. */
  content: React.ReactNode;
};

export const faqs: FaqItem[] = [
  {
    question: "How much does a removal cost?",
    answer:
      "Every move is different, so we provide a free, personalised fixed-price quotation with no hidden fees. We offer a free video or home survey to assess your requirements accurately, and competitive hourly rates are available for smaller moves.",
    content: (
      <p>
        Every move is different, so we provide a free, personalised
        fixed-price quotation with no hidden fees. We offer a free video or
        home survey to assess your requirements accurately, and competitive
        hourly rates are available for smaller moves.{" "}
        <Link href="/contact-us">Request your free quote</Link> to get
        started.
      </p>
    ),
  },
  {
    question: "How far in advance should I book my move?",
    answer:
      "We recommend booking 2–4 weeks ahead where possible, especially for end-of-month and Friday dates which are the most popular. That said, we regularly accommodate short-notice moves — just call us and we will do our best to help.",
    content: (
      <p>
        We recommend booking 2–4 weeks ahead where possible, especially for
        end-of-month and Friday dates which are the most popular. That said,
        we regularly accommodate short-notice moves — just{" "}
        <Link href="/contact-us">get in touch</Link> and we will do our best
        to help.
      </p>
    ),
  },
  {
    question: "Do you provide a packing service and materials?",
    answer:
      "Yes. Our trained teams offer a full packing service including wrapping, packing, dismantling and reassembling furniture, using professional materials. We also handle delicate items such as pianos, antiques and artwork — our White Glove Service is designed for high-value possessions.",
    content: (
      <p>
        Yes. Our trained teams offer a full packing service including
        wrapping, packing, dismantling and reassembling furniture, using
        professional materials. We also handle delicate items such as pianos,
        antiques and artwork — our{" "}
        <Link href="/white-glove-service">White Glove Service</Link> is
        designed specifically for high-value possessions.
      </p>
    ),
  },
  {
    question: "Are my belongings insured during the move?",
    answer:
      "Yes, comprehensive insurance is included for your peace of mind. As members of the National Guild of Removers and the Removals Industry Ombudsman scheme, we work to strict professional standards on every move.",
    content: (
      <p>
        Yes, comprehensive insurance is included for your peace of mind. As
        members of the National Guild of Removers and the Removals Industry
        Ombudsman scheme, we work to strict professional standards on every
        move — see <Link href="/awards">our awards</Link> and{" "}
        <Link href="/reviews">customer reviews</Link>.
      </p>
    ),
  },
  {
    question: "Can you store my belongings between moves?",
    answer:
      "Yes. We offer modern, secure storage facilities with both self-storage and containerised options, for short or long-term periods. Storage is popular with customers whose completion dates don't line up, or who are moving internationally.",
    content: (
      <p>
        Yes. We offer modern, secure{" "}
        <Link href="/storage-solutions">storage solutions</Link> with both
        self-storage and containerised options, for short or long-term
        periods. Storage is popular with customers whose completion dates
        don&rsquo;t line up, or who are{" "}
        <Link href="/international-moves">moving internationally</Link>.
      </p>
    ),
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We are based in Pinner, North West London. Harrow, Ruislip, Northwood, Stanmore, Watford, Uxbridge, Wembley and the rest of North West London are local to us, and we carry out domestic moves across London and the whole UK, commercial relocations, and international moves worldwide by road, sea and air.",
    content: (
      <p>
        We are based in Pinner, North West London. Harrow, Ruislip, Northwood,
        Stanmore, Watford, Uxbridge, Wembley and the rest of North West London
        are local to us — see <Link href="/areas">all the areas we cover</Link>.
        We carry out <Link href="/domestic-moves">domestic moves</Link> across
        London and the whole UK,{" "}
        <Link href="/commercial-moves">commercial relocations</Link>, and{" "}
        <Link href="/international-moves">international moves</Link> worldwide
        by road, sea and air.
      </p>
    ),
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function Faq() {
  return (
    <section aria-labelledby="faq-heading" className="bg-white">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
          Good to know
        </p>
        <h2
          id="faq-heading"
          className="mt-2 text-center font-display text-3xl font-black italic text-navy-950 sm:text-4xl"
        >
          Frequently asked questions
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-navy-900/10 bg-white open:border-navy-950 open:shadow-lg"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-base font-extrabold text-navy-950 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180"
                >
                  <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-slate-600 [&_a]:font-semibold [&_a]:text-brand-600 [&_a]:underline-offset-4 hover:[&_a]:underline">
                {faq.content}
              </div>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Still have questions?{" "}
          <Link
            href="/contact-us"
            className="font-bold text-brand-600 underline-offset-4 hover:underline"
          >
            Contact our friendly team
          </Link>{" "}
          — we&rsquo;re happy to help.
        </p>
      </div>
    </section>
  );
}

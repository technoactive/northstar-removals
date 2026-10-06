import JsonLd from "@/components/JsonLd";

/**
 * Generic FAQ accordion with FAQPage structured data, for pages whose
 * questions differ from the site-wide set in `components/Faq.tsx`.
 */
export default function FaqAccordion({
  heading,
  items,
}: {
  heading: string;
  items: { question: string; answer: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section aria-labelledby="area-faq-heading">
      <JsonLd data={jsonLd} />
      <h2
        id="area-faq-heading"
        className="font-display text-2xl font-black italic text-navy-950 sm:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-6 space-y-3">
        {items.map((faq) => (
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
            <p className="px-6 pb-6 text-[15px] leading-relaxed text-slate-600">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import Star from "@/components/Star";

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt = "",
  compact = false,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  /** Shorter hero for task pages (e.g. the quote form) so the content is reachable without scrolling on mobile. */
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
        </>
      )}
      <div
        className={`relative mx-auto max-w-7xl px-4 text-center ${
          compact ? "py-10 sm:py-14" : "py-20 sm:py-28"
        }`}
      >
        <Star
          className={`star-glow star-pulse mx-auto text-white ${
            compact ? "mb-3 h-7 w-7" : "mb-5 h-9 w-9"
          }`}
        />
        <h1
          className={`fade-up font-display font-black italic tracking-tight ${
            compact ? "text-3xl sm:text-5xl" : "text-4xl sm:text-6xl"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`fade-up fade-up-delay-1 mx-auto max-w-3xl text-white/85 ${
              compact ? "mt-3 text-base sm:text-lg" : "mt-5 text-lg"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

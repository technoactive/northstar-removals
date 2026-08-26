import Image from "next/image";
import Star from "@/components/Star";

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt = "",
}: {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
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
      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:py-28">
        <Star className="star-glow star-pulse mx-auto mb-5 h-9 w-9 text-white" />
        <h1 className="fade-up font-display text-4xl font-black italic tracking-tight sm:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="fade-up fade-up-delay-1 mx-auto mt-5 max-w-3xl text-lg text-white/85">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

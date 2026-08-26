import Image from "next/image";

const badges = [
  { src: "/images/badge-guild.png", alt: "National Guild of Removers member" },
  { src: "/images/badge-ombudsman.png", alt: "Removals Industry Ombudsman" },
  { src: "/images/badge-inspected.png", alt: "Inspected and approved" },
  { src: "/images/badge-removal-approval.png", alt: "Removal Approval reviews" },
  { src: "/images/badge-google.jpg", alt: "Google reviews" },
];

export default function TrustBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-5 ${
        dark ? "" : ""
      }`}
    >
      {badges.map((badge) => (
        <Image
          key={badge.src}
          src={badge.src}
          alt={badge.alt}
          width={90}
          height={90}
          className={`h-16 w-auto object-contain sm:h-20 ${
            dark ? "rounded-lg bg-white/95 p-1.5" : ""
          }`}
        />
      ))}
    </div>
  );
}

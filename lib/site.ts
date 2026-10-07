/** Canonical origin. The www host 308-redirects here on Vercel. */
export const siteUrl = "https://northstar-removals.com";

export const site = {
  name: "Northstar Removals",
  legalName: "Northstar Removals & Storage",
  slogan: "For a Brilliant Move!",
  foundingDate: "2006",
  description:
    "Award-winning removals and storage company based in Pinner, London. Domestic, international and commercial moves plus secure storage solutions across the UK and worldwide.",
  email: "info@northstar-removals.com",
  phones: [
    { label: "+44 (0)20 8868 9414", href: "tel:+442088689414" },
    { label: "+44 (0)800 170 1188", href: "tel:+448001701188" },
  ],
  mobile: { label: "+44 (0)7711 198611", href: "tel:+447711198611" },
  /** WhatsApp on the mobile number — customers send photos for quick quotes. */
  whatsapp: {
    href: "https://wa.me/447711198611?text=Hi%20Northstar%2C%20I%27d%20like%20a%20removals%20quote.",
  },
  address: ["Unit 1, Leeway House", "Leeway Close, Pinner", "HA5 4SE"],
};

export const services = [
  { title: "Domestic Moves", href: "/domestic-moves" },
  { title: "Commercial Moves", href: "/commercial-moves" },
  { title: "International Moves", href: "/international-moves" },
  { title: "Storage Solutions", href: "/storage-solutions" },
  { title: "Packing Service", href: "/packing-service" },
  { title: "Piano Removals", href: "/piano-removals" },
] as const;

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "Moving Services", href: "#", children: services },
  { title: "White Glove Service", href: "/white-glove-service" },
  { title: "Areas We Cover", href: "/areas" },
  { title: "About Us", href: "/about-us" },
  { title: "Contact Us", href: "/contact-us" },
] as const;

export const serviceCards = [
  {
    title: "Domestic Moves",
    href: "/domestic-moves",
    image: "/images/domestic-family.jpg",
    description:
      "Home removals across London and the UK with fixed-price quotes.",
  },
  {
    title: "International Moves",
    href: "/international-moves",
    image: "/images/international.jpg",
    description:
      "Worldwide relocations by road, sea and air, handled door to door.",
  },
  {
    title: "Commercial Moves",
    href: "/commercial-moves",
    image: "/images/office-move.jpg",
    description:
      "Office relocations and move management with minimal downtime.",
  },
  {
    title: "Storage Solutions",
    href: "/storage-solutions",
    image: "/images/storage-1.jpg",
    description:
      "Secure short and long-term storage in modern, monitored facilities.",
  },
  {
    title: "White Glove Service",
    href: "/white-glove-service",
    image: "/images/white-glove.jpg",
    description:
      "Our bespoke premium service for fine art, antiques and valuables.",
  },
  {
    title: "Packing Service",
    href: "/packing-service",
    image: "/images/office-move.jpg",
    description:
      "Full, part or fragile-only packing by professionals, with materials supplied.",
  },
  {
    title: "Piano Removals",
    href: "/piano-removals",
    image: "/images/white-glove.jpg",
    description:
      "Upright and grand pianos moved by a trained crew with purpose-built equipment.",
  },
] as const;

export const legalLinks = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Cookie Policy", href: "/cookie-policy" },
  { title: "Terms of Service", href: "/terms-of-service" },
] as const;

export const footerHelpLinks = [
  { title: "Domestic Moves", href: "/domestic-moves" },
  { title: "International Moves", href: "/international-moves" },
  { title: "Commercial Moves", href: "/commercial-moves" },
  { title: "Storage Solutions", href: "/storage-solutions" },
  { title: "White Glove Service", href: "/white-glove-service" },
  { title: "Packing Service", href: "/packing-service" },
  { title: "Piano Removals", href: "/piano-removals" },
  { title: "Areas We Cover", href: "/areas" },
  { title: "Reviews", href: "/reviews" },
  { title: "Awards", href: "/awards" },
] as const;

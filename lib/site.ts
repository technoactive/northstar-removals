export const site = {
  name: "Northstar Removals",
  legalName: "Northstar Removals & Storage",
  email: "info@northstar-removals.com",
  phones: [
    { label: "+44 (0)20 8868 9414", href: "tel:+442088689414" },
    { label: "+44 (0)800 170 1188", href: "tel:+448001701188" },
  ],
  mobile: { label: "+44 (0)7711 198611", href: "tel:+447711198611" },
  address: ["Unit 1, Leeway House", "Leeway Close, Pinner", "HA5 4SE"],
};

export const services = [
  { title: "Domestic Moves", href: "/domestic-moves" },
  { title: "Commercial Moves", href: "/commercial-moves" },
  { title: "International Moves", href: "/international-moves" },
  { title: "Storage Solutions", href: "/storage-solutions" },
] as const;

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "Moving Services", href: "#", children: services },
  { title: "White Glove Service", href: "/white-glove-service" },
  { title: "About Us", href: "/about-us" },
  { title: "Contact Us", href: "/contact-us" },
] as const;

export const footerHelpLinks = [
  { title: "Domestic Moves", href: "/domestic-moves" },
  { title: "International Moves", href: "/international-moves" },
  { title: "Commercial Moves", href: "/commercial-moves" },
  { title: "Storage Solutions", href: "/storage-solutions" },
  { title: "White Glove Service", href: "/white-glove-service" },
  { title: "Reviews", href: "/reviews" },
  { title: "Awards", href: "/awards" },
] as const;

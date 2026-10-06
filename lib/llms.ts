import { faqs } from "@/components/Faq";
import { site, siteUrl } from "@/lib/site";
import { areas } from "@/lib/areas";

/**
 * Content for /llms.txt and /llms-full.txt (https://llmstxt.org).
 *
 * llms.txt is a short, link-first index that tells an AI assistant what the
 * site is and where the key pages are. llms-full.txt carries the complete
 * plain-text content so an assistant can answer questions about Northstar
 * without having to crawl the HTML. Keep facts here in sync with the pages.
 */

const phones = site.phones.map((p) => p.label).join(" or ");
const address = site.address.join(", ");

const pages = [
  {
    title: "Domestic Moves",
    path: "/domestic-moves",
    summary:
      "Household removals in London and across the UK with free, fixed-price quotes and no hidden fees.",
  },
  {
    title: "International Moves",
    path: "/international-moves",
    summary:
      "Worldwide relocation by road, sea and air: export packing, container shipping, customs paperwork and a partner network of overseas agents.",
  },
  {
    title: "Commercial Moves",
    path: "/commercial-moves",
    summary:
      "Office removals and move management across London and the home counties, including IT relocation, packing, storage and furniture/WEEE recycling.",
  },
  {
    title: "Storage Solutions",
    path: "/storage-solutions",
    summary:
      "Secure containerised storage in 250 cu ft wooden containers at 24/7 CCTV-monitored warehouses, plus self-storage; flexible terms from one week upwards.",
  },
  {
    title: "White Glove Service",
    path: "/white-glove-service",
    summary:
      "Premium, fully managed moves with a dedicated on-site move manager, bespoke crating for fine art and antiques, room layout planning and incognito moves.",
  },
  {
    title: "Packing Service",
    path: "/packing-service",
    summary:
      "Full, part, fragile-only and export packing by professional packers, with materials delivered and unpacking available.",
  },
  {
    title: "Piano Removals",
    path: "/piano-removals",
    summary:
      "Upright and grand pianos moved locally, nationwide and worldwide by trained crews with piano trolleys and skids; piano storage available.",
  },
  {
    title: "About Us",
    path: "/about-us",
    summary:
      "Founded in 2006 in Pinner by Denis with one van; now an award-winning London removals and storage company with around 90% repeat business.",
  },
  {
    title: "Reviews",
    path: "/reviews",
    summary:
      "Customer reviews and referrals, including Google reviews and over 1,200 reviews on Removal Approval.",
  },
  {
    title: "Awards",
    path: "/awards",
    summary:
      "14+ industry awards, including Super Elite Remover 2023 and 2024 and the Removals Ombudsman's Perfect Record Award.",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    summary:
      "Request a free, no-obligation quotation for a home, office or international move, or for storage.",
  },
];

export function llmsTxt(): string {
  return [
    `# ${site.legalName}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name} is an independent, award-winning removals and storage company based in Pinner, North West London, trading since ${site.foundingDate}. Members of the National Guild of Removers and the Removals Industry Ombudsman scheme. Slogan: "${site.slogan}"`,
    "",
    `- Phone: ${phones}`,
    `- Email: ${site.email}`,
    `- Address: ${address}, United Kingdom`,
    `- Website: ${siteUrl}`,
    "",
    "## Services",
    "",
    ...pages
      .slice(0, 7)
      .map((p) => `- [${p.title}](${siteUrl}${p.path}): ${p.summary}`),
    "",
    "## Areas covered (local pages)",
    "",
    `- [Areas We Cover](${siteUrl}/areas): Index of local removal pages for North West London, Hertfordshire and London`,
    ...areas.map(
      (a) =>
        `- [Removals ${a.name}](${siteUrl}/areas/${a.slug}): ${a.postcodes.join(", ")} — about ${a.driveMinutes} minutes from the Pinner depot`,
    ),
    "",
    "## Company",
    "",
    ...pages
      .slice(7)
      .map((p) => `- [${p.title}](${siteUrl}${p.path}): ${p.summary}`),
    "",
    "## Full content",
    "",
    `- [llms-full.txt](${siteUrl}/llms-full.txt): Complete plain-text content of the site, including FAQs`,
    `- [Sitemap](${siteUrl}/sitemap.xml)`,
    "",
    "## Optional",
    "",
    `- [Privacy Policy](${siteUrl}/privacy-policy)`,
    `- [Cookie Policy](${siteUrl}/cookie-policy)`,
    `- [Terms of Service](${siteUrl}/terms-of-service)`,
    "",
  ].join("\n");
}

export function llmsFullTxt(): string {
  return [
    `# ${site.legalName} — full site content`,
    "",
    `> ${site.description}`,
    "",
    "## Key facts",
    "",
    `- Trading name: ${site.name}`,
    `- Legal name: ${site.legalName}`,
    `- Founded: ${site.foundingDate}, in Pinner, by Denis, starting with a single van`,
    `- Based at: ${address}, United Kingdom`,
    `- Phone: ${phones}; mobile ${site.mobile.label}`,
    `- Email: ${site.email}`,
    `- Website: ${siteUrl}`,
    "- Areas served: London and the whole of the UK for domestic and commercial moves; worldwide for international moves",
    "- Memberships: National Guild of Removers; Removals Industry Ombudsman scheme",
    "- Reputation: 14+ industry awards, around 90% repeat business, 1,200+ reviews on Removal Approval plus Google reviews",
    "- Quotes: free, personalised, fixed-price quotations with no hidden fees; free video or home survey; hourly rates available for smaller moves",
    "- Insurance: comprehensive insurance included on every move",
    `- Slogan: "${site.slogan}"`,
    "",
    "## Domestic Moves",
    "",
    "Whether you are moving just down the road in London or anywhere in the UK, Northstar can help. The service is friendly and professional and tailored to each customer's needs, however large or small the move. Quotes are transparent and free from hidden fees. Services include wrapping and packing, dismantling and reassembling furniture, and secure storage in several locations. Every move starts with a free video or home survey so the quotation is accurate and personalised.",
    "",
    "## International Moves",
    "",
    "Moving outside the UK requires export packing, container loading, export documentation, shipping and knowledge of local conditions. With over 20 years of experience and a wide partner network of established agents in overseas destinations, Northstar handles everything door to door by road, sea and air. Export packing is completed to the highest standard with a wide variety of materials and well-tested methods, and trained staff guide customers through customs paperwork and documentation.",
    "",
    "## Commercial Moves",
    "",
    "Office removals and move management throughout London and the home counties, for projects of any scale, using a diverse fleet of specialised vehicles and highly trained, security-cleared operatives. Services include: office removals and move management with a free, no-obligation proposal; IT removal specialists who prepare, transport and reinstall IT infrastructure; detailed move planning; professional packing with residue-free labelling; secure short- and long-term storage for office furniture, equipment and documents; and furniture and WEEE recycling that rehomes surplus furniture with charities, schools and community projects. The process: consultation and appraisal, customised moving plan and itemised proposal, packing and transportation, then setup and installation at the new premises.",
    "",
    "## Storage Solutions",
    "",
    "Containerised storage in bespoke 250 cubic foot wooden containers (2.4 m high x 1.5 m wide x 2.15 m long), housed in highly secure warehouses with 24/7 monitored CCTV. Containerised storage is more economical than self storage and ideal for customers who do not need regular access. The service is fully managed: Northstar collects, transports and tracks everything placed into or removed from store, provides free removal blankets, and can supply a basic, numbered or photographic inventory. Terms are flexible with no long-term contract; delivery from store usually needs about a week's notice. Storage is available across 7+ locations for residential, international and commercial customers, from one week to many years. Self-storage options are also available.",
    "",
    "## White Glove Service",
    "",
    "A bespoke, premium, fully managed relocation service. It begins with a full consultation and on-site survey, after which a dedicated On-Site Move Manager creates a tailored plan and coordinates every step, so the customer need not be present on moving day. Includes room layout planning; custom-built, foam-lined timber crates for fragile and high-value items such as fine art, antiques and pianos; responsible rehoming, donation and recycling of unwanted items (Northstar is a licensed waste carrier); confidential document shredding; concierge transfer of utilities, phone and internet; curtain cleaning and installation; and confidential (incognito) moves using non-branded vehicles with staff instructed to keep the destination private.",
    "",
    "## Packing Service",
    "",
    "Professional packing across London and the UK: full packing (the whole home packed the day before the move), fragile-only packing, unpacking at the destination, and export packing for international moves. Materials include double-walled cartons, acid-free tissue, bubble wrap, picture and mirror cartons, dish-pack cartons and lidded crates for offices; boxes are collected and reused after the move. Packing is quoted as part of the fixed-price removal and items packed by Northstar are covered by its comprehensive insurance.",
    "",
    "## Piano Removals",
    "",
    "Upright, baby grand, grand and digital pianos moved locally, nationwide and internationally by crews trained for piano work, using piano trolleys, skids, straps, ramps and tail-lift vehicles. Grand pianos have the legs, lyre and lid removed and reassembled. Stairs and access are planned on a survey, quotes are fixed, insurance is comprehensive and piano storage is available. Pianos usually need tuning two to three weeks after a move once they have settled.",
    "",
    "## Areas covered",
    "",
    `Northstar's depot is at ${address}. The following areas have dedicated pages describing property types, parking and access and typical moves:`,
    "",
    ...areas.map(
      (a) =>
        `- ${a.name} (${a.region}; ${a.postcodes.join(", ")}; about ${a.driveMinutes} minutes from Pinner): ${a.description} Page: ${siteUrl}/areas/${a.slug}`,
    ),
    "",
    "All other London boroughs and the whole of the UK are also covered.",
    "",
    "## About Northstar",
    "",
    "Northstar Removals was founded in 2006 by Denis with just a van and a man, built on integrity, expertise and a customer-centric approach. The company expanded into commercial, international and long-distance relocations with a growing network of storage facilities, and has been recognised year after year with Annual Certificates of Excellence, Remover of the Month and Elite Remover awards. Today it is an award-winning London removals company with 14+ awards, around 90% repeat business, and membership of the National Guild of Removers.",
    "",
    "## Awards",
    "",
    "Super Elite Remover 2024; Super Elite Remover 2023; Elite Honours Remover 2022; Ombudsman's Perfect Record Award 2022; Elite Honours Remover 2021; Ombudsman's Perfect Record Award 2021; Elite Plus Remover 2020; Ombudsman's Perfect Record Award 2020; Elite Plus Remover 2019; Excellence Certificate 2017; Remover of the Month 2017; Annual Certification of Excellence 2016; Annual Certification of Excellence 2015; Remover of the Month 2015.",
    "",
    "## How to get a quote",
    "",
    `1. Call ${phones}, email ${site.email}, or complete the quote form at ${siteUrl}/contact-us.`,
    "2. Northstar arranges a free video or home survey (or an on-site appraisal for offices).",
    "3. You receive a free, personalised, fixed-price quotation with no hidden fees.",
    "4. Trained teams pack, move and, if needed, store your belongings.",
    "",
    "## Frequently asked questions",
    "",
    ...faqs.flatMap((f) => [`### ${f.question}`, "", f.answer, ""]),
    "## Pages",
    "",
    ...pages.map((p) => `- ${p.title}: ${siteUrl}${p.path}`),
    `- Privacy Policy: ${siteUrl}/privacy-policy`,
    `- Cookie Policy: ${siteUrl}/cookie-policy`,
    `- Terms of Service: ${siteUrl}/terms-of-service`,
    "",
  ].join("\n");
}

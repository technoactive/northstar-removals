/**
 * Local area landing pages (/areas/[slug]).
 *
 * Each entry is written for one town or district Northstar serves from its
 * Pinner depot. Keep the copy specific to the place — property types, access
 * and parking realities, the kind of moves we actually do there. Generic
 * "we are reliable" text belongs on the service pages, not here.
 *
 * Drive times are approximate off-peak estimates from HA5 4SE and are shown
 * as "around N minutes".
 */

export type AreaFaq = { question: string; answer: string };

export type Area = {
  slug: string;
  /** Display name, e.g. "Harrow". */
  name: string;
  /** Wider region used in copy and schema, e.g. "North West London". */
  region: string;
  /** Local authority, used in schema `containedInPlace` and copy. */
  borough: string;
  /** Postcode districts the page covers. */
  postcodes: string[];
  /** Approximate drive time from the Pinner depot, in minutes. */
  driveMinutes: number;
  /** <title> without the site suffix (the layout template appends it). */
  title: string;
  description: string;
  heroSubtitle: string;
  intro: string[];
  localKnowledge: { title: string; body: string }[];
  faqs: AreaFaq[];
  /** Slugs of neighbouring areas to interlink. */
  nearby: string[];
  image: string;
  imageAlt: string;
};

export const areas: Area[] = [
  {
    slug: "pinner",
    name: "Pinner",
    region: "North West London",
    borough: "London Borough of Harrow",
    postcodes: ["HA5"],
    driveMinutes: 5,
    title: "Removals Pinner | Local Removal Company in HA5",
    description:
      "Removals in Pinner from the company based here since 2006. House and office moves, packing and storage across HA5, Hatch End and Eastcote. Fixed-price quotes.",
    heroSubtitle:
      "Our depot is on Leeway Close — if you live in Pinner, Hatch End or Eastcote, we are your local removal company.",
    intro: [
      "Northstar Removals was founded in Pinner in 2006 and we are still based here, at Unit 1, Leeway House on Leeway Close. Many of our crew live locally, which is why a Pinner move usually starts with a van that has only travelled a few minutes to reach you.",
      "We know the village well: the conservation-area cottages and shops on the High Street, the 1930s Metroland semis that make up most of HA5, the larger detached houses around Pinner Hill and Moss Lane, and the flats near Pinner and Hatch End stations. Each has its own quirks for a removal — tight front gardens, narrow staircases, loft conversions — and we plan for them before the day.",
      "Because we are local, we are also the obvious choice for the moves that other companies find awkward: a single piano across the village, a few rooms into storage while an extension is built, or a short-notice move when a chain completes early.",
    ],
    localKnowledge: [
      {
        title: "Metroland houses and their staircases",
        body: "Most Pinner semis have a quarter-turn staircase and a landing window, which rules out carrying wardrobes and large sofas up in one piece. Our surveyor measures the turn and we dismantle and reassemble where needed rather than forcing it.",
      },
      {
        title: "Parking on the High Street and around the station",
        body: "Pinner High Street and the roads off it are busy and partly restricted. For moves on or near the High Street, Bridge Street or Marsh Road we arrange a bay suspension with Harrow Council in advance so the van is outside your door, not around the corner.",
      },
      {
        title: "Storage five minutes away",
        body: "Storage between completion dates or during building work is common in Pinner. Your containers are sealed at your home, and because the depot is local you can arrange access or a delivery back at short notice.",
      },
    ],
    faqs: [
      {
        question: "Do you charge travel time for moves within Pinner?",
        answer:
          "No. Our fixed-price quotes are based on the move itself, and our depot is in Pinner, so there is no travel element to worry about for HA5 moves.",
      },
      {
        question: "Can you move a piano within Pinner?",
        answer:
          "Yes. We move upright and grand pianos regularly, using piano trolleys, skids and a crew trained for it. A short local piano move is usually completed in a morning.",
      },
      {
        question: "Can you do a same-week move in Pinner?",
        answer:
          "Often, yes. Being local gives us flexibility that companies travelling in from outside London do not have. Call us and we will tell you honestly what is available.",
      },
    ],
    nearby: ["harrow", "northwood", "ruislip", "stanmore", "watford"],
    image: "/images/hero.jpg",
    imageAlt: "The Northstar Removals fleet outside the Pinner depot",
  },
  {
    slug: "harrow",
    name: "Harrow",
    region: "North West London",
    borough: "London Borough of Harrow",
    postcodes: ["HA1", "HA2", "HA3"],
    driveMinutes: 10,
    title: "Removals Harrow | House & Office Removal Company HA1–HA3",
    description:
      "Award-winning removals in Harrow from a company ten minutes away in Pinner. Harrow on the Hill, Harrow Weald, Kenton and Rayners Lane. Fixed-price quotes.",
    heroSubtitle:
      "From the steep lanes of Harrow on the Hill to the new apartment towers in the town centre — a Harrow removal company ten minutes from your door.",
    intro: [
      "Harrow is our home borough. Our depot in Pinner is around ten minutes from Harrow town centre, and HA1, HA2 and HA3 account for a large share of the house moves we do every month.",
      "The borough covers very different kinds of home. Harrow on the Hill has period houses on steep, narrow streets where a large lorry simply will not fit, so we send the right-sized vehicles and plan the carry. The town centre has gained thousands of new apartments in recent years, most with lifts that must be booked and loading bays with time limits. Harrow Weald, Kenton, Rayners Lane and North Harrow are mainly 1930s semis and terraces with the usual tight staircases and side returns.",
      "We also handle office moves across Harrow, from small practices around Station Road and College Road to larger relocations in and out of the borough, with IT decommissioning and secure storage where needed.",
    ],
    localKnowledge: [
      {
        title: "Harrow on the Hill access",
        body: "Streets like West Street, Crown Street and the High Street are narrow with limited turning space. We survey in person, choose the vehicle size accordingly and, where needed, shuttle from a larger vehicle parked lower down the hill.",
      },
      {
        title: "Town-centre apartments and lift bookings",
        body: "Most new developments around Harrow and Harrow-on-the-Hill stations require a lift booking and proof of insurance before move day. We provide the documents to your building manager in advance so there are no delays.",
      },
      {
        title: "Controlled parking zones",
        body: "Much of central Harrow and the roads around the stations are controlled parking. We apply for suspensions or dispensations from Harrow Council for the day, so the crew can work from directly outside.",
      },
    ],
    faqs: [
      {
        question: "How much does a house removal in Harrow cost?",
        answer:
          "It depends on the size of the property, access at both ends and whether you want packing. A free video or home survey lets us give you a fixed price with no hidden extras. Hourly rates are available for smaller flat moves.",
      },
      {
        question: "Do you cover the whole borough of Harrow?",
        answer:
          "Yes — Harrow on the Hill, Harrow Weald, Wealdstone, Kenton, Belmont, Rayners Lane, North and South Harrow, Headstone and Hatch End, plus neighbouring Pinner and Stanmore.",
      },
      {
        question: "Can you store furniture while we are between homes in Harrow?",
        answer:
          "Yes. Containerised storage is popular with Harrow customers whose completion dates do not line up. We collect, store in a monitored warehouse and deliver back when you are ready.",
      },
    ],
    nearby: ["pinner", "stanmore", "wembley", "ruislip", "north-west-london"],
    image: "/images/domestic-family.jpg",
    imageAlt: "A family moving home with Northstar Removals",
  },
  {
    slug: "ruislip",
    name: "Ruislip",
    region: "North West London",
    borough: "London Borough of Hillingdon",
    postcodes: ["HA4"],
    driveMinutes: 10,
    title: "Removals Ruislip | Local Movers for HA4 Homes",
    description:
      "House removals in Ruislip, Ruislip Manor, Eastcote and Ickenham from an award-winning company in neighbouring Pinner. Packing, storage and fixed-price quotes.",
    heroSubtitle:
      "Ruislip, Ruislip Manor, Ruislip Gardens, Eastcote and Ickenham — covered by a crew that starts ten minutes away.",
    intro: [
      "Ruislip sits directly west of our Pinner depot, so HA4 moves are local work for us. We move families between the Metroland semis around Ruislip Manor and Ruislip Gardens, the larger houses near the Lido and Ruislip Woods, and the flats along the High Street and around the Metropolitan line stations.",
      "A lot of Ruislip moves are short hops — upsizing from Ruislip Manor to a bigger house in Ickenham or Eastcote, or downsizing within the area. Short distance does not mean small job: a four-bedroom family home takes the same packing, protection and care wherever it is going, and we quote it properly rather than guessing.",
      "We also see a steady flow of moves out to Buckinghamshire and Hertfordshire and in from central London. Either way, a fixed-price quote covers the whole job door to door.",
    ],
    localKnowledge: [
      {
        title: "Semis with side access and loft rooms",
        body: "Many Ruislip houses have been extended into the loft. Furniture coming down from a loft conversion often will not pass the stair turn, so we check this on the survey and plan to dismantle or lower items safely.",
      },
      {
        title: "Parking near the stations and High Street",
        body: "Roads close to Ruislip, Ruislip Manor and Eastcote stations have parking restrictions. We arrange suspensions with Hillingdon Council where needed and schedule arrival to avoid school-run congestion on narrow residential roads.",
      },
      {
        title: "Moves to and from RAF Northolt",
        body: "We regularly move service families in and out of Northolt and the surrounding area, and are used to working with the paperwork and timing that military moves involve.",
      },
    ],
    faqs: [
      {
        question: "Do you do small moves in Ruislip, such as a one-bed flat?",
        answer:
          "Yes. For smaller moves we offer competitive hourly rates with a two-person crew and a suitably sized van, rather than charging for a lorry you do not need.",
      },
      {
        question: "Can you supply boxes before the move?",
        answer:
          "Yes. We deliver packing materials to Ruislip addresses ahead of the move, or you can book our full packing service and let the crew do it the day before.",
      },
      {
        question: "Do you cover Ickenham and Eastcote as well?",
        answer:
          "Yes, both are a few minutes from our depot and are covered at local rates, as are Northwood Hills and South Ruislip.",
      },
    ],
    nearby: ["pinner", "northwood", "uxbridge", "hillingdon", "harrow"],
    image: "/images/moving-team.jpg",
    imageAlt: "The Northstar moving team loading a van",
  },
  {
    slug: "northwood",
    name: "Northwood",
    region: "North West London",
    borough: "London Borough of Hillingdon",
    postcodes: ["HA6"],
    driveMinutes: 10,
    title: "Removals Northwood & Moor Park | Premium Movers HA6",
    description:
      "Removals in Northwood, Northwood Hills and Moor Park from an award-winning company ten minutes away in Pinner. White glove moves for larger homes and antiques.",
    heroSubtitle:
      "Large detached homes, private estates and valuable contents — Northwood moves get our most experienced crews.",
    intro: [
      "Northwood and Moor Park have some of the largest family homes in North West London, and the moves there reflect that: five and six-bedroom detached houses, substantial gardens with outbuildings, and contents that include antiques, art and pianos. This is where our White Glove Service earns its keep.",
      "We are ten minutes away in Pinner and have been moving Northwood families since 2006. A typical larger move is planned over several days: packing and crating first, then the move itself, with a dedicated move manager on site so you do not have to be.",
      "Northwood Hills, with its smaller semis and flats around the station, is equally well covered — and at local rates.",
    ],
    localKnowledge: [
      {
        title: "Moor Park private estate",
        body: "Access to the Moor Park estate is controlled, and some roads have weight or width considerations. We notify the estate office in advance, send appropriate vehicles and keep to the estate's working hours.",
      },
      {
        title: "Long drives and gravel",
        body: "Many Northwood houses sit back from the road on long or gravelled drives. We assess on the survey whether a large vehicle can reach the house, and bring a smaller shuttle vehicle if it cannot, so nothing is carried further than it needs to be.",
      },
      {
        title: "Fine art, antiques and pianos",
        body: "For high-value items we build foam-lined timber crates and use dedicated art handlers. Grand pianos are moved on purpose-built skids by a crew trained for it.",
      },
    ],
    faqs: [
      {
        question: "Can you manage the whole move so we do not need to be there?",
        answer:
          "Yes. Our White Glove Service includes a dedicated on-site move manager, full packing and unpacking, room layout planning and reassembly, so the house is ready when you walk in.",
      },
      {
        question: "Do you offer confidential moves?",
        answer:
          "Yes. On request we use non-branded vehicles and brief the crew to keep the destination private.",
      },
      {
        question: "Can you store items long term for a Northwood property?",
        answer:
          "Yes. Containerised storage with photographic inventories is used by many Northwood customers during renovations or extended time abroad.",
      },
    ],
    nearby: ["pinner", "ruislip", "watford", "harrow", "hillingdon"],
    image: "/images/white-glove.jpg",
    imageAlt: "Northstar crew handling fine furniture with care",
  },
  {
    slug: "stanmore",
    name: "Stanmore",
    region: "North West London",
    borough: "London Borough of Harrow",
    postcodes: ["HA7"],
    driveMinutes: 15,
    title: "Removals Stanmore | House Movers for HA7 and Canons Park",
    description:
      "Removals in Stanmore, Canons Park and Belmont from an award-winning company fifteen minutes away in Pinner. Family homes, flats, packing and storage.",
    heroSubtitle:
      "From the detached houses on Stanmore Hill to the flats by the Jubilee line terminus — local movers who know HA7.",
    intro: [
      "Stanmore combines some of the largest houses in the borough — around Stanmore Hill, Little Common and the Common — with 1930s semis in Belmont and Canons Park and a growing number of apartments near Stanmore station. We move all of them, and our Pinner depot is about fifteen minutes away.",
      "Larger Stanmore moves often involve contents that need specialist handling: pianos, large wardrobes and dining tables, garden furniture and statuary, home gyms. We survey everything in person, bring the right equipment and quote a fixed price for the whole job.",
      "Stanmore is also a popular starting point for moves out to Hertfordshire and Buckinghamshire, and for international relocations, which we handle door to door.",
    ],
    localKnowledge: [
      {
        title: "Steep drives and wide gates",
        body: "Several roads off Stanmore Hill are steep with gated entrances. We confirm vehicle access during the survey so there are no surprises on the day.",
      },
      {
        title: "Garden and outbuilding contents",
        body: "Summer houses, gym equipment and garden furniture add up quickly in Stanmore gardens. We include them in the survey and allow the right crew size and loading time.",
      },
      {
        title: "Flats around the station",
        body: "For apartment moves near Stanmore station we book lifts with the managing agent, protect common parts and work to the building's hours.",
      },
    ],
    faqs: [
      {
        question: "Do you dismantle and reassemble furniture?",
        answer:
          "Yes. Beds, wardrobes, dining tables and flat-pack furniture are dismantled by the crew and reassembled in the right rooms at the other end.",
      },
      {
        question: "Can you move us from Stanmore to another part of the UK?",
        answer:
          "Yes. Long-distance moves are quoted as a fixed price and, for larger homes, we can load one day and deliver the next so you are not waiting around.",
      },
      {
        question: "Do you provide packing materials for Stanmore moves?",
        answer:
          "Yes. We can deliver boxes, paper and tape ahead of the move, or carry out a full professional pack the day before.",
      },
    ],
    nearby: ["harrow", "pinner", "bushey", "watford", "north-west-london"],
    image: "/images/domestic-family.jpg",
    imageAlt: "A family outside their new home after a Northstar move",
  },
  {
    slug: "watford",
    name: "Watford",
    region: "Hertfordshire",
    borough: "Watford Borough Council",
    postcodes: ["WD17", "WD18", "WD19", "WD24", "WD25"],
    driveMinutes: 20,
    title: "Removals Watford | House & Office Removal Company WD17–WD25",
    description:
      "Removals in Watford, Cassiobury, Oxhey and Garston from an award-winning company twenty minutes away in Pinner. Home and office moves, packing and storage.",
    heroSubtitle:
      "Watford is twenty minutes from our depot — close enough for local rates, with the capacity of a London removal company behind every move.",
    intro: [
      "Watford is the biggest town on our doorstep and one of our busiest areas. We move families out of London into Cassiobury, Nascot Wood and Oxhey, first-time buyers into the new apartments around the town centre and Watford Junction, and households across the town itself.",
      "Watford has a wide range of property, from Victorian terraces near the Junction and in West Watford, to large detached houses in Cassiobury, to new-build blocks in the centre. Each needs a different approach to access and parking, and we plan that on the survey rather than on the morning.",
      "Office moves in Watford are a growing part of our work too, with the town's business parks and the Clarendon Road area in particular. We handle IT decommissioning, crates and out-of-hours moves to minimise downtime.",
    ],
    localKnowledge: [
      {
        title: "Town-centre and Junction parking",
        body: "The streets around Watford Junction and the town centre are controlled parking. We arrange bay suspensions with Watford Borough Council in advance for moves on those roads.",
      },
      {
        title: "Victorian terraces in West Watford and Oxhey",
        body: "Narrow hallways and steep stairs are standard in these homes. We protect walls and banisters, dismantle what will not fit, and use smaller vehicles where the street is tight.",
      },
      {
        title: "Moving out of London",
        body: "Many of our Watford customers are leaving flats in London for a house in Hertfordshire. We quote the whole move as one fixed price, including any storage if your dates do not line up.",
      },
    ],
    faqs: [
      {
        question: "Are you a Watford removal company?",
        answer:
          "We are based in Pinner, around twenty minutes from Watford town centre, and have been moving Watford customers since 2006. The distance is short enough that it does not add to your price.",
      },
      {
        question: "Can you move an office in Watford at the weekend?",
        answer:
          "Yes. Most of our commercial moves are scheduled out of hours or at weekends so your team can leave on Friday and start work at the new premises on Monday.",
      },
      {
        question: "Do you offer storage near Watford?",
        answer:
          "Yes. Our containerised storage is collected from your door, stored in a monitored warehouse and delivered back when you need it — there is no need to hire a van or visit a self-storage unit.",
      },
    ],
    nearby: ["bushey", "pinner", "northwood", "stanmore", "st-albans"],
    image: "/images/hero.jpg",
    imageAlt: "Northstar Removals vehicles ready for a move",
  },
  {
    slug: "bushey",
    name: "Bushey",
    region: "Hertfordshire",
    borough: "Hertsmere Borough Council",
    postcodes: ["WD23"],
    driveMinutes: 15,
    title: "Removals Bushey & Bushey Heath | Local Movers WD23",
    description:
      "Removals in Bushey, Bushey Heath and Bushey Village from an award-winning company fifteen minutes away in Pinner. Family homes, packing and storage.",
    heroSubtitle:
      "Bushey Village, Bushey Heath and the roads around Bushey station — a local removal crew that arrives in a quarter of an hour.",
    intro: [
      "Bushey is one of the closest Hertfordshire areas to our Pinner depot, and we treat it as local. We move families between the larger houses of Bushey Heath, the period homes around Bushey Village and the High Street, and the semis and flats nearer Bushey station and the Watford border.",
      "Bushey Heath in particular has substantial detached homes with long drives, and the moves there often include pianos, large furniture sets and garden equipment. We survey in person, allow the right crew and vehicles, and quote a fixed price for the whole move.",
      "We also handle the shorter hops that are common here — Bushey to Watford, Stanmore or Pinner — and the longer ones out to the rest of Hertfordshire or back into London.",
    ],
    localKnowledge: [
      {
        title: "Bushey Heath's larger homes",
        body: "Many houses on and around the Heath have gated drives and multiple floors. We plan loading routes on the survey and protect floors and door frames throughout.",
      },
      {
        title: "Bushey Village and the High Street",
        body: "The village centre is narrow and busy. For moves on or near the High Street we arrange parking in advance and time arrival to avoid the school run.",
      },
      {
        title: "Close to Watford Junction",
        body: "Bushey is popular with commuters moving out of London. We handle the London end — parking suspensions, lift bookings, difficult access — as a matter of routine.",
      },
    ],
    faqs: [
      {
        question: "Do you cover Bushey at local rates?",
        answer:
          "Yes. Bushey is around fifteen minutes from our depot, so there is no travel surcharge.",
      },
      {
        question: "Can you pack for us?",
        answer:
          "Yes. Our full packing service covers everything from kitchen contents to wardrobes, typically completed the day before the move, with unpacking available at the other end.",
      },
      {
        question: "Can you move a piano from Bushey?",
        answer:
          "Yes. We move upright and grand pianos locally and nationwide, using the right equipment and a crew trained for it.",
      },
    ],
    nearby: ["watford", "stanmore", "pinner", "harrow", "st-albans"],
    image: "/images/moving-team.jpg",
    imageAlt: "The Northstar moving team at work",
  },
  {
    slug: "uxbridge",
    name: "Uxbridge",
    region: "West London",
    borough: "London Borough of Hillingdon",
    postcodes: ["UB8", "UB9", "UB10"],
    driveMinutes: 20,
    title: "Removals Uxbridge | House, Flat & Office Removals UB8–UB10",
    description:
      "Removals in Uxbridge, Ickenham, Denham and Cowley from an award-winning company twenty minutes away in Pinner. Flats, family homes, student and office moves.",
    heroSubtitle:
      "Town-centre apartments, Ickenham semis and the villages towards Denham — removals in Uxbridge from a company that knows the area.",
    intro: [
      "Uxbridge is twenty minutes from our Pinner depot along the A40 and Western Avenue, and we move customers across UB8, UB9 and UB10 every week: apartments in the town centre, family homes in Ickenham and Hillingdon, and the larger properties out towards Denham and Harefield.",
      "The town has changed a great deal, with several large apartment developments near the Metropolitan and Piccadilly line terminus and the shopping centres. These moves need lift bookings, loading-bay timing and good communication with building managers, all of which we arrange in advance.",
      "Uxbridge is also a business centre, and we carry out office relocations in and around the town, including IT decommissioning, crate hire and secure storage for furniture and records.",
    ],
    localKnowledge: [
      {
        title: "Town-centre apartment blocks",
        body: "Most developments around Uxbridge station require a booked lift slot and an insurance certificate before you can move. We handle this with your managing agent so the crew is not kept waiting.",
      },
      {
        title: "Brunel University moves",
        body: "We help students, academic staff and families relocate to and from the Brunel area, including small flat moves on hourly rates and storage over the summer.",
      },
      {
        title: "Villages towards Denham and Harefield",
        body: "Lanes in Denham, Harefield and around the Colne Valley can be narrow or have weight limits. We check the approach on the survey and bring suitable vehicles.",
      },
    ],
    faqs: [
      {
        question: "Do you do hourly-rate moves in Uxbridge?",
        answer:
          "Yes. For studio and one-bedroom flats we offer competitive hourly rates with a two-person crew and a right-sized van.",
      },
      {
        question: "Can you store furniture over the summer?",
        answer:
          "Yes. Short-term containerised storage with collection and redelivery is available from one week upwards.",
      },
      {
        question: "Do you cover Hayes, West Drayton and Heathrow?",
        answer:
          "Yes, the whole borough of Hillingdon is covered. See our Hillingdon page for more on the south of the borough.",
      },
    ],
    nearby: ["hillingdon", "ruislip", "northwood", "ealing", "west-london"],
    image: "/images/office-move.jpg",
    imageAlt: "Northstar crew carrying out an office relocation",
  },
  {
    slug: "hillingdon",
    name: "Hillingdon",
    region: "West London",
    borough: "London Borough of Hillingdon",
    postcodes: ["UB3", "UB4", "UB7", "UB8", "UB10", "HA4", "HA6"],
    driveMinutes: 20,
    title: "Removals Hillingdon | Movers Across the Borough, Hayes to Northwood",
    description:
      "House and office removals across the Borough of Hillingdon — Uxbridge, Hayes, West Drayton, Ruislip and Northwood — from an award-winning company in Pinner.",
    heroSubtitle:
      "One removal company for the whole borough, from Northwood in the north to Hayes and West Drayton by Heathrow.",
    intro: [
      "The London Borough of Hillingdon stretches from Northwood and Ruislip, a few minutes from our depot, down through Uxbridge and Ickenham to Hayes, Yiewsley and West Drayton beside Heathrow. We move households and businesses across all of it.",
      "The southern half of the borough has seen a lot of new housing, particularly around Hayes & Harlington and West Drayton stations on the Elizabeth line. These are mostly apartment moves with lift bookings and loading bays; the north is more traditional semis and larger houses with their own access questions.",
      "Being close to Heathrow also makes Hillingdon a natural base for our international work: airfreight for urgent items, export packing and container shipping for the rest, all managed door to door.",
    ],
    localKnowledge: [
      {
        title: "Elizabeth line developments",
        body: "New blocks in Hayes and West Drayton generally need a booked lift, a loading-bay slot and an insurance certificate. We coordinate all three with your building management.",
      },
      {
        title: "Heathrow and international moves",
        body: "For customers relocating abroad from Hillingdon we offer airfreight for priority items alongside sea or road freight for the main consignment, with customs documentation handled by our estimators.",
      },
      {
        title: "Local traffic and timing",
        body: "The A40, A312 and the roads around Heathrow are heavily congested at peak times. We schedule start times to avoid the worst of it and allow for it in the plan rather than in your bill.",
      },
    ],
    faqs: [
      {
        question: "Which parts of Hillingdon do you cover?",
        answer:
          "All of it: Northwood, Ruislip, Eastcote, Ickenham, Harefield, Uxbridge, Hillingdon, Cowley, Yiewsley, West Drayton, Hayes and Harlington.",
      },
      {
        question: "Can you handle an international move from Hillingdon?",
        answer:
          "Yes. We export-pack, ship by road, sea or air and manage customs paperwork, with storage at either end if needed.",
      },
      {
        question: "Do you move offices in Hayes and Uxbridge?",
        answer:
          "Yes. Office moves across the borough are planned with a free appraisal and proposal, and usually carried out out of hours.",
      },
    ],
    nearby: ["uxbridge", "ruislip", "northwood", "ealing", "west-london"],
    image: "/images/international.jpg",
    imageAlt: "Shipping containers for international removals",
  },
  {
    slug: "wembley",
    name: "Wembley",
    region: "North West London",
    borough: "London Borough of Brent",
    postcodes: ["HA0", "HA9"],
    driveMinutes: 20,
    title: "Removals Wembley | Flat & House Movers for HA0 and HA9",
    description:
      "Removals in Wembley, Wembley Park, Alperton and Sudbury from an award-winning company twenty minutes away in Pinner. Lift bookings and event days handled.",
    heroSubtitle:
      "Wembley Park's new towers, Sudbury's semis and the terraces of Alperton — moved by a crew that plans around stadium event days.",
    intro: [
      "Wembley has been transformed by the development around the stadium, and a large share of our Wembley work is now apartment moves in Wembley Park: lift bookings, loading-bay slots, long corridors and strict building hours. We do these every week and know the process for most of the major developments.",
      "The rest of HA0 and HA9 is more traditional — 1930s semis in Sudbury and Preston, Victorian terraces in Alperton and Wembley Central — with the usual narrow staircases and on-street parking.",
      "Our Pinner depot is around twenty minutes away, and Wembley is covered at local rates.",
    ],
    localKnowledge: [
      {
        title: "Event-day restrictions",
        body: "On stadium event days parking and access across much of Wembley is restricted, and some roads close. We check the event calendar when booking and will advise you to pick another date if yours clashes.",
      },
      {
        title: "Wembley Park apartment blocks",
        body: "Most buildings need a lift booking, insurance certificate and a loading-bay slot. We arrange these with the concierge or management company and protect lifts and corridors on the day.",
      },
      {
        title: "Terraces in Alperton and Wembley Central",
        body: "Narrow hallways and tight stair turns are standard. We dismantle what will not fit, protect banisters and use smaller vehicles on the tightest streets.",
      },
    ],
    faqs: [
      {
        question: "Can you move us on a stadium event day?",
        answer:
          "Usually we recommend avoiding it, as access is restricted and parking suspensions may not be honoured. If the date is fixed we will plan around the restrictions and tell you honestly what is achievable.",
      },
      {
        question: "Do you do small apartment moves in Wembley Park?",
        answer:
          "Yes. One and two-bedroom flat moves are offered at hourly rates with a crew sized to the job.",
      },
      {
        question: "Can you store our things if the new flat is not ready?",
        answer:
          "Yes. Containerised storage is collected from your door and delivered back when you are ready, from one week upwards.",
      },
    ],
    nearby: ["harrow", "north-west-london", "ealing", "stanmore", "pinner"],
    image: "/images/storage-1.jpg",
    imageAlt: "Northstar secure storage warehouse",
  },
  {
    slug: "ealing",
    name: "Ealing",
    region: "West London",
    borough: "London Borough of Ealing",
    postcodes: ["W5", "W13", "W7", "W3"],
    driveMinutes: 25,
    title: "Removals Ealing | House & Flat Removal Company W5, W13, W7",
    description:
      "Removals in Ealing, Northfields, Hanwell, Pitshanger and Acton from an award-winning company 25 minutes away in Pinner. Parking suspensions arranged for you.",
    heroSubtitle:
      "Edwardian houses, converted flats and a controlled parking zone on almost every street — Ealing moves need planning, and we do it for you.",
    intro: [
      "Ealing's reputation as the 'Queen of the Suburbs' rests on its large Edwardian and Victorian houses, many now converted into flats. We move both: whole houses in Pitshanger, Northfields and around Ealing Common, and individual flats where the challenge is a narrow communal stair and nowhere to park.",
      "Nearly all of Ealing is covered by controlled parking zones, so a suspension from Ealing Council is usually essential. We apply for it, pay for it and include it in your fixed-price quote so it is dealt with well before the day.",
      "We also move offices and shops in and around Ealing Broadway and along the Uxbridge Road, and handle moves to and from Acton, Hanwell, West Ealing and Greenford.",
    ],
    localKnowledge: [
      {
        title: "Parking suspensions",
        body: "Ealing Council requires notice for bay suspensions. We book them as soon as your date is confirmed and put signage out, so the crew can work from directly outside.",
      },
      {
        title: "Converted flats and communal stairs",
        body: "Top-floor conversions with a tight turn at the first landing are common. We measure on the survey, protect communal areas and dismantle large items rather than risk damage.",
      },
      {
        title: "Elizabeth line moves",
        body: "The Elizabeth line has brought a wave of moves into Ealing Broadway, West Ealing, Hanwell and Acton Main Line from across London. We handle both ends, whatever borough you are leaving.",
      },
    ],
    faqs: [
      {
        question: "Do you arrange parking suspensions in Ealing?",
        answer:
          "Yes. We apply to Ealing Council on your behalf, pay the fee and include it in your quote.",
      },
      {
        question: "Can you move a flat in Ealing with no lift?",
        answer:
          "Yes. Walk-up flats are routine for us. We allow extra crew and time for the carry and protect the communal stairs and walls.",
      },
      {
        question: "Do you cover Acton, Hanwell and Greenford?",
        answer:
          "Yes, the whole borough of Ealing is covered, along with Chiswick and the rest of West London.",
      },
    ],
    nearby: ["west-london", "wembley", "uxbridge", "hillingdon", "harrow"],
    image: "/images/domestic-family.jpg",
    imageAlt: "A family on moving day with Northstar Removals",
  },
  {
    slug: "hampstead",
    name: "Hampstead",
    region: "North West London",
    borough: "London Borough of Camden",
    postcodes: ["NW3", "NW6", "NW11", "N6"],
    driveMinutes: 30,
    title: "Removals Hampstead | Premium Movers for NW3, Belsize Park & Highgate",
    description:
      "Removals in Hampstead, Belsize Park and West Hampstead from an award-winning London company. Narrow streets, fine art and Camden parking suspensions handled.",
    heroSubtitle:
      "Georgian terraces, listed houses and streets a lorry cannot turn in — Hampstead moves are planned in detail and carried out by our most experienced crews.",
    intro: [
      "Hampstead is one of the most demanding places in London to move house, and one of the areas we are proudest of. Georgian and Victorian houses on steep, narrow streets; listed interiors that must not be marked; contents that regularly include fine art, antiques and pianos; and Camden's parking rules on top. We have been moving families here for nearly twenty years.",
      "A Hampstead move usually begins with an in-person survey, because photographs do not show how a staircase turns or whether a 7.5-tonne lorry can get up the hill. From that we choose vehicles, plan the carry, book parking suspensions and, where contents warrant it, bring in our White Glove Service with crating and a dedicated move manager.",
      "We cover the whole of NW3 and the surrounding villages — Belsize Park, Swiss Cottage, West Hampstead, Golders Green, Highgate and Hampstead Garden Suburb — for domestic moves, office moves and storage.",
    ],
    localKnowledge: [
      {
        title: "Camden parking suspensions",
        body: "Camden requires advance notice for suspensions and they are strictly enforced. We book them as soon as your date is confirmed, place signage and, where a road is too narrow for a large vehicle, shuttle from a legal bay with a smaller van.",
      },
      {
        title: "Listed buildings and period interiors",
        body: "Original staircases, panelling and plasterwork need protecting. We use floor runners, door-frame guards and banister wraps as standard and will not force an item through a space it does not fit.",
      },
      {
        title: "Art, antiques and pianos",
        body: "Our White Glove Service builds bespoke timber crates for paintings, sculpture and mirrors, and our piano crews move uprights and grands on purpose-built equipment. Confidential moves with unmarked vehicles are available.",
      },
    ],
    faqs: [
      {
        question: "Can you move us from a house on one of the narrow Hampstead streets?",
        answer:
          "Yes. We survey in person, choose the right vehicle sizes and, if a lorry cannot reach the door, shuttle with a smaller van from the nearest suitable bay. It is all included in the fixed price.",
      },
      {
        question: "Do you handle Camden parking suspensions?",
        answer:
          "Yes. We apply, pay and manage the signage. We just need your date confirmed early enough to meet Camden's notice period.",
      },
      {
        question: "Do you offer storage for Hampstead customers during refurbishment?",
        answer:
          "Yes. Many Hampstead customers store contents with us during building work. Items are inventoried, wrapped and stored in monitored warehouses, with crated storage for fine art.",
      },
    ],
    nearby: ["north-west-london", "north-london", "kensington", "wembley", "harrow"],
    image: "/images/white-glove.jpg",
    imageAlt: "Northstar white glove crew handling valuable furniture",
  },
  {
    slug: "kensington",
    name: "Kensington",
    region: "Central London",
    borough: "Royal Borough of Kensington and Chelsea",
    postcodes: ["W8", "W11", "W14", "SW3", "SW5", "SW7", "SW10"],
    driveMinutes: 40,
    title: "Removals Kensington & Chelsea | White Glove Movers W8, SW3, SW7",
    description:
      "Removals in Kensington, Chelsea, Notting Hill and Holland Park from an award-winning London company. Mansion blocks, fine art and RBKC parking suspensions.",
    heroSubtitle:
      "Mansion blocks with porters, stucco terraces with basement flats, and a council that enforces every bay — Kensington and Chelsea moves handled with precision.",
    intro: [
      "Kensington and Chelsea moves are rarely simple. Mansion blocks with porters and strict hours, four-storey stucco terraces with the kitchen in the basement and bedrooms at the top, listed buildings, and the Royal Borough's parking regime all need to be managed. This is specialist work, and it is exactly what our White Glove Service was built for.",
      "We have moved customers in Kensington, Holland Park, Notting Hill, South Kensington and Chelsea since 2006 — into and out of London, between flats in the same block, and abroad. A move here starts with a detailed survey and a written plan: vehicles, crew, parking, lift bookings, crating for art and antiques and a dedicated move manager if you want to hand the whole thing over.",
      "Many of our Kensington customers are relocating internationally. We export-pack, ship by sea or air, manage customs paperwork and store whatever stays behind.",
    ],
    localKnowledge: [
      {
        title: "RBKC parking suspensions",
        body: "The Royal Borough requires suspensions to be booked in advance and enforces them rigorously. We handle the application and signage and will advise if a particular street needs a smaller vehicle.",
      },
      {
        title: "Mansion blocks and porters",
        body: "Most blocks require a booked lift or service entrance, proof of insurance and defined working hours. We liaise with the porter or managing agent in advance so the day runs to plan.",
      },
      {
        title: "Fine art, antiques and wine",
        body: "We crate paintings, mirrors and sculpture in foam-lined timber cases, move pianos with a specialist crew and can arrange climate-appropriate storage for wine and sensitive pieces.",
      },
    ],
    faqs: [
      {
        question: "Do you offer a fully managed move in Kensington?",
        answer:
          "Yes. Our White Glove Service provides a dedicated on-site move manager, full packing and unpacking, room layout planning, crating for valuables and, if required, a confidential move with unmarked vehicles.",
      },
      {
        question: "Can you ship our belongings abroad from Kensington?",
        answer:
          "Yes. International moves by road, sea and air are handled door to door, including export packing, customs documentation and storage at either end.",
      },
      {
        question: "Do you deal with the building's requirements for us?",
        answer:
          "Yes. We supply insurance certificates and method statements to porters and managing agents and book lifts and service entrances ahead of the move.",
      },
    ],
    nearby: ["west-london", "hampstead", "north-west-london", "ealing", "north-london"],
    image: "/images/white-glove.jpg",
    imageAlt: "Fine furniture being prepared for a white glove move",
  },
  {
    slug: "north-london",
    name: "North London",
    region: "Greater London",
    borough: "Barnet, Enfield, Haringey, Islington and Camden",
    postcodes: ["N2", "N3", "N6", "N8", "N10", "N12", "N20", "EN4", "EN5", "NW7", "NW11"],
    driveMinutes: 35,
    title: "Removals North London | Barnet, Finchley, Muswell Hill & Islington",
    description:
      "North London removals from an award-winning company in Pinner. Barnet, Finchley, Muswell Hill, Crouch End and Islington. Homes, offices, packing and storage.",
    heroSubtitle:
      "From Barnet and Finchley to Muswell Hill, Crouch End and Islington — a North London removal company with nearly twenty years of local moves behind it.",
    intro: [
      "North London has been part of our patch since Northstar started in 2006. From our Pinner depot we reach Mill Hill, Finchley and Barnet in around half an hour, and Muswell Hill, Crouch End, Highgate and Islington not long after.",
      "The area covers everything from large detached houses in Totteridge and Hampstead Garden Suburb to Victorian terraces in Crouch End and Islington and converted flats throughout. Parking is controlled across most of these boroughs, so suspensions from Barnet, Haringey, Islington or Camden are usually part of the plan, and we handle them.",
      "We also carry out office relocations across North London, and many of our storage customers are North London households between homes or mid-renovation.",
    ],
    localKnowledge: [
      {
        title: "Four councils, four sets of parking rules",
        body: "Barnet, Haringey, Islington and Camden each have their own suspension process and notice periods. We know them and book the right one as soon as your date is fixed.",
      },
      {
        title: "Hills and terraces",
        body: "Muswell Hill, Highgate and Crouch End are steep, with terraces that have narrow halls and no off-street parking. We choose vehicle sizes accordingly and plan the carry on the survey.",
      },
      {
        title: "Family houses in Barnet and Totteridge",
        body: "Larger homes in Totteridge, Arkley and Hadley Wood often involve pianos, garden furniture and a lot of contents. We allow the right crew size and, for the biggest moves, pack and load over more than one day.",
      },
    ],
    faqs: [
      {
        question: "Which parts of North London do you cover?",
        answer:
          "All of it: Barnet, Finchley, Mill Hill, Totteridge, Whetstone, Edgware, Hendon, Golders Green, Hampstead Garden Suburb, Muswell Hill, Crouch End, Highgate, Islington, Enfield and the surrounding areas.",
      },
      {
        question: "Do you arrange parking suspensions in North London?",
        answer:
          "Yes. We apply to the relevant council, pay the fee and include it in your fixed-price quote.",
      },
      {
        question: "Can you move us from North London to another part of the UK?",
        answer:
          "Yes. Long-distance moves are quoted as a fixed price and, for larger homes, loaded one day and delivered the next.",
      },
    ],
    nearby: ["hampstead", "north-west-london", "stanmore", "harrow", "st-albans"],
    image: "/images/hero.jpg",
    imageAlt: "Northstar Removals fleet at dusk",
  },
  {
    slug: "west-london",
    name: "West London",
    region: "Greater London",
    borough: "Hammersmith & Fulham, Hounslow, Richmond and Ealing",
    postcodes: ["W4", "W6", "W12", "SW6", "TW1", "TW8", "TW9"],
    driveMinutes: 30,
    title: "Removals West London | Chiswick, Hammersmith, Fulham & Richmond",
    description:
      "West London removals from an award-winning company in Pinner. Chiswick, Hammersmith, Fulham, Kew and Richmond. Flats, period houses, offices and storage.",
    heroSubtitle:
      "Chiswick terraces, Fulham townhouses, riverside apartments in Brentford and Kew — West London moves with the parking and access sorted in advance.",
    intro: [
      "West London is around half an hour from our Pinner depot via the A40 and the North Circular, and we move customers across Chiswick, Hammersmith, Shepherd's Bush, Fulham, Brentford, Kew and Richmond every week.",
      "The housing here is a mix of Victorian and Edwardian terraces, often converted into flats, larger family houses in Chiswick and Bedford Park, mansion blocks along the river and a growing number of new apartment developments in Brentford, White City and around Kew Bridge. Parking is controlled throughout, so a suspension is nearly always part of the plan.",
      "West London is also a major business area and we handle office moves in Hammersmith, Chiswick Park, White City and Brentford, with IT decommissioning, crates and out-of-hours working.",
    ],
    localKnowledge: [
      {
        title: "Parking across several boroughs",
        body: "Hammersmith & Fulham, Hounslow, Richmond and Ealing each run their own suspension schemes. We book the right one for both ends of your move and put the cost in your quote.",
      },
      {
        title: "Riverside apartments and new developments",
        body: "New blocks in Brentford, Kew Bridge and White City need lift bookings, loading-bay slots and insurance certificates. We arrange these with the building management ahead of time.",
      },
      {
        title: "Period terraces and conversions",
        body: "Narrow halls and top-floor conversions with tight stair turns are standard in Chiswick, Fulham and Shepherd's Bush. We measure on the survey and dismantle what will not fit.",
      },
    ],
    faqs: [
      {
        question: "Do you cover the whole of West London?",
        answer:
          "Yes: Chiswick, Hammersmith, Shepherd's Bush, White City, Fulham, Brentford, Isleworth, Kew, Richmond, Twickenham and the surrounding areas, as well as Ealing and Acton.",
      },
      {
        question: "Can you move an office in Hammersmith at the weekend?",
        answer:
          "Yes. Most of our commercial moves are done out of hours so your business is back up and running on Monday morning.",
      },
      {
        question: "Can you store our furniture between a sale and a purchase?",
        answer:
          "Yes. Containerised storage is collected, stored in a monitored warehouse and delivered back when your purchase completes.",
      },
    ],
    nearby: ["ealing", "kensington", "hillingdon", "uxbridge", "wembley"],
    image: "/images/office-move.jpg",
    imageAlt: "Northstar crew during a West London office move",
  },
  {
    slug: "north-west-london",
    name: "North West London",
    region: "Greater London",
    borough: "Brent, Barnet, Harrow and Camden",
    postcodes: ["NW2", "NW4", "NW6", "NW7", "NW9", "NW10", "HA8"],
    driveMinutes: 20,
    title: "Removals North West London | Kilburn, Willesden, Hendon, Edgware & Mill Hill",
    description:
      "North West London removals from an award-winning company in Pinner. Kilburn, Willesden, Hendon, Edgware and Golders Green. Flats, houses, offices and storage.",
    heroSubtitle:
      "This is our side of London. Kilburn to Mill Hill, Willesden to Edgware — all within half an hour of the Pinner depot.",
    intro: [
      "Northstar is a North West London removal company first and foremost. Our depot is in Pinner, our crews live across Harrow, Brent and Barnet, and NW2 to NW10 are the postcodes we drive through every day.",
      "The area is enormously varied: Victorian terraces and converted flats in Kilburn, Willesden Green and Cricklewood; 1930s semis in Hendon, Kingsbury and Edgware; large detached houses in Mill Hill and Golders Green; and thousands of new apartments in Colindale, Wembley Park and along the Edgware Road. We move all of them, and we know which councils need a suspension and which buildings need a lift booking.",
      "We also provide office removals and storage across North West London, with our storage facility at Park Royal, NW10, a few minutes from most of the area.",
    ],
    localKnowledge: [
      {
        title: "Storage at Park Royal, NW10",
        body: "One of our storage locations is at Park Royal, which makes short-notice collections and redeliveries straightforward for North West London customers.",
      },
      {
        title: "Colindale and Edgware Road developments",
        body: "The new developments along the Edgware Road and around Colindale need lift bookings, loading-bay slots and insurance certificates. We handle these with building management in advance.",
      },
      {
        title: "Brent, Barnet and Camden parking",
        body: "Most streets in the area are controlled parking. We apply for the suspension with the right council, pay for it and include it in your quote.",
      },
    ],
    faqs: [
      {
        question: "Which North West London areas do you cover?",
        answer:
          "Kilburn, West Hampstead, Cricklewood, Willesden, Harlesden, Neasden, Kingsbury, Hendon, Colindale, Burnt Oak, Edgware, Mill Hill, Golders Green and Wembley, plus Harrow, Pinner, Stanmore and the rest of the HA postcodes.",
      },
      {
        question: "Are you cheaper for NW London because you are local?",
        answer:
          "Our prices are fixed and based on the move itself, so there is no travel cost built in for North West London addresses. We are not the cheapest option in London, but our quotes are honest and nothing is added afterwards.",
      },
      {
        question: "Can you move a flat with no parking outside?",
        answer:
          "Yes. We arrange a suspension where the council allows it, and where it does not we plan a legal parking position and the carry from it.",
      },
    ],
    nearby: ["harrow", "wembley", "hampstead", "stanmore", "north-london"],
    image: "/images/moving-team.jpg",
    imageAlt: "The Northstar team on a North West London move",
  },
  {
    slug: "st-albans",
    name: "St Albans",
    region: "Hertfordshire",
    borough: "St Albans City and District Council",
    postcodes: ["AL1", "AL2", "AL3", "AL4"],
    driveMinutes: 30,
    title: "Removals St Albans | London to St Albans Moves & Local Removals",
    description:
      "Removals to and within St Albans, Harpenden and Radlett from an award-winning company half an hour away in Pinner. Moving out of London, packing and storage.",
    heroSubtitle:
      "Most of our St Albans customers are leaving London. We handle the London end and the St Albans end as one fixed-price move.",
    intro: [
      "St Albans is one of the most popular destinations for families moving out of London, and a large share of our St Albans work is exactly that: a flat or terrace in North or North West London one day, a house in St Albans, Harpenden or Radlett the next. Being based in Pinner — half an hour from the city centre — we are well placed for both ends.",
      "The city has a lot of period property: Victorian terraces around the station and in the conservation areas near the Cathedral and Fishpool Street, Edwardian houses in Marshalswick and Fleetville, and larger homes out towards Harpenden and Wheathampstead. Narrow streets, listed buildings and controlled parking in the centre all need planning.",
      "We also move households within St Albans and out to the rest of Hertfordshire, and provide storage for customers whose London sale completes before the St Albans purchase.",
    ],
    localKnowledge: [
      {
        title: "City-centre streets and conservation areas",
        body: "Fishpool Street, George Street and the roads around the Cathedral are narrow and busy. We choose vehicles to suit and arrange parking with St Albans City and District Council in advance.",
      },
      {
        title: "The London end",
        body: "Leaving a London flat usually means a parking suspension, perhaps a lift booking and a tight staircase. We handle that side as routine, so the day starts smoothly.",
      },
      {
        title: "Storage between completions",
        body: "Chains between London and Hertfordshire often do not line up. Containerised storage lets you move out when you need to and in when you are ready, as a single quoted move.",
      },
    ],
    faqs: [
      {
        question: "How much does a move from London to St Albans cost?",
        answer:
          "It depends on the size of the property, access at both ends and whether you want packing. A free video or home survey lets us give you one fixed price covering both ends with no hidden extras.",
      },
      {
        question: "Can you load one day and deliver the next?",
        answer:
          "Yes. For larger homes or when completion times are late in the day we can load, hold the vehicle securely overnight and deliver the following morning.",
      },
      {
        question: "Do you cover Harpenden, Radlett and Wheathampstead?",
        answer:
          "Yes. All of the St Albans district and the surrounding Hertfordshire towns are covered.",
      },
    ],
    nearby: ["watford", "bushey", "north-london", "stanmore", "pinner"],
    image: "/images/domestic-family.jpg",
    imageAlt: "A family settling into their new home after a Northstar move",
  },
];

export const areaBySlug = (slug: string) =>
  areas.find((a) => a.slug === slug);

/** Groups for the /areas hub page and the footer. */
export const areaGroups: { title: string; slugs: string[] }[] = [
  {
    title: "Harrow & Hillingdon — our home turf",
    slugs: ["pinner", "harrow", "ruislip", "northwood", "stanmore", "uxbridge", "hillingdon"],
  },
  {
    title: "Hertfordshire",
    slugs: ["watford", "bushey", "st-albans"],
  },
  {
    title: "Across London",
    slugs: [
      "north-west-london",
      "wembley",
      "ealing",
      "west-london",
      "hampstead",
      "north-london",
      "kensington",
    ],
  },
];

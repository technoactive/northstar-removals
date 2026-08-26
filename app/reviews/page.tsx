import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { FiveStars } from "@/components/Star";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read reviews and referrals from Northstar Removals' happy customers, including Google reviews and over 1,200 reviews on Removal Approval.",
  alternates: { canonical: "/reviews" },
};

const googleReviews = [
  {
    name: "Mina Om",
    text: "Saturday 4th May, we moved the entire furniture from a 6 bedroom house, to a location near by. We had two awesome guys, Alex and Tony. The way they handled all our furniture and belongings was with great care, the items were carefully wrapped and secured. Both Alex and Tony were very polite and friendly, great customer service. Thank you so much for making our move stress free.",
  },
  {
    name: "Lani Carstens",
    text: "Best move ever! Our move with Northstar was absolutely brilliant. The service, starting with the initial in-person consultation, was extremely professional, and whilst they may not be the cheapest, I felt as though we were in a safe pair of hands - and the entire process was seamless. We have moved several times, internationally and locally, and this is by far our best experience.",
  },
  {
    name: "Rohit Parmar",
    text: "John & the team went above & beyond. Excellent service with a smile! The team were so helpful and patient, couldn't have got it all done without them. Thank you so much.",
  },
  {
    name: "Elle Moss",
    text: "Absolutely fantastic team! Hard working, diligent, polite and accurate. Highly recommend.",
  },
  {
    name: "Roo",
    text: "Having moved on numerous occasions (thanks to our previous military careers), we found the entire team a pleasure to deal with. We were extremely impressed by the whole team from survey to finishing up. Thanks to all for relieving the stress. I would highly recommend using Northstar Removals.",
  },
  {
    name: "Jodi M",
    text: "Amazing service! The guys are so lovely and quick. They do everything with care and are very thorough. So it's worth it!",
  },
  {
    name: "Laura Hubbard",
    text: "The crew were absolutely fantastic. John & Alex were so fast and efficient on the Thursday load and made me feel completely confident in the move. The van was loaded carefully, and they communicated clearly with me. The team on the second day were also lovely, as was Paulina when she arrived with the van on Thursday. Thank you for making a stressful time easy. You were great!!",
  },
];

const removalApprovalReviews = [
  {
    name: "Chris & Eleanor Karasavvids",
    text: "Absolutely brilliant service. Great team. Nothing was too much trouble. Could not have asked for more. Will recommend to all friends & family. Really excellent.",
  },
  {
    name: "Nadia McLeod & Mal Magure",
    text: "The moving guys & packers were fabulous - very courteous, friendly, quick, but diligent. I would use Northstar again definitely. This was my 3rd time using them, and they are still as amazing as 13 years ago.",
  },
  {
    name: "Anjali Goyal",
    text: "Very professional service, the guys were professional, skilled, strong and at the same time well mannered. They kept the mood light and respected our choices of positioning the furniture, as requested! Thank you Northstar for a fantastic experience.",
  },
  {
    name: "Clare & Paul Innaurato",
    text: "Professional service from start to finish. All staff worked exceptionally hard to make our move run as smoothly as possible. I would highly recommend & use again. Thank you to Denis, Alex, John & their crew. Great teamwork.",
  },
  {
    name: "Luke & Katie Kenny",
    text: "Unbelievably good. 6 bed house emptied in double quick time - outstanding 5*****.",
  },
  {
    name: "Aran King",
    text: "Very helpful & friendly removal team, worked very hard and got everything done on the same day. Greg the survey/salesman also knew exactly what was required to get the job done. The team were very punctual and arrived in the morning at 8.30am as advised. I would use Northstar again if I ever move house again.",
  },
  {
    name: "Stephen & Marie Benham",
    text: "A very good/excellent service. The team were polite, efficient & thorough and went the extra mile for us. Nothing was too much trouble. We've already recommended you!",
  },
  {
    name: "Rick & Jennifer Sear",
    text: "Jenny and I are deeply impressed with the dedication and professionalism of John and his team. Frankly we were dreading it. But it's been stress free - almost fun!",
  },
];

function ReviewGrid({
  reviews,
}: {
  reviews: { name: string; text: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {reviews.map((review) => (
        <figure
          key={review.name}
          className="rounded-2xl bg-slate-50 p-7 ring-1 ring-navy-900/5"
        >
          <FiveStars />
          <blockquote className="text-sm leading-relaxed text-slate-700">
            &ldquo;{review.text}&rdquo;
          </blockquote>
          <figcaption className="mt-4 font-bold text-navy-950">
            {review.name}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <>
      <PageHero
        title="Reviews"
        subtitle="Our reviews & referrals from our happy customers"
        image="/images/moving-team.jpg"
        imageAlt="The Northstar Removals team"
      />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold uppercase tracking-wide text-navy-950">
          Our Google Reviews
        </h2>
        <div className="mt-8">
          <ReviewGrid reviews={googleReviews} />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
          <h2 className="text-2xl font-extrabold uppercase tracking-wide text-navy-950">
            Our Reviews on Removal Approval
          </h2>
          <p className="font-semibold text-brand-600">1,200+ Reviews</p>
        </div>
        <div className="mt-8">
          <ReviewGrid reviews={removalApprovalReviews} />
        </div>
      </div>
    </>
  );
}

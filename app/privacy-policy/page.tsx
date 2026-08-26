import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Northstar Removals collects, uses, stores and protects your personal data, and your rights under UK GDPR.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy explains what personal data we collect, why we collect it, and the rights you have over it."
      lastUpdated="26 August 2026"
      sections={[
        {
          heading: "Who we are",
          body: (
            <>
              <p>
                Northstar Removals &amp; Storage (&ldquo;Northstar
                Removals&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
                &ldquo;our&rdquo;) is a removals and storage company based at
                Unit 1, Leeway House, Leeway Close, Pinner, HA5 4SE, United
                Kingdom. We are the data controller responsible for the
                personal data described in this policy.
              </p>
              <p>
                This policy applies to personal data collected through our
                website at www.northstar-removals.com and when you contact us
                by phone, email or in person in connection with our services.
              </p>
            </>
          ),
        },
        {
          heading: "Personal data we collect",
          body: (
            <>
              <p>We may collect and process the following data about you:</p>
              <ul>
                <li>
                  <strong>Identity and contact data</strong> — your name, email
                  address and telephone number, provided when you request a
                  quote or contact us.
                </li>
                <li>
                  <strong>Move details</strong> — collection and delivery
                  addresses, preferred moving and packing dates, property
                  details and any special requirements you tell us about.
                </li>
                <li>
                  <strong>Correspondence</strong> — records of your
                  communications with us, including emails and messages sent
                  through our contact form.
                </li>
                <li>
                  <strong>Technical data</strong> — limited technical
                  information such as browser type and pages visited, where
                  cookies or similar technologies are used (see our{" "}
                  <Link href="/cookie-policy">Cookie Policy</Link>).
                </li>
              </ul>
              <p>
                We do not knowingly collect data from children under 16, and
                we do not collect special category (sensitive) data through
                this website.
              </p>
            </>
          ),
        },
        {
          heading: "How and why we use your data",
          body: (
            <>
              <p>
                We only use your personal data where the law allows us to.
                Most commonly we use it to:
              </p>
              <ul>
                <li>
                  prepare and provide quotations for removals, packing and
                  storage services you have requested (
                  <strong>performance of a contract</strong> or steps taken at
                  your request before entering a contract);
                </li>
                <li>
                  plan, schedule and carry out your move or storage booking (
                  <strong>performance of a contract</strong>);
                </li>
                <li>
                  respond to enquiries and provide customer support (
                  <strong>legitimate interests</strong>);
                </li>
                <li>
                  keep records required for accounting, insurance and legal
                  purposes (<strong>legal obligation</strong>);
                </li>
                <li>
                  improve our website and services (
                  <strong>legitimate interests</strong>).
                </li>
              </ul>
              <p>
                We will never sell your personal data, and we will not send
                you marketing communications unless you have agreed to receive
                them.
              </p>
            </>
          ),
        },
        {
          heading: "Who we share your data with",
          body: (
            <>
              <p>
                We may share your data with trusted third parties only where
                necessary to deliver our services, including:
              </p>
              <ul>
                <li>
                  partner removal agents and shipping providers, where your
                  move is international or requires a partner network;
                </li>
                <li>
                  insurance providers, where cover is arranged for your move
                  or stored goods;
                </li>
                <li>
                  IT, hosting and email service providers that support the
                  running of our business;
                </li>
                <li>
                  professional advisers, regulators and authorities where
                  required by law.
                </li>
              </ul>
              <p>
                All third parties are required to respect the security of your
                data and to treat it in accordance with the law.
              </p>
            </>
          ),
        },
        {
          heading: "How long we keep your data",
          body: (
            <p>
              We keep personal data only for as long as necessary to fulfil
              the purposes we collected it for, including any legal,
              accounting, insurance or reporting requirements. Quotation
              enquiries that do not proceed to a booking are typically kept
              for no longer than 24 months. Records relating to completed
              moves are typically kept for up to 7 years to satisfy legal and
              insurance obligations, after which they are securely deleted.
            </p>
          ),
        },
        {
          heading: "How we protect your data",
          body: (
            <p>
              We have put in place appropriate technical and organisational
              measures to prevent your personal data from being accidentally
              lost, used, accessed, altered or disclosed in an unauthorised
              way. Access to your personal data is limited to those employees
              and partners who have a business need to know it. Our website is
              served over an encrypted (HTTPS) connection.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <>
              <p>
                Under the UK General Data Protection Regulation (UK GDPR) and
                the Data Protection Act 2018, you have the right to:
              </p>
              <ul>
                <li>request access to a copy of your personal data;</li>
                <li>request correction of inaccurate or incomplete data;</li>
                <li>
                  request erasure of your data where there is no good reason
                  for us to continue holding it;
                </li>
                <li>
                  object to, or request restriction of, our processing of
                  your data;
                </li>
                <li>request transfer of your data to another provider;</li>
                <li>
                  withdraw consent at any time, where we rely on consent to
                  process your data.
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us using the details
                below. We aim to respond to all legitimate requests within one
                month. You also have the right to lodge a complaint with the
                Information Commissioner&rsquo;s Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ico.org.uk
                </a>
                , although we would appreciate the chance to address your
                concerns first.
              </p>
            </>
          ),
        },
        {
          heading: "Changes to this policy",
          body: (
            <p>
              We may update this privacy policy from time to time. Any changes
              will be posted on this page with an updated &ldquo;last
              updated&rdquo; date. We encourage you to review this page
              periodically to stay informed about how we protect your data.
            </p>
          ),
        },
      ]}
    />
  );
}

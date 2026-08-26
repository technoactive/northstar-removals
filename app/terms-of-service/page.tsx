import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that govern your use of the Northstar Removals website and the provision of our removals and storage services.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms-of-service"
      intro="These terms govern your use of this website and set out the basis on which we provide quotations and services."
      lastUpdated="26 August 2026"
      sections={[
        {
          heading: "About these terms",
          body: (
            <>
              <p>
                These terms of service (&ldquo;Terms&rdquo;) apply to your use
                of the website at www.northstar-removals.com (the
                &ldquo;Site&rdquo;), operated by Northstar Removals &amp;
                Storage (&ldquo;Northstar Removals&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo; or &ldquo;our&rdquo;) of Unit 1, Leeway
                House, Leeway Close, Pinner, HA5 4SE, United Kingdom.
              </p>
              <p>
                By using the Site you agree to these Terms. If you do not
                agree, please do not use the Site. Removals, packing and
                storage services themselves are provided under a separate
                written contract issued with your quotation, which will
                prevail over these Terms in the event of any conflict.
              </p>
            </>
          ),
        },
        {
          heading: "Quotations and enquiries",
          body: (
            <>
              <p>
                Information submitted through our quote form is used to
                prepare an estimate for the services you request. Please note:
              </p>
              <ul>
                <li>
                  quotations provided are estimates and remain subject to
                  survey, confirmation of access, volume and any special
                  requirements;
                </li>
                <li>
                  submitting an enquiry does not create a booking or contract
                  — a booking is only confirmed once we have issued written
                  confirmation and, where applicable, a deposit has been
                  received;
                </li>
                <li>
                  quotations are valid for the period stated on them and may
                  be revised if your requirements change.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "Use of the Site",
          body: (
            <>
              <p>You agree that you will not:</p>
              <ul>
                <li>
                  use the Site in any way that is unlawful, fraudulent or
                  harmful;
                </li>
                <li>
                  attempt to gain unauthorised access to the Site, its server
                  or any connected database;
                </li>
                <li>
                  introduce viruses, malware or other technologically harmful
                  material;
                </li>
                <li>
                  submit false or misleading information through our forms.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              We are the owner or licensee of all intellectual property rights
              in the Site and its content, including text, photography,
              logos, award artwork and design. You may print or download
              extracts for your personal use, but you must not reproduce,
              distribute or commercially exploit any content without our prior
              written consent.
            </p>
          ),
        },
        {
          heading: "Accuracy of information",
          body: (
            <p>
              The content on the Site is provided for general information
              only. While we take reasonable care to keep it accurate and up
              to date, it does not constitute advice and we make no
              guarantees that it is free from errors or omissions. Details of
              services, accreditations and awards are correct to the best of
              our knowledge at the time of publication.
            </p>
          ),
        },
        {
          heading: "Liability",
          body: (
            <>
              <p>
                Nothing in these Terms excludes or limits our liability for
                death or personal injury arising from our negligence, for
                fraud, or for any other liability that cannot be excluded by
                English law.
              </p>
              <p>
                Subject to the above, we exclude all implied conditions,
                warranties and representations in relation to the Site, and we
                will not be liable for any loss or damage arising from your
                use of, or inability to use, the Site. Our liability in
                connection with removals, packing and storage services is
                governed by the separate contract under which those services
                are provided.
              </p>
            </>
          ),
        },
        {
          heading: "Links to other websites",
          body: (
            <p>
              The Site may contain links to third-party websites, including
              review platforms and industry bodies. These links are provided
              for your convenience only. We have no control over the content
              of those websites and accept no responsibility for them or for
              any loss or damage that may arise from your use of them.
            </p>
          ),
        },
        {
          heading: "Privacy and cookies",
          body: (
            <p>
              Your use of the Site is also governed by our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
              <Link href="/cookie-policy">Cookie Policy</Link>, which explain
              how we handle personal data and use cookies.
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          body: (
            <p>
              We may revise these Terms at any time by updating this page.
              Please check this page from time to time, as the version in
              force when you use the Site will apply to you.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: (
            <p>
              These Terms are governed by the laws of England and Wales, and
              the courts of England and Wales will have exclusive jurisdiction
              over any dispute arising from them or from your use of the
              Site.
            </p>
          ),
        },
      ]}
    />
  );
}

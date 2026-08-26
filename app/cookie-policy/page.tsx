import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn which cookies and similar technologies the Northstar Removals website uses, why we use them, and how you can control them.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookie-policy"
      intro="This policy explains what cookies are, which ones this website uses, and how you can manage your preferences."
      lastUpdated="26 August 2026"
      sections={[
        {
          heading: "What are cookies?",
          body: (
            <p>
              Cookies are small text files that are placed on your computer,
              tablet or phone when you visit a website. They are widely used
              to make websites work efficiently, to remember your preferences
              and to provide information to the site&rsquo;s owners. Similar
              technologies, such as local storage, work in comparable ways and
              are covered by this policy too.
            </p>
          ),
        },
        {
          heading: "Cookies we use",
          body: (
            <>
              <p>
                We keep the use of cookies on this website to a minimum. The
                categories we use are:
              </p>
              <ul>
                <li>
                  <strong>Strictly necessary</strong> — used to remember your
                  cookie consent choice (stored in your browser&rsquo;s local
                  storage as <strong>ns-cookie-consent</strong>). These cannot
                  be switched off, as the site would not remember your
                  preference without them.
                </li>
                <li>
                  <strong>Embedded content</strong> — our contact and footer
                  sections embed a Google Map to help you find our premises.
                  When the map loads, Google may set its own cookies. These
                  are governed by{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google&rsquo;s privacy policy
                  </a>
                  .
                </li>
              </ul>
              <p>
                We do not use advertising or cross-site tracking cookies. If
                we introduce analytics in future, this policy and our consent
                banner will be updated before any such cookies are set.
              </p>
            </>
          ),
        },
        {
          heading: "Managing your preferences",
          body: (
            <>
              <p>You can control cookies in several ways:</p>
              <ul>
                <li>
                  use the cookie banner shown on your first visit to accept or
                  decline non-essential cookies;
                </li>
                <li>
                  delete or block cookies through your browser settings — see
                  your browser&rsquo;s help pages for instructions;
                </li>
                <li>
                  clear your browser&rsquo;s local storage to reset your
                  consent choice, which will cause the banner to appear again.
                </li>
              </ul>
              <p>
                Please note that blocking all cookies may affect the
                functionality of embedded content such as maps.
              </p>
            </>
          ),
        },
        {
          heading: "More information",
          body: (
            <p>
              For more detail on how we handle personal data generally, please
              read our <Link href="/privacy-policy">Privacy Policy</Link>. For
              independent guidance on cookies, visit the Information
              Commissioner&rsquo;s Office at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy — NEXBOND",
  description: "How NEXBOND Industrial Solutions LLC handles your information.",
  robots: { index: false },
};

const SECTIONS = [
  {
    h: "Information We Collect",
    p: "When you contact us through this website — by form, email or phone — we collect the details you provide: your name, email address, phone number and the content of your message. We do not collect payment information through this website.",
  },
  {
    h: "How We Use Your Information",
    p: "We use your contact details solely to respond to your inquiry, prepare quotations, process orders and communicate about our products and services. We do not sell, rent or share your personal information with third parties for marketing purposes.",
  },
  {
    h: "Data Retention",
    p: "We retain inquiry and order correspondence for as long as needed to serve you and to meet legal and accounting obligations in the United Arab Emirates.",
  },
  {
    h: "Cookies & Analytics",
    p: "This website may use basic analytics to understand visitor traffic. No personally identifying information is captured by these tools.",
  },
  {
    h: "Your Rights",
    p: "You may request access to, correction of, or deletion of your personal information at any time by contacting us at info@nexbondinfra.com.",
  },
  {
    h: "Contact",
    p: "For any privacy-related questions, contact NEXBOND Industrial Solutions LLC, P.O. Box 123456, Sharjah, United Arab Emirates — info@nexbondinfra.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Legal"
          title="Privacy"
          accent="Policy."
          subtitle="Last updated: July 2026"
          watermark="PRIVACY"
        />
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl space-y-10 px-5 sm:px-8">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.h} delay={i * 0.05}>
                <h2 className="headline text-2xl text-ink">{s.h}</h2>
                <p className="mt-3 leading-relaxed text-warmgrey">{s.p}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

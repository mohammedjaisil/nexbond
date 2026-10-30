import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/components/Contact";
import { LocationMap } from "@/components/LocationMap";
import { Footer } from "@/components/Footer";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact — NEXBOND Industrial Solutions LLC, Dubai UAE",
  description:
    "Get in touch with NEXBOND for bulk orders, product samples or partnership inquiries. Dubai, United Arab Emirates.",
};

const CHANNELS = [
  {
    Icon: PhoneIcon,
    title: "Call Us",
    line1: "+971 4 286 8633",
    href: "tel:+97142868633",
  },
  {
    Icon: MailIcon,
    title: "Email Us",
    line1: "info@nexbondinfra.com",
    href: "mailto:info@nexbondinfra.com",
  },
  {
    Icon: PinIcon,
    title: "Visit Us",
    line1: "119, Al Garhoud Star Building, Dubai, UAE",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Contact"
          title="Let's Talk"
          accent="Business."
          subtitle="Bulk orders, product samples, distribution or partnership inquiries — our team responds within one business day."
          watermark="CONTACT"
        />
        <section className="bg-cream section-y">
          <Stagger className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-3 sm:px-8">
            {CHANNELS.map(({ Icon, title, line1, href }) => (
              <StaggerItem key={title}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-ink/5 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg">
                  <Icon className="h-8 w-8 text-gold" />
                  <h2 className="headline text-h4 mt-4 text-ink">{title}</h2>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 py-1 text-sm text-warmgrey transition-colors hover:text-gold"
                    >
                      {line1}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-warmgrey">{line1}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
        <Contact />
        <LocationMap />
      </main>
      <Footer />
    </>
  );
}

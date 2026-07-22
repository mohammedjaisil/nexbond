"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { PhoneIcon } from "./icons";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Quote Request — NEXBOND Website");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\nMessage:\n${data.get("message")}`
    );
    window.location.href = `mailto:info@nexbondinfra.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-lg border border-ink/15 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none transition focus:border-ink focus:bg-white";

  return (
    <section id="contact" className="bg-gold py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-ink/60">
            Get In Touch
          </p>
          <h2 className="headline mt-4 text-4xl text-ink sm:text-6xl">
            Ready to Build Stronger Bonds?
          </h2>
          <p className="mt-6 max-w-md text-ink/70">
            Get in touch for bulk orders, product samples, or partnership
            inquiries. Our team responds within one business day.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:+971501234567"
              className="btn-sweep inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-ink transition-colors [--sweep-color:#1a1a1a] hover:text-gold"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Us
            </a>
          </div>
          <div className="mt-12 space-y-2 text-sm text-ink/70">
            <p className="font-bold uppercase tracking-wider text-ink">
              NEXBOND Industrial Solutions LLC
            </p>
            <p>P.O. Box 123456, Sharjah, United Arab Emirates</p>
            <p>info@nexbondinfra.com</p>
            <p>Rahul Kumar — Managing Director</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-cream p-7 shadow-2xl shadow-ink/20 sm:p-9"
          >
            <h3 className="headline text-2xl text-ink">Request a Quote</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Name</span>
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  autoComplete="name"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  autoComplete="email"
                  className={inputClass}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="sr-only">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  autoComplete="tel"
                  className={inputClass}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your requirements — quantities, sizes, delivery location…"
                  className={inputClass}
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn-sweep mt-6 w-full rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors [--sweep-color:#2d2d2d]"
            >
              Send Request
            </button>
            {sent && (
              <p role="status" className="mt-4 text-center text-sm font-medium text-ink/70">
                Your email app should open with the request — we look forward to
                hearing from you.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

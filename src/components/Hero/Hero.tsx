"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "../icons";
import { GoldParticles } from "./GoldParticles";
import { ScrollIndicator } from "./ScrollIndicator";
import { TapeStripReveal } from "./TapeStripReveal";
import { useHeroAnimation } from "./useHeroAnimation";
import type { HeroMotion, MousePoint } from "./TapeRollScene";

// 3D scene is client-only and lazy — the dark hero + text paint first.
const TapeRollScene = dynamic(() => import("./TapeRollScene"), {
  ssr: false,
  loading: () => null,
});

type Caps = "pending" | "full" | "low";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const motionRef = useRef<HeroMotion>({ unroll: 0 });
  const mouseRef = useRef<MousePoint>({ x: 0, y: 0 });

  const [caps, setCaps] = useState<Caps>("pending");
  const [reduced, setReduced] = useState(false);

  // Always start at the top on reload so the intro plays from the hero —
  // otherwise the browser restores the previous scroll position mid-page.
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  // Capability + preference detection (client only)
  useEffect(() => {
    const prm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(prm);

    const nav = navigator as Navigator & { deviceMemory?: number };
    const lowEnd =
      (nav.hardwareConcurrency ?? 8) < 4 || (nav.deviceMemory ?? 8) < 4;
    setCaps(lowEnd ? "low" : "full");
  }, []);

  // Gyroscope tilt on coarse-pointer devices (skip iOS permission flow)
  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(pointer: coarse)").matches) return;
    type DOE = typeof DeviceOrientationEvent & {
      requestPermission?: () => Promise<string>;
    };
    if (
      typeof DeviceOrientationEvent === "undefined" ||
      (DeviceOrientationEvent as DOE).requestPermission
    )
      return;

    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      mouseRef.current.x = Math.max(-1, Math.min(1, e.gamma / 45));
      mouseRef.current.y = Math.max(-1, Math.min(1, (e.beta - 45) / 45));
    };
    window.addEventListener("deviceorientation", onOrientation);
    return () => window.removeEventListener("deviceorientation", onOrientation);
  }, [reduced]);

  useHeroAnimation(sectionRef, motionRef, {
    reduced,
    lowEnd: caps === "low",
  });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
  };

  const onMouseLeave = () => {
    mouseRef.current.x = 0;
    mouseRef.current.y = 0;
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative flex min-h-svh max-h-[1000px] flex-col justify-center overflow-hidden bg-ink pt-20"
      style={{ minHeight: "max(100svh, 700px)" }}
    >
      {/* No-JS: everything visible, nothing animated */}
      <noscript>
        <style>{`
          .hero-item, .roll-stage { opacity: 1 !important; }
          .brand-clip { clip-path: none !important; }
        `}</style>
      </noscript>

      {/* Living gradient background */}
      <div aria-hidden className="hero-bg-layer" />

      {/* Gold particle field */}
      <GoldParticles disabled={reduced || caps === "low"} />

      {/* Unrolling tape strip overlay */}
      <TapeStripReveal />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-10 px-5 pb-24 sm:px-8 lg:-mt-[5vh] lg:grid-cols-[55%_45%]">
        {/* ---------- Text content ---------- */}
        <div className="hero-copy order-2 text-center lg:order-1 lg:text-left">
          <p className="hero-item text-xs font-medium uppercase tracking-[0.25em] text-[#9a9a9a]">
            Industrial&ensp;|&ensp;Safety&ensp;|&ensp;Infrastructure
          </p>

          {/* Brand name — real HTML text, revealed by the unroll */}
          <div className="relative mt-3 inline-block">
            <h1
              className="brand-clip headline text-[clamp(2.5rem,12vw,4.5rem)] font-extrabold text-white sm:text-[clamp(3rem,8vw,6rem)] xl:text-[clamp(4rem,10vw,9rem)]"
              style={{ textShadow: "0 0 40px rgba(212,165,32,0.3)" }}
            >
              NE
              <span className="brand-x inline-block italic">X</span>
              BOND
            </h1>
            {/* Shimmer clipped in its own layer so the text halo isn't boxed */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <span className="brand-shimmer" />
            </div>
          </div>

          <p className="hero-item mt-2 text-base text-gold">
            Strength in Every Bond.
          </p>

          <p className="hero-item headline mt-8 text-[1.75rem] font-semibold tracking-[0.08em] text-white">
            Premium Masking Tape
          </p>
          <p className="hero-item headline mt-2 text-lg font-medium tracking-[0.15em] text-[#f5f5f5]">
            True Size. True Trust.
          </p>

          <div className="hero-item mt-9 flex justify-center lg:justify-start">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink transition-all duration-300 hover:scale-[1.03] hover:bg-[#b8860b] hover:shadow-[0_8px_25px_rgba(212,165,32,0.3)] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold"
            >
              Explore Products
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ---------- 3D roll ---------- */}
        <div className="roll-col order-1 flex justify-center lg:order-2">
          <div className="roll-stage relative aspect-square w-[250px] will-change-transform md:w-[300px] xl:w-[450px]">
            {/* Golden glow bloom */}
            <div aria-hidden className="hero-glow" />

            {caps === "full" && !reduced && (
              <TapeRollScene
                motion={motionRef}
                mouse={mouseRef}
                reduced={reduced}
              />
            )}
            {(caps === "low" || reduced) && (
              <Image
                src="/images/tape-heavy-duty.png"
                alt="NEXBOND premium masking tape roll — industrial grade, guaranteed true size"
                width={800}
                height={1132}
                priority
                className={`h-full w-full rounded-3xl object-cover ${reduced ? "" : "roll-fallback"}`}
              />
            )}

            {/* Contact shadow */}
            <div
              aria-hidden
              className="absolute -bottom-8 left-1/2 h-6 w-3/5 -translate-x-1/2 rounded-full bg-black/50 blur-xl"
            />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

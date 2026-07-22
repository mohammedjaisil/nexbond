"use client";

import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { HeroMotion } from "./TapeRollScene";

/**
 * Master GSAP timeline for "The Unroll Reveal".
 *
 * Phase 1 (0 → 1.2s)   dark entry, roll + glow materialize at center
 * Phase 2 (1.2 → 3.2s) roll travels right while the strip draws and the
 *                      brand name is progressively un-masked; X flashes gold
 * Phase 3 (3.2 → 4.5s) staggered content reveal + shimmer sweep
 * Phase 4 (idle)       strip drift; scroll-out parallax via ScrollTrigger
 */
export function useHeroAnimation(
  scope: RefObject<HTMLElement | null>,
  motion: RefObject<HeroMotion>,
  opts: { reduced: boolean; lowEnd: boolean }
) {
  const { reduced, lowEnd } = opts;

  useLayoutEffect(() => {
    if (!scope.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context((self) => {
      const q = (sel: string) => self.selector?.(sel) ?? [];

      if (reduced) {
        // Final state, no motion (CSS handles most of it; be explicit anyway)
        gsap.set(".hero-item, .roll-stage", { opacity: 1 });
        gsap.set(".brand-clip", { clipPath: "none" });
        gsap.set(".brand-x", { color: "#d4a520" });
        gsap.set(".strip-svg", { opacity: 0.4 });
        gsap.set(".tape-path", { strokeDashoffset: 0 });
        return;
      }

      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      // The roll starts visually centered in the viewport, then travels to
      // its resting slot. Compute the offset from its resting position.
      const stage = q(".roll-stage")[0] as HTMLElement | undefined;
      let dx = 0;
      let dy = 0;
      if (stage) {
        const r = stage.getBoundingClientRect();
        dx = window.innerWidth / 2 - (r.left + r.width / 2);
        dy = window.innerHeight / 2 - (r.top + r.height / 2);
      }
      gsap.set(".roll-stage", { x: dx, y: dy, scale: 1.15 });

      const activePath = isMobile ? ".strip-v .tape-path" : ".strip-h .tape-path";

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      /* ---------- Phase 1: materialize ---------- */
      tl.fromTo(
        ".roll-stage",
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1.15, duration: 0.9, delay: 0.3 }
      ).fromTo(
        ".hero-glow",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.8 },
        "<0.2"
      );

      /* ---------- Phase 2: the unroll ---------- */
      tl.addLabel("unroll", 1.2);
      tl.to(
        ".roll-stage",
        { x: 0, y: 0, scale: isMobile ? 1 : 0.85, duration: 2, ease: "power2.inOut" },
        "unroll"
      );
      // Drives the 3D roll's dispensing rotation (read in useFrame)
      tl.to(
        motion.current,
        { unroll: 1, duration: 2, ease: "power2.inOut" },
        "unroll"
      );
      if (!lowEnd) {
        tl.to(
          activePath,
          { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" },
          "unroll"
        );
      }
      tl.fromTo(
        ".brand-clip",
        {
          clipPath: isMobile ? "inset(0% 0% 100% 0%)" : "inset(0% 100% 0% 0%)",
        },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "power2.inOut" },
        "unroll"
      );
      tl.to(
        ".brand-x",
        {
          color: "#d4a520",
          textShadow: "0 0 30px rgba(212,165,32,0.5)",
          duration: 0.4,
          ease: "power1.out",
        },
        "unroll+=1.8"
      );

      /* ---------- Phase 3: content reveal ---------- */
      tl.addLabel("content", 3.2);
      // Drop the clip entirely once revealed — inset(0) still crops the
      // text-shadow halo into a hard-edged box
      tl.set(".brand-clip", { clipPath: "none" }, "content");
      tl.fromTo(
        ".hero-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
          clearProps: "willChange",
        },
        "content"
      );
      tl.fromTo(
        ".brand-shimmer",
        { xPercent: -150, opacity: 1 },
        { xPercent: 250, duration: 0.8, ease: "power2.inOut" },
        "content+=0.15"
      ).set(".brand-shimmer", { opacity: 0 });
      // Strip settles into a faint decorative trace
      tl.to(".strip-svg", { opacity: 0.4, duration: 0.8 }, "content");

      /* ---------- Phase 4: idle drift ---------- */
      gsap.to(".strip-svg", {
        x: -20,
        duration: 7.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 4.5,
      });

      /* ---------- Scroll-out transitions ---------- */
      // Numeric scrub interpolates toward the scroll position instead of
      // snapping every frame — noticeably smoother while scrolling.
      gsap.set([".hero-copy", ".roll-col"], { willChange: "transform, opacity" });
      gsap.to(".hero-copy", {
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
        y: -80,
        opacity: 0,
        force3D: true,
      });
      gsap.to(".roll-col", {
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
        y: -100,
        scale: 0.7,
        opacity: 0,
        force3D: true,
      });
    }, scope);

    return () => ctx.revert();
  }, [scope, motion, reduced, lowEnd]);
}

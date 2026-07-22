"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  freq: number;
  targetOpacity: number;
  born: number;
};

function spawn(w: number, h: number, now: number, atBottom = false): Particle {
  return {
    x: Math.random() * w,
    y: atBottom ? h + 10 : Math.random() * h,
    size: 2 + Math.random() * 2,
    speed: 0.2 + Math.random() * 0.3,
    drift: 8 + Math.random() * 7,
    freq: 0.3 + Math.random() * 0.7,
    targetOpacity: 0.15 + Math.random() * 0.15,
    born: now,
  };
}

/** Subtle 2D gold particle field — separate canvas layer, not in the 3D scene. */
export function GoldParticles({ disabled }: { disabled: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (disabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const parent = canvas.parentElement!;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      const count =
        canvas.width >= 1280 ? 12 : canvas.width >= 768 ? 6 : 5;
      particles = Array.from({ length: count }, () =>
        spawn(canvas.width, canvas.height, performance.now())
      );
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    const tick = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speed;
        const x = p.x + Math.sin((now / 1000) * p.freq) * p.drift;

        // Fade in over first second; fade out over final 50px
        const age = (now - p.born) / 1000;
        let opacity = p.targetOpacity * Math.min(age, 1);
        if (p.y < 50) opacity *= Math.max(p.y / 50, 0);

        ctx.beginPath();
        ctx.arc(x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 165, 32, ${opacity})`;
        ctx.fill();

        if (p.y < -10) {
          particles[i] = spawn(canvas.width, canvas.height, now, true);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [disabled]);

  if (disabled) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      role="presentation"
      className="pointer-events-none absolute inset-0 z-[5]"
    />
  );
}

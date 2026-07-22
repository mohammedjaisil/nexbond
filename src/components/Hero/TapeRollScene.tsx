"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";

export type HeroMotion = { unroll: number };
export type MousePoint = { x: number; y: number };

/** Branded label wrapped around the roll's outer surface. */
function makeSideTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 128;
  const g = c.getContext("2d")!;

  g.fillStyle = "#c8a84e";
  g.fillRect(0, 0, c.width, c.height);

  // Subtle crepe-paper grain
  for (let i = 0; i < 900; i++) {
    const x = Math.random() * c.width;
    const y = Math.random() * c.height;
    g.fillStyle = `rgba(${Math.random() > 0.5 ? "255,245,220" : "80,60,20"},${
      Math.random() * 0.05
    })`;
    g.fillRect(x, y, 1 + Math.random() * 2, 1);
  }

  // Repeated NEXBOND wordmark with a gold X
  const font = 'bold 58px "Arial Narrow", Arial, sans-serif';
  g.font = font;
  g.textBaseline = "middle";
  const repeats = 3;
  for (let i = 0; i < repeats; i++) {
    let x = (c.width / repeats) * i + 40;
    const y = c.height / 2;
    g.fillStyle = "#2b2314";
    g.fillText("NE", x, y);
    x += g.measureText("NE").width;
    g.fillStyle = "#8a6a10";
    g.fillText("X", x, y);
    x += g.measureText("X").width;
    g.fillStyle = "#2b2314";
    g.fillText("BOND", x, y);
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** Flat face of the roll: concentric tape-layer ridges, cardboard core, dark hole. */
function makeCapTexture(): THREE.CanvasTexture {
  const S = 512;
  const c = document.createElement("canvas");
  c.width = c.height = S;
  const g = c.getContext("2d")!;
  const cx = S / 2;

  g.fillStyle = "#cfae53";
  g.fillRect(0, 0, S, S);

  // Concentric ridges — the layered-tape look
  for (let r = 118; r < 254; r += 3) {
    g.beginPath();
    g.arc(cx, cx, r, 0, Math.PI * 2);
    g.strokeStyle =
      r % 6 < 3 ? "rgba(60,45,10,0.16)" : "rgba(255,240,200,0.14)";
    g.lineWidth = 1.4;
    g.stroke();
  }

  // Cardboard core ring
  g.beginPath();
  g.arc(cx, cx, 118, 0, Math.PI * 2);
  g.fillStyle = "#8b7355";
  g.fill();
  g.beginPath();
  g.arc(cx, cx, 112, 0, Math.PI * 2);
  g.strokeStyle = "rgba(0,0,0,0.25)";
  g.lineWidth = 3;
  g.stroke();

  // Center hole
  g.beginPath();
  g.arc(cx, cx, 96, 0, Math.PI * 2);
  g.fillStyle = "#171310";
  g.fill();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function TapeRoll({
  motion,
  mouse,
  reduced,
}: {
  motion: RefObject<HeroMotion>;
  mouse: RefObject<MousePoint>;
  reduced: boolean;
}) {
  const bobRef = useRef<THREE.Group>(null);
  const tiltRef = useRef<THREE.Group>(null);
  const spinRef = useRef<THREE.Group>(null);

  const sideTex = useMemo(makeSideTexture, []);
  const capTex = useMemo(makeCapTexture, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Unroll dispensing: the roll spins clockwise as tape is pulled out
    if (spinRef.current) {
      const idleSpin = reduced ? 0 : -t * ((Math.PI * 2) / 20); // 20s per turn
      spinRef.current.rotation.z =
        idleSpin - motion.current.unroll * Math.PI * 4;
    }

    if (bobRef.current) {
      // Floating bob + barely-there scale pulse
      bobRef.current.position.y = reduced
        ? 0
        : Math.sin(t * ((Math.PI * 2) / 3)) * 0.08;
      const s = 1 + (reduced ? 0 : Math.sin(t * ((Math.PI * 2) / 4)) * 0.0075);
      bobRef.current.scale.setScalar(s);
    }

    // Cursor / gyro tilt — lerped, max ~12°
    if (tiltRef.current && !reduced) {
      const targetX = 0.12 + mouse.current.y * 0.21;
      const targetY = -0.45 + mouse.current.x * 0.21;
      tiltRef.current.rotation.x +=
        (targetX - tiltRef.current.rotation.x) * 0.08;
      tiltRef.current.rotation.y +=
        (targetY - tiltRef.current.rotation.y) * 0.08;
    }
  });

  return (
    <group ref={bobRef}>
      {/* Presentation angle + interactive tilt */}
      <group ref={tiltRef} rotation={[0.12, -0.45, 0]}>
        <group ref={spinRef}>
          {/* Outer tape body — caps face the camera after the X-rotation */}
          <mesh rotation-x={Math.PI / 2}>
            <cylinderGeometry args={[2, 2, 1.2, 64]} />
            <meshStandardMaterial
              attach="material-0"
              map={sideTex}
              roughness={0.7}
              metalness={0.05}
            />
            <meshStandardMaterial
              attach="material-1"
              map={capTex}
              roughness={0.8}
              metalness={0.03}
            />
            <meshStandardMaterial
              attach="material-2"
              map={capTex}
              roughness={0.8}
              metalness={0.03}
            />
          </mesh>
          {/* Cardboard core interior */}
          <mesh rotation-x={Math.PI / 2}>
            <cylinderGeometry args={[0.92, 0.92, 1.26, 32, 1, true]} />
            <meshStandardMaterial
              color="#8b7355"
              roughness={0.9}
              metalness={0}
              side={THREE.BackSide}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

export default function TapeRollScene({
  motion,
  mouse,
  reduced,
}: {
  motion: RefObject<HeroMotion>;
  mouse: RefObject<MousePoint>;
  reduced: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 45, near: 0.1, far: 100, position: [0, -0.3, 7.6] }}
      gl={{ antialias: true, alpha: true }}
      tabIndex={-1}
      aria-hidden
      className="pointer-events-none!"
    >
      {/* Key light — warm, upper-left */}
      <directionalLight color="#fff5e6" intensity={1.6} position={[-3, 4, 5]} />
      {/* Gold rim light — behind-right */}
      <pointLight color="#d4a520" intensity={9} position={[3, 1, -3]} distance={10} decay={2} />
      {/* Fill — below-left */}
      <pointLight color="#ffffff" intensity={4} position={[-2, -2, 3]} distance={8} decay={2} />
      {/* Low gold ambient */}
      <ambientLight color="#d4a520" intensity={0.35} />
      <TapeRoll motion={motion} mouse={mouse} reduced={reduced} />
    </Canvas>
  );
}

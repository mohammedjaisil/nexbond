import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/webp"],
    qualities: [75, 90],
  },
};

export default nextConfig;

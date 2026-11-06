import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/webp"],
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/products/premium-masking-tape",
        destination: "/products/automotive-grade-masking-tape",
        permanent: true,
      },
      {
        source: "/products/heavy-duty-masking-tape",
        destination: "/products#industrial-tapes",
        permanent: true,
      },
      {
        source: "/products/road-marking-paint",
        destination: "/products/cold-road-marking-paint",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

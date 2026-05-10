import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** Dev-only: hides the floating route indicator (“N”) in local `next dev`. No effect on production. */
  devIndicators: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    qualities: [75, 92],
  },
};

export default nextConfig;

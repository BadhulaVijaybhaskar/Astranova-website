import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 82],
  },
};

export default nextConfig;

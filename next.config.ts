import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',   // Allow all news images from any site
      },
    ],
  },
};

export default nextConfig;
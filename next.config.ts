import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage3062.s3.ca-central-1.amazonaws.com",
        pathname: "/portfolio/**",
      },
    ],
  },
};

export default nextConfig;

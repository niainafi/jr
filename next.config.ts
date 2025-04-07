import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "justride.mg",
        port: "",
        // pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "myapi.justride.mg",
        port: "",
        // pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "stock.justride.mg",
      },

      
    ]
    // domains: ["justride.mg"],
  },
};

export default nextConfig;

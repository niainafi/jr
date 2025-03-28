import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

      
    ]
    // domains: ["justride.mg"],
  },
};

export default nextConfig;

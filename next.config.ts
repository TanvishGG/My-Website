import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["tunnel-3000.tanvish.co.in"],
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "opengraph.githubassets.com",
      port: "",
      pathname: "/**"
    }]
  }
};

export default nextConfig;

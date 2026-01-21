import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   staticPageGenerationTimeout: 60,

  images: {
      domains: ["be-sporton.agunacourse.com"],
    },
   
};

export default nextConfig;

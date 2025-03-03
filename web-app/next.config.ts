import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  /* other config options here */
};

export default nextConfig;

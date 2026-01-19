import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/test-gpages', // nome do repositório
  assetPrefix: '/test-gpages/',
}


export default nextConfig;

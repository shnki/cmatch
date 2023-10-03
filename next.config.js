/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["media.gemini.media", "www.yallakora.com"],
  },
};

module.exports = nextConfig;

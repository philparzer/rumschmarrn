/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.builder.io'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig

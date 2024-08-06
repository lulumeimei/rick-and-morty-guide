/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/character",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

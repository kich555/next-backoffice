const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPlugins = require('next-compose-plugins');

module.exports = async (phase) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'standalone', // for docker image
    compress: true,
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      styledComponents: true,
      // removeConsole: {
      //   exclude: ['error'],
      // },
    },
    async rewrites() {
      return [
        {
          source: '/apis/:path*',
          destination: 'http://localhost:8081/:path*',
        },
      ];
    },
  };

  return withPlugins([withBundleAnalyzer], nextConfig)(phase, { undefined });
};

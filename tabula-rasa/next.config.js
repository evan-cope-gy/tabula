/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },

  async rewrites() {
    return await {
      beforeFiles: [
        {
          source: "/api/:path*",
          destination: `${process.env.API_ROOT_URL}/api/v1/:path*`,
        },
      ],
    }
  },
}

module.exports = nextConfig

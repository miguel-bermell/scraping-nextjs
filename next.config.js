/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['raw.githubusercontent.com', 'd1eh9yux7w8iql.cloudfront.net']
  },
  experimental: {
    outputStandalone: true
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: /node_modules/
    }
    return config
  }
}

module.exports = nextConfig

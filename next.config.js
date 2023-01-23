/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


module.exports = {
  images: {
    domains: ['steamuserimages-a.akamaihd.net', "cdn.discordapp.com", "unsplash.com", "images.unsplash.com"]
  }
}
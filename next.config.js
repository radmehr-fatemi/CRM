/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      // { source:"/edit/:id" ,destination:"/" ,permanent:false }
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  serverExternalPackages: ["sodium-native", "secure-password"],
  transpilePackages: ["blitz", "@blitzjs/auth", "@blitzjs/next", "@blitzjs/rpc"],
}

module.exports = withBlitz(nextConfig)

// Importing env files here to validate on build
import './src/env.js'
import '@mj/auth/env'

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    '@mj/api',
    '@mj/auth',
    '@mj/db',
    '@mj/ui-web',
    '@mj/validators',
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default config

/// validate envs
import { withExpo } from '@expo/next-adapter'

import './src/env.mjs'

/** @type {import('next').NextConfig} */
const config = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'moti',
    '@mj/ui',
    'react-native-reanimated',
    'nativewind',
    'react-native-gesture-handler',
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },

  experimental: {
    scrollRestoration: true,
    serverActions: true,
  },
}

export default withExpo(config)

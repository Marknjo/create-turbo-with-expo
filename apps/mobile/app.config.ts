import type { ExpoConfig } from '@expo/config'

const defineConfig = (): ExpoConfig => ({
  name: 'mobile',
  slug: 'mobile',
  scheme: 'mobile',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#052C2B',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'your.bundle.identifier',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/icon.png',
      backgroundColor: '#052C2B',
    },
  },
  extra: {
    eas: {
      // projectId: "your-project-id",
    },
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  plugins: ['./expo-plugins/with-modify-gradle.js'],
})

export default defineConfig

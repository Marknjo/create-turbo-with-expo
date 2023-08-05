import type { StorybookConfig } from '@storybook/react-vite'

import { join, dirname, resolve } from 'path'

/**
 * @NOTE: Using absolute path is causing problems with fs,
 * leading to installing an old eslint-module with old dependencies
 * - By any case the project des not work, you can install
 * - rollup-plugin-node-builtins
 * and un comment getAbsolutePath function
 * Then add your addons wrapped with getAbsolutePath as follows
 * - Examples:
 *       // getAbsolutePath('@storybook/addon-links'),
 *       // getAbsolutePath('@storybook/addon-essentials'),
 *       // getAbsolutePath('@storybook/addon-a11y'),
 *       // getAbsolutePath('@storybook/addon-styling'),
 *       // getAbsolutePath('@storybook/addon-onboarding'),
 *       // getAbsolutePath('@storybook/addon-interactions'),
 *       // getAbsolutePath('@storybook/addon-react-native-web'),
 *       // getAbsolutePath('@storybook/addon-designs'),
 *       // getAbsolutePath('@storybook/addon-coverage'),
 *
 * if using Vite: after installing, this plugin add it in the
 * path aliases section to resolve the fs issue
 *          {
 *            find: 'fs',
 *            replacement: require.resolve('rollup-plugin-node-builtins'),
 *          },
 *  lastly uncomment this
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
// function getAbsolutePath(value: string): any {
//   return dirname(require.resolve(join(value, 'package.json')))
// }

const config: StorybookConfig = {
  stories: [
    '../docs/**/Introduction.stories.mdx',
    '../docs/**/*.stories.mdx',
    '../stories/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-styling',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web',
    '@storybook/addon-designs',
    '@storybook/addon-coverage',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      // legacyRootApi: true,
    },
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      esbuild: {
        logOverride: {
          'this-is-undefined-in-esm': 'silent',
        },
      },
      define: {
        'process.env': {},
      },
      resolve: {
        alias: [
          {
            find: '@mj/ui',
            replacement: resolve(__dirname, '../../ui/'),
          },
          {
            find: '@comps',
            replacement: resolve(__dirname, '../components'),
          },
          {
            find: 'react-native',
            replacement: 'react-native-web',
          },
        ],
      },
    }
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../public'],
  managerHead(head) {
    return `${head}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="manifest" href="/site.webmanifest">
    `
  },
}

export default config

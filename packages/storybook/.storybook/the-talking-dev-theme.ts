import { create } from '@storybook/theming/create'
const logo = require('../public/logo.svg')

export default create({
  base: 'light',

  // Base colors
  colorSecondary: '#c4a878', //'#cdb89f', // orange
  colorPrimary: '#FEB336',

  // UI
  appBg: '#fffdfa',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#cdb79d',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  // Brand assets
  brandTitle: 'The Talking Dev',
  brandUrl: 'https://marknjoroge.vercel.app',
  brandImage: logo,
  brandTarget: '_self',
})

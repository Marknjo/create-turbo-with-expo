/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:@next/next/recommended'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
}

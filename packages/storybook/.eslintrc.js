/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...require('@mj/eslint/eslint-storybook.js'),
  extends: ['plugin:storybook/recommended'],
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}

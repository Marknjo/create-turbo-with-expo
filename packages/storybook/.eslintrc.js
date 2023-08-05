/** @type {import("eslint").Linter.Config} */
module.exports = {
  exports: ['@mj/eslint/eslint-storybook'],
  extends: ['plugin:storybook/recommended'],
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}

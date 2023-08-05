module.exports = {
  ...require('@mj/eslint/eslint-base.js'),
  ...require('@mj/eslint/eslint-react.js'),
  root: true,
  parserOptions: {
    // tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}

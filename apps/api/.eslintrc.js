module.exports = {
  ...require('@mj/eslint/eslint-api.js'),
  root: true,
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
}

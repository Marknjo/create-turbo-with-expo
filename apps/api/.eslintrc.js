module.exports = {
  exports: ['@mj/eslint/eslint-api'],
  root: true,
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
}

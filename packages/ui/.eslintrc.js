module.exports = {
  exports: [
    "@mj/eslint/eslint-base",
    "@mj/eslint/eslint-react"
  ],
 root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}

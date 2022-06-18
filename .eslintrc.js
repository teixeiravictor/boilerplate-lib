const ERROR = 2;

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['jest.config.ts'],
  rules: {
    'prettier/prettier': ERROR
  },
  env: {
    node: true,
    jest: true
  }
};

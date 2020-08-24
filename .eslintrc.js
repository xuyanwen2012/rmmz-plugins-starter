const globals = require('./rmmz_globals');

module.exports = {
  extends: [
    'eslint:recommended',
    'google',
  ],
  globals,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
  ],
  rules: {
    // Additional, per-project rules...
    'require-jsdoc': 'warn',
    'camelcase': 'off',
  },
};

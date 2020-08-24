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
  ignorePatterns: [
    '**/dist/*.js',
  ],
  rules: {
    'require-jsdoc': 'warn',
    // Turned off because RMMZ codebase does not follow this rule.
    // (e.g. Scene_Map)
    'camelcase': 'off',
    'no-unused-vars': 'warn',
  },
};

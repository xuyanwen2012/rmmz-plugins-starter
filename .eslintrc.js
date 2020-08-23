module.exports = {
  extends: [
    'eslint:recommended',
    'google',
  ],
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
  },
};

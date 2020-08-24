import pkg from './package.json';

export default {
  input: 'src/index.js',
  plugins: [],
  output: [
    {file: pkg.main, format: 'iife'},
  ],
};

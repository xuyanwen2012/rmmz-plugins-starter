/**
 * @param {any} pkg
 * @return {any}
 */
export function createConfig(pkg) {
  return {
    input: 'src/index.ts',
    // plugins: [], // pluginBanner(pkg)
    external: Object.keys(pkg.dependencies || {}),
    output: [
      {
        format: 'iife',
        file: pkg.main,
      },
    ],
  };
}

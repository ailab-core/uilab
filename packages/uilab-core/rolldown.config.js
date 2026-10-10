import { readFileSync } from 'node:fs'
import { defineConfig } from 'rolldown'
import { dts } from 'rolldown-plugin-dts'

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'))

// Dependencies and peer dependencies (and their subpaths, e.g. react/jsx-runtime) are
// resolved by the consumer instead of being bundled. This also keeps their own
// 'use client' directives intact (e.g. @base-ui/react), which bundling would drop
const deps = Object.keys({
  ...packageJson.dependencies,
  ...packageJson.peerDependencies,
})
const external = [
  new RegExp(`^(${deps.join('|')})(/.*)?$`),
  /\.css$/,
]

// CSS entry points are shipped as-is: styles.css (Tailwind @source + theme vars)
// and the theme-only files for projects with their own Tailwind setup
const cssFiles = ['styles.css', 'default.css']

/** @returns {import('rolldown').Plugin} */
function copyCss() {
  return {
    name: 'uilab:copy-css',
    buildStart() {
      for (const file of cssFiles) {
        this.addWatchFile(`src/${file}`)
        this.emitFile({
          type: 'asset',
          fileName: file,
          source: readFileSync(`src/${file}`, 'utf8'),
        })
      }
    },
  }
}

const shared = {
  input: { index: 'src/index.ts' },
  tsconfig: './tsconfig.json',
  external,
}

// Components are client components; keep the directive at the top of the bundle
const banner = (chunk) =>
  chunk.fileName.endsWith('.d.ts') ? '' : "'use client';"

export default defineConfig([
  // ESM bundle + type declarations + CSS
  {
    ...shared,
    plugins: [dts({ tsconfig: './tsconfig.json' }), copyCss()],
    output: {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].js',
      sourcemap: true,
      minify: true,
      banner,
    },
  },
  // CommonJS bundle
  {
    ...shared,
    output: {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
      exports: 'named',
      sourcemap: true,
      minify: true,
      banner,
    },
  },
])

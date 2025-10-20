import { readFileSync } from 'node:fs'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import postcssImport from 'postcss-import'
import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import typescriptEngine from 'typescript'

const packageJson = JSON.parse(readFileSync('./package.json'))

export default defineConfig([
  // JavaScript/TypeScript bundle
  {
    input: 'src/index.ts',
    output: [
      {
        name: packageJson.name,
        file: 'dist/index.cjs',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'dist/index.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      external({
        includeDependencies: true,
      }),
      typescript({
        typescript: typescriptEngine,
        tsconfig: './tsconfig.json',
        sourceMap: true,
      }),
      postcss({
        extract: false,
        inject: false,
      }),
      terser(),
    ],
    external: ['class-variance-authority/types'],
  },
  // Full CSS bundle (Tailwind utilities + theme variables)
  {
    input: 'src/styles.css',
    output: {
      file: 'dist/styles.css',
    },
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        plugins: [postcssImport()],
      }),
    ],
  },
  // Theme variables only (for projects with their own Tailwind setup)
  {
    input: 'src/theme.css',
    output: {
      file: 'dist/theme.css',
    },
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
  },
  // TypeScript declarations
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
])

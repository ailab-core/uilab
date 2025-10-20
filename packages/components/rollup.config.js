import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import typescriptEngine from 'typescript'

const packageJson = JSON.parse(readFileSync('./package.json'))

export default defineConfig([
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
        include: './src/index.css',
        extract: resolve('dist/index.css'),
        minimize: true,
      }),
      terser(),
    ],
    external: ['class-variance-authority/types'],
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
])

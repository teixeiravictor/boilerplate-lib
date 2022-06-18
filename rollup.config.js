import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import { terser } from 'rollup-plugin-terser';

const bundle = (config) => ({
  ...config,
  input: 'src/main.ts',
  external: (id) => !/^[./]/.test(id),
  plugins: [
    babel({ exclude: 'node_modules/**', babelHelpers: 'runtime' }),
    typescript(),
    terser()
  ]
});

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/index.mjs',
        format: 'es',
        sourcemap: true
      }
    ]
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
      sourcemap: true
    }
  })
];

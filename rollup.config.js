import babel from 'rollup-plugin-babel';
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default [
  {
    input: 'dist-transpiled/index.js',
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      resolve(),
      commonjs()
    ],
    external: ['styled-components', 'react'],
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true
      },
      {
        file: 'dist/index.js',
        format: 'commonjs',
        preferConst: true,
        sourcemap: true
      }
    ],
  }
]

import flow from 'rollup-plugin-flow';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-cpy';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'esm',
    exports: 'named',
    sourcemap: true,
    strict: false,
  },
  plugins: [
    nodeResolve(),
    flow(),
    babel({
      // ignore node_modules/ in transpilation process
      exclude: 'node_modules/**',
      // ignore .babelrc (if defined) and use options defined here
      babelrc: false,
      // use recommended babel-preset-env without es modules enabled
      // and with possibility to set custom targets e.g. { node: '8' }
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
      // solve a problem with spread operator transpilation https://github.com/rollup/rollup/issues/281
      plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-flow-strip-types'],
      // removes comments from output
      comments: false,
    }),
    commonjs(),
    // copy Flow definitions from source to destination directory
    copy({
      files: ['src/*.flow'],
      dest: 'dist',
    }),
  ],
  external: ['react', 'react-dom', 'bulma'],
};

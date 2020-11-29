import flow from 'rollup-plugin-flow';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import flowEntry from 'rollup-plugin-flow-entry';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
    strict: false,
  },
  plugins: [
    flowEntry(),
    nodeResolve(),
    flow(),
    babel({
      // ignore node_modules/ in transpilation process
      exclude: 'node_modules/**',
      // ignore .babelrc (if defined) and use options defined here
      babelrc: false,
      // use recommended babel-preset-env without es modules enabled
      // and with possibility to set custom targets e.g. { node: '8' }
      // presets: [['env', { modules: false, targets: { node: '12' } }]],
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
      // solve a problem with spread operator transpilation https://github.com/rollup/rollup/issues/281
      plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-flow-strip-types'],
      // removes comments from output
      comments: false,
    }),
    commonjs(),
  ],
  external: ['react', 'react-dom'],
};
// // plugins that we are going to use
// import babel from 'rollup-plugin-babel';
// import copy from 'rollup-plugin-cpy';
// import flow from 'rollup-plugin-flow';
// import commonjs from '@rollup/plugin-commonjs';
// import { nodeResolve } from '@rollup/plugin-node-resolve';

// // list of plugins used during building process
// const plugins = (targets) => [
//   nodeResolve(),
//   // remove flow annotations from output
//   flow(),
//   // use Babel to transpile to ES5
//   babel({
//     // ignore node_modules/ in transpilation process
//     exclude: 'node_modules/**',
//     // ignore .babelrc (if defined) and use options defined here
//     babelrc: false,
//     // use recommended babel-preset-env without es modules enabled
//     // and with possibility to set custom targets e.g. { node: '8' }
//     presets: [['env', { modules: false, targets }]],
//     // solve a problem with spread operator transpilation https://github.com/rollup/rollup/issues/281
//     plugins: ['babel-plugin-transform-object-rest-spread'],
//     // removes comments from output
//     comments: false,
//   }),
//   commonjs(),
//   // copy Flow definitions from source to destination directory
//   copy({
//     files: ['src/*.flow'],
//     dest: 'lib',
//   }),
// ];

// // packages that should be treated as external dependencies, not bundled
// const external = []; // e.g. ['axios']

// export default [
//   //   {
//   //     // source file / entrypoint
//   //     input: 'src/index.js',
//   //     // output configuration
//   //     output: {
//   //       // name visible for other scripts
//   //       name: 'react-bulma-io-components',
//   //       // output file location
//   //       file: 'lib/index.esm.js',
//   //       // format of generated JS file, also: esm, and others are available
//   //       format: 'esm',
//   //       // add sourcemaps
//   //       sourcemap: true,
//   //     },
//   //     external,
//   //     // build es modules for node 12
//   //     plugins: plugins({ node: '12' }),
//   //   },
//   {
//     input: 'src/index.js',
//     output: {
//       name: 'react-bulma-io-components',
//       file: 'lib/index.js',
//       format: 'cjs',
//       sourcemap: true,
//     },
//     external,
//     // build common JS for node 12
//     plugins: plugins({ node: '12' }),
//   },
// ];

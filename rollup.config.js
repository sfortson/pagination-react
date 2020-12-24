import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: {
    dir: pkg.main,
    format: 'cjs',
  },
  plugins: [typescript()],
  external: ['react', 'react/jsx-runtime'],
};

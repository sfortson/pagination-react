import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    {
      dir: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [typescript(), copy({ targets: [{ src: ['src/**/*', '!**/__tests__'], dest: 'lib' }] })],
  external: ['react', 'react/jsx-runtime'],
};

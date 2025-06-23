import typescript  from '@rollup/plugin-typescript';

// const tsconfigPath = './tsconfig.json'; // 指定 tsconfig 文件路径
import dts from 'rollup-plugin-dts';

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/index.cjs',
        format: 'cjs',
      },
      {
        file: 'lib/index.mjs',
        format: 'esm',
      },
    ],
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    output: { file: 'lib/index.d.ts', format: 'esm' },
    plugins: [dts()],
  },
];

 export default config;
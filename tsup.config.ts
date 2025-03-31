import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/clsx.ts', 'src/merge.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
});

import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/clsx.ts', 'src/state.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
});

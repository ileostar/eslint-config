import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/**/*.ts',
    'src/cli.ts',
  ],
  shims: true,
  dts: true,
  format: ['esm'],
  target: 'esnext',
  clean: true,
})

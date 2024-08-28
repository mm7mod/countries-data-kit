import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/CountryDetails.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],  
  dts: true, 
  splitting: false,
  sourcemap: false,
  clean: true,
  bundle: true,
  minify: true,
});

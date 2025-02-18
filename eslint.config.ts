import leostar from './src/index'

export default leostar({
  project: './tsconfig.json',
  tsconfigRootDir: import.meta.dirname,
  react: true,
  next: true,
  playwright: true,
  testingLibrary: true,
  turbo: true,
  typescript: true
})

# @ileostar/eslint-config

## Usage

```javascript
// eslint.config.mjs
import leostar from '@ileostar/eslint-config'

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
```

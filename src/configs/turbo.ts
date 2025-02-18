import type { Linter } from 'eslint'

import { turboPlugin } from '@/plugins'

export const turbo: Linter.Config[] = [
  {
    name: 'ileostar:turbo',
    plugins: {
      turbo: turboPlugin
    },
    rules: {
      ...turboPlugin.configs.recommended.rules
    }
  }
]

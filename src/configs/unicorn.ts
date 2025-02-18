import type { Linter } from 'eslint'

import { unicornPlugin } from '@/plugins'

export const unicorn: Linter.Config[] = [
  {
    name: 'ileostar:unicorn',
    plugins: {
      unicorn: unicornPlugin
    },
    rules: {
      ...unicornPlugin.configs.recommended.rules,
      'unicorn/no-await-expression-member': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-string-raw': 'off'
    }
  }
]

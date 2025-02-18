import {
  default14 as default2
} from "./chunk-EVFEIXMB.js";

// src/configs/unicorn.ts
var unicorn = [
  {
    name: "tszhong0411:unicorn",
    plugins: {
      unicorn: default2
    },
    rules: {
      ...default2.configs.recommended.rules,
      "unicorn/no-await-expression-member": "off",
      "unicorn/no-null": "off",
      "unicorn/prefer-export-from": ["error", { ignoreUsedVariables: true }],
      "unicorn/prevent-abbreviations": "off",
      "unicorn/prefer-string-raw": "off"
    }
  }
];

export {
  unicorn
};

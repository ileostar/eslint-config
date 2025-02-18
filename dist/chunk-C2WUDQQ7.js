import {
  GLOB_TS,
  GLOB_TSX
} from "./chunk-KLT7SCSF.js";
import {
  default4 as default2,
  default5 as default3
} from "./chunk-EVFEIXMB.js";

// src/configs/typescript.ts
var typescript = (options) => [
  {
    name: "tszhong0411:typescript",
    plugins: {
      "@typescript-eslint": default2
    },
    files: [GLOB_TS, GLOB_TSX],
    languageOptions: {
      parser: default3,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: options?.project,
        tsconfigRootDir: options?.tsconfigRootDir,
        sourceType: "module"
      }
    },
    rules: {
      ...default2.configs["recommended-type-checked"].rules,
      ...default2.configs["strict-type-checked"].rules,
      ...default2.configs["stylistic-type-checked"].rules,
      ...default2.configs["eslint-recommended"].overrides[0].rules,
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/no-invalid-this": "error",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports"
        }
      ],
      "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      // Turn off due to poor performance
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-floating-promises": "off"
    }
  }
];

export {
  typescript
};

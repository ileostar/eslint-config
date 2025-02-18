import {
  importPlugin
} from "./chunk-EVFEIXMB.js";

// src/configs/imports.ts
var imports = [
  {
    name: "tszhong0411:imports",
    plugins: {
      import: importPlugin
    },
    rules: {
      "import/no-amd": "error",
      "import/no-commonjs": "error",
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/no-mutable-exports": "error",
      "import/no-named-default": "error",
      "import/no-self-import": "error",
      "import/no-webpack-loader-syntax": "error",
      "import/newline-after-import": ["error", { count: 1 }]
    }
  }
];

export {
  imports
};

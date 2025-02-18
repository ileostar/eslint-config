import {
  default10 as default3,
  default6 as default2
} from "./chunk-EVFEIXMB.js";

// src/configs/prettier.ts
var prettier = [
  {
    name: "tszhong0411:prettier",
    plugins: {
      prettier: default3
    },
    rules: {
      // Avoid conflicts
      ...default2.rules,
      "prettier/prettier": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off"
    }
  }
];

export {
  prettier
};

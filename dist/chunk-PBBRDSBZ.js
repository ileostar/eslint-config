import {
  default7 as default2
} from "./chunk-EVFEIXMB.js";

// src/configs/comments.ts
var comments = [
  {
    name: "tszhong0411:comments",
    plugins: {
      "eslint-comments": default2
    },
    rules: {
      ...default2.configs.recommended.rules,
      "eslint-comments/require-description": "error"
    }
  }
];

export {
  comments
};

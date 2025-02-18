import {
  default3 as default2
} from "./chunk-EVFEIXMB.js";

// src/configs/next.ts
var next = [
  {
    name: "tszhong0411:next",
    plugins: {
      "@next/next": default2
    },
    rules: {
      ...default2.configs.recommended.rules,
      ...default2.configs["core-web-vitals"].rules,
      "@next/next/no-html-link-for-pages": "off"
    }
  }
];

export {
  next
};

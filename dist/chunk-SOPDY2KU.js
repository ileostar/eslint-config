import {
  GLOB_TEST
} from "./chunk-KLT7SCSF.js";
import {
  default13 as default2
} from "./chunk-EVFEIXMB.js";

// src/configs/testing-library.ts
var testingLibrary = [
  {
    name: "tszhong0411:testing-library",
    plugins: {
      "testing-library": default2
    },
    rules: {
      ...default2.configs.react.rules
    },
    files: [GLOB_TEST]
  }
];

export {
  testingLibrary
};

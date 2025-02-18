import {
  turboPlugin
} from "./chunk-EVFEIXMB.js";

// src/configs/turbo.ts
var turbo = [
  {
    name: "tszhong0411:turbo",
    plugins: {
      turbo: turboPlugin
    },
    rules: {
      ...turboPlugin.configs.recommended.rules
    }
  }
];

export {
  turbo
};

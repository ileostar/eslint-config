import {
  typescript
} from "./chunk-C2WUDQQ7.js";
import {
  unicorn
} from "./chunk-7SDCATUO.js";
import {
  next
} from "./chunk-3MS64ZJH.js";
import {
  playwright
} from "./chunk-6TYUC3E7.js";
import {
  prettier
} from "./chunk-JOJSS5K4.js";
import {
  react
} from "./chunk-QYICJKUS.js";
import {
  sonarjs
} from "./chunk-KMYJ7O2J.js";
import {
  testingLibrary
} from "./chunk-SOPDY2KU.js";
import {
  turbo
} from "./chunk-IDASO4DG.js";
import {
  comments
} from "./chunk-PBBRDSBZ.js";
import {
  ignores
} from "./chunk-QOJ3KGUY.js";
import {
  GLOB_E2E,
  GLOB_EXCLUDE,
  GLOB_JS,
  GLOB_JSX,
  GLOB_TEST,
  GLOB_TS,
  GLOB_TSX
} from "./chunk-KLT7SCSF.js";
import {
  importSort
} from "./chunk-GEBMW5GH.js";
import {
  imports
} from "./chunk-KR7RMZ7V.js";
import {
  javascript
} from "./chunk-JD7QW7C6.js";
import "./chunk-EVFEIXMB.js";

// src/index.ts
import { isPackageExists } from "local-pkg";
var hasTypeScript = isPackageExists("typescript");
var hasTurbo = isPackageExists("turbo");
var tszhong0411 = async (options = {}, ...userConfigs) => {
  const {
    typescript: enableTypeScript = hasTypeScript,
    react: enableReact = false,
    turbo: enableTurbo = hasTurbo,
    next: enableNext = false,
    playwright: enablePlaywright = false,
    testingLibrary: enableTestingLibrary = false,
    gitignore: enableGitignore = true
  } = options;
  const configs = [];
  if (enableGitignore) {
    configs.push((await import("eslint-config-flat-gitignore")).default());
  }
  configs.push(
    ...ignores,
    ...javascript,
    ...unicorn,
    ...comments,
    ...importSort,
    ...sonarjs,
    ...imports,
    ...prettier
  );
  if (enableTypeScript) {
    configs.push(...typescript(options));
  }
  if (enableReact) {
    configs.push(...react(options));
  }
  if (enableTurbo) {
    configs.push(...turbo);
  }
  if (enableNext) {
    configs.push(...next);
  }
  if (enablePlaywright) {
    configs.push(...playwright);
  }
  if (enableTestingLibrary) {
    configs.push(...testingLibrary);
  }
  configs.push(...userConfigs);
  return configs;
};
var src_default = tszhong0411;
export {
  GLOB_E2E,
  GLOB_EXCLUDE,
  GLOB_JS,
  GLOB_JSX,
  GLOB_TEST,
  GLOB_TS,
  GLOB_TSX,
  src_default as default
};

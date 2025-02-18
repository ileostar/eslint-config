// src/globs.ts
var GLOB_SRC_EXT = "?([cm])[jt]s?(x)";
var GLOB_JS = "**/*.?([cm])js";
var GLOB_JSX = "**/*.?([cm])jsx";
var GLOB_TS = "**/*.?([cm])ts";
var GLOB_TSX = "**/*.?([cm])tsx";
var GLOB_E2E = `**/e2e/**/*.{test,spec}.${GLOB_SRC_EXT}`;
var GLOB_TEST = `**/tests/**/*.{test,spec}.${GLOB_SRC_EXT}`;
var GLOB_EXCLUDE = [
  "**/node_modules",
  "**/dist",
  "**/package-lock.json",
  "**/yarn.lock",
  "**/pnpm-lock.yaml",
  "**/bun.lockb",
  "**/output",
  "**/coverage",
  "**/temp",
  "**/.temp",
  "**/tmp",
  "**/.tmp",
  "**/.history",
  "**/.next",
  "**/.vercel",
  "**/.changeset",
  "**/.cache",
  "**/CHANGELOG*.md",
  "**/LICENSE*"
];

export {
  GLOB_JS,
  GLOB_JSX,
  GLOB_TS,
  GLOB_TSX,
  GLOB_E2E,
  GLOB_TEST,
  GLOB_EXCLUDE
};

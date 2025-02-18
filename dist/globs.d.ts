declare const GLOB_JS = "**/*.?([cm])js";
declare const GLOB_JSX = "**/*.?([cm])jsx";
declare const GLOB_TS = "**/*.?([cm])ts";
declare const GLOB_TSX = "**/*.?([cm])tsx";
declare const GLOB_E2E = "**/e2e/**/*.{test,spec}.?([cm])[jt]s?(x)";
declare const GLOB_TEST = "**/tests/**/*.{test,spec}.?([cm])[jt]s?(x)";
declare const GLOB_EXCLUDE: string[];

export { GLOB_E2E, GLOB_EXCLUDE, GLOB_JS, GLOB_JSX, GLOB_TEST, GLOB_TS, GLOB_TSX };

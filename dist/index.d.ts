import { Linter } from 'eslint';
export { GLOB_E2E, GLOB_EXCLUDE, GLOB_JS, GLOB_JSX, GLOB_TEST, GLOB_TS, GLOB_TSX } from './globs.js';

type Options = {
    typescript?: boolean;
    react?: boolean;
    turbo?: boolean;
    next?: boolean;
    playwright?: boolean;
    testingLibrary?: boolean;
    gitignore?: boolean;
    project?: string;
    tsconfigRootDir?: string;
};
type Configs = Linter.Config[];
declare const tszhong0411: (options?: Options, ...userConfigs: Configs) => Promise<Configs>;

export { type Configs, type Options, tszhong0411 as default };

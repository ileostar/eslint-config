import { Options } from '../index.js';
import { Linter } from 'eslint';
import '../globs.js';

declare const react: (options?: Options) => Linter.Config[];

export { react };

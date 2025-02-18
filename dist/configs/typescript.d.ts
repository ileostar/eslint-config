import { Options } from '../index.js';
import { Linter } from 'eslint';
import '../globs.js';

declare const typescript: (options?: Options) => Linter.Config[];

export { typescript };

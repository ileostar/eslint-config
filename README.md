# @ileostar/eslint-config

<div align='left'>
<b>English</b> | <a href="README.zh-cn.md">简体中文</a>
<br>
</div>

## Features

- "double quotes", must semi;
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue out-of-box
- Lint also for JSON、YAML、Markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

#### run the following command:

### Install

```bash
pnpm add -D eslint @ileostar/eslint-config
```

### add this to your `.eslintrc` file:

```json
{
  "extends": "@ileostar"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },
  // The following section is optional.
  // It is recommended to place it in the project's .vscode/settings.json file
  // to avoid conflicts when working with different eslint configurations
  // that may not support all formats.
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```

### Customization rules

add you like rules to your `.eslintrc` file:

```json
{
  "extends": ["@ileostar"],
  "rules": {
    "vue/component-tags-order": [
      "error",
      {
        "order": ["template", "script", "style"]
      }
    ]
  }
}
```

### TypeScript Aware Rules

Type aware rules are enabled when a `tsconfig.eslint.json` is found in the project root. If you want to enable it while have no `tsconfig.eslint.json` in the project root, you can change tsconfig name by modifying `ESLINT_TSCONFIG` env.

```js
// .eslintrc.js
const process = require("node:process");

process.env.ESLINT_TSCONFIG = "tsconfig.json";

module.exports = {
  extends: "@ileostar",
};
```

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![ileostar-code-style-image](https://img.shields.io/badge/code__style-%40ileostar%2Feslint--config-brightgreen)](https://github.com/ileostar/eslint-config/)

```markdown
[![ileostar-code-style-image](https://img.shields.io/badge/code__style-%40ileostar%2Feslint--config-brightgreen)](https://github.com/ileostar/eslint-config/)
```

[code-style-image]: https://img.shields.io/badge/code__style-%40ileostar%2Feslint--config-brightgreen
[code-style-url]: https://github.com/ileostar/eslint-config/

## Thanks

This project is based on [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT](./LICENSE) License &copy; 2019-PRESENT [Kirk Lin](https://github.com/ileostar)

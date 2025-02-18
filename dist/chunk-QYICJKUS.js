import {
  GLOB_JS,
  GLOB_JSX,
  GLOB_TS,
  GLOB_TSX
} from "./chunk-KLT7SCSF.js";
import {
  default11 as default5,
  default2,
  default5 as default3,
  default8 as default4
} from "./chunk-EVFEIXMB.js";

// src/configs/react.ts
var react = (options) => {
  const reactPluginAll = default2.configs.all;
  return [
    {
      name: "tszhong0411:react",
      plugins: {
        ...reactPluginAll.plugins,
        "react-hooks": default5,
        "jsx-a11y": default4
      },
      files: [GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX],
      languageOptions: {
        parser: default3,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          project: options?.project,
          sourceType: "module"
        }
      },
      rules: {
        ...reactPluginAll.rules,
        ...default5.configs.recommended.rules,
        ...default4.configs.strict.rules,
        // @eslint-react
        "@eslint-react/no-leaked-conditional-rendering": "error",
        "@eslint-react/avoid-shorthand-boolean": "off",
        "@eslint-react/avoid-shorthand-fragment": "off",
        "@eslint-react/prefer-destructuring-assignment": "off",
        "@eslint-react/no-array-index-key": "off",
        "@eslint-react/no-complex-conditional-rendering": "off",
        // @eslint-react/hooks-extra
        "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "off",
        // @eslint-react/dom
        "@eslint-react/dom/no-dangerously-set-innerhtml": "off",
        // @eslint-react/naming-convention
        "@eslint-react/naming-convention/filename": [
          "error",
          {
            rule: "kebab-case"
          }
        ],
        // jsx-a11y
        "jsx-a11y/alt-text": [
          "error",
          {
            elements: ["img"],
            img: ["Image"]
          }
        ],
        "jsx-a11y/lang": "error",
        "jsx-a11y/no-aria-hidden-on-focusable": "error",
        "jsx-a11y/no-noninteractive-element-to-interactive-role": [
          "error",
          {
            ul: ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
            ol: ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
            li: ["menuitem", "option", "row", "tab", "treeitem"],
            table: ["grid"],
            td: ["gridcell"]
          }
        ]
      },
      settings: {
        "jsx-a11y": {
          components: {
            Button: "button",
            Image: "img",
            Input: "input",
            Textarea: "textarea",
            Link: "a"
          }
        },
        ...reactPluginAll.settings
      }
    }
  ];
};

export {
  react
};

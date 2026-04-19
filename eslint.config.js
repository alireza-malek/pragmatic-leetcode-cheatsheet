import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import ts from "typescript-eslint";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs["flat/recommended"],

  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },

  {
    files: ["**/*.ts", "**/*.vue"],
    rules: {
      "no-undef": "off", // TypeScript handles scope analysis better than no-undef
    },
  },

  {
    ignores: [
      ".vitepress/cache",
      ".vitepress/dist",
      "node_modules",
    ],
  },

  {
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
    },
  },
];

import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  { ignores: ["dist/**", "cypress/screenshots/**", "cypress/videos/**"] },
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
    },
    rules: {
      "vue/multi-word-component-names": ["error", { ignores: ["App"] }],
      // Storage access can throw (private mode, blocked cookies); those failures are safe to ignore.
      "no-empty": ["error", { allowEmptyCatch: true }],
    },
  },
  {
    files: ["*.config.js"],
    languageOptions: { globals: { ...globals.node } },
  },
  {
    files: ["cypress/**/*.js"],
    languageOptions: { globals: { ...globals.mocha, cy: "readonly", Cypress: "readonly", expect: "readonly" } },
  },
  prettier,
];

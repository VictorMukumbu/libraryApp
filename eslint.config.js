import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      sourceType: "module",

      globals: {
        ...globals.browser,
      },
    },

    rules: {
      eqeqeq: "error",
      "no-var": "error",
      "prefer-const": "error",
    },
  },

  eslintConfigPrettier,
];
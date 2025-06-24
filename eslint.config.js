import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        browser: true,
        node: true,
        es2021: true,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
      "@next/eslint-plugin-next": nextPlugin,
    },
    rules: {
      curly: ["error", "all"],
      "no-duplicate-imports": ["error", { includeExports: true }],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "prefer-const": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-param-reassign": [
        "error",
        { props: true, ignorePropertyModificationsFor: ["state"] },
      ],
      quotes: ["error", "single", { avoidEscape: true }],
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "never",
        },
      ],
      "react/jsx-fragments": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-key": "error",
      "react/jsx-sort-props": "error",
      "react/jsx-no-useless-fragment": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/consistent-type-assertions": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/array-type": ["error", { default: "generic" }],
      "import/prefer-default-export": "off",
      "import/no-named-as-default": "error",
      "import/no-unresolved": "error",
      "import/no-cycle": "error",
      "prettier/prettier": [
        "error",
        { semi: true, singleQuote: true, trailingComma: "es5" },
      ],
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      ".next/static/**",
      "out/**",
      ".stylelintrc.js",
    ],
  },
];

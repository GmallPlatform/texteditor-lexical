import eslint from "@eslint/js";
import * as tseslint from "@typescript-eslint/eslint-plugin";
import * as tseslintParser from "@typescript-eslint/parser";

import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import sortKeysFix from "eslint-plugin-sort-keys-fix";

export default [
  eslint.configs.recommended,
  {
    ignores: ["src/components/Lexical/ErrorBoundary.tsx"],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslintParser, // Используем TypeScript парсер
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Поддержка JSX
        },
        project: "./tsconfig.json", // Указываем путь к файлу tsconfig.json
      },
      globals: {
        ...globals.browser,
        NodeJS: "readonly", // Добавляем глобальное определение NodeJS для избежания ошибок
        JSX: "readonly", // 📌 Добавляем JSX, чтобы ESLint не ругался
      },
    },
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettierPlugin,
      "sort-keys-fix": sortKeysFix,
    },
    rules: {
      // Основные правила TypeScript
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^React$" }, // Игнорируем неиспользуемые переменные, начинающиеся с "_"
      ],
      "@typescript-eslint/no-explicit-any": "off",

      // Правила для React
      ...reactPlugin.configs.recommended.rules,
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off", // 📌 Отключаем ошибку про импорт React в JSX (не нужен в React 17+)
      "react-hooks/rules-of-hooks": "error", // Обеспечиваем правильное использование хуков
      "react-hooks/exhaustive-deps": "warn", // Проверка зависимости хуков (useEffect и др.)

      // Отключаем ошибки про `JSX is not defined`
      "no-undef": "off",

      // Правила Prettier
      "prettier/prettier": "warn", // Интеграция с Prettier для форматирования

      // Дополнительные правила
      "no-console": "off",
      "no-debugger": "warn",
      "consistent-return": "warn",
      "react/no-unescaped-entities": "off",
    },
  },
];

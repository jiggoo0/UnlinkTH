/** @format */
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const nextPlugin = require("@next/eslint-plugin-next")

export default tseslint.config(
  {
    ignores: [
      ".gemini/**",
      "commands/**",
      "skills/**",
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**",
      "**/*.d.ts",
      "*.config.mjs",
      "*.config.ts",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      "react/react-in-jsx-scope": "off",

      // คุมเข้มเรื่องการใช้ Type ในโฟลเดอร์ constants และ lib
      "@typescript-eslint/no-explicit-any": "error",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // บังคับใช้ Next Image เท่านั้น เพราะโปรเจกต์คุณมีรูปใน public/images เยอะมาก
      "@next/next/no-img-element": "error",

      // ห้ามเขียน inline style ที่ซับซ้อนในหน้า MDX (เพื่อรักษา Pagespeed)
      "no-inline-comments": "off",
    },
  }
)

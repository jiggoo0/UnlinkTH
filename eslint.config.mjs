/** @format */
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const nextPlugin = require("@next/eslint-plugin-next")

export default tseslint.config({
  // 1. กำหนดไฟล์ที่จะตรวจสอบและ Parser
  files: ["**/*.{ts,tsx,js,jsx}"],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
  // 2. Ignores
  ignores: [
    ".next/**",
    "node_modules/**",
    "out/**",
    "public/**",
    "**/*.d.ts",
    "eslint.config.mjs",
  ],
  // 3. Plugins
  plugins: {
    "@next/next": nextPlugin,
    "@typescript-eslint": tseslint.plugin,
  },
  // 4. Rules
  rules: {
    ...js.configs.recommended.rules,
    ...tseslint.configs.recommended[1].rules, // ดึงกฎแนะนำของ TS
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,

    "react/react-in-jsx-scope": "off",
    "no-undef": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@next/next/no-img-element": "warn",
  },
})

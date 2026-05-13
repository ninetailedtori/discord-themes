import skipFormatting from "eslint-config-prettier/flat";
import pluginOxlint from "eslint-plugin-oxlint";
import { globalIgnores } from "eslint/config";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
  },

  globalIgnores(["**/dist/**", "**/out/**", "**/coverage/**"]),

  ...pluginOxlint.buildFromOxlintConfigFile(".oxlintrc.json"),

  skipFormatting,
];

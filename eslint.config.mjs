import next from "eslint-config-next";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = [
  ...next,
  prettier,
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**", "next-env.d.ts"],
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@next/next/no-img-element": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // Cosmetic: apostrophes in copy are fine in this template.
      "react/no-unescaped-entities": "off",
      // React Compiler advisories: some components rely on intentional
      // imperative patterns, so surface these as warnings only.
      "react-hooks/immutability": "warn",
      "react-hooks/refs": "warn",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;

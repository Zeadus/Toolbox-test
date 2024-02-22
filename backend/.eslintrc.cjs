module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "**/*.spec.ts"],
  parserOptions: {
    emcaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["import"],
  rules: {
    "no-console": "warn",
    "import/extensions": "disable",
    "import/prefer-default-export": "warn",
  },
};

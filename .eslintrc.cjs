console.log("🔍🕵️  Reviewing and Fixing the Problem!");

module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    'no-unused-vars': 'off',
    "prettier/prettier": "error",
    "no-console": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    quotes: ["error", "double"],
    semi: "off",
    "space-before-function-paren": ["off", "always"],
    "arrow-parens": ["off", "always"]
  }
};

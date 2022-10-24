module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: 0,
    "no-var": 0,
    strict: 0,
    "lines-around-directive": 0,
    "linebreak-style": 0,
  },
};

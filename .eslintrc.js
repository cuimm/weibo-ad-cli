module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-console": 0,
    "semi": 0,
    "arrow-parens": 0,
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "no-unused-expressions": 0,
  },
};

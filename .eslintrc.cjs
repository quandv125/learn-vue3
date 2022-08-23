/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'plugin:vue/strongly-recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}',
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
      extends: ['plugin:cypress/recommended'],
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    'vue/no-multiple-template-root': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': 'off',
    'eol-last': 'error',
  },
}

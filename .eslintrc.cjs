/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/eslint-config-typescript', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    indent: [
      'error',
      4
    ],
    'vue/html-indent': [
      'error',
      4,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-import-module-exports': 'off',
    'import/no-relative-packages': 'off',
    'import/extensions': 'off',
    'max-len': 'off',
    'global-require': 0
  }
}

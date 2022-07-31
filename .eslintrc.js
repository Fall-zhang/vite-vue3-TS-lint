module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    // vue 的全局变量
    defineProps: true,
    // ref: true,
    reactive: true
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/first-attribute-linebreak': 0,
    'vue/no-multiple-template-root': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 5,
        multiline: 4
      }
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, 'never'],
    'no-irregular-whitespace': 2
  }
}

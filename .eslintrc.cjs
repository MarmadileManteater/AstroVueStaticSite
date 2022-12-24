module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
    'no-console': 'off',
    'indent': ['error', 2],
    'semi': ['error', 'never'],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'jsx-quotes': ['error', 'prefer-single']
  }
}

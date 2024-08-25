module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  extends: ['@nuxtjs', 'prettier'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-undef': 'off',
    'prettier/prettier': 'warn',
    'vue/no-v-model-argument': 'warn' // v-model:xxx v-model 自訂參數警告
  }
}

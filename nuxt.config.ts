// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-content-twoslash', // this needs to be before `@nuxt/content`
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    documentDriven: true,
    navigation: {
      fields: ['tags', 'date']
    },
    highlight: {
      theme: 'github-dark', // 你可以選擇任何 Shiki 支援的主題
      preload: ['javascript', 'html', 'css'], // 預加載的語言
      langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml'] // 指定 Shiki 應該支持的語言列表，用到會加載
    }
  },
  twoslash: {
    // ...
  },
  compatibilityDate: '2024-08-25',
  css: ['~/assets/style/main.scss']
})

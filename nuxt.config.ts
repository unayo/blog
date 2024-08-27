// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image', '@nuxtjs/tailwindcss'],
  content: {
    documentDriven: true,
    // page: true,
    navigation: {
      fields: ['tags', 'date']
    }
  },
  compatibilityDate: '2024-08-25',
  css: ['~/assets/style/main.scss']
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  runtimeConfig: {
    nasaApiKey: process.env.NASA_API_KEY
  },
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
			crawlLinks: false,
			routes: ['/', '/learn/nasa', '/learn/astronomy', '/about']
		},
		output: {
      dir: '.output',
      publicDir: 'dist'
    },
    static: true,
    routeRules: {
      '/**': { static: true }
    }
  },
  build: {
    transpile: []
  }
})
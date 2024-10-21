export default defineNuxtConfig({
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify'],
  },
  plugins: ['~/plugins/vuetify.ts'], // Vuetify plugin'i burada eklenir
})

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr:true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/style/css/main.css'],
  modules: ['@pinia/nuxt','@vueform/nuxt'],

  vite:{
    plugins:[
      tailwindcss()
    ]
  },

})
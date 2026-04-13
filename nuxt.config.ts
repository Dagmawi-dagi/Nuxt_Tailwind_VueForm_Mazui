// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr:true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/style/css/main.css','~/assets/style/scss/main.scss'],
  modules: ['@pinia/nuxt','@vueform/nuxt','@maz-ui/nuxt'],

  vite:{
    plugins:[
      tailwindcss()
    ]
  },
  mazUi: {
    // Theme System
    general: {
      // Enable Nuxt DevTools integration
      devtools: true,
    },

    theme: {
      preset: 'mazUi', // Choose: 'mazUi', 'ocean', 'pristine', 'obsidian'
      strategy: 'hybrid', // 'runtime' | 'buildtime' | 'hybrid'
      darkModeStrategy: 'class', // 'class' | 'media' | 'auto'
      mode: 'both', // 'light' | 'dark' | 'both' (supported color modes)
      colorMode: 'light', // 'auto' | 'light' | 'dark' (initial color mode, only if mode is 'both')
    },

    // Translations
    translations: {
      locale: 'en', // Default language
      fallbackLocale: 'fr',
    },

    // Components (all enabled by default)
    components: {
      autoImport: true, // Auto-import all components globally
    },

    // Composables (customize what you need)
    composables: {
      useTheme: true,
      // ... all others enabled by default
    },

    // Directives
    directives: {
      vTooltip: true,
      vClickOutside: true,
      vFullscreenImg: true,
      vZoomImg: true,
    },
  },
  app:{
    head:{
      title: 'nuxt_tail_vueform_mazuii'
    }
  }
})
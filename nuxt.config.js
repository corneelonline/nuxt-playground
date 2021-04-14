export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '_PAGE_TITLE_',
    titleTemplate: '%s | Nuxt Playground',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '_PAGE_DESCRIPTION_',
      },
      {
        hid: 'image',
        name: 'image',
        content: '_IMAGE_URL_',
      },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '_PAGE_TITLE_',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: '_PAGE_DESCRIPTION_',
      },
      { 
        hid: 'twitter:site', 
        name: 'twitter:site', 
        content: '@CorneelO' 
      },
      { 
        hid: 'twitter:creator', 
        name: 'twitter:creator', 
        content: '@CorneelO' 
      },
      {
        hid: 'twitter:image:src',
        name: 'twitter:image:src',
        content: '_IMAGE_URL_',
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      {
        hid: 'og:title',
        property: 'og:title',
        content: '_PAGE_TITLE_',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '_PAGE_DESCRIPTION_',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '_IMAGE_URL_',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: '_PAGE_URL_',
      },
      { 
        hid: 'og:site_name', 
        property: 'og:site_name', 
        content: '_SITE_NAME_' 
      },
      { 
        hid: 'og:type', 
        property: 'og:type', 
        content: 'website' 
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'nl_NL',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.baseUrl,
      },
    ],
    htmlAttrs: {
      lang: 'nl',
    },
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/prism', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],

  // Make SCSS variables and styles globally available in the project
  styleResources: {
    scss: ['assets/styles/main.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

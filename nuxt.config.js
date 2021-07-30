export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  // The HTML head area >>>
  head: {
    title: 'Artyom Kouznetsov - Web Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio of Artyom Kouznetsov' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Nunito&display=swap"}
    ],
  },

  // Global CSS files: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/responsive.css',
    '~/assets/css/reset.css',
    // '~/assets/fonts/roboto.css',
    '~/assets/css/fonts.css',
    '~/assets/css/animation.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // Load certain functionnalities and execute some code before the app is mounted
  plugins: [
    // Loading global components >>>
    // '~plugins/core-components.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
  ],

  // Arti Test Module
  testMessage: 'Test Message from Nuxt Config JS',

  fontawesome: {
    component: 'fa',
    icons: {
      // solid: true,
      // In order not to load ALL icon sets, you need to specify which 
      solid: ['faEnvelope', 'faLock', 'faExternalLinkAlt'],
      brands: []
    },
  },

  // Customize the color bar
  loading: {
    color: 'blue',
    height: '15px',
    failedColor: 'yellow',
    duration: 5000
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['~/modules/arti-test-module', { token: '0494 23 93 57'}]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Environment variables
  // env: {
  //   baseUrl: process.env.BASE_URL || 'someUrl'
  // }
  // <<< Then use process.env.baseUrl wherever I need in my code

  transition: {
    name: 'fade',
    // <<< fade is the first part of the class we use in animation.css
    mode: 'out-in'
  }

}


import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // router: {
  //   base: '/site/'
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - SM Agency',
    title: 'Главная',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Разработка веб-приложений на Vue.js и FastAPI, создание мобильных приложений с использованием React Native, развертывание приложением с помощью Docker и Kubernetes',
      },
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@mdi/font/css/materialdesignicons.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  plugins: [
    {
      src: '~/plugins/vue-video-background',
      ssr: false,
    },
    {
      src: '~/plugins/vuelidate.js',
      mode: 'both',
    },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Open Sans',
      },
    },
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
      dark: true,
      themes: {
        // https://theme-generator.vuetifyjs.com/
        dark: {
          primary: '#2196f3',
          secondary: '#ff9800',
          accent: '#cddc39',
          error: '#f44336',
          warning: '#9c27b0',
          info: '#03a9f4',
          success: '#4caf50',
        },
      },
    },
    customVariables: ['~/assets/variables.sass'],
  },

  eslint: {
    fix: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: true,
  },
}

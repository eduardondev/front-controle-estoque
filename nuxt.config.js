export default {
  server: {
    port: 5001,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front-controle-estoque',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/layouts/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-quagga'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth', 'cookie-universal-nuxt'],

  axios: {
    baseURL: 'http://localhost:1701/v1',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'token',
          },
          user: {
            url: '/auth',
            method: 'get',
            propertyName: null,
          },
        },
      },
    },
    redirect: {
      home: '/dashboard',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Rick And Morty Nuxt.js App',
    titleTemplate: '%s - Rick And Morty',
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A simple Nuxt.js implementation of Rick and Morty API',
      },
    ],
    link: [
      {
        rel: 'preload',
        as: 'style',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */

  styleResources: {
    scss: '@/assets/scss/variables.scss',
  },

  css: ['@/assets/scss/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-lazyload.js', ssr: false },
    { src: '~/plugins/vuex-persist.js', ssr: false },
    { src: '~/plugins/fontawesome.js', ssr: false },
    { src: '~/plugins/aos.js', ssr: false },
    { src: '~/plugins/filters.js' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
      plugins: {
        'rucksack-css': {},
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};

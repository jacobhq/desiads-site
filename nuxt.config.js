export default {
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'Desiads',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://static.desica.uk/hotlink-ok/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#a239c5' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};

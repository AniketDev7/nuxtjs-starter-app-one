export default {
  target: 'static',
  env: {
    CONTENTSTACK_API_KEY: process.env.CONTENTSTACK_API_KEY,
    CONTENTSTACK_DELIVERY_TOKEN: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    CONTENTSTACK_PUBLISH_ENVIRONMENT: process.env.CONTENTSTACK_PUBLISH_ENV,
    CONTENTSTACK_REGION: process.env.CONTENTSTACK_REGION
      ? process.env.CONTENTSTACK_REGION
      : '',
  },
  head: {
    title: 'contentstack-nuxtjs-starter-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#317EFB' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: '/css/third-party.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Inter&amp;display=swap',
      },
    ],
  },
  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/robots'],
  robots: {
    UserAgent: '*',
  },
  pwa: {
    icon: {
      purpose: ['any', 'maskable'],
      source: 'static/nuxt-icon.png',
    },
    manifest: {
      name: 'contentstack nuxtjs starter app',
      lang: 'en-us',
      useWebmanifestExtension: true,
      theme_color: '#317EFB',
    },
  },
  axios: {},

  content: {},
  build: { html: { minify: { collapseWhitespace: true } } },
}

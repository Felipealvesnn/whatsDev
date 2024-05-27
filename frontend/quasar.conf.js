/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v1.quasar.dev/quasar-cli/quasar-conf-js

module.exports = function (/* ctx */) {
  return {
    supportTS: false,

    boot: [],

    css: [
      'app.scss'
    ],

    extras: [
      'fontawesome-v6',
      'roboto-font',
      'material-icons',
    ],

    build: {
      vueRouterMode: 'hash', // available values: 'hash', 'history'

      extendWebpack (cfg) {
        cfg.devtool = 'source-map'
      }
    },

    devServer: {
      https: false,
      port: 8080,
      proxy: {
        '/socket.io': {
          target: 'http://localhost:3333',
          ws: true,
          changeOrigin: true
        }
      },
      open: true // opens browser window automatically
    },

    framework: {
      iconSet: 'material-icons',
      lang: 'en-us',
      config: {},

      importStrategy: 'auto',

      plugins: ['Notify', 'Dialog', 'LocalStorage']
    },

    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {},
      manifest: {
        name: `Quasar App`,
        short_name: `Quasar App`,
        description: `A Quasar Project`,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true
    },

    electron: {
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'whatsdev'
      },
      nodeIntegration: true,
      extendWebpack (/* cfg */) {}
    }
  }
}

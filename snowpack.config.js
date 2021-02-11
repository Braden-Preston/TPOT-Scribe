const { pugSnowpackAlias } = require('./custom/pug-plugin-alias')
const pugPluginAlias = require('pug-alias')

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/'
  },
  devOptions: {
    port: 3000
  },
  buildOptions: {
    sourcemap: false,
    htmlFragments: true
  },
  exclude: ['**/**/*.stories.js'],
  // SPA Fallback to allow index.html to handle client routing
  routes: [{ match: 'routes', src: '.*', dest: 'index.html' }],
  alias: {
    '@functions': './src/functions',
    '@models': './src/models',
    '@tools': './src/tools'
  },
  plugins: [
    [
      '@marlonmarcello/snowpack-plugin-pug',
      {
        plugins: [
          // Add alias support to imports called from pug
          // Ex: "include @templates/button"
          pugPluginAlias({
            ...pugSnowpackAlias({
              '@templates': 'src/templates',
              '@layouts': 'src/layouts',
              '@pages': 'src/pages'
            })
          })
        ]
      }
    ]
  ]
}

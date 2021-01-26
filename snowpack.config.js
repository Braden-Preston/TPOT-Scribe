const fs = require('fs')
const path = require('path')
const pugPluginAlias = require('pug-alias')

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  devOptions: {
    port: 3000
  },
  // SPA Fallback to allow index.html to handle client routing
  routes: [{ match: 'routes', src: '.*', dest: 'index.html' }],
  alias: {
    '@tools': './src/tools',
    '@models': './src/models',
    '@router': './src/router',
    '@functions': './src/functions'
  },
  plugins: [
    // Add support for pug as a templating language
    [
      '@marlonmarcello/snowpack-plugin-pug',
      {
        // Global variables available to pug files
        data: {
          meta: {
            title: 'My Website'
          }
        },
        plugins: [
          // Add alias support to imports called from pug
          // Ex: "include @templates/button"
          pugPluginAlias({
            '@': s => s.replace(/^@/, 'src'),
            '@templates': s => pugFolder(s, 'src/templates'),
            '@layouts': s => pugFolder(s, 'src/layouts'),
            '@router': s => pugFolder(s, 'src/router'),
            '@pages': s => pugFolder(s, 'src/pages')
          })
        ]
      }
    ]
  ]
}

const pugFolder = (s, d) => {
  let srcpth = s.replace(/@\w+/, d)
  let isfolder = !fs.existsSync(path.join(__dirname, srcpth))
  return isfolder ? srcpth.replace(/.pug/, '/index.pug') : srcpth
}

const fs = require('fs')
const path = require('path')
const pugPluginAlias = require('pug-alias')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  devOptions: {
    port: 3000
  },
  buildOptions: {
    sourcemap: false,
    htmlFragments: true
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
    // ['@snowpack/plugin-babel'],
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
    ],
    // ['@marlonmarcello/snowpack-plugin-pug'],
    // ['@snowpack/plugin-webpack']
  ]
  // plugins: [
  //   [
  //     ['@snowpack/plugin-babel'],
  //     // ! Use Webpack for bundling production builds
  //     [
  //       '@snowpack/plugin-webpack',
  //       {
  //         // Snowpack settings which are passed to webpack
  //         // sourceMap: false,
  //         // manifest: true,
  //         htmlMinifierOptions: false,
  //         // htmlMinifierOptions: {
  //         //   collapseWhitespace: true,
  //         //   removeComments: true,
  //         //   removeEmptyAttributes: true,
  //         //   removeRedundantAttributes: true,
  //         //   removeScriptTypeAttributes: true,
  //         //   removeStyleLinkTypeAttributes: true
  //         // },

  //         extendConfig: config => {
  //           console.log('config.entry', config.entry)
  //           console.log('config.context', config.context)
  //           console.log('config.output.path', config.output.path)
  //           console.log('config.output.publicPath', config.output.publicPath)
  //           console.log('config.output.filename', config.output.filename)
  //           console.log(path.join(__dirname, 'public', 'index.pug'))

  //           config.entry.index

  //           config.module.rules.unshift({
  //             test: /\.pug$/,
  //             use: ['pug-loader']
  //           })

  //           config.plugins.push(
  //             // new HtmlWebpackPlugin({
  //             //   template: './public/stuff.pug',
  //             //   inject: false
  //             // }),
  //             new BundleAnalyzerPlugin({
  //               analyzerMode: 'static',
  //               reportTitle: 'TPOT Scribe Bundle Report',
  //               reportFilename: 'bundle.html',
  //               openAnalyzer: false,
  //               generateStatsFile: true
  //             })
  //           )

  //           // print and return the config
  //           console.log(config.module.rules)
  //           console.log(config)
  //           return config
  //         }
  //       }
  //     ]
  //   ]
  //   // [
  //   //   // Add support for pug as a templating language
  //   //   ('@marlonmarcello/snowpack-plugin-pug',
  //   //   {
  //   //     // Global variables available to pug files
  //   //     data: {
  //   //       meta: {
  //   //         title: 'My Website'
  //   //       }
  //   //     },
  //   //     plugins: [
  //   //       // Add alias support to imports called from pug
  //   //       // Ex: "include @templates/button"
  //   //       pugPluginAlias({
  //   //         '@': s => s.replace(/^@/, 'src'),
  //   //         '@templates': s => pugFolder(s, 'src/templates'),
  //   //         '@layouts': s => pugFolder(s, 'src/layouts'),
  //   //         '@router': s => pugFolder(s, 'src/router'),
  //   //         '@pages': s => pugFolder(s, 'src/pages')
  //   //       })
  //   //     ]
  //   //   })
  //   // ]
  // ]
}

const pugFolder = (s, d) => {
  let srcpth = s.replace(/@\w+/, d)
  let isfolder = !fs.existsSync(path.join(__dirname, srcpth))
  return isfolder ? srcpth.replace(/.pug/, '/index.pug') : srcpth
}

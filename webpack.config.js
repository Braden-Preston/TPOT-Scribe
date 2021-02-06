const path = require('path')

const resolve = paths => path.resolve(process.cwd(), paths)

const WebpackBar = require('webpackbar')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { pugWebpackAlias } = require('./plugins/pug-plugin-alias')

const HtmlWebpackSkipAssetsPlugin = require('html-webpack-skip-assets-plugin')
  .HtmlWebpackSkipAssetsPlugin
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

//
// Webpack Production Bundle Configuration
//

/** @type {import("webpack").Configuration } */
module.exports = {
  mode: 'production',
  entry: {
    index: ['./src/index.js', './src/index.css']
  },
  output: {
    path: resolve('build'),
    chunkFilename: 'js/[name].js',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', 'ts', 'pug'],
    alias: {
      // Aliases for .js, .ts, .etc.
      '@functions': resolve('src/functions'),
      '@models': resolve('src/models'),
      '@tools': resolve('src/tools'),
      // Aliases specific to pug
      ...pugWebpackAlias({
        '@templates': 'src/templates',
        '@layouts': 'src/layouts',
        '@pages': 'src/pages'
      })
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  },
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      chunkFilename: 'css/[name].css',
      filename: '[name].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/*.pug']
          }
        }
      ]
    }),
    new BundleAnalyzerPlugin({
      generateStatsFile: true
    }),
    new WebpackManifestPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './public/index.pug',
      minify: {
        html5: true,
        decodeEntities: true,
        removeComments: true,
        useShortDoctype: true,
        keepClosingSlash: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
    new HtmlWebpackSkipAssetsPlugin({
      excludeAssets: ['index.js', 'index.css']
    }),
    new ScriptExtHtmlWebpackPlugin({
      module: /\.js$/,
      async: /\.js$/
    })
    // new StyleExtHtmlWebpackPlugin({
    //   cssRegExp: /\.css$/,
    //   position: 'body-bottom'
    // })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          ecma: '2018',
          format: {
            semicolons: false,
            comments: false
          },
          compress: {
            passes: 10,
            booleans_as_integers: true,
            drop_console: true,
            keep_fargs: false,
            arguments: true,
            join_vars: true,
            typeofs: true,
            module: true,
            loops: true,
            unused: true,
            unsafe: true,
            unsafe_math: true,
            unsafe_comps: true,
            unsafe_proto: true,
            unsafe_regexp: true,
            unsafe_symbols: true,
            unsafe_methods: true,
            unsafe_Function: true,
            unsafe_undefined: true
          }
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        default: false,
        vender: false,
        // Main entries
        functions: {
          enforce: true,
          test: /[\\/]src[\\/]functions[\\/]/,
          name: 'functions',
          chunks: 'all'
        },
        models: {
          enforce: true,
          test: /[\\/]src[\\/]models[\\/]/,
          name: 'models',
          chunks: 'all',
        },
        // Vender packing
        mobx: {
          enforce: true,
          test: /[\\/]node_modules[\\/](mobx|mst)+([\w\-])*/,
          name: 'models',
          chunks: 'all'
        },
        alpine: {
          enforce: true,
          test: /[\\/]node_modules[\\/](alpine|@ryan)+([\w\-])*[\\/]/,
          name: 'alpine',
          chunks: 'all',
        },
        routing: {
          enforce: true,
          test: /[\\/]node_modules[\\/](navigo)[\\/]/,
          name: 'routing',
          chunks: 'all'
        },
        storage: {
          enforce: true,
          test: /[\\/]node_modules[\\/](localforage)[\\/]/,
          name: 'storage',
          chunks: 'all',
        },
        editor: {
          enforce: true,
          test: /[\\/]node_modules[\\/](@ckeditor[\\/])+([\w\-])*[\\/]/,
          name: 'editor',
          chunks: 'all'
        }
      }
    }
  }
}

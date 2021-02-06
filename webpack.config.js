const path = require('path')
const { pugWebpackAlias } = require('./plugins/pug-plugin-alias')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const WebpackBar = require('webpackbar')
const HtmlWebpackSkipAssetsPlugin = require('html-webpack-skip-assets-plugin')
  .HtmlWebpackSkipAssetsPlugin
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const resolve = paths => path.resolve(process.cwd(), paths)

/** @type {import("webpack").Configuration } */
module.exports = {
  mode: 'production',
  entry: {
    index: ['./src/index.js', './src/index.css']
  },
  output: {
    path: resolve('build')
    // filename: data => {
    //   // console.log('pathData', data)
    //   return data.chunk.name === 'index' ? '[name].js' : 'js/[name].js'
    // }
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
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        models: {
          test: /[\\/]node_modules[\\/](mobx)+([\w\-])*[\\/]/,
          name: 'models',
          chunks: 'all'
        },
        alpine: {
          test: /[\\/]node_modules[\\/](alpine|@ryan)+([\w\-])*[\\/]/,
          name: 'alpine',
          chunks: 'all'
        },
        routing: {
          test: /[\\/]node_modules[\\/]navigo[\\/]lib[\\/]/,
          name: 'routing',
          chunks: 'all'
        },
        storage: {
          test: /[\\/]node_modules[\\/](localforage)+([\w\-])*[\\/]/,
          name: 'storage',
          chunks: 'all'
        }
        // editor: {
        //   test: /[\\/]node_modules[\\/](\@ckeditor[\\/])+([\w\-])*[\\/]/,
        //   name: 'editor',
        // },
      }
    }
  },
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Snowpack App',
      filename: 'index.html',
      template: './public/index.pug',
      minify: {
        removeComments: true
      }
    }),
    new HtmlWebpackSkipAssetsPlugin({
      excludeAssets: ['index.js', 'index.css']
    }),
    new BundleAnalyzerPlugin({
      generateStatsFile: true
    }),
    new WebpackManifestPlugin()
  ]
}

const path = require('path')
const { pugWebpackAlias } = require('./plugins/pug-plugin-alias')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
  entry: {
    main: ['./src/main.js', './src/main.css']
  },
  mode: 'production',
  output: {
    path: resolve('build'),
    filename: data =>
      data.chunk.name === 'main' ? '[name].js' : 'js/[name].js'
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
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: data =>
        data.chunk.name === 'main' ? '[name].css' : 'css/[name].css'
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
      excludeAssets: ['main.js', 'main.css']
    }),
    new BundleAnalyzerPlugin({
      generateStatsFile: true
    })
  ]
}

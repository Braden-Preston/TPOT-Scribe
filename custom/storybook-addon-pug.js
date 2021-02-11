const { resolve } = require('path')
const { pugWebpackAlias } = require('./pug-plugin-alias')

async function webpack(config, options = {}) {
  const { alias = {} } = options

  // Allow .pug extension to be resolved in imports
  config.resolve.extensions.push('.pug')

  // Add resolutions for aliases: @include templates/button
  config.resolve.alias = {
    ...config.resolve.alias,
    ...pugWebpackAlias(alias)
  }

  // Use a custom loader to return render functions for mixins
  config.module.rules.push({
    test: /\.pug$/,
    use: resolve(__dirname, './pug-mixin-loader.js')
  })

  return config
}

module.exports = {
  webpack
}

const path = require('path')
const resolve = paths => path.resolve(process.cwd(), paths)

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss') // For PostCSS 8+
        }
      }
    },
    {
      name: '../custom/storybook-addon-pug.js',
      options: {
        alias: {
          '@templates': 'src/templates',
          '@layouts': 'src/layouts',
          '@pages': 'src/pages'
        }
      }
    }
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@functions': resolve('src/functions'),
      '@models': resolve('src/models'),
      '@tools': resolve('src/tools')
    }
    return config
  }
}

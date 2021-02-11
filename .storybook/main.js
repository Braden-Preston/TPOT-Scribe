const path = require('path')

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
  // webpackFinal: async config => {
  //   return config
  // }
  // babel: async options => {
  //   const newConfig = { ...options }
  //   newConfig.presets.push(require.resolve('@babel/preset-react'))
  //   console.log(newConfig)
  //   return newConfig
  // }
  // webpackFinal: async config => {
  //   const cssRuleIdx = config.module.rules.findIndex(rule =>
  //     rule.test.toString().includes('/\\.css$/')
  //   )
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: 'postcss-loader'
  //   })
  //   let postCssRule = config.module.rules[cssRuleIdx].use.pop()
  //   let newPostCcssRule = {
  //     ...postCssRule,
  //     loader: require.resolve('postcss-loader'),
  //     options: {
  //       ...postCssRule.options,
  //       ...{}
  //     }
  //   }
  //   newPostCcssRule = {
  //     loader: 'postcss-loader',
  //     options: {
  //       postcssOptions: {
  //         plugins: [
  //           [
  //             'postcss-preset-env',
  //             {
  //               // Options
  //             }
  //           ]
  //         ]
  //       }
  //     }
  //   }
  //   config.module.rules[cssRuleIdx].use.push(
  //     newPostCcssRule
  //   )
  //   console.log(postCssRule)
  //   console.log(newPostCcssRule)
  //   // const oldCssRule
  //   // console.log('INDX', cssRuleIdx)
  //   console.log(config.module.rules[cssRuleIdx])
  //   // console.log(config.module.rules)
  //   return config
  // }
}

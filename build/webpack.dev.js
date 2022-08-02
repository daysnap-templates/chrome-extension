const { merge } = require('webpack-merge')
const config = require('./webpack.common')

module.exports = merge(config, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    lazy: false,
    writeToDisk: true,
  }
})

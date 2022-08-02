const { merge } = require('webpack-merge')
const config = require('./webpack.common')
const { resolve } = require('./utils')

module.exports = merge(config, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    lazy: false,
    writeToDisk: true, // 写入到硬盘
    disableHostCheck: true, // 禁止安全检测
    contentBase: resolve('public'), // 静态文件目录
    host: '0.0.0.0', // host
    port: 9001, // 端口
    compress: true, // gzip 压缩
    open: false, // 自动打开浏览器
    // hot: false, //
  }
})

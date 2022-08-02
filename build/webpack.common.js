const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve, requireFile } = require('./utils')

// 入口
const entry = (basePath =>
  requireFile(basePath, true, /\.tsx?$/).reduce((result, filepath) => {
    const relFilepath = filepath.replace(`${basePath}${path.sep}`, '')
    const { dir } = path.parse(relFilepath)
    result[dir] = filepath
    return result
  }, {})
)(resolve('src/entry'))

console.log('data => ', entry)

module.exports = {
  entry,
  output: {
    path: resolve('dist/js'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      src: resolve('src'),
      '@': resolve('src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            },
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/[name]-[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({

    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('public'),
          to: resolve('dist'),
        }
      ]
    })
  ]
}

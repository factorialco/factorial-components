const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./common.config')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
  output: {
    path: path.join(__dirname, '../dist/server')
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, '../styles')],
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                path: path.resolve(__dirname, 'postcss.config.js')
              }
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('main.css')
  ]
})

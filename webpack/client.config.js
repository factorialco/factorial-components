const common = require('./common.config')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const GLOBALS = {
  'process.env.NODE_ENV': '"production"',
  '__CLIENT__': true
}

module.exports = merge(common, {
  output: {
    path: path.join(__dirname, '../dist/client')
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
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
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin(GLOBALS)
  ]
})

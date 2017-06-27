const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const DEBUG = !process.argv.includes('--release')

const GLOBALS = {
  'process.env.NODE_ENV': '"production"'
}

module.exports = {
  entry: path.resolve(__dirname, '../src/components/index.js'),

  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '../dist')
  },

  externals: {
    'autobind-decorator': 'autobind-decorator',
    'classnames': 'classnames',
    'jquery': 'jquery',
    'lodash': 'lodash',
    'mobx': 'mobx',
    'moment': 'moment',
    'react': 'react',
    'react-day-picker': 'react-day-picker',
    'react-dom': 'react-dom',
    'react-dropzone': 'react-dropzone',
    'react-portal': 'react-portal',
    'tether': 'tether'
  },

  stats: {
    hash: true,
    colors: true,
    chunks: true,
    cached: true,
    version: true,
    timings: true,
    reasons: DEBUG,
    chunkModules: true,
    cachedAssets: true
  },

  resolve: {
    extensions: [
      '.css',
      '.js',
      '.jsx',
      '.loader.js',
      '.scss',
      '.web-loader.js',
      '.webpack-loader.js'
    ],
    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src')
    ]
  },

  module: {
    rules: [
      {
        test: /\.js?$|\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { babelrc: true }
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/assets/[name].[sha512:hash:base64:7].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en|es)$/),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const DEBUG = !process.argv.includes('--release')

const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG
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
    'react-router': 'react-router',
    'react': 'react',
    'react-dom': 'react-dom'
  },

  cache: DEBUG,

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
        query: {
          babelrc: true,
          cacheDirectory: true
        }
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
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      }
    })
  ]
}

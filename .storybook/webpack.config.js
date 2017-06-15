// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/docs/react-storybook/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path')

module.exports = {
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

  plugins: [
    // your custom plugins
  ],

  module: {
    rules: [
      {
        test: /\.js?$|\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
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
              name: 'assets/[name].[sha512:hash:base64:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.join(path.resolve(__dirname, '..'), 'styles')]
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              path: path.resolve(__dirname, '..', 'webpack/postcss.config.js')
            }
          }
        ] }
    ]
  }
}

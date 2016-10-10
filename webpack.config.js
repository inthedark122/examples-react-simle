var HtmlWebpackTemplate = require('html-webpack-template');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const
  folder = process.env.FORLDER || 'simple';


module.exports = {
  entry: './simple/index.js',
  output: {
    path: './simple',
    filename: './build/bundle.js',
    publicPath: '/simple/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [
          'babel',
        ],
        include: './simple/index.js',
        query: {
          presets: [
            'es2015',
            'react'
          ]
        }
      },
      {
        test: /\.less$/,
        loaders: [
          'style',
          'css',
          'less'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loaders: [
          'url'
        ],
        query: {
          limit: 8192
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,
      appMountId: 'app'
    })
  ]
}
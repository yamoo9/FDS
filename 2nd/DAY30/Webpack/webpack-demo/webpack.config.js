'use strict';

var webpack = require('webpack');

module.exports = {

  'entry': ['./entry.js', './app.js'],

  'output': {
    'path': __dirname,
    'filename': 'bundle.js'
  },

  // 관찰 모드
  // 'watch': true,

  // 디버깅 모드
  // 'devtool': 'source-map',

  'module': {

    'preLoaders': [
      {
        'test': /\.(js|es6)$/,
        'exclude': /node_modules/,
        'loader': 'eslint-loader'
      }
    ],

    'loaders': [

      // babel-loader
      {
        'test': /\.es6$/,
        'exclude': /node_modules/,
        'loader': 'babel-loader',
        'query': {
          'presets': ['es2015']
        }
      },

      // style-loader + css-loader
      {
        'test': /\.css$/,
        'exclude': /node_modules/,
        // 'loader': 'style-loader!css-loader'
        'loader': 'style!css'
      },

      // sass-loader
      {
        'test': /\.(sass|scss)$/,
        'exclude': /node_modules/,
        'loader': 'style!css!sass'
      }
    ]
  },

  'plugins': [
    new webpack.optimize.UglifyJsPlugin({
      'compress': {
        'warnings': false
      }
    })
  ],

  'resolve': {
    'extensions': ['', '.js', '.es6']
  }

};
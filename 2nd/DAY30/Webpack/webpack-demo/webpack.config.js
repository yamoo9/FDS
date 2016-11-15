'use strict';

module.exports = {

  'entry': './entry.js',

  'output': {
    'path': __dirname,
    'filename': 'bundle.js'
  },

  // 관찰 모드
  // 'watch': true,

  // 디버깅 모드
  // 'devtool': 'source-map',

  'module': {
    'loaders': [
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
  }

};
/*! webpack.config.js © yamoo9.net, 2016 */
'use strict';

let path    = require('path');
let webpack = require('webpack');
let config  = require('./config');

module.exports = {

  // 컨텍스트 설정
  // 'context': [],

  // 진입 설정
  'entry'   : {
    'main': `./${config.paths.js}/main`
  },

  // 출력 설정
  'output'  : {
    'path': path.join(__dirname, `${config.paths.dist}/js`),
    'filename': '[name].bundle.js'
  },

  // 관찰 모드
  // 'watch': true,

  // 캐시 설정
  'cache': true,

  // 소스맵 설정
  'debug': true,
  'devtool': 'eval-source-map',

  // webpack 모듈
  'module': {
    'loaders': [
      {
        'test': /\.es6$/,
        'loader': 'babel-loader',
        'exclude': /node_modules/,
        'query': {
          // 'cacheDirectory': true,
          'presets': ['es2015']
        }
      }
    ]
  },

  // webpack 플러그인 설정
  'plugins': [
    new webpack.NoErrorsPlugin()
  ],

  // 모듈을 글로벌 변수 사용 (외부 파일 의존)
  // http://webpack.github.io/docs/library-and-externals.html
  'externals': {
    'jquery': 'jQuery',
    'angular': 'angular',
  },

  // webpack 결정사항 설정
  'resolve': {
    'extensions': ['', '.js', '.json', '.es6'],
    // 'root': [
      // path.resolve('./bower_components')
    // ],
    // 'alias': {
      // 'jquery': 'jquery/dist/jquery.min.js'
    // }
  }

};

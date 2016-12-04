/*! webpack.build.config.js © yamoo9.net, 2016 */
'use strict';

// webpack 모듈 로드
let webpack = require('webpack');

// strip-loader 모듈 로드
let webpackStrip = require('strip-loader');

// webpack.config.js 파일 로드
let dev_config = require('./webpack.config');

// strip_loader 설정
let strip_loader = {
  'test': [/\.js$/, /\.es6$/],
  'exclude': /node_modules/,
  // 제거(strip)할 명령어 설정
  'loader': webpackStrip.loader('console.log', 'console.error', 'console.info', 'debugger')
};

// dev_config 모듈 로더에 strip_loader 설정
dev_config.module.loaders.push(strip_loader);

// 소스맵 설정 제거
delete dev_config.devtool;

// webpack 압축 플러그인 설정
dev_config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    'compress': {
      'warnings': false
    }
  })
];

// dev_config 모듈 출력
module.exports = dev_config;

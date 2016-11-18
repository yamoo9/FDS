/*! webpack-build.config.js © yamoo9.net, 2016 */
'use strict';

// strip-loader 모듈 로드
var webpackStrip = require('strip-loader');

// webpack.config.js 파일 로드
var dev_config = require('./webpack.config');

// strip_loader 설정
var strip_loader = {
  'test': [/\.js$/, /\.es6$/],
  'exclude': /node_modules/,
  // 제거(strip)할 명령어 설정
  'loader': webpackStrip.loader('console.log', 'console.error', 'console.info', 'debugger')
};

// dev_config 모듈 로더에 strip_loader 설정
dev_config.module.loaders.push(strip_loader);

// dev_config 모듈 출력
module.exports = dev_config;
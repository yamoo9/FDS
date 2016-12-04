/*! log.js © yamoo9.net, 2016 */
'use strict';

// [gulp-util] https://github.com/gulpjs/gulp-util
let gutil = require('gulp-util');

function log(color, ...messages) {
  gutil.log( gutil.colors[color](messages.join(' ')) );
};

const R = (...messages) => log('red', messages);
const G = (...messages) => log('green', messages);
const B = (...messages) => log('blue', messages);
const C = (...messages) => log('cyan', messages);
const M = (...messages) => log('magenta', messages);
const Y = (...messages) => log('yellow', messages);
const K = (...messages) => log('black', messages);
const W = (...messages) => log('white', messages);

// 모듈 내보내기
module.exports = {
  R,
  G,
  B,
  C,
  M,
  Y,
  K,
  W
};

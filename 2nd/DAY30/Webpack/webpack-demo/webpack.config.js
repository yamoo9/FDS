'use strict';

// console.log('__dirname:', __dirname);

module.exports = {
  // webpack이 번들링을 수행하고자하는 진입 파일
  'entry': './entry.js',
  // 번들링된 출력 파일
  'output': {
    // 'path': __dirname,
    'path': __dirname + '/js/',
    'filename': 'bundle.js'
  }
};
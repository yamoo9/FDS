/*! clean.js © yamoo9.net, 2016 */
'use strict';

// [참고 URL]
// https://www.npmjs.com/package/del

let gulp   = require('gulp');
let log    = require('./utils/log');
let del    = require('del');
let config = require('../config');

// 제거할 디렉토리(하위 디렉토리/파일 포함)
let del_list = config.remove_list;

gulp.task( 'clean',()=> {
  del(del_list).then( paths => {
    log.M(paths.length > 0 ? `\n제거된 디렉토리/파일 리스트:\n${paths.join('\n')}` : '제거할 항목이 없습니다.' );
  });
});


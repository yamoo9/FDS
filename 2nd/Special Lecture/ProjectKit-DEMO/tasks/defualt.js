/*! default.js © yamoo9.net, 2016 */
'use strict';

let gulp        = require('gulp');
let runSequence = require('run-sequence');
let log         = require('./utils/log');

gulp.task('default', ()=>{
  // 빌드(Build) 설정 해제
  global.y9_build = false;

  // [참고 URL]
  // https://github.com/OverZealous/run-sequence
  // https://davidwalsh.name/gulp-run-sequence
  runSequence(
    ['clean'],
    ['iconfonts', 'sprites'],
    ['move-fonts', 'move-views'],
    ['html', 'sass', 'webpack', 'images'],
    ['watch', 'browser-sync']
  );
  // 프로젝트 시작 메시지 출력
  log.Y('[[ 프로젝트 진행 중 ------------- ]]');
});

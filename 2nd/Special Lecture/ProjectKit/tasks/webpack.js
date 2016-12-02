/*! webpack.js © yamoo9.net, 2016 */
'use strict';

// [참고 URL]
// https://www.npmjs.com/package/gulp-webpack

let gulp    = require('gulp');
let gulp_if = require('gulp-if');
let webpack = require('gulp-webpack');
// 환경설정
let config         = require('../config');
let webpack_config = require('../webpack.config');
let webpack_build  = require('../webpack.build.config');

gulp.task('webpack', ()=> {
  return gulp.src(`${config.paths.js}/main.js`)
             .pipe( gulp_if(global.y9_build, webpack(webpack_build), webpack(webpack_config)) )
             .pipe(gulp.dest( global.y9_build ? `${config.paths.build}/js` : `${config.paths.dist}/js` ));
});

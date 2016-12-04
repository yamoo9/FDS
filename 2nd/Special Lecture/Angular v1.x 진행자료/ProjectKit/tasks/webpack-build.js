/*! webpack.js © yamoo9.net, 2016 */
'use strict';

// [참고 URL]
// https://www.npmjs.com/package/gulp-webpack

let gulp    = require('gulp');
let webpack = require('gulp-webpack');
// 환경설정
let config  = require('../config');

gulp.task('webpack-build', ()=> {
  return gulp.src(`${config.paths.js}/main.js`)
             .pipe( webpack(require('../webpack.build.config')) )
             .pipe(gulp.dest( `${config.paths.build}/js` ));
});

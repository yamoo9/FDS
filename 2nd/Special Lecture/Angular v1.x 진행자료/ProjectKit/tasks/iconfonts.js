/*! iconfonts.js © yamoo9.net, 2016 */
'use strict';

// [참고 URL]
// https://www.npmjs.com/package/gulp-imagemin

let gulp        = require('gulp');
let iconfont    = require('gulp-iconfont');
let iconfontCss = require('gulp-iconfont-css');
let config      = require('../config');

gulp.task('iconfonts', () => {
  return gulp.src( config.paths.iconfonts.source )
             .pipe( iconfontCss( config.options.iconfontCss ) )
             .pipe( iconfont( config.options.iconfonts ) )
             .pipe( gulp.dest( config.paths.iconfonts.output ) );
});

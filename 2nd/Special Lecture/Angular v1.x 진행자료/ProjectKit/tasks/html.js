/*! html.js © yamoo9.net, 2016 */
'use strict';

// [참고 URL]
// https://www.npmjs.com/package/gulp-htmlmin

let gulp    = require('gulp');
let gulp_if = require('gulp-if');
let htmlmin = require('gulp-htmlmin');
let config  = require('../config');

gulp.task('html', () => {
  return gulp.src(`${config.paths.src}/*.html`)
             .pipe( htmlmin( config.options.htmlmin ) )
             .pipe(gulp.dest( global.y9_build ? config.paths.build : config.paths.dist ));
});

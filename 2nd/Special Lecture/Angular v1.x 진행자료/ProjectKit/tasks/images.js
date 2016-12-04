/*! images.js © yamoo9.net, 2016 */
'use strict';

// [참고 URL]
// https://www.npmjs.com/package/gulp-imagemin

let gulp     = require('gulp');
let imagemin = require('gulp-imagemin');
let config   = require('../config');

gulp.task('images', () => {
  let path = global.y9_build ?
              config.paths.images.output.replace(config.paths.dist, config.paths.build) :
              config.paths.images.output;
  return gulp.src( config.paths.images.source )
             .pipe( imagemin( config.options.imagemin ) )
             .pipe(gulp.dest( path ));
});

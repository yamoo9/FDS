/*! move-fonts.js © yamoo9.net, 2016 */
'use strict';

let gulp        = require('gulp');
let config      = require('../config');

gulp.task('move-fonts', () => {
  let path = global.y9_build ?
              config.paths.fonts.output.replace(config.paths.dist, config.paths.build) :
              config.paths.fonts.output;
  return gulp.src( config.paths.fonts.source )
             .pipe( gulp.dest( path ) );
});

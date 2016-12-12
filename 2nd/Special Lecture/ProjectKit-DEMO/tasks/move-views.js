/*! move-views.js © yamoo9.net, 2016 */
'use strict';

let gulp   = require('gulp');
let config = require('../config');

gulp.task('move-views', () => {
  let path = global.y9_build ?
              config.paths.views.output.replace(config.paths.dist, config.paths.build) :
              config.paths.views.output;
  return gulp.src( config.paths.views.source )
             .pipe( gulp.dest( path ) );
});

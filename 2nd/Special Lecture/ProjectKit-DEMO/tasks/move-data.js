/*! move-data.js © yamoo9.net, 2016 */
'use strict';

let gulp   = require('gulp');
let config = require('../config');

gulp.task('move-data', () => {
  let path = global.y9_build ?
              config.paths.data.output.replace(config.paths.dist, config.paths.build) :
              config.paths.data.output;
  return gulp.src( config.paths.data.source )
             .pipe( gulp.dest( path ) );
});

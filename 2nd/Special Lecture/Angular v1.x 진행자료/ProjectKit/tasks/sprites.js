/*! sprites.js © yamoo9.net, 2016 */
'use strict';

// [참고 URL]
// https://www.npmjs.com/package/gulp.spritesmith-multi

let gulp        = require('gulp');
let spritesmith = require('gulp.spritesmith-multi');
let config      = require('../config');

gulp.task('sprites', () => {
  return gulp.src( config.paths.sprites.source )
             .pipe( spritesmith( config.options.spritesmith ) )
             .on('error', function (err) { console.log(err); })
             .pipe(gulp.dest( config.paths.sprites.output ));
});

/*! sass.js © yamoo9.net, 2016 */
'use strict';

// [참고 URL]
// https://www.npmjs.com/package/gulp-sourcemaps
// https://www.npmjs.com/package/gulp-sass

let gulp         = require('gulp');
let gulp_if      = require('gulp-if');
let sass         = require('gulp-sass');
let sourcemaps   = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
let config       = require('../config');

gulp.task('sass', ()=>{
  return gulp.src(`${config.paths.sass}/**/*.{sass,scss}`)
             .pipe( gulp_if( !global.y9_build, sourcemaps.init() ) )
             .pipe(sass( config.options.sass ).on('error', sass.logError))
             .pipe(autoprefixer( config.options.autoprefixer ))
             .pipe( gulp_if( !global.y9_build, sourcemaps.write('../maps') ) )
             .pipe(gulp.dest(global.y9_build ? `${config.paths.build}/css` : `${config.paths.dist}/css`));
});

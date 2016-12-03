/*! sass.js © yamoo9.net, 2016 */
'use strict';

// [참고 URL]
// https://www.npmjs.com/package/gulp-sass
// https://github.com/avaly/gulp-autoprefixer
// https://www.npmjs.com/package/gulp-sourcemaps
// https://github.com/avaly/gulp-group-css-media-queries

let gulp         = require('gulp');
let gulp_if      = require('gulp-if');
let sass         = require('gulp-sass');
let sourcemaps   = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
let mq           = require('gulp-group-css-media-queries');
let csso         = require('gulp-csso');
let config       = require('../config');

gulp.task('sass', ()=>{
  return gulp.src(`${config.paths.sass}/**/*.{sass,scss}`)
             .pipe( gulp_if( !global.y9_build, sourcemaps.init() ) )
             .pipe(sass( config.options.sass ).on('error', sass.logError))
             .pipe(autoprefixer( config.options.autoprefixer ))
             .pipe(mq())
             .pipe( gulp_if( global.y9_build, csso() ) )
             .pipe( gulp_if( !global.y9_build, sourcemaps.write('../maps') ) )
             .pipe(gulp.dest(global.y9_build ? `${config.paths.build}/css` : `${config.paths.dist}/css`));
});

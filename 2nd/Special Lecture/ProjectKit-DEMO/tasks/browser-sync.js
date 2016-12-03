/*! browser-sync.js © yamoo9.net, 2016 */
'use strict';

let gulp        = require('gulp');
let log         = require('./utils/log');
let browserSync = require('browser-sync');
let config      = require('../config');

gulp.task('browser-sync', () => {
  browserSync.init(null, config.options.browserSync);
});

/*! gulpfile.js © yamoo9.net, 2016 */
'use strict';

// 의존 모듈 로드
let requireDir = require('require-dir');

// tasks 디렉토리(서브 디렉토리 포함) 모든 업무(Tasks) 처리
// https://www.npmjs.com/package/require-dir
requireDir( 'tasks', {'recurse': true} );

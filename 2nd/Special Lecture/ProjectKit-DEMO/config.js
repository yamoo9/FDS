/*! config.js © yamoo9.net, 2016 */
'use strict';

// spritesmith-multi 환경설정에 필요한 모듈 로드
let util = require('gulp.spritesmith-multi').util;

/////////////////
// 프로젝트 경로 설정
/////////////////
const PATHS = {
  // 소스(Source) 디렉토리 경로
  'src'       : 'src',
  // 배포(Distribute) 디렉토리 경로
  'dist'      : 'dist',
  // 빌드(Build) 디렉토리 경로
  'build'     : 'build',
  // 디렉토리 별 이름
  'sass'      : 'sass',
  'js'        : 'js',
  'images'    : 'images',
  'fonts'     : 'fonts',
  'data'      : 'data',
  'views'     : 'views',
  'iconfonts' : 'iconfonts',
  'sprites'   : 'sprites',
};

/////////////
// 환경설정 모듈
/////////////
let config = {

  //////////////
  // 파일 경로 설정
  'paths': {
    // Sass, JavaScript 디렉토리 경로
    'sass'  : `${PATHS.src}/${PATHS.sass}`,
    'js'    : `${PATHS.src}/${PATHS.js}`,
    'fonts' : {
      'source' : `${PATHS.src}/${PATHS.fonts}/**/*.{eot,woff,woff2,ttf}`,
      'output' : `${PATHS.dist}/${PATHS.fonts}`
    },
    'data' : {
      'source' : `${PATHS.src}/${PATHS.data}/**/*`,
      'output' : `${PATHS.dist}/${PATHS.data}`
    },
    'views' : {
      'source' : `${PATHS.src}/${PATHS.views}/**/*.html`,
      'output' : `${PATHS.dist}/${PATHS.views}`
    },
    // 이미지 소스/출력 설정
    'images': {
      'source' : `${PATHS.src}/${PATHS.images}/**/*.{png,jpg,jpeg,gif,svg}`,
      'output' : `${PATHS.dist}/${PATHS.images}`
    },
    // 아이콘 폰트 소스/출력 설정
    'iconfonts': {
      'source' : `${PATHS.src}/${PATHS.iconfonts}/**/*.svg`,
      'output' : `${PATHS.src}/${PATHS.fonts}`
    },
    // 스프라이트 이미지 소스/출력 설정
    'sprites': {
      'source' : `${PATHS.src}/${PATHS.sprites}/**/*.png`,
      'output' : `${PATHS.src}/${PATHS.images}/${PATHS.sprites}`
    },
    // 소스(Source), 배포(Distribute), 빌드(Build) 디렉토리 경로
    'src'   : PATHS.src,
    'dist'  : PATHS.dist,
    'build' : PATHS.build,
  },

  ///////////
  // 옵션 설정
  'options': {
    'htmlmin': {
      // [참고 URL]
      // https://github.com/kangax/html-minifier#options-quick-reference
      'collapseWhitespace': true
    },
    'sass': {
      // [참고 URL]
      // https://github.com/sass/node-sass#options
      'outputStyle' : 'compressed',
      'precision'   : 4,
    },
    'autoprefixer': {
      // [참고 URL]
      // https://github.com/postcss/autoprefixer#options
      // 최종 기준으로 2단계 전 브라우저 지원 적용할 경우
      // 'browsers' : ['last 2 versions'],
      // 개별 브라우저 지원 적용 범위를 설정하는 경우
      'browsers' : [
        // Desktop
        'ie >= 9',
        'chrome >= 34',
        'ff >= 30',
        'safari >= 7',
        'opera >= 23',
        // Mobile
        'ios >= 7',
        'android >= 4.4',
        // 'ie_mob >= 10',
        // 'bb >= 10',
      ],
      'cascade'  : false
    },
    'imagemin': {
      // [참고 URL]
      // https://github.com/sass/node-sass#options
      // GIF
      'interlaced'        : true,
      // JPG
      'progressive'       : true,
      // PNG
      'optimizationLevel' : 3, // 0 ~ 7
      // SVG
      'svgoPlugins' : [
        // SVG 파일의 뷰박스(Viewbox) 속성 제거 유무 설정
        { 'removeViewBox': false },
        // SVG 파일의 사용되지 않는 테두리(Strokes), 면(Fills) 색상 제거 유무 설정
        { 'removeUselessStrokeAndFill': false },
        // SVG 파일의 빈 속성 제거 유무 설정
        { 'removeEmptyAttrs': false },
      ]
    },
    'iconfonts': {
      'fontName'       : 'icons',                     // 필수
      'prependUnicode' : true,                        // 권장 옵션
      'formats'        : ['ttf', 'eot', 'woff', 'woff2'],      // 기본 값 , 'woff2', 'svg' 추가 가능
      'timestamp'      : Math.round(Date.now()/1000), // 관찰 중인 파일에 일관적으로 빌드할 경우 권장
    },
    'iconfontCss': {
      'fontName'   : 'icons',
      'path'       : `${PATHS.src}/${PATHS.iconfonts}/template/_icons.scss`, // 템플릿 scss 파일
      'targetPath' : `_icons.scss`,                                          // 생성될 scss 파일 경로 설정
      'fontPath'   : `../fonts/`,                                             // 생성된 scss 파일의 font 경로 설정
    },
    'spritesmith': {
      'spritesmith': function (options, sprite, icons) {
        // [참고 URL]
        // https://github.com/reducejs/gulp.spritesmith-multi
        // https://github.com/twolfson/gulp.spritesmith#spritesmithparams
        // CSS → SCSS 파일 이름 변경
        options.cssName = `_${options.cssName.replace(/\.css$/, '.scss')}`;
        // 스프라이트 코드생성 접두사 설정
        options.cssSpritesheetName = 'y9-sprites';
        // 스프라이트 이미지 파일 경로 설정
        options.imgPath       = `../${PATHS.images}/${PATHS.sprites}/${options.imgName}`;
        options.retinaImgPath = `../${PATHS.images}/${PATHS.sprites}/${options.retinaImgName}`;
        // 커스텀 템플릿 설정
        options.cssTemplate = util.createTemplate(
          // template.hbs 위치
          `${PATHS.src}/${PATHS.sprites}/template.hbs`,
          [function (data) {
            let info  = data.spritesheet_info;
            let match = info.name.match(/hover--(\w+)/);
            data.theme = match && match[1];
          }, util.addPseudoClass]
        );
        return options;
      }
    },
    'browserSync': {
      // [참고 URL]
      // https://www.browsersync.io/docs/options
      'server': {
        'baseDir': PATHS.dist
      },
      'files' : [`${PATHS.dist}/**/*.*`],
      'port'  : 8080,
      'ghostMode': {
        'clicks' : true,
        'forms'  : true,
        'scroll' : true,
      },
      'notify': false,
    },
  },

  /////////////////
  // 관찰 파일 경로 설정
  'watch': {
    'html'  : `${PATHS.src}/**/*.html`,
    'views' : `${PATHS.src}/${PATHS.views}/**/*.html`,
    'sass'  : `${PATHS.src}/${PATHS.sass}/**/*.{sass,scss}`,
    'js'    : `${PATHS.src}/${PATHS.js}/**/*.{js,es6}`,
  },

  /////////////////////
  // 생성 디렉토리/파일 제거
  'remove_list': [
    PATHS.dist,
    PATHS.build,
    `${PATHS.src}/${PATHS.fonts}`,
    `${PATHS.src}/${PATHS.images}/${PATHS.sprites}`,
  ],

};

// 모듈 내보내기
module.exports = config;

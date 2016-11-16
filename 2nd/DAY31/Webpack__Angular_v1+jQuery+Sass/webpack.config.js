/*! webpack.config.js © yamoo9.net, 2016 */
'use strict';

// 프로젝트 의존 모듈 로드
let webpack           = require('webpack');
let path              = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

// 환경 설정
const CONFIG = {
  // 소스(Source, 개발) 디렉토리
  'SOURCE_DIR' : 'src',
  // 디스트리뷰트(Distribute, 배포) 디렉토리
  'DIST_DIR'   : 'dist',
  // 에셋(Essets, 자산) 디렉토리
  'ASSETS_DIR' : '/assets',
  // CSS 번들(Bundle, 묶음) 파일 이름
  'CSS_BUNDLE' : 'app.css',
  // JS 번들(Bundle, 묶음) 파일 이름
  'JS_BUNDLE' : 'app.js',
  // Autoprefixer 브라우저 설정
  // https://github.com/postcss/autoprefixer#browsers
  // https://github.com/ai/browserslist
  'AUTOPREFIXER_SETTING': { browsers:["last 2 version"] }
};

// 웹팩 설정
module.exports = {

  // 콘텍스트 경로 설정
  'context': path.resolve(`${CONFIG.SOURCE_DIR}/app`),

  // 진입파일 설정
  // 번들 파일 1개
  'entry': ['./app'],
  // 페이지 별, 번들 (멀티) ******
  // https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points
  // 'entry': {
  //   'home'    : './home',
  //   'about'   : './about',
  //   'contact' : './contact',
  // },

  // 출력파일 설정
  'output': {
    // webpack-dev-server 에서 사용되는 라이브 번들 출력 경로
    // 'publicPath' : path.resolve( CONFIG.ASSETS_DIR ),
    'publicPath' : CONFIG.ASSETS_DIR,
    // 출력파일 경로 설정
    'path'       : path.resolve( `${CONFIG.DIST_DIR+CONFIG.ASSETS_DIR}` ),
    // 번들 1개 파일 설정
    'filename'   : CONFIG.JS_BUNDLE,
    // 멀티 페이지 번들 설정 ******
    // 'filename'   : "[name].js",
  },

  // webpack-dev-server 루트 경로 설정
  'devServer': {
    'contentBase': `${CONFIG.SOURCE_DIR}/public`
  },

  /** 모듈 ------------------------------------------------------------------ */
  'module': {

    // 프리로더 설정
    'preLoaders': [
      // ESLint Loader
      {
        'test': /\.(js|es6)$/,
        'exclude': /node_modules/,
        'loader': 'eslint'
      }
    ],

    // 로더 설정
    'loaders': [

      // Babel Loader ------------------------------------------------------
      {
        'test': /\.es6$/,
        'exclude': /node_modules/,
        // 'loader': 'babel?presets[]=es2015',
        'loader': 'babel',
        'query': {
          // 'cacheDirectory' : true, // EACCES: permission denied
          'presets'        : ['es2015']
        }
      },

      // Style Loader + CSS Loader -----------------------------------------
      {
        'test': /\.css$/,
        'exclude': /node_modules/,
        'loader': 'style!css'
      },

      // Sass Loader -------------------------------------------------------
      {
        'test': /\.(sass|scss)$/,
        'exclude': /node_modules/,
        // 'loader': 'style!css!sass',
        'loader': ExtractTextPlugin.extract(
          'style',
          `css!autoprefixer?${JSON.stringify(CONFIG.AUTOPREFIXER_SETTING)}!sass`
        )
      },

      // Images, Fonts Loader ----------------------------------------------
      {
        'test': /\.(png|jpg|svg|woff|woff2|eot)/,
        'exclude': /node_modules/,
        'loader': 'url-loader?limit=1000000' // 1000kb
      },

      // jQuery + Angular --------------------------------------------------
      // Angular <- jQuery Imports
      {
        'test': /\/angular\.js$/,
        'loader': 'imports?jQuery=jquery'
      },
      // jQuery Expose
      {
        'test': /\/jquery.js$/,
        'loader': 'expose?jQuery'
      }

    ]
  },

  /** 플러그인 --------------------------------------------------------------- */
  'plugins': [
    // browser 환경의 전역 scope로 미리 등록
    new webpack.ProvidePlugin({
      'window._': 'lodash',
      '_': 'lodash'
    }),
    // 압축 시, 경고 메시지 출력 No
    new webpack.optimize.UglifyJsPlugin({
      'compress': {
        'warnings': false
      }
    }),
    // CSS 번들링 파일 별도 분리
    new ExtractTextPlugin(CONFIG.CSS_BUNDLE),
    // 멀티 페이지 번들 플러그인 ******
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
  ],

  /** 결정(결의, 의결) -------------------------------------------------------- */
  'resolve': {
    // 확장자
    'extensions': ['', '.js', '.es6']
  },

  /** 옵션 ----------------------------------------------------------------- */

  // 관찰 모드
  // 'watch': true,

  // 디버깅 모드
  // 'source-map', 'inline-source-map'
  'devtool': 'source-map',

};
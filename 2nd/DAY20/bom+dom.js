/*! bom+dom.js © yamoo9.net, 2016 */

// Module Pattern
(function(global){
  'use strict';

  /////////
  // BOM //
  /////////

  // 브라우저 객체 모델
  // 브라우저를 구성하는 객체들
  // window {} : Global Object
  // window 객체에 종속된 하위 객체들
  // window.screen {}
  // 사용자의 스크린에 관한 정보를 제공하는 객체
  var console_style      = 'color: #7045cf; font-weight: bold';
  var screen             = global.screen;
  var screen_width       = screen.width;
  var screen_height      = screen.height;
  var screen_resolution  = screen_width +'x' + screen_height;

  console.log('사용자의 스크린 해상도는 %c' + screen_resolution, console_style);

  // 사용자의 가용(Avail)가능한 스크린 해상도 구하기
  var screen_avail_width      = screen.availWidth;
  var screen_avail_height     = screen.availHeight;
  var screen_avail_resolution = screen_avail_width +'x' + screen_avail_height;

  console.log('사용자의 가용 가능한 스크린 해상도는 %c' + screen_avail_resolution, console_style);



  // window.location
  // window.history
  // window.navigator
  // window.document

  // --------------------------------------------------------------------------------

  /////////
  // DOM //
  /////////

  // 문서 객체 모델
  // "DOM을 깨우치다."


}(this));
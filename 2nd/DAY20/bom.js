/*! bom+dom.js © yamoo9.net, 2016 */

// Module Pattern
// BOM 공부
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
  var screen = global.screen;

  // 함수 갈무리
  function screenInfo() {

    var screen_info = {};

    screen_info.width            = screen.width;
    screen_info.height           = screen.height;
    screen_info.avail_width      = screen.availWidth;
    screen_info.avail_height     = screen.availHeight;
    screen_info.avail_top        = screen.availTop;
    screen_info.avail_left       = screen.availLeft;
    screen_info.resolution       = screen_info.width +'x' + screen_info.height;
    screen_info.avail_resolution = screen_info.avail_width +'x' + screen_info.avail_height;

    // 스크린 Gap에 대한 정보를 가진 객체
    screen_info.gap = {
      'width': screen_info.width - screen_info.avail_width,
      'height': screen_info.height - screen_info.avail_height
    };

    // 객체 반환
    return screen_info;

  }

  // 모듈 내에서만 사용 가능
  // 모듈 내부에 감춰진 함수
  // console.log( screenInfo );

  // 외부에 해당 함수를 공개하고 싶다.
  // 노출 패턴
  // global.screenInfo = screenInfo(); // 함수를 실행한 결과 값(객체)을 screenInfo 에 참조
  global.screenInfo = screenInfo;   // 함수 객체를 screenInfo 에 참조

  console.log('%c------------------------------', 'color: #3d9a21');

  // window.location
  // 웹 브라우저의 주소 창의 정보를 가지고 있는 객체
  console.dir( global.location );
  // hash 정보 값     : location.hash
  // protocol 정보 값 : location.protocol
  // host 정보 값     : location.host
  // hostname 정보 값 : location.hostname
  // pathname 정보 값 : location.pathname
  // search 정보 값   : location.search
  // replace() 메소드 : 다른 페이지로 대체 변경
  // reload() 메소드  : 현재 페이지를 새로 고침


  // window.history
  // 사용자가 현재 윈도우(window)에서 탐색한 페이지를 기억하는 객체
  // 이전(back)/다음(forward)/특정(go) 페이지로 이동
  // length 속성을 가지고 있다.


  // window.navigator
  // 웹 브라우저의 정보를 가진 객체
  // 브라우저 스니핑
  var navigator = global.navigator;
  var platform  = navigator.platform;
  var is_mac    = platform.toLowerCase().indexOf('mac') > -1;
  var is_win    = platform.toLowerCase().indexOf('win') > -1;
  var html      = window.document.documentElement;

  html.className = is_mac ? 'mac' : 'win';
  // if (is_mac) {
  //   html.className = 'mac';
  // } else {
  //   html.className = 'win';
  // }


  // window.document

  // --------------------------------------------------------------------------------

  /////////
  // DOM //
  /////////

  // 문서 객체 모델
  // "DOM을 깨우치다."


}); // (this)


// location.hash: <a>를 클릭했을 때, hash를 통해 목표 요소를 스타일링하는 응용 예제
(function(global){
  'use strict';

  var document   = global.document;
  var location   = global.location;
  var setTimeout = global.setTimeout;
  var bg_color   = '#fef9d0';
  var duration   = 3000; // 1000ms === 1s

  // 페이지 로드 시에 주소창의 hash 값을 가져와서
  // 해당 요소를 찾아서 스타일링한다.
  var stylingHashElement = function () {

    var hash = location.hash;
    var target_element = null;

    // 임의 정의된 hash 값이 있다면
    if ( hash ) {
      target_element = document.querySelector(hash);
    }
    console.log(target_element);
    if ( target_element ) {
      // 스타일 추가
      target_element.style.background = bg_color;
      target_element.style.transition = 'background 0.3s';
      // 특정 시간이 지나면 스타일 제거
      // setTimeout(removeStyleTargetElement, duration);
      setTimeout(function() {
        target_element.style.background = 'transparent';
      }, duration);
    }

  };

  // var removeStyleTargetElement = function() {
  //   console.log('try setTimeout');
  // };

  // window 객체의 load 이벤트가 발생하면
  // styleHashElement 함수를 실행하라.
  // global.onload = stylingHashElement;
  global.onload = assignAction;

  function assignAction() {
    var go_to_point = document.querySelector('#go-to-point');
    var go_to_links = go_to_point.querySelectorAll('a');
    for ( var i=0, l=go_to_links.length; i<l; i++ ) {
      go_to_links[i].onclick = function() {
        // this
        setTimeout(stylingHashElement, 100);
      };
    }
  }


}); // (this)


// navigator.userAgent: 사용자 에이전트의 식별자를 통해 기기 판별 응용
(function(global){
  'use strict';

  var navigator = global.navigator;
  var userAgent = navigator.userAgent.toLowerCase(); // 브라우저 식별자 (판별)

  function isDevice(device) {
    if ( typeof device !== 'string' ) { throw new Error('전달인자는 문자열 요구됨'); }
    return userAgent.indexOf(device) > -1;
  }

  function checkDevices(devices) {
    // 배열 화
    if ( typeof devices === 'string' ) {
      devices = devices.split(' ');
    }
    if ( !(devices instanceof Array) ) {
      throw new Error('전달인자는 배열 또는 문자유형이어야 합니다.');
    }
    // 기기의 식별자를 가진 배열을 순환
    for ( var i=0, l=devices.length; i<l; i++ ) {
      var device = devices[i];
      if ( isDevice(device) ) { console.log(device); }
    }
  }
  // 모듈 공개
  global.checkDevices = checkDevices;

}); // (this)
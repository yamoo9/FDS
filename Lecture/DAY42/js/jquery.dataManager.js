/*! jquery.dataManger.js © yamoo9.net, 2016 */
// 자바스크립트 모듈 패턴
(function(global, $){
  'use strict';
  // jQuery 네임스페이스 객체(함수)
  // 함수 객체의 속성으로 dataManger 객체를 설정
  // jQuery 유틸리티 메소드라 명한다.
  var dataManager = {
    // 'support': function([feature]) { 로컬스토리지 또는 JSON 지원하는지 유무를 객체로 반환 }
    'support': (function(){
      var json = !!global.JSON, localstorage = !!global.localStorage;
      return function(feature) {
        if ( !feature ) {
          return {
            'json': json,
            'localstorage': localstorage
          };
        }
        feature = feature.toLowerCase();
        if ( feature === 'json' ) { return json; }
        if ( feature === 'localstorage' ) { return localstorage; }
      }
    })(),
    // 'get': function(key) { return 로컬스토리지로부터데이터를 반환(문자->객체) },
    'get': function(key) {
      if (!key || $.type(key) !== 'string' || !this.support().json || !this.support('localstorage')) {}
      return global.JSON.parse( global.localStorage.getItem(key) );
    },
    // 'set': function(key, value) { 전달된 value를 문자화 해서 로컬스토리지 객체의 key 값으로 저장 },
    'set': function(key, value) {
      if ( !key || !value || $.type(key) !== 'string' || !this.support().json || !this.support('localstorage') ) {}
        global.localStorage.setItem(  key, global.JSON.stringify(value));
    },
    // 'del': function(key) { key에 해당하는 데이터를 로컬스토리지로부터 제거한다. },
    'del': function(key) { global.localStorage.removeItem(key); },
    // 'clear': function() { 로컬스토리지 데이터가 존재할 경우, 모든 데이터를 제거한다. }
    'clear': function() { global.localStorage.clear(); }
  };

  $.dataManager = dataManager;

})(this, this.jQuery );
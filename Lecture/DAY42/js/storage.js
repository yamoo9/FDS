/*! storage.js © yamoo9.net, 2016 */
(function(global, storage, $){
  'use strict';

  // 루트 요소인 <html>을 참조하는 jQuery 객체 생성
  var $html = $('html');

  // 사용자의 웹 브라우저가 localStorge를 지원하는가?
  if (storage) {
    $html.addClass('localstorage');
  } else {
    $html.addClass('no-localstorage');
  }

  // 로컬스토리지 지원이 안된다면 사용자에게 웹브라우저 업데이트 권고
  if ( $html.hasClass('no-localstorage') ) {
    console.info('로컬스토리지가 지원되는 최신 브라우저로 업데이트 하세요.');
    return; // 함수 종료
  }

  // --------------------------------------------------------------------------------

  // 사용자의 웹 브라우저에 데이터를 저장/가져오기/지우기 등을 수행할 수 있다.

  // 데이터 가져오기
  // var FDS = storage.getItem('FDS');
  // FDS ? console.log('FDS 값:', FDS) : console.log('FDS는 존재하지 않습니다.');

  // 데이터 저장하기
  // FDS 값이 거짓이라면... FDS 값이 없다면 if {} 문 실행
  // if ( !FDS ) {
  //   storage.setItem('FDS', 'Front-End Develop SCHOOL, FAST CAMPUS');
  // }

  // 데이터 1개 지우기
  // if ( FDS ) {
  //   storage.removeItem('FDS');
  // }

  // 데이터 모두 지우기
  // key 데이터가 1개 이상 존재한다면 모든 데이터를 제거하라.
  // storage.length > 0 && storage.clear();

  // --------------------------------------------------------------------------------

  // JavaScript Object -> JSON String -> JavaScript Object
  // Model Data [susujini]
  var susujini = {
    'name'      : '수진',
    'job'       : '디벨로퍼',
    'age'       : 23,
    'gender'    : '여성',
    'email'     : 'susujini@susujini.me',
    'favorites' : ['자동차', '여행', '공부']
  };

  // 로컬 스토리지에 susujini 저장
  // 객체 -> 문자
  var str_susujini = JSON.stringify(susujini); // String
  storage.setItem('susujini', str_susujini);

  // 전역에 공개
  global.susujini = susujini;

  // 문자 -> 객체
  var getted_susujini = storage.getItem('susujini');
  getted_susujini = JSON.parse(getted_susujini); // Object
  console.log(getted_susujini);

  // [미션]
  // 가공된 형태의 사용자 정의 객체
  // 헬퍼 객체
  // 여러분이 정의할 사용자 정의 객체는 로컬스토리지 제어에 유용한 메소드를 포함
  // 데이터 가져오기/저장하기/지우기/모두지우기


})(this, this.localStorage, this.jQuery);
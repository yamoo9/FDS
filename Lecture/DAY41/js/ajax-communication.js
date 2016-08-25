(function(global, XHR){
  'use strict';

  function createXHR() {
    return new XHR();
  }

  // 1. CREATE
  // XHLHttpRequest() 생성자 함수를 통해
  // 비동기 통신을 수행할 객체를 생성
  var xhr = createXHR();

  // XMLHttpRequest 생성자.prototype 객체
  // console.dir(XHR.prototype); // xhr.__proto__ 와 동일.

  // console.log('생성된 xhr 객체:', xhr);

  // 2. OPEN
  // 마지막 인자 값이 false 라면 동기 통신!
  // 마지막 인자 값이 true 또는 생략하면 비동기 통신!
  xhr.open('GET', 'data/data.txt', false); // 동기 통신 Deprecated!!
  // xhr.open('GET', 'data/data.txt'); // 비동기 통신

  // 3. SEND
  xhr.send();

  // 동기 통신일 경우는.... 데이터가 로드될 때까지 기다림...
  // 비동기 통신일 경우는.... 아래 코드가 바로 해석됨...

  // 통신 상태 확인
  if ( xhr.status === 200 ) {
    console.log('통신 데이터 전송 성공! ^ㄴ^');
    // console.log(xhr.response);
    document.querySelector('.ajax-result').textContent = xhr.response;
  } else {
    console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
  }

})(this, this.XMLHttpRequest);
(function(global, XHR){
  'use strict';

  var createXHR = (function(){
    // IE 6 이하 웹 브라우저를 위한 대체 코드
    // ActiveXObject('Microsoft.XMLHTTP')
    XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
    return function () {
        return new XHR;
    };
  })();

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
  // xhr.open('GET', 'data/data.txt', false); // 동기 통신 Deprecated!!
  // xhr.open('GET', 'data/data.txt'); // 비동기 통신

  // 3. SEND
  // xhr.send();

  // 동기 통신일 경우는.... 데이터가 로드될 때까지 기다림...
  // 비동기 통신일 경우는.... 아래 코드가 바로 해석됨...

  var result_view = document.querySelector('.ajax-result');
  var call_ajax_btn = document.querySelector('.call-ajax-data-btn');

  call_ajax_btn.onclick = updateViewPlace;

  // 통신 상태 확인
  // if ( xhr.status === 200 ) {
  //   console.log('통신 데이터 전송 성공! ^ㄴ^');
  //   // console.log(xhr.response);
  //   call_ajax_btn.onclick = updateViewPlace;
  // } else {
  //   console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
  //   result_view.textContent = '데이터 로드에 실패했습니다....';
  //   console.log(xhr);
  // }

  // xhr.open('GET', 'data/data.txt', true); // 비동기 통신
  xhr.open('GET', 'data/data.html'); // 비동기 통신
  // xhr.open('GET', 'data/model.txt', false); // 동기 통신

  // 비동기 통신 객체에 이벤트 핸들러 바인딩
  xhr.onreadystatechange = function() {
    console.log(this); // this === xhr 객체
    if ( this.status === 200 && this.readyState === 4 ) {
      console.log('통신 데이터 전송 성공! ^ㄴ^');
      // result_view.textContent = '[' + this.statusText + '] ' + this.responseText;
      result_view.innerHTML = this.responseText;
    } else {
      console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
      result_view.textContent = '[' + this.statusText + '] ' + '데이터 로드에 실패했습니다....';
    }
    console.log(xhr);
  }

  function updateViewPlace() {
    // AJAX 통신 요청 보내기
    xhr.send();
    // 비동기 통신을 요청했을 경우,
    // 이벤트(`readystatechange`)를 통해 비동기 데이터가 로드된 시점에
    // 아래 조건문이 수행되어야 한다.
  }



})(this, this.XMLHttpRequest);
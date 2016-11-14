/*! ajax.study.js © yamoo9.net, 2016 */
// IE 6를 고려한 크로스 브라우징 헬퍼 함수 createXHR
(function(global){
  'use strict';

  var createXHR;

  if ( global.XMLHttpRequest ) {
    // IE 7+, Modern Web Browsera
    createXHR = function() {
      return new global.XMLHttpRequest();
    };
  }
  else {
    // IE 6
    createXHR = function() {
      return new ActiveXObject('Microsoft.XMLHTTP');
    };
  }

  global.createXHR = createXHR;

})(this);

(function(global, Ajax){
  'use strict';

  // XMLHttpRequest() 생성자 함수를 바로 사용할 때
  // var xhr = new Ajax();

  // createXHR() 헬퍼 함수를 사용했을 때
  var xhr = Ajax();

  // 동기(Sync) 방식으로 통신
  // 전달인자 1. `통신 방법`
  // 전달인자 2. `파일 경로`
  // 전달인자 3. `비동기 설정` [비동기:true, 동기:false]
  xhr.open('GET', './data/data.txt'); // default value: true -> 비동기(Async)

  // 버튼 클릭 이벤트 핸들링
  var ajax_call_btn         = document.querySelector('.call-ajax-data');
  var ajax_call_data_result = document.querySelector('.ajax-data-result');

  // 동기/비동기 방식에 대한 이해
  // xhr.send(); // 데이터 요청.................

  // 비동기 통신일 경우는 아래 코드가 바로 실행
  // console.log('xhr.status:', xhr.status); // 0


  // 비동기 통신 상태를 감지하여 콜백 처리하는 이벤트 구문
  // 신형 이벤트 모델
  xhr.addEventListener('readystatechange', checkAjaxCommunication);
  // 구형 이벤트 모델
  // xhr.onreadystatechange = checkAjaxCommunication;

  function checkAjaxCommunication() {
    if ( xhr.status === 200 && xhr.readyState === 4 ) {
      console.log('데이터 통신에 성공했습니다. :-)');
      console.log('xhr.response:', xhr.response);
      console.log('xhr.responseText:', xhr.responseText);
      // console.log('xhr.responseType:', xhr.responseType);
      ajax_call_data_result.innerHTML = xhr.responseText;
    }
    // else {
    //  console.error('데이터 통신에 실패했습니다. :-(');
    //  ajax_call_data_result.innerHTML = '데이터 통신에 실패했습니다. :-(';
    //  ajax_call_data_result.classList.add('error');
    // }
  }

  ajax_call_btn.addEventListener('click', callAjaxData);

  function callAjaxData() {
    xhr.send();
  }

  // 2초가 지난 뒤에 send()
  // global.setTimeout(function() {
  //   xhr.send();
  // }, 2000);


})(this, this.createXHR);
/*! ajax.study.js © yamoo9.net, 2016 */
(function(global, Ajax){
  'use strict';

  var xhr = new Ajax();

  // 동기(Sync) 방식으로 통신
  // 전달인자 1. `통신 방법`
  // 전달인자 2. `파일 경로`
  // 전달인자 3. `비동기 설정` [비동기:true, 동기:false]
  xhr.open('GET', './data/data.doc', false);

  // 버튼 클릭 이벤트 핸들링
  var ajax_call_btn         = document.querySelector('.call-ajax-data');
  var ajax_call_data_result = document.querySelector('.ajax-data-result');

  ajax_call_btn.addEventListener('click', callAjaxData);

  function callAjaxData() {
    xhr.send();
    console.log('콜백 Ajax 데이터');
    // 200: success, 404: client error
    console.log('xhr.status:', xhr.status);
    if ( xhr.status === 200 ) {
      console.log('데이터 통신에 성공했습니다. :-)');
      ajax_call_data_result.innerHTML = xhr.responseText;
    } else {
      console.error('데이터 통신에 실패했습니다. :-(');
      ajax_call_data_result.innerHTML = '데이터 통신에 실패했습니다. :-(';
      ajax_call_data_result.classList.add('error');
    }
  }

  // 2초가 지난 뒤에 send()
  // global.setTimeout(function() {
  //   xhr.send();
  // }, 2000);


})(this, this.XMLHttpRequest);
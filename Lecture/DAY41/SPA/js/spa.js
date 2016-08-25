(function(global, XHR){
  'use strict';

  var xhr = new XHR;
  // console.log(xhr); // AJAX 통신을 위해 생성된 객체

  // 통신 상태 관찰 이벤트 핸들링
  xhr.onreadystatechange = function() {
    // console.log(this); // xhr
    // 200 서버 통신 성공
    // 4 데이터 전송이 완료된 상태
    if ( this.status === 200 && this.readyState === 4 ) {
      view.innerHTML = this.responseText; // HTML Code
    }
  };

  // 문서객체 참조
  var view = document.querySelector('main');
  var nav_links = document.querySelectorAll('nav a');

  // console.log(nav_links.length);

  // nodelist 순환하여 이베트 바인딩 <-> 핸들러(함수)
  for ( var link, i = nav_links.length - 1; nav_links[i]; i-- ) {
    link = nav_links[i];
    // 1. 클로저 + 우회 메소드(proxy, bind) 사용
    link.onclick = (function(index){
      return viewUpdate.bind(link, index);
    })(i);
    // 2. 객체.속성 사용
    // link.idx = i;
    // link.onclick = viewUpdate;
  }

  // 페이지 뷰를 업데이트 하는 함수
  var views = 'home about works contact'.split(' ');

  // function viewUpdate() {
  function viewUpdate(index) {
    // console.log(this, this.idx); // <a>
    // 비동기 통신 설정/요청
    // 클릭한 <a> 요소의 인덱스를 통해 데이터를 가져와야 한다....
    // 집합 데이터 Array
    // 미션??? 각 <a> 요소를 클릭했을 때 인덱스는 어떻게 전달할 것인가?
    // var index = 0;
    // var page = 'view/' + views[this.idx] + '.html';
    var page = 'view/' + views[index] + '.html';
    xhr.open('GET', page);
    xhr.send();
    // 페이지의 주소(해쉬) 값을 변경
    global.location.hash = page;
    // 웹 브라우저가 수행하는 브라우저의 기본 동작 차단
    return false;
  }

  link.onclick();

})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));
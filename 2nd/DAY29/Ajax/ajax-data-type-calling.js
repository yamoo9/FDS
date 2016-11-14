/*! ajax-data-type-calling.js © yamoo9.net, 2016 */
(function(global, Ajax){
  'use strict';

  var buttons  = document.querySelectorAll('.call-ajax-data');
  var print_el = document.querySelector('.ajax-data-result');

  [].forEach.call(buttons, function(button) {
    button.addEventListener('click', AjaxCalling);
  });

  function AjaxCalling() {
    var data_type = this.classList.item(1);
    // Ajax 설정
    var xhr       = new XMLHttpRequest(),
        method    = 'GET',
        url       = ('./data/' + data_type).replace(/-/, '.');
    xhr.open(method, url);
    // 비동기 통신 요청에 따른 데이터를 받는 상황(이벤트)이 오면 printData() 함수 실행
    xhr.addEventListener('readystatechange', printData.bind(xhr, url));
    xhr.send(); // 서버 데이터 요청
  }

  function printData(url) {
    url = url.split('.'); // 'txt', 'html', 'xml', 'json'
    var type = url[url.length - 1];
    if(this.status === 200 && this.readyState === 4) {
      switch(type) {
        case 'txt':
        case 'html':
          print_el.innerHTML = this.responseText;
        break;
        case 'xml':
          // print_el.innerHTML = 'print xml data type';
          var xml_doc = this.responseXML;
          var people = xml_doc.getElementsByTagName('person');
          for ( var i=0, l=people.length; i<l; i++ ) {
            var person = people[i];
            var person_name = person.getElementsByTagName('name')[0].firstChild.nodeValue;
            var person_tel  = person.getElementsByTagName('tel')[0].firstChild.nodeValue;
            var person_mail = person.getElementsByTagName('mail')[0].firstChild.nodeValue;
            console.log(person_name);
            console.log(person_tel);
            console.log(person_mail);
          }
        break;
        case 'json':
          print_el.innerHTML = 'print json data type';
        break;
      }
    }
  }

})(this, this.XMLHttpRequest);
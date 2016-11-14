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
    var xhr       = new Ajax(),
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
          var html_template = '';
          var random_face = [
            'a13200acf57530e5b390fab35d176fc765ce7dfe_full.jpg',
            'a139201eecad23108dc4a2b1453ffa74a9e51387_full.jpg',
            'a140c48360e863efeedd9214bfbbf2f242733a5e_full.jpg',
            'a1588ac83bdfa073f368694378a91e8b2ab49260_full.jpg',
            'a171aafc8b7c861795b17483293c26e36cf4215c_full.jpg'
          ];
          for ( var i=0, l=people.length; i<l; i++ ) {
            var person = people[i];
            var person_name = person.querySelector('name').textContent;
            var person_tel  = person.querySelector('tel').textContent;
            var person_mail = person.querySelector('mail').textContent;
            html_template += '<ul class="xml-list">';
            html_template +=    '<li><img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/'+ random_face[i] +'" alt="avatar" width="92" height="92" /></li>';
            html_template +=    '<li>'+ person_name +'</li>';
            html_template +=    '<li>'+ person_tel +'</li>';
            html_template +=    '<li>'+ person_mail +'</li>';
            html_template += '</ul>';
          }
          print_el.innerHTML = html_template;
        break;
        case 'json':
          print_el.innerHTML = 'print json data type';
        break;
      }
    }
  }

})(this, this.XMLHttpRequest);
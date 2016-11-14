/*! ajax-data-type-calling.js © yamoo9.net, 2016 */
(function(global, Ajax){
  'use strict';

  global.addEventListener('DOMContentLoaded', parsePageLoad);

  function parsePageLoad() {
    var page = this.location.hash.replace(/#!/, '');
    var button;
    switch(page){
      case 'txt':
        button = buttons[0];
      break;
      case 'html':
        button = buttons[1];
      break;
      case 'xml':
        button = buttons[2];
      break;
      case 'json':
        button = buttons[3];
      break;
    }
    AjaxCalling.call(button);
  }

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
          var txt2json_obj = global.JSON.parse(this.response);
          var json_html_template = [];
          txt2json_obj.results.forEach(function(o, i) {
            json_html_template.push(`
              <ul class="person-info">
                <li><img class="person-picture" src="${o.picture.medium}" alt="${o.name.first}"></li>
                <li>
                  <h3 class="person-name">
                    <span class="name-title">${o.name.title.toUpperCase()}</span>
                    <span class="name-first">${o.name.first}</span>
                    <span class="name-last">${o.name.last}</span>
                  </h3>
                </li>
                <li>
                  <span class="person-gender">${o.gender}</span>
                  <span class="person-national">${o.nat}</span></li>
                <li><span class="person-cell">${o.cell}</span></li>
                <li><span class="person-email">${o.email}</span></li>
                <li>
                  <p class="person-address">
                    <span class="address-state">${o.location.state}</span>
                    <span class="address-city">${o.location.city}</span>
                    <span class="address-street">${o.location.street}</span>
                  </p>
                </li>
              </ul>
            `);
          });
          print_el.innerHTML = json_html_template.join('');
        break;
      }
    }
    global.location.hash = '!' + type; // '!' hashbang
  }

})(this, this.XMLHttpRequest);
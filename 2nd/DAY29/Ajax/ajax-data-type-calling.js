/*! ajax-data-type-calling.js © yamoo9.net, 2016 */
(function(global, Ajax){
  'use strict';

  var buttons  = document.querySelectorAll('.call-ajax-data');
  var print_el = document.querySelector('.ajax-data-result');

  [].forEach.call(buttons, function(button) {
    button.addEventListener('click', AjaxCalling);
  });

  function AjaxCalling() {
    var xhr       = new XMLHttpRequest();
    var method    = 'GET', url, async = true;
    var data_type = this.classList.item(1);
    switch(data_type) {
      case 'data-txt':
        url = './data/data.txt';
      break;
      case 'data-html':
        url = './data/data.html';
      break;
      case 'data-xml':
        url = './data/data.xml';
      break;
      case 'data-json':
        url = './data/data.json';
      break;
      // default:
    }
    xhr.open(method, url, async);
    xhr.send();
    xhr.addEventListener('readystatechange', printData.bind(xhr, url));
  }

  function printData(url) {
    url = url.split('.');
    var type = url[url.length - 1];
    if(this.status === 200 && this.readyState === 4) {
      switch(type) {
        case 'txt':
          print_el.innerHTML = 'print txt data type';
        break;
        case 'html':
          print_el.innerHTML = 'print html data type';
        break;
        case 'xml':
          print_el.innerHTML = 'print xml data type';
        break;
        case 'json':
          print_el.innerHTML = 'print json data type';
        break;
      }
    }
  }

})(this, this.XMLHttpRequest);
/*! DOM API © yamoo9.net, 2016 */

(function(global){
  'use strict';

  // 선택 ---------------------------------------------------------------------------------

  // (ELEMENT_NODE || document).getElementById();         // ELEMENT_NODE
  // (ELEMENT_NODE || document).getElementsByTagName();   // NODE_LIST (Like Array Object)
  // (ELEMENT_NODE || document).getElementsByClassName(); // NODE_LIST (Like Array Object)
  // (ELEMENT_NODE || document).querySelector();          // ELEMENT_NODE
  // (ELEMENT_NODE || document).querySelectorAll();       // NODE_LIST (Like Array Object)

  // 탐색 ---------------------------------------------------------------------------------

  // PARENT_NODE: .parentNode

  // CHILD_NODE | NODE_LIST:
  // .firstChild, .lastChild, .childNodes, .children
  // .firstElementChild, .lastElementChild

  // SIBLING_NODE:
  // .nextSibling, .previousSibling
  // .nextElementSibling, .previousElementSibling

  // 삽입(추가) ----------------------------------------------------------------------------

  // PARENT_NODE.appendChild(CHILD_NODE)
  // TARGET_NODE.appendChild(CHILD_NODE)
  // TARGET_NODE.parentNode.insertBefore(INSERT_NODE, TARGET_NODE)

  // 제거 ---------------------------------------------------------------------------------

  // PARENT_NODE.removeChild(CHILD_NODE)
  // CHILD_NODE.parentNode.removeChild(CHILD_NODE)

  // 대체 ---------------------------------------------------------------------------------

  // NODE를 다른 NODE와 위치를 서로 변경하는 것이 아닙니다.
  // 기존 NODE를 제거(반환)한 후, 새로운 NODE를 그 위치에 대체시키는 것입니다.
  // TARGET_NODE.parentNode.replaceChild(REPLACE_NODE, TARGET_NODE)

  var gnb      = document.querySelector('#gnb');
  var target_p = document.querySelector('.target-paragraph');

  // console.log('gnb:', gnb);
  // console.log('target_p:', target_p);

  function bindEvent(container_el, target_selector) {
    if ( !container_el || container_el.nodeType !== 1 ) {
      throw new Error('첫번째 인자는 요소노드를 전달해야합니다.');
    }
    target_selector = target_selector || 'a';
    // start: 이벤트 연결 구문
    var bind_els = container_el.querySelectorAll(target_selector);

    for ( var i=0, l=bind_els.length; i<l; i++ ) {
      var el = bind_els[i];
      // el.onclick = replaceStrongElement;
      el.onclick = changePositionStrongElement;
    }
    // end: 이벤트 연결 구문
  }

  bindEvent(gnb); // 초기화

  function changePositionStrongElement() {
    var parent = this.parentNode;
    var target_strong = target_p.querySelector('strong');
    var target_strong_next_sibling = target_strong.nextSibling;
    // console.log(target_strong_next_sibling);
    var replaced_node = parent.replaceChild(target_strong, this);
    // console.log(replaced_node);
    // 텍스트 노드 앞에 제거된 <a> 요소를 삽입힌다.
    target_strong_next_sibling.parentNode.insertBefore(this, target_strong_next_sibling);
  }

  function replaceStrongElement() {

    // 대체 요소 탐색(선택)
    var target_strong = target_p.querySelector('strong');
    // console.log('target_strong:', target_strong);

    // 대체 요소를 자신의 위치로 대체
    // <a> 요소 클릭하면, 해당 <a> 요소 위치에 <strong> 요소가 대체된다.
    var replaced_el = this.parentNode.replaceChild(target_strong, this);
    // console.log('replaced_el:', replaced_el);

    // 웹 브라우저 기본 동작 차단
    // 오래 전 방법
    return false;
    // 이 아래 코드는 실행 X

  }

  // 복사 ---------------------------------------------------------------------------------

  var copy_btn = document.querySelector('.copy-gnb-button');
  var copyzone = document.querySelector('.copyzone');

  copy_btn.onclick = function() {

    var copy_gnb, deep_copy_gnb;
    deep_copy_gnb = gnb.cloneNode(true);
    copyzone.appendChild(deep_copy_gnb);

    bindEvent(deep_copy_gnb); // 재사용

    console.log( gnb.cloneNode() );
    console.log( gnb.cloneNode(true) );
    console.log('%c--------------------------', 'color: #3d9a21');
    console.log( gnb.cloneNode().hasChildNodes() );
    console.log( gnb.cloneNode(true).hasChildNodes() );
  };

  // 복제하고자 하는 노드.cloneNode(<boolean>); // false 자기 자신만 복사

  // 복제하고자 하는 노드.cloneNode(true); // 내부 자식노드까지 모두 복사

  // GET/SET
  // innerHTML

  // var html_code = '<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sunt cum, cupiditate, fuga ipsa sit sint consequatur sapiente. Optio, sint?</p></blockquote>';

  // console.log( '$.query(\'body\').innerHTML:', document.body.innerHTML );

  // var body_first = document.body.firstElementChild;

  // console.log('body_first.innerHTML:', body_first.innerHTML);

  // body.innerHTML = html_code + body.innerHTML;

  console.log('%c------------------------------', 'color: #3d9a21');

  var body = document.body;

  var table_caption = 'this is table caption';

  // 방법 0.
  // var table_code = '<table border="1" class="fds-table"><caption>'+ table_caption +'</caption><thead><tr><th scope="col">heading</th><th scope="col">heading</th><th scope="col">heading</th><th scope="col">heading</th></tr></thead><tbody><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr></tbody></table>';

  // 방법 1.
  // var table_code = '';
  // table_code += '<table border="1" class="fds-table">';
  // table_code +=   '<caption>' + table_caption + '</caption>';
  // table_code +=   '<thead>';
  // table_code +=      '<tr>';
  // table_code +=         '<th scope="col">heading</th>';
  // table_code +=         '<th scope="col">heading</th>';
  // table_code +=         '<th scope="col">heading</th>';
  // table_code +=         '<th scope="col">heading</th>';
  // table_code +=      '</tr>';
  // table_code +=   '</thead>';

  // 방법 2.
  // var table_code = [
  //   '<table border="1" class="fds-table">',
  //     '<caption>' + table_caption + '</caption>',
  //     '<thead>',
  //       '<tr>',
  //         '<th scope="col">heading</th>',
  //         '<th scope="col">heading</th>',
  //         '<th scope="col">heading</th>',
  //         '<th scope="col">heading</th>',
  //       '</tr>',
  //     '</thead>',
  // ].join('');

  // 방법 3.
  // ECMAScript 2015
  // var table_code = `
  //   <table border="1" class="fds-table">
  //     <caption>${table_caption}</caption>
  //     <thead>
  //       <tr>
  //         <th scope="col">${table_heading_1}</th>
  //         <th scope="col">${table_heading_2}</th>
  //         <th scope="col">${table_heading_3}</th>
  //         <th scope="col">${table_heading_4}</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //     </tbody>
  //   </table>
  // `;

  // ES6  -> BabelJS     -> ES5
  // Sass -> Sass Engine -> CSS
  // var table_code = "\n    <table border=\"1\" class=\"fds-table\">\n      <caption></caption>\n      <thead>\n        <tr>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n      </tbody>\n    </table>\n  ";


  // console.log(table_code);

  // body.innerHTML = table_code + body.innerHTML;

  var nav = document.querySelector('#gnb');

  console.log(nav);

  // nav 요소의 앞에 형제요소 <div>를 추가 하라.
  nav.insertAdjacentHTML('beforebegin', '<div class="insert-div">beforebegin insert-div</div>');
  // nav 요소의 첫번째 자식요소로 <div>를 추가 하라.
  nav.insertAdjacentHTML('afterbegin', '<div class="insert-div">afterbegin insert-div</div>');
  // nav 요소의 마지막 자식요소로 <div>를 추가 하라.
  nav.insertAdjacentHTML('beforeend', '<div class="insert-div">beforeend insert-div</div>');
  // nav 요소의 뒤에 형제요소로 <div>를 추가 하라.
  nav.insertAdjacentHTML('afterend', '<div class="insert-div">afterend insert-div</div>');

})(this);
/*! 02-make-dom-object.js © yamoo9.net, 2016 */

/**
 * ------------------------------------------
 * DOM API를 사용하여 문서 객체를 동적으로 생성해보자.
 * ------------------------------------------ */
// <div id="div-wrap">this is division.</div>
var maked_division = document.createElement('div');
// var maked_division_id_attr = document.createAttribute('id');
// maked_division_id_attr.textContent = 'div-wrap';
// console.dir(maked_division_id_attr);
var maked_division_text = document.createTextNode('this is division.');
// <ul><li>list item</li></ul>
var maked_unordered_list = document.createElement('ul');
var maked_unordered_list_item = document.createElement('li');
var maked_unordered_list_item_text = document.createTextNode('list item');

// console.log('div:', maked_division);
// console.log('div_text:', maked_division_text);

// console.log('ul:', maked_unordered_list);
// console.log('ul > li:', maked_unordered_list_item);
// console.log('ul > li_text:', maked_unordered_list_item_text);

/**
 * ------------------------------------------
 * DOM API를 사용하여 문서 객체를 동적으로 조작해보자.
 * 부모_노드.appendChild( 자식_노드 )
 * ------------------------------------------ */
// <div>This is Division.</div>
maked_division.appendChild(maked_division_text);
console.log(maked_division);

// 동적으로 생성한 <div> 요소를 문서의 특정한 목적지에 추가(삽입)
var target_place = document.querySelector('#parent > .child:last-child');

target_place.appendChild(maked_division);

/**
 * ----------------------------------------------------------------
 * 동적으로 생성된 <ul><li>list item</li></ul>을
 * 문서의 특정 요소 내부 마지막 자식으로 추가(삽입)
 * ---------------------------------------------------------------- */
maked_unordered_list.appendChild(maked_unordered_list_item);
maked_unordered_list_item.appendChild(maked_unordered_list_item_text);

// console.log(maked_unordered_list);

// 목적지에 해당하는 요소를 직접 생성한 다음에 문서에 붙여보겠다.

// <div id="target-container"></div>
var target_container = document.createElement('div');
// setAttribute(attribute, value);
target_container.setAttribute('id', 'target-container');
target_container.appendChild(maked_unordered_list);
// document.body.appendChild(target_container);

var body = document.body;
var target = body.firstChild;

// body.insertBefore(target_container, target);


// 가능한 청년들이여! 아래 헬퍼 함수를 만들지어다.
function prependChild(child_node, parent_node) {
  parent_node.insertBefore(child_node, parent_node.firstChild);
}

prependChild(target_container, body);
///////////////////////////////////////////////////////
// 문서에서 제어하고자 하는 요소들을 각각 변수(적절한 이름)에 참조한다. ///////////////////////////////////////////////////////

var container        = document.querySelector('.container');
var show_grid_button = document.querySelector('.btn--show-grid');
var hide_grid_button = document.querySelector('.btn--hide-grid');

console.log('container:',container);
console.log('show_grid_button:',show_grid_button);
console.log('hide_grid_button:',hide_grid_button);

///////////////////////////////////////////////////////////
// 참조한 문서 객체의 이벤트 속성에 함수(연결된 후에는 이벤트 핸들러)를 연결
///////////////////////////////////////////////////////////
// 이름이 없는 함수 (함수 (표현)식, 함수 리터럴, 무명, 익명 함수)
show_grid_button.onclick = function() {
  // console.log('clicked show grid button');
  // .container 요소에 show-grid 클래스 속성을 추가
  // 이전 클래스 속성을 메모리해야 한다.
  var pre_assigned_class = container.getAttribute('class');
  // console.log(pre_assigned_class); // 'container'
  container.setAttribute('class', pre_assigned_class + ' ' + 'show-grid');
};

hide_grid_button.onclick = function() {
  // console.log('clicked hide grid button');
  // .container 요소에 show-grid 클래스 속성을 제거
  // 현재 어떤 클래스 속성 값이 적용되었는지 확인
  var pre_assigned_class = container.getAttribute('class');
  // console.log(pre_assigned_class);
  var removed_class = pre_assigned_class.replace('show-grid', '');
  container.setAttribute('class', removed_class.trim());
};


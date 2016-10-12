/*! grid-system-utility.js © yamoo9.net, 2016 */

/** @function percent() */
function percent(target, context) {
  return target/context * 100;
}

/** @function toggleGrid() */
function toggleGrid() {
  var _container = document.querySelector('.container');
  // 조건 검증
  // _container 요소에 .show-grid 클래스가 있어?
  // 있으면?
  if ( _container.classList.contains('show-grid') ) {
    _container.classList.remove('show-grid');
  }
  // 없으면?
  else {
    _container.classList.add('show-grid');
  }
}
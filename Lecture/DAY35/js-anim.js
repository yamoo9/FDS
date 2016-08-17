/*! js-anim.js © yamoo9.net, 2016 */

// -----------------------------------
// ToDoList
// -----------------------------------
// 1. 문서에서 `.demo-box` 요소를 선택한다.
// 2. `.demo-box` 요소를 사용자가 클릭하면
// 3. 움직이는 함수(movingBox)를 호출한다.
// 4. 애니메이션이 종료되면 콜백 함수를 실행한다.

// .demo-box 요소를 선택
var demo_box = query('.demo-box');

function movingBox(position, callback) {
  // 초기 값 설정
  position = position || { 'x': 0, 'y': 0 };
  callback = typeof callback === 'function' ? callback : function() {};

  // 애니메이션 시동!!!!!

  // 애니메이션 종료!!!!
  callback();
}

demo_box.onclick = function(event) {
  console.log('clicked demo box.');
  movingBox({
    'x': event.clientX,
    'y': event.clientY
  });
};
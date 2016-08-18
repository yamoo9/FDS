
// .demo-navigation 선택합니다.
// 내부에서 a 요소를 모두 수집합니다.
// 수집된 a 요소를 사용자가 클릭하면
// 클릭된 a 요소의 수집될 당시의
// 인덱스 넘버를 콘솔에 기록합니다.

var demo_nav = query('.demo-navigation');
var demo_nav_links = queryAll('a', demo_nav);
var i=0, l=demo_nav_links.length;

// 클로저 함수를 반환하는 래퍼 함수를 만드는 일은 많은 비용이 든다.
// function showMeIndexWrapper(index) {
//   function showMeIndex() {
//     // index ?????
//     console.log('my index number is', index);
//   }
//   return showMeIndex;
// }

// 비용을 절감하는 형태로 클로저 함수를 만드는 방법
// 모던 자바스크립트 패턴 중 이 패턴이 가장 많이 사용되는 패턴
// IIFE 패턴 (즉시 실행되는 함수)
// 일반적인 함수의 호출과정과 달리 이름이 없는 함수를 즉시 호출하는 것을 말한다.
// +function(){}();
// ~function(){}();
// !function(){}();
// (function(){
  // 외부와 단절된 독립된 공간이 형성
  // 캡슐화
// }());
// (function(){})();


// var fn = function() {};

for(; i<l; i++) {
  // 클로저 사용 예시
  demo_nav_links[i].onclick = (function(count){
    return function() {
      console.log(count);
    };
  }(i));

  // demo_nav_links[i].onclick = showMeIndexWrapper(i);
  // demo_nav_links[i].onclick = function() {
  //   console.log(i);
  // }
}
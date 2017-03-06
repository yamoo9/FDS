/**
 * --------------------------------
 * 클로저
 *
 * 지역 공간은 해당 지역 공간을 포함하는 외부 공간에서 접근이 불가능하다.
 * 반대로 지역 공간 내부의 지역 공간에서는 상위 영역으로 접근이 가능하다.
 * 함수는 일급 객체임으로 함수 내부에서 함수를 밖으로 내보낼 수 있다.
 * 이 때 밖으로 내보내진 함수는 이미 사라졌어야 할 공간을 기억한다.
 */

///////////////////
// 전역 변수 오염 예시
///////////////////
var n = 0;
var numbering = function() {
  return n++;
};

numbering(); // 0
numbering(); // 1
numbering(); // 2
numbering(); // 3

// --------------------------------------------------------------

/////////////
// 클로저 예시
/////////////

// 전역 공간
var counter = function() {
  // 함수 counter 공간
  var init_count = 0;
  var countDown = function(reset) {
    if ( reset ) {
      init_count = 0;
      console.log('init_count:', init_count);
    }
    // 함수 countDown 공간
    return init_count++;
  };
  return countDown;
};

var countDown = counter(); // 클로저 함수 반환

countDown(); // 0
countDown(); // 1
countDown(); // 2
countDown(); // 3


// 클로저 활용 예시 Part. 2
// 함수가 아닌, 객체를 내보내는 함수
function countMaker( init_count ) {
  // 초기 값 설정
  var _count = init_count || 0;
  // 감춰진 멤버(보안 처리, 은폐)
  var increase = function(step) {
    _count += (step || 1);
  };
  var decrease = function(step) {
    _count -= (step || 1);
  };
  var getCount = function() {
    return _count;
  };
  var setCount = function(number) {
    _count = number;
  };
  var resetCount = function() {
    _count = init_count;
  };
  // 출력 패턴
  return {
    'increase' : increase,
    'decrease' : decrease,
    'get'      : getCount,
    'set'      : setCount,
    'reset'    : resetCount
  };
}

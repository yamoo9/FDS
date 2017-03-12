/*! detect-css-features.js © yamoo9.net, 2017 */

// CSS 속성을 브라우저가 지원하는지 파악하기 위한 테스트 객체
window._tester = document.createElement('div').style;


// console.log('window._tester:', window._tester);

// delete window._tester;
// console.log('window._tester:', window._tester);

function detectCSSFeature(property) {
  // 전달인자 유효성 검증
  if ( typeof property !== 'string' ) {
    throw new Error('CSS 속성 이름을 문자열로 전달해주세요.');
  }
  // 결과 값 반환
  return property in _tester;
}

function detectCSSFeatures(properties) {
  var _root = document.documentElement;
  // 전달인자 유효성 검사
  if ( !Array.isArray(properties) ) {
    // 오류 발생!
  }
  // 배열 순환 탐색
  for (var property, i=properties.length-1; i >= 0; i--) {
    property = properties[i];
    // transform, animation, flex, grid
    if ( detectCSSFeature(property) ) {
      // 지원 되는 경우
      _root.classList.add(property);
    } else {
      // 미지원 경우
      _root.classList.add('no-'+property);
    }
  }
}

// detectCSSFeatures(['grid', 'flex', 'animation', 'transform']);

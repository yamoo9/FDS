/*! ui-carousel.js © yamoo9.net, 2016 */

// 자바스크립트가 지원되는 환경 임을 식별할 수 있는 모듈
(function(global){
  'use strict';

  // <html> 요소를 찾아서 class 속성에서 'no-js' 값을 'js'로 변경
  global.html = query('html');

  if ( html.classList ) {
    // 신형 방식 IE 10+
    html.classList.remove('no-js');
    html.classList.add('js');
  } else {
    // 구형 방식
    var html_class_attr = html.getAttribute('class');
    // 설정
    html.setAttribute('class', html_class_attr.replace(/no-js/,'js'));
  }

}(this));

// UI Carousel 컴포넌트(Component) 제작
(function(global){
  'use strict';

  // -----------------------------------------------------
  // 1. [절차 지향] 함수 형 방식으로 진행
  // -----------------------------------------------------
  // 1.1 컴퍼넌트 분석
  // 1.2 기능 설계
  // 1.3 기능 구현
  // 1.4 테스트
  // 1.5 빌드(배포)

})(this);




(function(global){
  'use strict';

  // -----------------------------------------------------
  // 2. [객체 지향] 커스텀 객체 형태로 변경
  // -----------------------------------------------------
  // 2.1 객체 생성자 (ES 2015. class 제작)
  // 2.2 객체 생성자의 프로토타입 객체를 통해 공유할 수 있는 기능 정의
  // 2.3 정의된 기능 구현
  // 2.4 테스트
  // 2.5 빌드(배포)

})(this);
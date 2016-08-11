/*! compare-to-value-reference.js © yamoo9.net, 2016 */

// [값을 복제하는 경우]
// 원시 데이터 유형 (숫자, 문자, 논리, undefined, null)
// 원시 데이터 유형은 값이 복제가 된다.

// [값을 참조하는 경우]
// 자료형 데이터 유형 (객체, 배열, 함수)
// 자료형 데이터 유형은 데이터가 참조가 된다.

// ---------------------------------------
// 변수에 복사/참조되는 값의 유형을 확인하기 위해 실습

// 문서에서 .brand 요소를 찾아 변수 brand에 참조(Reference)
var brand = query('.brand');
// String Literal Data (Primitive Data)
// 변수 brand_txt에 복사(Copy)된 값은 문자 유형의 데이터(Data)이다.
var brand_txt = brand.firstChild.nodeValue;
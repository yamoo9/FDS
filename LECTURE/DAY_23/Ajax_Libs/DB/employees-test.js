// 외부의 스크립트 파일 로드
// 서버 환경에서 자바스크립트를 사용할 때
// 다른 파일을 불러오려면?
var generateEmployees = require('./generateEmployees');

// generateEmployees 변수에 참조된 것은 함수???
console.log(typeof generateEmployees.a);

// 파일 내부에서 함수 실행
generateEmployees();

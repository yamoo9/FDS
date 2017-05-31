
// data.js 파일에 정의되어 있는 데이터의 각 속성 유형을
// type 유틸리티 함수로 검증

// console.dir(classUsingArray);
// console.dir(classUsingObject);

var tester = classUsingArray[8];

console.log('type(tester.age) === \'number\':', type(tester.age) === 'number');
console.log('type(tester.school) === \'null\':', type(tester.school) === 'null');
console.log('type(tester.family) === \'array\':', type(tester.family) === 'array');

// 아래 함수 실행 시, true 결과가 나오는 유틸리티 함수를 작성해보세요.
isType( tester.name, 'string' );
// 배열 생성 방법
let arr = new Array(3);
console.log(arr);

arr = new Array(1, 2, 3); // new Array
console.log(arr);

arr = Array.of(1, 2, 3, 4, 5); // of
console.log(arr);

const arr2 = [1, 2, 3, 4]; // []
console.log(arr2);

arr = Array.from(arr2); // 다른 배열 복사
console.log(arr);

arr = Array.from('text'); // 문자열 하나씩
console.log(arr);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고(오브젝트와 유사함)
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음(Typed Collections)
arr = Array.from({
  0: '안',
  1: '녕',
  length: 2,
}); // 객체로 배열을 만들 수 있음
console.log(arr); // [ '안', '녕' ]

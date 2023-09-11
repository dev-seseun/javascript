// 리액트와 같은 프레임워크 사용시 기본적으로 엄격모드임
'use strict';
// var x = 1;
// delete x;  // delete 불가능

function add(x) {
  var a = 2;
  // b = a + x; // 키워드 생략 불가능
  var b = a + x;
  console.log(this); // undefined
}
add(1);

const array = [1, 2, 3];
// for (num of array) { // 키워드 생략 불가능
for (let num of array) {
  console.log(num);
}

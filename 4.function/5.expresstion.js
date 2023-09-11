// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }

// 함수는 객체니깐!
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// let add = function sum (a, b) {
//   return a + b;
// };
// console.log(sum(1, 2)); // error

// 화살표 함수 const name () => { }
add2 = (a, b) => {
  return a + b;
};
// = add2 = (a, b) => a + b;
console.log(add2(1, 2));

// 생성자함수 const object = new Function(); 뒤 객체편에서~

// IIFE (Immediately-Invoked Function Expresstions)
// 함수를 만들고 즉각적으로 실행
(function run() {
  console.log('🤾‍♀️');
})();

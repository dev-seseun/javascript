// let 재할당 가능
let a = 1;
a = 2;

// const 재할당 불가능
// 1. 상수
// 2. 상수변수 or 변수
const text = 'hello';
// text = 'hi'; // TypeError: Assignment to constant variable.

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: '사과',
  color: 'red',
  display: '🍎',
};
// apple = {};
console.log(apple);

apple.color = 'green';
apple.display = '🍏';
console.log(apple);
// 왜? 참조값(가리키는 셀값)은 변하지 않고
// 객체 내부의 값은 변경이 가능한거야

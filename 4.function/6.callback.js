// 콜백함수
const add = (a, b) => a + b;
const multifly = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 콜백함수는 고차함수 안에서 필요한 순간에 호출됨
function calculator(a, b, action) {
  // 여기서 action = 외부로부터 전달받는 함수 = 콜백함수

  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b); // 함수 안에서 콜백함수를 호출
  // console.log(result);
  return result;
}

console.log(calculator(-1, -1, add));
// console.log(calculator(1, 2, add));
// console.log(calculator(1, 2, multifly));

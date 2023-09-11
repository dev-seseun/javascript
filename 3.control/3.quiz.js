// 퀴즈!
let num = 3;

let isEven = num % 2 === 0 ? true : false;
// num의 숫자가 짝수이면 👍 홀수이면 👎
// if
if (isEven) {
  console.log('👍');
} else {
  console.log('👎');
}
// ternary
console.log(isEven ? '👍' : '👎');

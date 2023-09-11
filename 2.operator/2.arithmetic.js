// 산술 연산자 Arithmetic operators
/*
  + 더하기
  - 빼기
  * 곱하기
  / 나누기
  % 나머지
  ** 거듭제곱
 */

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); // es7
console.log(Math.pow(5, 2)); // 기존 거듭제곱

// + 연산자 주의점!
let text = '두개의' + '문자';
console.log(text);
text = '1' + 1; // 숫자 + 문자열 = 문자열
console.log(text);

const num1 = 123;
const num2 = new Number(123); // 메모리낭비

console.log('num1', typeof num1, num1);
console.log('num2', typeof num2, num2);

// 클래스 레벨의 property
console.log(Number.MAX_VALUE); // e+308 = 10^308
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}
if (num1 < Number.MAX_VALUE) {
}

// 지수 표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

const num4 = 1234.12;
console.log(num4.toFixed()); // 반올림하여 문자열로 반환
console.log(num4.toString()); // 문자열로
console.log(num4.toLocaleString('ar-EG')); // 지역 언어에 맞게
console.log(num4.toPrecision(5)); // 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될 때는 지수표기됨

if (Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
}

// 10진수 값을 2진수로 변환해서 계산하고 다시 10진수로 변환함 -> 오차발생
const num = 0.1 + 0.2 - 0.2;
console.log(num); // 0.10000000000000003

function isEqual(original, expected) {
  // return original === expected;
  return original - expected < Number.EPSILON;
  return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // false

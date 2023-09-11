// 증가 & 감소 연산자 Increment & Decrement Operator
console.log('-----------------------');
let a = 0;
console.log(a); // 0
a++; // a = a + 1;
console.log(a); // 1
a--; // a = a - 1;
console.log(a); // 0

// 주의!
// a++ 필요한 연산 후 값을 증가시킴
// ++a 값을 먼저 증가하고 필요한 연산을 함
console.log('-----------------------');
a = 0;
let b = a++; // 할당연산 후 a가 증가한다.
console.log(b); // 0
console.log(a); // 1
let c = ++a; // 할당연산 전 a가 증가한다.
console.log(c); // 2
console.log(a); // 2

let d = 0;
console.log(d++); // 0. log 출력 후 d가 증가한다.
console.log(d); // 1
console.log(++d); // 2. log 출력 전 d가 증가한다.

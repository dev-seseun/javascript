// 단항연산자 Unary Operators
/*
  + 양
  - 음
  ! 부정
 */

let a = 5;
a = -a; // -1 * 5
console.log(a);
a = -a;
console.log(a);
a = +a;
console.log(a);
a = -a; // -5
a = +a; // +(-5)
console.log(a);

let bool = true;
console.log(bool);
console.log(!bool);
console.log(!!bool);

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지
console.clear();
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

// 참조:: 1.5.boolean.js
console.clear();
// !! : 값을 true, false로 변환함
// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'false');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

// ! : 부정연산자
// !! : 값을 boolean type으로 변경함

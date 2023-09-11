// 불리언타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예시
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isActivated);

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

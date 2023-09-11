// 사용예제1
function add(num1, num2) {
  console.log('add fnc');
  return num1 + num2;
}
const result = add(1, 2); // 함수호출
console.log(result);

console.clear();
// 사용예제2
let lastName = '이';
let firstName = '승은';

function fullName(first, last) {
  return `${first} ${last} 👍`;
}

console.log(fullName(firstName, lastName));

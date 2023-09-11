// 고차함수 (Higher-order function)
const fruits = ['🍌', '🍓', '🍇', '🍓'];

// for 대신 forEach를 사용할 수 있어
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
fruits.forEach((el, idx, arr) => console.log(el, idx, arr)); // 요 안에 든 함수(console...)가 콜백함수다 이말이야

// 조건에 맞는(콜백함수) 아이템을 찾을 때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🍕', price: 1 };
const item2 = { name: '🍜', price: 2 };
const item3 = { name: '🍣', price: 3 };
store = [item1, item2, item3, item2];
let find = store.find((el) => el.name === '🍣');
console.log(find);

// findIndex: 제일 먼저 조건에 맞는 아이템의 index를 반환
let findIdx = store.findIndex((el) => el.name === '🍣');
console.log(findIdx);

// some: 배열의 아이템들 중 하나라도 조건(콜백함수)에 맞는지 확인
let some = store.some((el) => el.name === '🍣'); // true / false
console.log(some);

// every: 배열의 아이템들 전부 조건(콜백함수)에 맞는지 확인
let every = store.every((el) => el.name === '🍣'); // true / false
console.log(every);

// filter: 조건(콜백함수)에 맞는 아이템들만 모아 새로운 배열로 반환
let filter = store.filter((el) => el.name === '🍣');
console.log(filter);

console.clear();

// Map: 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((el) => el * 2);
console.log(result);
result = nums.map((el) => {
  if (el % 2 === 0) {
    return el * 2;
  } else {
    return el;
  }
});
console.log(result);

// Flatmap:
result = nums.map((el) => [1, 2]);
console.log(result);

result = nums.flatMap((el) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap((el) => el.split(''));
console.log(result);

// sort: 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b); // 오름차순
numbers.sort((a, b) => b - a); // 내림차순
console.log(numbers);

// reduce: 배열의 요소들을 접어서 접어서 값을 하나로!
// (저장값, 현재값) => 처리할 내용, 초기값
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);

// 배열의 함수들
// 배열 자체를 변경하는지
// 새로운 배열을 반환하는지

const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열인지 체크
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍇'));

// 배열 안에 특정한 아이템이 있는지
console.log(fruits.includes('🍌'));
console.log('----------------------------------------------------------');

// 추가 - 마지막
let length = fruits.push('🍓'); // 배열 자체를 수정(update) length를 return
console.log(fruits);
console.log(length);

// 추가 - 처음
length = fruits.unshift('🍒'); // 배열 자체를 수정(update) length를 return
console.log(fruits);
console.log(length);

// 제거 - 마지막
let delItem = fruits.pop(); // 배열 자체를 수정(update) 삭제된 아이템을 return
console.log(fruits);
console.log(delItem);

// 제거 - 처음
delItem = fruits.shift(); // 배열 자체를 수정(update) 삭제된 아이템을 return
console.log(fruits);
console.log(delItem);

// 중간에 추가 or 삭제
let delItem2 = fruits.splice(3, 1, '🍒', '🍓'); // 시작index, 삭제갯수, 추가하고자 하는 아이템, return 삭제된 아이템
console.log(fruits);
console.log(delItem2);
console.log('----------------------------------------------------------');

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); // 시작 index, 자를갯수
console.log(fruits);
console.log(newArr);
newArr = fruits.slice();
console.log(newArr);
newArr = fruits.slice(1);
console.log(newArr);
newArr = fruits.slice(-1);
console.log(newArr);
console.log('----------------------------------------------------------');

// 여러개의 배열을 붙여 새로운 배열을 만듬
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.log('----------------------------------------------------------');

// 중첩 배열을 하나의 배열로 펴기
// 새로운 배열 반환
let doubleArr = [
  [1, 2, 3],
  [4, [5, 6, [7, 8]]],
];
let flatArr = doubleArr.flat(3); // 한 단계만 해줌, 숫자를 써주면 depth 설정됨
console.log(flatArr);

// 특정한 값으로 배열 채우기
// 배열 자체를 수정
flatArr.fill(0);
console.log(flatArr);
flatArr.fill('s', 1, 3);
console.log(flatArr);
flatArr.fill('e', 3);
console.log(flatArr);

// 배열을 문자열로 합하기
let text = flatArr.join(' | '); // , 아닌 다른 특수문자로 조합하겟엉
console.log(text);

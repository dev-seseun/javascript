// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const array1 = ['🍌', '🍓', '🍇', '🍓'];

function change(arr, from, to) {
  let newArr = Array.from(arr);
  // newArr.forEach((el, idx) => {
  //   if (el === from) {
  //     newArr[idx] = to;
  //   }
  // });
  // return result;
  return newArr.map((el) => (el === from ? to : el));
}
console.log('1. ', change(array1, '🍓', '🥝'));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function countItem(arr, item) {
  let newArr = Array.from(arr);
  let itemArr = newArr.filter((el) => el === item);
  let count = itemArr.length;
  return count;
  // return arr.reduce((count, value) => {
  //   if (value === item) {
  //     count++;
  //   }
  //   return count;
  // }, 0);
}
console.log('2. ', countItem(['🍌', '🥝', '🍇', '🥝'], '🍇'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
function match(arr, search) {
  // let newArr = Array.from(arr);
  // const result = [];
  // newArr.forEach((el) => {
  //   if (search.includes(el)) {
  //     result.push(el);
  //   }
  // });
  // return result;
  return arr.filter((el) => search.includes(el));
}

console.log('3. ', match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
function everage(arr, num) {
  let newArr = Array.from(arr);
  return newArr.filter((el) => el > num).reduce((avg, el, _, arr) => avg + el / arr.length, 0);
}
console.log('4. ', everage(nums, 5));

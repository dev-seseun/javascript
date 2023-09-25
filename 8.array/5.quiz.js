// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const array1 = ['🍌', '🍓', '🍇', '🍓'];

function change(arr, from, to) {
  let newArr = arr;
  if (Array.isArray(newArr)) {
    while (newArr.some((el) => el === from)) {
      let idxOfSb = newArr.indexOf(from);
      newArr.splice(idxOfSb, 1, to);
    }
  }
  return newArr;
}
console.log('1. ', change(array1, '🍓', '🥝'));

// ------------- Teacher -------------
function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
const result = replace(array1, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function countItem(arr, item) {
  let newArr = arr;
  let count = 0;
  if (Array.isArray(newArr)) {
    while (newArr.some((el) => el === item)) {
      let idxOfSb = newArr.indexOf(item);
      newArr.splice(idxOfSb, 1);
      count++;
    }
  }
  return count;
}
console.log('2. ', countItem(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// ------------- Teacher -------------
function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// ------------- Teacher -------------
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

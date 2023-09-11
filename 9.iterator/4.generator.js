// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };
// for (const num of multiple) {
//   console.log(num);
// }

// * 제너레이터임을 표현
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2; // yield: 사용자가 원할 때 하나씩 return
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();

let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); // 끝내!
multiple.throw('에러!'); // 에러를 던짐

next = multiple.next();
console.log(next.value, next.done);

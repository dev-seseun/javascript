// return을 명시하지 않으면 자동으로 undefined를 return한다.
function add(a, b) {
  // return a + b;
  return undefined;
}
const result = add(1, 2);
console.log(result);

// 함수 중간에 return하면 함수가 종료됨
// 사용예) 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍 종료함
function print(num) {
  if (num < 0) {
    return; // 함수 즉시 종료(=return undefined)
  }
  console.log(num);
}
print(12);
print(-12);

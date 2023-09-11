// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments); // 함수는 객체. 함수 객체 내의 유용한 프로퍼티(전달받은! 매개변수)
  console.log(arguments[0]); // =a
  console.log(arguments[1]); // =b
  return a + b;
}

add();
// console.clear();
// Rest Parameters (Rest 매개변수)
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5);

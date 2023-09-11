// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)

function printNumber(num) {
  console.log(num);
}
function printNumberDouble(num) {
  console.log(num * 2);
}
function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}
iterate(5, printNumber);
iterate(5, printNumberDouble);
// iterate(5, (num) => console.log(num));
// iterate(5, (num) => console.log(num * 2));

setTimeout(() => {
  console.log('3초뒤');
}, 3000);
// 그러니까 여기서 console문도 결국 콜백함수다 이말이야.
// 3초 뒤 이 콜백함수를 실행해라!

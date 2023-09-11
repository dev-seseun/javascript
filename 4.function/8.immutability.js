// 함수내부에서 외부로부터 주어진 인자의 값을 변경하면 안됨.
// 상태 변경이 필요한 경우 새로운 상태(obj, value)를 만들어서 반환해야함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사
function display(num) {
  num = 5; // 💩💩💩
  console.log(num);
}
const value = 4;
display(value);

function displayObj(obj) {
  obj.name = 'Bob'; // 💩💩💩외부로부터 주어진 인자를 내부에서 변경💩💩💩
  console.log(obj);
}
const sese = { name: 'sese', age: 32 };
displayObj(sese);
console.log(sese);
// 기존 객체값이 변경되게됨

function changeObj(obj) {
  // 이름부터 변경느낌
  console.log({ ...obj, name: 'Bob' }); // 반환할 때는 새로운 오브젝트로
}
const sese2 = { name: 'sese', age: 32 };
changeObj(sese2);
console.log(sese2);

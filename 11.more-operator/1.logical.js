// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '보리' };
const obj2 = { name: '콩이', owner: '한주먹' };
if (obj1 && obj2) {
  console.log('true');
}

let result = obj1 && obj2; // true면 obj2를 할당
console.log(result);

result = obj1 || obj2; // ob1이 true니까 바로 할당, false이면 obj2를 할당
console.log(result);

// 활용예
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falshy일 때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어!');
  }
  animal.owner = '바뀐주인';
}
function makeOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어!');
  }
  animal.owner = '새로운주인';
}
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log('change', obj1, obj2);

obj1.owner || makeOwner(obj1);
obj2.owner || makeOwner(obj1);
console.log('new', obj1, obj2);

// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값 설정
// default parameter 전달하지 않거나 undefined 설정
// 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  console.log(message || 'hello');
}
print();
print(0);
print(null);
print(undefined);

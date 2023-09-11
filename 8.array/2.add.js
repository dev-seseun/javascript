const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i in fruits) {
  console.log(fruits[i]);
}

// ❌❌❌❌
// index로 접근 - 숫자의 불명확성, 빈 칸이 남게 됨
fruits[4] = '🍊'; // 추
console.log(fruits);
delete fruits[4]; // 삭
console.log(fruits);

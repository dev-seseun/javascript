// Set
const set = new Set([1, 2, 3]);
console.log(set);

// size 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(4));

// 순회
set.forEach((item) => console.log('forEach', item));
for (const value of set.values()) {
  console.log('for...of', value);
}

// 추가
set.add(6);
console.log(set);
set.add(1);
console.log(set); // 중복되지 않는다.

// 삭제
set.delete(6);
console.log(set);
set.clear();
console.log(set, set.size); // {} 0

// obj set
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍒', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// quiz
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// quiz
const obj3 = { name: '🍒', price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);

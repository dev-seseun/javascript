const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map);

// size 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key5'));

// 순회
map.forEach((value, key) => console.log('forEach', key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key5'));

// 추가
map.set('key3', '🍒');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);
map.clear();
console.log(map);

// Object와의 차이점
// 사용할 수 있는 함수 다름 = 인터페이스가 다름
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛나우유' };

const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);

console.log(obj[key]);
console.log(map2.get(key));

// 동결! Object.freeze
// 추가, 삭제, 쓰기, 속성 재정의 ✖️
// (단, 얕은 꽁꽁 얼림!)
const sese = { name: 'sese' };
const dog = { name: '보리', emoji: '🐶', owner: sese };

Object.freeze(dog); //.freeze static 함수
dog.name = '냥냥';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
sese.name = '승응이';
console.log(dog);

// 밀봉! Object.seal
// 수정👌, 추가, 삭제, 속성 재정의✖️
const cat = {};
Object.assign(cat, dog);
// const cat = { ...dog };
Object.seal(cat);
cat.name = '비즐리';
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions
// 수정, 삭제, 속성 재정의👌, 추가✖️
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);

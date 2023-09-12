const dog = { name: '보리', emoji: '🐶' };
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

// key가 있는지 확인
console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog); // 각 key에 대한 property
console.log(descriptors);
const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);
// writable value를 수정할 수 있는지
// enumerable 열거할 수 있는지(iterate)
// configurable key의 속성을 수정/삭제할 수 있는지

Object.defineProperty(dog, 'name', {
  value: '냥냥',
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(dog.name);
console.log(Object.keys(dog)); // enumerable
delete dog.name; // configurable

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '승은',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '이',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.lastName} ${this.firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});

console.log(student);
console.log(student.fullName);
student.fullName = '홍 승은';

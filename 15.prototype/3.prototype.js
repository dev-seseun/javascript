// const dog1 = { name: '보리', emoji: '🐶' };
// const dog2 = { name: '콩이', emoji: '🐕' };

// 생성자 함수
function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수
  // this.printName = () => {
  //   console.log(`${this.name} ${this.emoji}`);
  // };
}

// 프로토타입 레벨의 함수
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
const dog1 = new Dog('보리', '🐶');
const dog2 = new Dog('콩이', '🐕');

console.log(dog1, dog2);
dog1.printName();
dog2.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의하면(오버라이딩하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨)
dog1.printName = function () {
  console.log('hi!');
};
dog1.printName();
dog2.printName();

// 정적 레벨
Dog.hello = () => {
  console.log('hello');
};
Dog.hello(); // 생성자 함수 이름으로 접근해야함

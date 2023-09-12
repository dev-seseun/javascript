// 프로토타입을 베이스로 한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}
Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji); // 부모에게 전달
  this.owner = owner;
}
// Dog.prototype = Object.create(Object.prototype); // 이게 default
Dog.prototype = Object.create(Animal.prototype); // Animal 상속
Dog.prototype.play = () => {
  console.log('놀쟈 멍멍!');
};
dog1 = new Dog('보리', '🐕', 'sese');

function Tiger(name, emoji) {
  Animal.call(this, name, emoji); // 부모에게 전달
}
Tiger.prototype = Object.create(Animal.prototype); // Animal 상속
Tiger.prototype.hunt = () => {
  console.log('사냥이다 어흥!');
};
tiger1 = new Tiger('어흥', '🐅');

dog1.printName();
dog1.play();
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger1 instanceof Dog);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);

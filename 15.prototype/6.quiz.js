// 프로토타입을 베이스로 한 객체지향 프로그래밍
class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  };
}

class Dog extends Animal {
  constructor(name, emoji, owner) {
    super(name, emoji);
    this.owner = owner;
  }
  play = () => {
    console.log('놀쟈 멍멍!');
  };
}
const dog1 = new Dog('보리', '🐕', 'sese');

class Tiger extends Animal {
  hunt = () => {
    console.log('사냥이다 어흥!');
  };
}
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

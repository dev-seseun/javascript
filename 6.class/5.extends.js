// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('자자!');
//   }
// }
// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('자자!');
//   }
//   play() {
//     console.log('놀자!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('자자!');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // super : 부모클래스
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자!');
  }
  // 오버라이딩 overriding
  eat() {
    super.eat();
    console.log('강쥐가먹는당!');
  }
}
const dog = new Dog('보리색', '승은잉');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();

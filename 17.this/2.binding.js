// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨
// 하지만, js에서는 누가 호출하냐에 따라 this가 달라짐
// 즉, this는 호출하는 caller에 의해서 동적으로 결정됨!
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이이름: ${this.name}`);
  };
}
function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지이름: ${this.name}`);
  };
}
const cat = new Cat('냐옹');
const dog = new Dog('보리');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
// Dog의 this.name이 나옴
// 정적 할당이었다면 냐옹이 나올것임
cat.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고! 전달된 콜백을 실행!');
  printName();
  // undefined
  // 정적 할당이었다면 냐옹이 나올것임
}
printOnMonitor(cat.printName);

// 정적바인딩하기

function Cat(name) {
  this.name = name;
  // 2. arrow 함수 사용: arrow함수는 렉시컬 환경에서의 this를 기억해요!
  // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  this.printName = () => {
    // this.printName = function () {
    console.log(`고양이이름: ${this.name}`);
  };
  // 1.bind 함수를 이용해서 수동적으로 바인딩
  // this.printName = this.printName.bind(this);
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

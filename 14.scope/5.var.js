// var의 특징
// -> 일반 코딩 방식과 어긋난다
// -> 코드의 가독성, 유지보수성에 좋지 않다.

// 1. 변수 선언 키워드 없이 선언 & 할당이 가능하다.
something = '⭐'; // var something = ... 과 같음
console.log(something);

// 2. 중복 선언이 가능하다.
var blue = '💙';
var blue = '💙';
console.log(blue);

// 3. 블록 레벨 스코프 안됨
var apple = '사과';
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}
console.log(apple);

// 4. 함수 레벨 스코프만 지원됨
function example() {
  var dog = '🫠';
}
console.log(dog);

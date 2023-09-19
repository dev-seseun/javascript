// 'use strict';
/** 글로벌 컨텍스트의 this
 * - 브라우저: window
 * - 노드: 모듈
 */

const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
// globalThis.setTimeout() = setTimeout()
// globalThis는 생략이 가능하다.

console.clear();

/** 함수 내부에서의 this
 * strict mode에서는 undefined
 * 아닐 땐 globalThis
 */
function func() {
  console.log(this);
}
func();

/** 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
cat1 = new Cat('냐옹');
cat2 = new Cat('미야옹');
cat1.printName();
cat2.printName();

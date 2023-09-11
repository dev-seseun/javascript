// 접근 제어자 - 캡슐화
// private(#), public(기본), protected
// #field : 외부에서 수정할 수 없도록 함
// 클래스 레벨에서 관리되는 속성과 함수
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // 접근불가
// apple.#display(); // 접근불가
console.log(apple);

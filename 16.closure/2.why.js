// 함수가 중첩되어있을 때 내부함수가 외부함수의 렉시컬 환경에 접근할 수 있다.
// 외부환경에 접근할 수 있다 = 클로져!

// 내부 정보를 은닉하고, 공개함수(public, 외부)를 통한 데이터 조작을 위해 쓰임
// 캡슐화와 정보은닉
// 클래스 private 필드, 메소드를 사용하는 효과와 동일

function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

// 이제는 클래스를 사용하면 됨
class Counter {
  #count = 0; // private field
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();

// 카운터만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자 증가 카운터
// Couter 클래스 만들기

class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value;
  }
  increase = () => {
    return this.#value++;
  };
}

const counter = new Counter(0);
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log('지금값', counter.value);

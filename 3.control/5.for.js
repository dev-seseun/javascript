// 반복문 Loop  Statement
// for(변수선언문; 조건식; 증감식) { }
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 { } 코드블럭 수행
// 3. 증감식수행
// 4. 조건식이 거짓이 될 때까지 2,3번을 반복

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 💩무한루프
// for(;;){ // 영원히 true인 조건문이 되지 않도록 주의
//   console.log(💩);
// }

console.clear();
// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue; // 바로 다음 증감식으로 넘어감
    console.log('i가 10!');
    break; // 특정한 조건에 loop를 그만두고 싶을 때
  } else {
    console.log(i);
  }
}

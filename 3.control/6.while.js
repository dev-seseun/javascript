// while(조건) {}
// 조건이 false가 될 때까지 {} 코드를 반복실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직 살아있따', i);
  if (i === 1000) {
    break;
  }
  i++;
}

// do-while
do {
  console.log('do-while 아직 살아있따', i); // 한 번은 꼭 실행한다
} while (isActive);

// 조건이 맞을 때에만 실행 while
// 한 번은 실행하고 조건확인 do-while

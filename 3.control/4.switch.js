// 조건문 Conditional Statement
// switch
// 정해진 범위 안의 값에 대해 특정한 일을 해야하는 경우
let day = 10; // 0:월요일, 1:화요일, ... 6:일요일
let dayName;
switch (day) {
  case 0:
    dayName = '월요일';
    break; // 다음으로 넘어가지 않도록
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    dayName = '해당요일이 없음';
}
console.log(dayName);

let condition = 'ok'; // ok, good -> 좋음!, bad -> 나쁨!
let text;
switch (condition) {
  case 'ok':
  case 'good': // 같은 케이스면 break 안해도대!
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨!';
    break;
}
console.log(text);

// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

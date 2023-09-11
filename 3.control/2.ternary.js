// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참 : 거짓
let fruit = 'lemon';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('else');
}
fruit === 'apple' ? console.log('🍎') : console.log('⭐');

let emoji = fruit === 'apple' ? '🍎' : '⭐';
console.log(emoji);

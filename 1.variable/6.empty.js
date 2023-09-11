// null, undefined
let variable;
console.log(variable, '정해지지 않음');

variable = null;
console.log(variable, 'null로 정의');

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모름
activeItem = null; // 활성화된 아이템이 없음

// typeof : dadta type을 출력함
console.log('typeof 123:', typeof 123);
console.log('typeof undefined:', typeof undefined);
console.log('typeof null:', typeof null); // object!

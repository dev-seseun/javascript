console.log(globalThis);
console.log(this); // node에서 this는 모듈, js에서는 전역객체
console.log(Infinity);
console.log(NaN);
console.log(undefined);
console.clear();

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));
console.log(parseFloat('12.43')); // 실수로
console.log(parseInt('12.43')); // 정수로
console.log(parseInt('12'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다
const URL = 'http://드림코딩.com';
const encoded = encodeURI(URL); // 주소를 통신할 때
const decoded = decodeURI(encoded); // 유용함
console.log(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));

const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);

console.log(text.length); // 문자열 길이

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l')); // 뒤에서부터

console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

console.log(text.startsWith('H'));
console.log(text.endsWith('H'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 2)); // He
console.log(text.slice(2)); // llo World
console.log(text.slice(-2)); // d!

const space = '     space   ';
console.log(space.trim()); // 'space'

const longText = 'Get to the, point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the,', 'point' ]
console.log(longText.split(' ', 2)); // [ 'Get', 'to' ]
console.log(longText.split(',')); // [ 'Get to the', ' point' ]

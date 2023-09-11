// 문자열타입
let string = 'hi';
string = `hi sese!`;
console.log(string);

// 특수문자
string = "'hi!'";
console.log(string);

string = 'hi!\nits me'; // 줄바꿈
console.log(string);

string = 'hi!\t\tits me'; // tab
string = 'hi!\\its me'; // back slash
string = 'hi!\\\u09ACits me'; // back slash
console.log(string);

// 템플릿 리터럴(Template Literal) ``
let id = 'sese';
let greetings = "'안녕!, " + id + "🖤\n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'안녕!, ${id}🖤\n즐거운 하루 보내요!'`;
greetings = `'안녕!, ${id}🖤
즐거운 하루 보내요!'`; // \n 안해도된대!
console.log(greetings);

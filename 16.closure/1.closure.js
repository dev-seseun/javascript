const text = 'hello';
function func() {
  console.log(text);
}

func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}

// inner를 리턴하면서
// outer()의 렉시컬 환경을 참조하며
// x값도 가져올 수가 있다.
// 요게 closure!

const func1 = outer();
func1();

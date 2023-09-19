function loop() {
  const array = [];
  // var i;
  // var, let 차이
  for (let i = 0; i < 5; i++) {
    console.log(i);
    array.push(function () {
      console.log('i', i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());

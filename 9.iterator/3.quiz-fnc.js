function makeIterable(init, max, callback) {
  return {
    [Symbol.iterator]() {
      let num = init;
      return {
        next() {
          return { value: callback(num++), done: num > max };
        },
      };
    },
  };
}

const multiple = makeIterable(0, 20, (n) => n * 2);
for (num of multiple) {
  console.log(num);
}
const single = makeIterable(0, 20, (n) => n);
for (num of single) {
  console.log(num);
}

function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}
function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}
function getOrange() {
  return Promise.reject(new Error('오렌지 없어!'));
}

// 바나나와 사과를 같이 가지고 오기
getBanana()
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log); // 4초걸림

// Promise.all 병렬적으로 한 번에 모든 Promise들을 실행
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits)); // 3초걸림

// Promise.race 주어진 Promise중에 제일 빨리 수행된 것이 이김
Promise.race([getBanana(), getApple()]) //
  .then((fruits) => console.log('race', fruits));

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all error', fruits)) //
  .catch(console.log);

// 실패하든 성공하든 결과를 알려줌
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all settled', fruits)) //
  .catch(console.log);

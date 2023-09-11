function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds는 0보다 커야해'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  // .then(성공하면 필요한 일 수행)
  // .catch(실패하면 에러를 처리)
  // .finally(최종적으로 무조건 호출)
  .then(tempFnc()) // 이거만 쓸 수도 있음. 대신 에러 날 경우 unhandledPromiseRejectionWarning 에러남
  .catch(console.error)
  .finally(() => console.log('끗'));

function tempFnc() {
  console.log('콜백함수닷');
}

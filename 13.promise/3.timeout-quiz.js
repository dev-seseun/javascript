// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback함수를 전달해줘');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야해');
  }
  setTimeout(() => {
    callback();
  }, seconds * 1000);
}

function tempFnc() {
  console.log('콜백함수닷');
}
try {
  runInDelay(tempFnc, -2);
} catch (err) {
  console.log('catch', err);
}

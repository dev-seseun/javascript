// Bubbling up, Propagating
function a() {
  throw new Error('error!');
}
function b() {
  // a();
  try {
    a();
  } catch (error) {
    console.log('생각해보니 이 에러는 여기서 핸들링 할 수 없군!');
    throw error;
  }
}
function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched');
}
console.log('done!');

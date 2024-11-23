function createPromise() {
  console.log("Start function createPromise");
  const myPromise = new Promise(function (resolve, reject) {
    console.log("promise-start");
    return resolve(123);
  })
    .then((res) => {
      console.log("promise-then-1", res);
      return ++res;
    })
    .then((res) => {
      console.log("promise-then-2", res);
      return res;
    })
    .finally(() => {
      console.log("promise-finally");
    });
  return myPromise;
}

const promise1 = createPromise();

promise1.then((res) => {
  console.log("promise1 then1", res);
  return res;
});
promise1.then((res) => {
  console.log("promise1 then2", res);
  return res;
});
promise1.finally(() => {
  console.log("promise1-finally");
});

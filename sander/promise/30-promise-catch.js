function createPromise() {
  console.log("Start function createPromise");
  const myPromise = new Promise(function (resolve, reject) {
    console.log("promise-start");
    const myNum = Math.random() * 100;
    if (myNum < 50) {
      //throw new Error("my Error " + myNum);
    }
    return reject("my error2");
  })
    .catch((reason) => {
      const message =
        reason instanceof Error
          ? "error-object: " + reason.message
          : "error-string: " + reason;
      console.log("promise-catch", message);
      return reason;
    })
    .finally(() => {
      console.log("promise-finally");
    });
  return myPromise;
}

const promise1 = createPromise();
promise1.then(
  //это выполнится, потому что, внутрений catch не генерирует исключение
  (res) => {
    console.log("promise1-then", res);
  }
);
promise1.finally(() => {
  console.log("promise1-finally");
});

function createPromise() {
  console.log("Start function createPromise");
  const myPromise = new Promise(function (resolve, reject) {
    console.log("promise-start");
    const myNum = Math.random() * 100;
    if (myNum < 50) {
      throw new Error("my Error " + myNum);
    }
    return reject("my error2");
  })
    .catch((reason) => {
      const message =
        reason instanceof Error
          ? "error-object: " + reason.message
          : "error-string: " + reason;
      console.log("promise-catch", message);
      throw new Error(message);
    })
    .finally(() => {
      console.log("promise-finally");
    });
  return myPromise;
}

const promise1 = createPromise();
promise1.then(
  //это никогда не выполнится, потому что, внутрений catch генерирует исключение
  (res) => {
    console.log("promise1-then", res);
  }
);
promise1.catch(
  //сюда придет то исключение, что сгенерировал внутрений catch
  (reason) => {
    console.log("promise1-catch", reason);
  }
);
promise1.finally(() => {
  console.log("promise1-finally");
});

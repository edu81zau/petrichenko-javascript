function createMyPromise(tag, isGenerateTruble = false) {
  console.log(tag, "createMyPromise", isGenerateTruble);
  return new Promise(function (resolve, reject) {
    console.log(tag, "promise-start");
    if (isGenerateTruble) {
      return reject("Artificially creating a problem");
    }
    return resolve(123);
  })
    .then((res) => {
      console.log(tag, "promise-then-1", res);
      return ++res;
    })
    .then((res) => {
      console.log(tag, "promise-then-2", res);
      return ++res;
    })
    .catch((reason) => {
      console.log(tag, "promise-catch", reason);
      throw new Error(tag + " Promise catch");
    })
    .finally(() => {
      console.log(tag, "promise-finally");
    });
}

// createMyPromise("Test1")
//   .then((res) => {
//     console.log("test1-external-then-1", res);
//     return res;
//   })
//   .then((res) => {
//     console.log("test1-external-then-2", res);
//     return res;
//   });

createMyPromise("Test2", true)
  .then((res) => {
    console.log("test2-external-then-1", res);
    return res;
  })
  .catch((reason) => {
    console.log("test2-external-catch", reason);
  });
// createMyPromise("Test3", false);

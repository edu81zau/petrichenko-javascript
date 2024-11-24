const algo = {
  isRegectString: true,
  isService1Success: true,
  isService2Success: false,
  isService3Success: true,
  isService4Success: true,
};

function createPromise() {
  console.log("Start function createPromise");
  const myPromise = new Promise(function (resolve, reject) {
    console.log("service1");
    if (algo.isService1Success) {
      console.log("service1-do-success");
      return resolve();
    }
    console.log("service1-do-reject");
    if (algo.isRegectString) {
      return reject("service1-reject-string");
    }
    throw new Error("service1-reject-error");
  })
    .then(
      (res) => {
        console.log("service2");
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            console.log("service2-result");
            if (algo.isService2Success) {
              console.log("service2-do-success");
              return resolve();
            }
            console.log("service2-do-reject");
            if (algo.isRegectString) {
              return reject("service2-reject-string");
            }
            throw new Error("service2-reject-error");
          }, 1000);
        });
      },
      (err) => {
        console.log("service2-then-reject", err);
      }
    )
    .then(
      (res) => {
        console.log("service3");
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            console.log("service3-result");
            if (algo.isService3Success) {
              console.log("service3-do-success");
              return resolve();
            }
            console.log("service3-do-reject");
            if (algo.isRegectString) {
              return reject("service3-reject-string");
            }
            throw new Error("service3-reject-error");
          }, 1000);
        });
      },
      (err) => {
        console.log("service3-then-reject", err);
      }
    )
    // .then(null,(err)=>{})
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
  (res) => {
    console.log("service4");
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log("service4-result");
        if (algo.isService4Success) {
          return resolve();
        }
        console.log("service4-do-reject");
        if (algo.isRegectString) {
          return reject("service4-reject-string");
        }
        throw new Error("service4-reject-error");
      }, 1000);
    });
  },
  (err) => {
    console.log("service4-then-reject", err);
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

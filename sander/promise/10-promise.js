new Promise(function (resolve, reject) {
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

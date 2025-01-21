"use strict";
// setTimeout(() => {
//   console.log(1);
// }, 0);

// console.log(2);

//mictro and macro tasks

setTimeout(() => console.log("timeout"));

Promise.resolve().then(() => console.log("promise_1"));

console.log(123);
queueMicrotask(() => console.log("wow"));

Promise.resolve().then(() => console.log("promise_2"));

console.log("code");

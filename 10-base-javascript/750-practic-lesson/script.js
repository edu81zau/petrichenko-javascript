"use strict";

const myMultiply20 = (price) => price * 20;
const myDivide100 = (price) => price / 100;
const myNormalPrse = (price) => price.toFixed(2);

const myComposeFunction =
  (...args) =>
  (x) =>
    args.reduce((res, fn) => fn(res), x);

const countFunction = myComposeFunction(
  myMultiply20,
  myDivide100,
  myNormalPrse
);

console.log(countFunction(200));

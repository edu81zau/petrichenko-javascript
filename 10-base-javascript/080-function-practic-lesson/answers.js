"use strict";

function returnName(name) {
  console.log(`Hello, ${name} !`);
  return "Hello, " + name + " !";
  //
}
returnName("Name");

function returnNeighboringNumbers(num) {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      arr[i] = --num;
      ++num;
    } else if (i === 1) {
      arr[i] = num;
    } else if (i === 2) {
      arr[i] = ++num;
    }
  }
  console.log(arr);
  return arr;
  //
}

returnNeighboringNumbers(0);

function getMathResult(arg1, arg2) {
  if (typeof arg2 !== "number" && agr2 <= 0) {
    return arg1;
  } else {
    //
  }
}

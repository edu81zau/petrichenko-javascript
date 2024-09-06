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
  let str = "";
  if (typeof arg2 !== "number" || arg2 <= 0) {
    str = arg1;
    console.log(str);
    return str;
  } else {
    for (let i = 1; i <= arg2; i++) {
      str += arg1 * i;
      if (i < arg2) {
        str += "---";
      } else {
        console.log(str);
        return str;
      }
      //
    }
  }
}

getMathResult(20, -5);

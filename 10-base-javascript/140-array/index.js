"use strict";

const arr = [10, 2, 4, 6, 18];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.pop(); //delete element of the end in array

// arr.push(10); // add element to the end in array

//console.log(arr);

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} inside array ${arr}`);
// });

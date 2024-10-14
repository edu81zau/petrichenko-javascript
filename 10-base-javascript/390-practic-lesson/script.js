"use strict";

function deepCount(arr) {
  let count = arr.length;

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      count += deepCount(element);
    }
  });
  console.log(count);
  return count;
}
deepCount([[[[[[[[[]]]]]]]]]);

"use strict";

function factorial(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    return "Передано не число";
  } else if (n <= 0) {
    return 1;
  } else {
    let res = n * factorial(n - 1);
    return res;
  }
}

console.log(factorial(5));

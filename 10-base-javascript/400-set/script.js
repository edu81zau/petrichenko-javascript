"use strict";

const arr = ["Alex", "Ann", "Oleg", "Alex"];
function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(arr));

// const set = new Set(arr);

// set.add("Ivan").add("Oleg");

// console.log(set);

//basic commands
// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) console.log(value);
// set.forEach((value, valueAgain, set) => {
//   console.log(value, valueAgain, set);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries())

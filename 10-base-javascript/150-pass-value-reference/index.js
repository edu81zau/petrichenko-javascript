"use strict";

// pass by the value
// let a = 9,
//   b = a;

// b += 5;

// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

// //pass by the reference
// const obj = {
//   a: 5,
//   b: 1,
// };

// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);

//create clon

// function copy(mainObj) {
//   let objCopy = {};
//   for (let key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 3,
//   c: {
//     x: 1,
//     y: 8,
//   },
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.a.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   f: 60,
// };

/**
 Метод Object.assign() используется для копирования значений всех
 собственных перечисляемых свойств из одного или более исходных объектов
 в целевой объект. После копирования он возвращает целевой объект.
 */
//console.log(Object.assign(numbers, add));

//copy arrays
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "fsdfsdfsd";

console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [3, 4, 5];

log(...num);

const array = ["s", "a"];
const newArr = [...array];

const q = {
  w: 1,
  e: 2,
};

const newObj = { ...q };

console.log(newObj);

"use strict";

//filter

// const names = ["Ivan", "Ann", "Kolobock", "Anhelika"];

// const shortNames = names.filter(function (name) {
//   return name.length < 5;
// });

// console.log(shortNames);

//map

// let answers = ["ivAn", "aNN", "HELLO"];
// answers = answers.map((item) => item.toLowerCase());
// console.log(answers);

//every / some

//const some1 = [4, "2", "dsdasdas"];

//хотя бы один элемент должен соответствовать условию
//console.log(some1.some((item) => typeof item === "number"));

//если все элементы внутри массива соответствует условию
// const some2 = [4, 2, 2];
// console.log(some2.every((item) => typeof item === "number"));

//reduce

//const arr = [4, 6, 1, 7, 6];
// 0   4
// 4   6
// 10  1
// 11  7
// 18  6
// 24
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// const arr = ["apple", "orange", "pear", "plum"];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

// const arr = [4, 6, 1, 7, 6];
// // 0   4
// // 4   6
// // 10  1
// // 11  7
// // 18  6
// // 24
// const res = arr.reduce((sum, current) => sum + current, 5);
// console.log(res);

const obj = {
  ivan: "persone",
  ann: "persone",
  dog: "animal",
  cat: "animal",
};

//const newArr = Object.entries(obj); //трансформирует объект в многомерный массив

const newArr = Object.entries(obj);
//.filter((item) => item[1] === "persone")
//.map((item) => item[0]);

console.log(newArr);

"use strict";

//Пример чистой функции
const add_1 = (x, y) => x + y;
add_1(2, 4); // 6

//Не чистая функция
let x = 2;
const add_2 = (y) => {
    x += y;
};
add_2(4); // x === 6 (при первом вызове)

//---------------------------------------------------------------------------------------

//Чистая функция
const rndSum_2 = (a, b) => b + a;
console.log(rndSum_2(5, Math.random()))

//Не чистая функция
const rndSum_1 = a => Math.random() + a;
console.log(rndSum_1(5))

//---------------------------------------------------------------------------------------

//Не чистая функция
const rndSum = a => Math.random() + a;
console.log(rndSum(5));
console.log(rndSum(5));
console.log(rndSum(5));

//Чистая функция
const Sum = (a, b) => a + b;
console.log(Sum(5, 10));
console.log(Sum(5, 10));
console.log(Sum(5, 10));


/**
 
Задание:

В математике есть такое понятие, как композиция функций. В программирование этот прием
тоже перекочевал и является весьма удобным в части ситуаций. Приведу наглядный пример
из этой статьи. (Пока её можно открыть только в начале, так как там вы найдете начало
решения 🙂)

Допустим, у вас есть отдельные функции, которые в итоге вычисляют скидку:

    const multiply20 = (price) => price * 20;
    const divide100 = (price) => price / 100;
    const normalizePrice = (price) => price.toFixed(2);

В итоге мы получим результат, но эта цепочка не совсем удобна. 
А если действий там будет много? Можно запустить её вот так:

    // result = a(b(c(x)))
    const discount = normalizePrice(divide100(multiply20(200)));

Но при увеличении количества функций это превратиться в нечитаемый ад. 
И вот задача состоит в том, чтобы написать функцию compose, которая будет 
принимать все эти функции и делать тоже самое. То есть, организовывать 
композицию функций. Обратите внимание на порядок записи функций - последняя 
записанная запускается первой и дальше справа налево. Возможно вам понадобится это.

    const discount = compose(normalizePrice, divide100, multiply20);
    discount(200.0);

Функций может быть сколько угодно и они могут принимать только один начальный аргумент. 
Так что вариант:

const compose = (a, b, c) => (x) => a(b(c(x)));

Не подходит, так как работает только с 3мя функциями.


Усложненное задание!

Справились с первой частью? Хорошо, давайте усложним 🙂

А теперь напишите функцию композиции composeWithArgs, которая принимает сколько угодно 
аргументов в начале. Пример:

        const add1 = function(a){return a + 1}
        const addAll3 = function(a,b,c){return a + b + c}
        composeWithArgs(add1,addAll3)(1,2,3)  => Вернет 7

Решение от преподавателя.
// Максимально короткое решение :)
  const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);

  const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));
        
*/
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

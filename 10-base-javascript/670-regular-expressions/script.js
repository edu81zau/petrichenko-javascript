"use strict";

//Два синтаксиса создания регулярки
//Первый
//new RegExp('pattern','flags');

//Второй
// /pattern/flags

// flags
// i - что-то найти вне зависимости от регистра
// g - найти несколько вхождений
// m - многострочный режим

//class
// \d - ищем цифры
// \w - ищем все лова все буквы
// \s - ищем все пробелы

//не числа не буквы не пробелы
// \D
// \W
// \S

// const ans = prompt("Введите ваше имя");
// const reg = /n/gi;
// console.log(reg.test(ans)); //возвращает или true или false
// const reg = /n/;
// console.log(ans.search(reg));//выводит первое вхождение элемента в строку

//const reg = /n/gi;
//console.log(ans.match(reg)); //выводит первое вхождение элемента в строку

// const pass = prompt("Password");

// console.log(pass.replace(/.\./g, "*")); // \. - экранирование символа .

//найдем все вхождения - и поменяем на :
//console.log("12-34-78".replace(/-/g, ":"));

//Выведет все числа, что входят в строку
// const ans = prompt("Введите ваше число");
// const reg = /\d/g;
// console.log(ans.match(reg));

// //Вырезание куска подстроки из строки по шаблону
// const str = "My name is E56D";
// console.log(str.match(/\w\d\d\w/i));

//Исключение цифр из строки по шаблону
// const str = "My name is E56D";
// console.log(str.match(/\D/gi));

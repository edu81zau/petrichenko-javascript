"use strict";

function fib(n) {
  // Проверяем, является ли аргумент числом
  if (typeof n !== "number" || n < 0) {
    return "";
  }
  if (n == 0) {
    return "";
  }
  if (n == 1) {
    return 0;
  }

  // Создаем массив для хранения чисел Фибоначчи
  const fibArray = [0, 1];

  // Заполняем массив до нужного размера
  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  // Преобразуем массив в строку
  return fibArray.join(" ");
}

// Примеры использования
/*
console.log(fib(4)); // Вывод: 0 1 1 2
console.log(fib(7)); // Вывод: 0 1 1 2 3 5 8
console.log(fib("7")); // Вывод:  (пустая строка)
console.log(fib(1)); // Вывод: 0
console.log(fib(0)); // Вывод:  (пустая строка)
*/

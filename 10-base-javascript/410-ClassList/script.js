"use strict";

const btns = document.querySelectorAll("button"),
  wrapper = document.querySelector(".btn-block");
//получаем общее количество классов у первой кнопки из массива
// console.log(btns[0].classList.length);
//получаем первый класс у первой кнопки
//console.log(btns[0].classList.item(0));
//Добавление нового класса элементу
//console.log(btns[1].classList.add("red"));
//Удаление класса у элемента
//console.log(btns[0].classList.remove("blue"));
//Удаление/добавление класса у элемента
//console.log(btns[0].classList.toggle("yellow"));
//Проверка на наличие класса
// if (btns[1].classList.contains("red")) {
//   console.log("red");
// }

btns[0].addEventListener("click", () => {
  //   if (!btns[1].classList.contains("red")) {
  //     btns[1].classList.add("red");
  //   } else {
  //     btns[1].classList.remove("red");
  //   }
  //
  btns[1].classList.toggle("red");
});

//Т.к. мы вышаем обработчик события на обертку, то обрабатываются и те кнопки, которые
// динамически созданы
// wrapper.addEventListener("click", (event) => {
//   //
//   //if (event.target && event.target.classList.contains("blue")) {
//   if (event.target && event.target.tagName == "BUTTON") {
//     console.log("Hello");
//   }
// });

// Из-за того, что мы здесь обрабатываем массив кнопок, которые уже существуют
// то на вновь созданной кнопке событие не происходит
// btns.forEach((btn) => {
//   //
//   btn.addEventListener("click", () => {
//     console.log("Hello");
//   });
// });

wrapper.addEventListener("click", (event) => {
  if (event.target && event.target.matches("button.red")) {
    console.log("Hello");
  }
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);

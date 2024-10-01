"use strict";

const btn = document.querySelector("button"),
  btns = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");

// не используется по двум причинам:
// 1) Следующее событие затрет предыдущее
// 2) Нет возможности удалить событие
// btn.onclick = function () {
//   alert("Hello");
// };

// btn.addEventListener("click", () => {
//   alert("Click");
// });
//let i = 0;
const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  //e.target.remove();
  //console.log("Second Click");
  //   i++;
  //   if (i == 1) {
  //     btn.removeEventListener("click", deleteElement);
  //   }
};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});
const link = document.querySelector("a");

link.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event.target);
});

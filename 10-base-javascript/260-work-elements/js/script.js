"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  //hearts = document.querySelectorAll("heart"), так делать не надо
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

// console.dir(box);

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

// Для динамического рассчета какого - либо элемента
// let num = 300;
// box.style.cssText = `background-color: blue; width: ${num}px`;

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "green";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "green";
});

const div = document.createElement("div");
div.classList.add("black");
//document.body.append(div);

wrapper.append(div);
//wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

//circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// div.innerHTML = "Hello world";
div.innerHTML = "<h1>Hello world</h1>";
//div.textContent = "Hello world";

div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");

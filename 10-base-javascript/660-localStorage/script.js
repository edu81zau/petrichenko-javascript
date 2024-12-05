"use strict";

// //записать данные в localStorage
// localStorage.setItem("number", 7);

// //получить данные из localStorage
// localStorage.getItem("number");

// //удалить запись в localStorage
// localStorage.removeItem("number");

// //полностю очищаем localStore
// localStorage.clear();

const checkbox = document.querySelector("#checkbox"),
  form = document.querySelector("form"),
  change = document.querySelector("#color");

// if (localStorage.getItem("isChecked")) {
//   checkbox.checked = true;
// }

// if (localStorage.getItem("bg") === "change") {
//   form.style.backgroundColor = "red";
// }

checkbox.addEventListener("change", () => {
  if (localStorage.getItem("isChecked") === "true") {
    localStorage.setItem("isChecked", false);
  } else {
    localStorage.setItem("isChecked", true);
  }
});

change.addEventListener("click", () => {
  if (localStorage.getItem("isChecked") === "true") {
    localStorage.removeItem("bg");
    form.style.backgroundColor = "red";
    alert("1 if");
  } else {
    localStorage.setItem("bg", "changed");
    form.style.backgroundColor = "#FFF";
    alert("2 if");
  }
});

const persone = {
  name: "Alex",
  age: 25,
};

const serializePersone = JSON.stringify(persone);
localStorage.setItem("alex", serializePersone);

console.log(JSON.parse(localStorage.getItem("alex")));

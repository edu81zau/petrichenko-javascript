// Когда весь HTML-документ будет полностью загружен и готов к взаимодействию, выполни функции,
// которые находится внутри фигурных скобок.

window.addEventListener("DOMContentLoaded", function () {
  const tabs = require("./modules/tabs"),
    modal = require("./modules/modal"),
    timer = require("./modules/timer"),
    cards = require("./modules/cards"),
    calc = require("./modules/calc"),
    forms = require("./modules/forms"),
    slider = require("./modules/slider");

  tabs();
  modal();
  timer();
  cards();
  calc();
  forms();
  slider();
});
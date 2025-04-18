"use strict";

const inputRub = document.querySelector("#rub"),
  inputUSD = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  const request = new XMLHttpRequest();
  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUSD.value = "Что-то пошло не так";
    }
  });
});

// status - статус запроса. Например, 200, 404
// statusText - текстовое описание статуса запроса
// response - ответ от сервера. Здесть находится то, что определено бэк разработчиком
// readyState - от 0 до 4

"use strict";

const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  }
  return str.split("").reverse().join("");
}
//console.log(reverse(someString));

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let str = "";
  if (arr.length === 0) {
    str = "Нет доступных валют";
    return str;
  } else {
    str = "Доступные валюты:\n";
    arr.forEach(function (item) {
      if (item !== missingCurr) {
        str += `${item}\n`;
      }
    });
    return str;
  }
}

availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY");

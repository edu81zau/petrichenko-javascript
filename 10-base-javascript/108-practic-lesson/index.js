"use strict";

function getTimeFromMinutes(quantityMinutes) {
  let hours;
  let tempMinutes;

  if (
    typeof quantityMinutes !== "number" ||
    !Number.isInteger(quantityMinutes) ||
    isNaN(quantityMinutes) ||
    quantityMinutes < 0
  ) {
    console.log("Ошибка, проверьте данные");
    return "Ошибка, проверьте данные";
  }
  if (quantityMinutes == 0) {
    console.log("Это 0 часов и 0 минут");
    return "Это 0 часов и 0 минут";
  }
  if (quantityMinutes > 0 && quantityMinutes <= 59) {
    console.log(`Это 0 часов и ${quantityMinutes} минут`);
    return `Это 0 часов и ${quantityMinutes} минут`;
  }

  hours = Math.floor(quantityMinutes / 60);
  tempMinutes = quantityMinutes - hours * 60;

  if (hours === 1) {
    return `Это ${hours} час и ${tempMinutes} минут`;
  } else if (hours >= 2 || hours <= 4) {
    return `Это ${hours} часа и ${tempMinutes} минут`;
  } else if (hours === 0 || hours > 4) {
    return `Это ${hours} часов и ${tempMinutes} минут`;
  }
}

function findMaxNumber(n1, n2, n3, n4) {
  if (
    typeof n1 === "undefined" ||
    typeof n2 === "undefined" ||
    typeof n3 === "undefined" ||
    typeof n4 === "undefined"
  ) {
    return 0;
  }
  if (
    typeof n1 !== "number" ||
    typeof n2 !== "number" ||
    typeof n3 !== "number" ||
    typeof n4 !== "number"
  ) {
    return 0;
  }

  console.log(n1, n2, n3, n4);
  return Math.max(n1, n2, n3, n4);
}
